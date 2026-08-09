/**
 * One-off conversion script: reads ludo-landing's flat "dot.key" translation
 * dictionary and emits nested next-intl message files containing only the
 * keys actually referenced by the migrated Pyscn Bot pages/components.
 *
 * Usage: bun scripts/convert-translations.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const LUDO_LANDING_ROOT = join(__dirname, "..", "..", "ludo-landing");
const TRANSLATIONS_PATH = join(LUDO_LANDING_ROOT, "src/i18n/translations.ts");

const SOURCES_TO_SCAN = [
	join(LUDO_LANDING_ROOT, "src/components/PyscnBotPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/HowItWorksPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/ContactPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/CheckoutSuccessPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/PrivacyPolicyPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/TermsPage.astro"),
	join(LUDO_LANDING_ROOT, "src/components/Navigation.astro"),
	join(LUDO_LANDING_ROOT, "src/components/LanguagePicker.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/FeatureAudit.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/FeaturePR.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/HeroGraphic.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/Logo.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/MetricClones.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/MetricComplexity.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/MetricCoupling.astro"),
	join(LUDO_LANDING_ROOT, "src/components/icons/MetricDeadCode.astro"),
];

const OUTPUT_DIR = join(REPO_ROOT, "messages");
const LOCALES = ["en", "ja", "zh"] as const;

type FlatDict = Record<string, string>;

/**
 * Extracts the `translations = { en: {...}, ja: {...}, zh: {...} } as const`
 * object literal from translations.ts and evaluates it. The source is a
 * static TS object literal (no imports, no logic), so a Function-based eval
 * of the object literal body is safe and avoids a full TS parser dependency.
 */
function loadFlatTranslations(): Record<(typeof LOCALES)[number], FlatDict> {
	const src = readFileSync(TRANSLATIONS_PATH, "utf8");
	const match = src.match(
		/export const translations = (\{[\s\S]*?\n\}) as const;/,
	);
	if (!match) {
		throw new Error(
			`Could not locate 'export const translations = {...} as const;' in ${TRANSLATIONS_PATH}`,
		);
	}
	const translations = new Function(`return (${match[1]});`)();
	return translations;
}

function extractUsedKeys(): Set<string> {
	const keys = new Set<string>();
	const pattern = /\bt\((['"])([\w.]+)\1\)/g;
	for (const file of SOURCES_TO_SCAN) {
		const src = readFileSync(file, "utf8");
		for (const m of src.matchAll(pattern)) {
			keys.add(m[2]);
		}
	}
	return keys;
}

/**
 * Some flat keys are simultaneously a leaf value AND a prefix of other keys
 * (e.g. "diff.traditional" is the section heading, while "diff.traditional.1"
 * through ".5" are its list items). JSON can't hold a string and an object at
 * the same property, so when a leaf collides with a deeper path, the leaf's
 * own value is moved under a synthetic "_" property alongside its children.
 * Callers must then reference it as `t("diff.traditional._")`. Every such
 * collision is reported by `main()` so the JSX call sites can be written
 * correctly instead of silently losing the heading text.
 */
function setNested(
	obj: Record<string, unknown>,
	dottedKey: string,
	value: string,
	collisions: Set<string>,
) {
	const parts = dottedKey.split(".");
	let cur = obj;
	for (let i = 0; i < parts.length - 1; i++) {
		const part = parts[i];
		if (typeof cur[part] === "string") {
			collisions.add(parts.slice(0, i + 1).join("."));
			cur[part] = { _: cur[part] };
		} else if (typeof cur[part] !== "object" || cur[part] === null) {
			cur[part] = {};
		}
		cur = cur[part] as Record<string, unknown>;
	}
	const lastKey = parts[parts.length - 1];
	if (typeof cur[lastKey] === "object" && cur[lastKey] !== null) {
		collisions.add(dottedKey);
		(cur[lastKey] as Record<string, unknown>)._ = value;
	} else {
		cur[lastKey] = value;
	}
}

function main() {
	const translations = loadFlatTranslations();
	const usedKeys = [...extractUsedKeys()].sort();

	console.log(`Found ${usedKeys.length} used translation keys.`);

	const htmlKeys: string[] = [];
	const allCollisions = new Set<string>();

	mkdirSync(OUTPUT_DIR, { recursive: true });

	for (const locale of LOCALES) {
		const flat = translations[locale];
		const nested: Record<string, unknown> = {};
		const missing: string[] = [];
		const collisions = new Set<string>();

		for (const key of usedKeys) {
			const value = flat[key];
			if (value === undefined) {
				missing.push(key);
				continue;
			}
			setNested(nested, key, value, collisions);
			if (locale === "en" && /<[a-z][\s\S]*>/i.test(value)) {
				htmlKeys.push(key);
			}
		}
		for (const c of collisions) allCollisions.add(c);

		if (missing.length > 0) {
			console.warn(
				`[${locale}] missing ${missing.length} keys: ${missing.join(", ")}`,
			);
		}

		const outPath = join(OUTPUT_DIR, `${locale}.json`);
		writeFileSync(outPath, `${JSON.stringify(nested, null, "\t")}\n`, "utf8");
		console.log(`Wrote ${outPath}`);
	}

	console.log(
		"\nKeys with HTML in their value (need t.rich() on the JSX side):",
	);
	for (const key of htmlKeys) {
		console.log(`  - ${key}`);
	}

	console.log(
		"\nKeys that collide with a deeper path (leaf value moved under '_' — reference as `key._` in JSX):",
	);
	for (const key of [...allCollisions].sort()) {
		console.log(`  - ${key} -> ${key}._`);
	}
}

main();
