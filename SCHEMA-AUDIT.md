# Phase 07 — Schema & AI Access Audit

**Date:** 2026-06-20
**Site:** https://www.zvonackabanja.net

---

## 1. Schema Coverage Audit

### Current Schema Types by Page

| Page | URL | Primary Schema | Extra Schemas | FAQPage | BreadcrumbList |
|------|-----|----------------|---------------|---------|----------------|
| Homepage | `/` | TouristAttraction (default) | Organization, BreadcrumbList | ❌ | ✅ |
| Manastir Poganovo | `/manastir-poganovo/` | TouristAttraction | BreadcrumbList, FAQPage | ✅ (8 Q&A) | ✅ |
| Kanjon Jerme | `/kanjon-jerme/` | TouristAttraction | BreadcrumbList, FAQPage | ✅ (8 Q&A) | ✅ |
| Bazen | `/bazen-zvonacka-banja/` | SportsActivityLocation | TouristAttraction, BreadcrumbList, FAQPage | ✅ (8 Q&A) | ✅ |
| Asenovo Kale | `/asenovo-kale/` | TouristAttraction | BreadcrumbList, FAQPage | ✅ (8 Q&A) | ✅ |
| Vodič | `/vodic/` | Article | TouristAttraction, BreadcrumbList, FAQPage | ✅ (10 Q&A) | ✅ |

**Total FAQs in schema:** 42 questions across 5 pages

### Schema Audit Results

**✅ Correct implementations:**
- All pages have BreadcrumbList with correct hierarchy
- All subpages have FAQPage schema matching their HTML FAQ sections
- Organization schema on homepage with name, URL, logo, address, geo, sameAs (Wikidata)
- SportsActivityLocation on bazen page (correct type for sports facility)
- Article schema on vodic pillar page with publisher and isPartOf
- All schemas use `@context: "https://schema.org"`

**⚠️ Minor improvements made this phase:**
- Added `sameAs` array to Organization schema → links to Wikidata Q31182513
- This helps Google connect the website to the known entity

**✅ No malformed schema found**

### Schema Types NOT Needed

- **HowTo**: No step-by-step guides on the site (tourism content, not procedural)
- **ItemList**: No listicle or "best of" articles
- **DefinedTerm**: No glossary page
- **LocalBusiness**: Organization covers this; could add later with GBP data (phone, hours)

---

## 2. AI Crawler Access

### robots.txt Audit

**File:** `/robots.txt`

| Bot | Status | Line |
|-----|--------|------|
| Googlebot | ✅ Allowed (default `Allow: /`) | Line 1-2 |
| GPTBot | ✅ Explicitly allowed | Line 4-5 |
| ChatGPT-User | ✅ Explicitly allowed | Line 7-8 |
| Google-Extended | ✅ Explicitly allowed | Line 10-11 |
| anthropic-ai | ✅ Explicitly allowed | Line 13-14 |
| ClaudeBot | ✅ Explicitly allowed | Line 16-17 |
| PerplexityBot | ✅ Explicitly allowed | Line 19-20 |
| Bytespider | ✅ Explicitly allowed | Line 22-23 |
| CCBot | ✅ Explicitly allowed | Line 25-26 |
| Sitemap | ✅ Correct URL | Line 28 |

**Result:** All major AI crawlers explicitly allowed. No changes needed.

---

## 3. llms.txt

**File:** `/llms.txt` — ✅ Updated this phase

**Changes made:**
- Expanded brand description with balneological details
- Added vodič page (was missing)
- Enhanced page descriptions with specific details
- Added "Ključne činjenice" section with structured facts
- Added contact email and website URL

---

## 4. Server-Rendering Check

**Framework:** Astro (static site generator)
**Rendering:** All pages are **statically rendered at build time** → full HTML output

✅ All article text, FAQ content, headings, and schema are present in the raw HTML
✅ No JavaScript required for content rendering
✅ AI crawlers will see all content without JS execution

---

## 5. Internal Link Structure Audit

### Link Matrix (after Phase 07 fixes)

| From \ To | Home | Poganovo | Jerma | Bazen | Kale | Vodič |
|-----------|------|----------|-------|-------|------|-------|
| **Homepage** | — | ✅ Services card | ✅ Services card | ✅ Services card | ✅ Services card | ✅ Navbar |
| **Poganovo** | ✅ Back link | — | ✅ Content + Related | ✅ Content + Related | ✅ Content + Related | ✅ Related |
| **Jerma** | ✅ Back link | ✅ Content + Related | — | ✅ Content + Related | ✅ Content + Related | ✅ Related |
| **Bazen** | ✅ Back link | ✅ Content + Related | ✅ Content + Related | — | ✅ Content + Related | ✅ Content + Related |
| **Kale** | ✅ Back link | ✅ Content + Related | ✅ Content + Related | ✅ Content + Related | — | ✅ Related |
| **Vodič** | ✅ Back link | ✅ Content + Related | ✅ Content + Related | ✅ Content + Related | ✅ Content + Related | — |
| **Navbar** (all pages) | ✅ Logo | ✅ via /#services | ✅ via /#services | ✅ via /#services | ✅ via /#services | ✅ Direct link |

### Changes Made This Phase

1. **Bazen page**: Added 3 contextual in-content links (Kanjon Jerme, Manastir Poganovo, Asenovo Kale) + vodič link
2. **Vodič page**: Added RelatedAttractions component (shows all 4 attraction cards)
3. **RelatedAttractions component**: Added vodič as 5th item — now appears on all subpages
4. **Result**: Every page now links to every other page at least once (some 2-3 times)

### Orphan Pages: None

All 6 pages have 4+ inbound internal links.

---

## 6. Summary

| Check | Status | Notes |
|-------|--------|-------|
| Schema coverage | ✅ Complete | 6 pages, all with appropriate types |
| Schema validation | ✅ No errors | All use correct @context and @type |
| BreadcrumbList | ✅ All pages | Correct hierarchy |
| FAQPage | ✅ 5/6 pages | 42 total Q&A pairs |
| Organization | ✅ Homepage | With sameAs → Wikidata |
| AI crawler access | ✅ All allowed | 8 bots explicitly allowed in robots.txt |
| llms.txt | ✅ Updated | Expanded with vodič and key facts |
| Server rendering | ✅ Static HTML | No JS required for content |
| Internal linking | ✅ Complete mesh | Every page links to every other page |
