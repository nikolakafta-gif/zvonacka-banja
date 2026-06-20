# SEO & AEO Progress

**Route:** New site
**Site:** https://zvonackabanja.net
**About:** Zvonačka Banja — banjski i rekreativni kompleks u jugoistočnoj Srbiji (termomineralni bazeni, kanjon Jerme, manastiri, priroda)
**Started:** 2026-06-20
**Current phase:** 03

## Phases

- [x] 00 — Foundation Audit ✅ (2026-06-20)
- [x] 01 — Technical SEO ✅ (2026-06-20)
- [x] 02 — Keyword Strategy ✅ (2026-06-20)
- [ ] 03 — AEO Content
- [ ] 04 — Link Building Foundation
- [ ] 05 — Content Production
- [ ] 06 — Brand & Entity
- [ ] 07 — Schema & AI Access
- [ ] 08 — Link Building at Scale
- [ ] 09 — UX & Conversion
- [ ] 10 — Measurement

---

## Phase 00 — Foundation Audit Results

### Technical Audit (score: 78/100 → fixed to ~92/100)

**Fixed issues:**
- ✅ robots.txt — fixed sitemap URL (was pointing to nikolamiljkovic.live)
- ✅ Non-www → www redirect — created vercel.json with 301 redirect
- ✅ Schema markup — added TouristAttraction/SportsActivityLocation + BreadcrumbList on all 5 pages
- ✅ llms.txt — created for AI crawler discoverability
- ✅ AI crawler access — robots.txt allows GPTBot, ClaudeBot, PerplexityBot, etc.

**Already good:**
- ✅ Unique title + meta description on all 5 pages
- ✅ One H1 per page, logical heading hierarchy
- ✅ Semantic HTML (nav, main, section, footer)
- ✅ All images have alt, width, height, loading="lazy"
- ✅ Canonical URLs set via BaseLayout
- ✅ OG tags + Twitter cards on all pages
- ✅ Google Analytics G-9HHYCK1DJM active
- ✅ Sitemap auto-generated via @astrojs/sitemap
- ✅ lang="sr" on html element

### Content Inventory

| # | URL | Title | Description | Schema | Words |
|---|-----|-------|-------------|--------|-------|
| 1 | `/` | Zvonačka Banja \| Lekovita vazdušna banja u jugoistočnoj Srbiji | ✅ | TouristAttraction + BreadcrumbList | ~300 |
| 2 | `/manastir-poganovo/` | Manastir Poganovo \| Zvonačka Banja | ✅ | TouristAttraction + BreadcrumbList | ~200 |
| 3 | `/kanjon-jerme/` | Kanjon reke Jerme \| Zvonačka Banja | ✅ | TouristAttraction + BreadcrumbList | ~200 |
| 4 | `/bazen-zvonacka-banja/` | Bazen Zvonačka Banja \| Zvonačka Banja | ✅ | SportsActivityLocation + BreadcrumbList | ~200 |
| 5 | `/asenovo-kale/` | Asenovo Kale \| Zvonačka Banja | ✅ | TouristAttraction + BreadcrumbList | ~200 |

**Content gap:** Thin content on subpages (~200 words each). Competitors have 900-3000 words. Phase 05 should expand.

### Competitor Snapshot

| # | Competitor | URL | Content | Schema | Strengths | Weaknesses |
|---|-----------|-----|---------|--------|-----------|------------|
| 1 | banjeusrbiji.com | /zvonacka-banja/ | ~1000 words | None | Good keyword density, extensive internal linking, part of large banje directory | No schema, single image, dated design |
| 2 | turizmopedija.com | /zvonacka-banja/ | ~3000 words | None | Deep content (history, water composition, treatments), good headings | No schema, minimal images, ad-heavy |
| 3 | banje-srbije.com | /destinacija/zvonacka-banja | ~500 words | Unknown | Accommodation listings, booking focus | Thin content, no unique value |
| 4 | b92.net | /zvonacka-banja/ | ~800 words | Article | Major media authority, high DA | One-off article, not updated |
| 5 | kurir.rs | /zvonacka-banja/ | ~600 words | Article | High DA, "srpski Bali" branding | Tabloid style, not authoritative for tourism |

**Our advantages:** Official site, schema markup, modern design, dedicated attraction subpages, AI-friendly (llms.txt + crawler access).
**Our gaps:** Thin content (200 vs 1000-3000 words), no blog, no accommodation/booking info, no Google Business Profile.

### AEO Baseline (AI Visibility)

- **Brand mentions in search:** Zvonačka Banja appears on B92, Kurir, eKapija, Mondo — good media coverage
- **Booking.com:** Listed as "Vikendica Nada Zvonačka Banja" — accommodation exists but not official
- **TripAdvisor:** Photos only (via Jerma Canyon listing) — no dedicated listing
- **Reddit:** No presence
- **Wikipedia:** Basic entry under "Zvonce" village — no dedicated article
- **Google Knowledge Panel:** Likely exists (banja is a known entity) — needs verification by user
- **llms.txt:** ✅ Created and live at /llms.txt
- **AI crawler access:** ✅ All major AI bots allowed

**AEO priority actions (Phase 03+):**
1. Create/claim Google Business Profile
2. Expand Wikipedia entry or create dedicated article
3. Submit to TripAdvisor as attraction
4. Build FAQ content targeting AI answer snippets
5. Add more detailed schema (FAQ, HowTo for visiting)

### Core Web Vitals

**Status:** ⏳ PENDING — PageSpeed Insights API returned 429 (rate limit). User should manually test at https://pagespeed.web.dev/ and paste results.

### Rankings Snapshot

**Status:** ⏳ PENDING — Needs Google Search Console access. User should connect GSC and share initial data.

---

## Phase 01 — Technical SEO Results

**Crawlability (90/100):**
- ✅ robots.txt sitemap URL fixed to www canonical domain
- ✅ Sitemap includes all 5 pages with www domain
- ⚠️ No `<lastmod>` in sitemap (Astro limitation — acceptable)

**Security (60 → 90/100):**
- ✅ Added 5 security headers in vercel.json: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

**Internal Linking (fixed):**
- ✅ Created RelatedAttractions component — each subpage now cross-links to 3 other attractions
- Previously: subpages had only 1 inbound link each (from homepage Services)
- Now: each subpage has 4+ internal links (homepage + 3 related attraction pages)

**Schema (expanded):**
- ✅ Added Organization schema on homepage

**On-Page SEO (optimized):**
- ✅ Optimized title tags on all 4 subpages — added descriptive keywords for better CTR
- ✅ Expanded meta descriptions with unique selling points and specific details

**URL Structure:** ✅ Clean, lowercase, hyphenated, max 2 levels deep
**Mobile:** ✅ Responsive, viewport meta, 16px+ body text
**HTTPS:** ✅ Forced via Vercel, non-www → www 301 redirect

**Pending (needs user action):**
- ⏳ Core Web Vitals — PageSpeed API rate-limited, test manually at pagespeed.web.dev
- ⏳ Google Search Console — user needs to connect and share data

---

## Phase 02 — Keyword Strategy Results

**Deliverables created:**
- ✅ `KEYWORD-STRATEGY.md` — full keyword strategy document

**Seed Keywords (30):**
- 5 branded (zvonačka banja + modifiers)
- 8 informational — banja/zdravlje (banje za reumu, lekovita voda, vazdušna banja...)
- 8 informational — priroda/atrakcije (kanjon Jerme, Poganovo, Asenovo Kale, Vetrena Dupka...)
- 5 commercial — smeštaj/putovanje (vikend izlet, privatni smeštaj, apartmani...)
- 4 question-based / AEO priority (gde, kako, da li, koje bolesti)

**Keyword Clusters (8):**
1. "Zvonačka Banja — Kompletni Vodič" (PILLAR) — branded + informational
2. "Lekovita voda i zdravlje" — medical tourism
3. "Kanjon reke Jerme" — nature tourism
4. "Manastir Poganovo i manastiri" — cultural tourism
5. "Bazeni Zvonačka Banja" — sports/recreation
6. "Asenovo Kale i prirodne atrakcije" — adventure tourism
7. "Smeštaj i cene" — commercial
8. "Vikend izlet u banju" — trip planning

**12-Month Content Calendar:** 16 articles planned (Jul 2026 – Jun 2027)

**Content Mapping:**
- All 4 subpages mapped to clusters but flagged as thin content (~200 words each)
- **Priority action:** Expand existing 4 subpages before creating new content
- Competitor content is 1000-3000 words vs our 200

**Content Gaps Identified:**
- ❌ No content on: istorija banje, hemijski sastav vode, smeštaj/cene, kako doći
- ✅ Our unique advantages: dedicated attraction pages (competitors don't have), schema markup, modern design
