# SEO & AEO Progress

**Route:** New site
**Site:** https://zvonackabanja.net
**About:** Zvonačka Banja — banjski i rekreativni kompleks u jugoistočnoj Srbiji (termomineralni bazeni, kanjon Jerme, manastiri, priroda)
**Started:** 2026-06-20
**Current phase:** COMPLETE
**Completed:** 2026-06-20

## Phases

- [x] 00 — Foundation Audit ✅ (2026-06-20)
- [x] 01 — Technical SEO ✅ (2026-06-20)
- [x] 02 — Keyword Strategy ✅ (2026-06-20)
- [x] 03 — AEO Content ✅ (2026-06-20)
- [x] 04 — Link Building Foundation ✅ (2026-06-20)
- [x] 05 — Content Production ✅ (2026-06-20)
- [x] 06 — Brand & Entity ✅ (2026-06-20)
- [x] 07 — Schema & AI Access ✅ (2026-06-20)
- [x] 08 — Link Building at Scale ✅ (2026-06-20)
- [x] 09 — UX & Conversion ✅ (2026-06-20) — partial, GA4/GSC data deferred
- [x] 10 — Measurement ✅ (2026-06-20) — baseline set, data-dependent items deferred

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

---

## Phase 03 — AEO Content Results

**Content Expansion (all 4 subpages):**
- ✅ `bazen-zvonacka-banja.astro` — expanded from ~200 to ~800+ words
- ✅ `manastir-poganovo.astro` — expanded from ~200 to ~800+ words
- ✅ `kanjon-jerme.astro` — expanded from ~200 to ~800+ words
- ✅ `asenovo-kale.astro` — expanded from ~200 to ~800+ words

**AEO Structure Added (all 4 subpages):**
- ✅ Answer-first introductions (direktan odgovor u prva 2–3 rečenice)
- ✅ Question-format H2 headings (5 per page)
- ✅ FAQ accordion sections (`<details>/<summary>`, 8 Q&A each)
- ✅ FAQPage JSON-LD schema (8 Q&A per page, in `extraSchemas` array)
- ✅ Internal cross-links between all attraction pages

**Content Brief:**
- ✅ `CONTENT-BRIEF-PILLAR.md` — full brief for pillar article "Zvonačka Banja — Kompletni Vodič"
  - 7 question-format H2 sections, 10-question FAQ, internal link plan
  - Target: 2000+ words, URL: `/vodic/`

**Author Bio Pages:** ⏭️ Skipped — not applicable for tourism/informational site without blog authors

**AEO Visibility Re-Check (2026-06-20):**
- ❌ **zvonackabanja.net is NOT indexed by Google** — `site:zvonackabanja.net` returns 0 results
- ❌ Site does not appear in search results for ANY target keyword
- ❌ No visibility in AI answer engines (not indexed = not cited)
- ⚠️ Competitor zvonackabanja.com IS indexed and appears in results
- ⚠️ banjeusrbiji.com and turizmopedija.com dominate all keyword queries

**Top competitors ranking for our target keywords:**
| Query | Top results (our site absent) |
|-------|-------------------------------|
| "zvonačka banja" | zooncoolion.blog, espreso.co.rs, banjeusrbiji.com, turizmopedija.com |
| "bazeni zvonačka banja" | juznevesti.com, sensa.mondo.rs, banjeusrbiji.net, turizmopedija.com |
| "kanjon reke Jerme" | travel.rs, hotelhappy.rs, zivetisaprirodom.rs, turizmopedija.com |
| "manastir Poganovo" | rts.rs, lepotesrbije.alo.rs, pirotskevesti.rs, panacomp.net |
| "šta leči zvonačka banja" | espreso.co.rs, kurir.rs, zooncoolion.blog, banjeusrbiji.com |
| "Asenovo Kale" | espreso.co.rs, perpetuummobile.blog, planine.net |

**🚨 CRITICAL ACTION REQUIRED:**
1. **Google Search Console** — user MUST verify ownership and submit sitemap (https://www.zvonackabanja.net/sitemap-index.xml)
2. **Google Indexing API** — consider requesting indexing of all 5 pages manually via GSC
3. **Wait time** — new domains typically take 2–4 weeks to get indexed, but GSC submission accelerates this

---

## Phase 04 — Link Building Foundation Results

**Deliverables created:**
- ✅ `LINK-BUILDING.md` — complete link building strategy document

**Key findings:**
- 15 unlinked brand mentions identified (B92, Kurir, eKapija, Espreso, travel blogs)
- 10 niche directories for submission (banje-srbije.com, banjeusrbiji.com, TripAdvisor, GBP)
- 3 outreach email templates (unlinked mention, broken link, resource page)
- 5 linkable asset ideas (interactive map, PDF guide, photo gallery, infographic, comparison)
- 20 link building prospects identified

**Priority actions (user must execute):**
- ⬜ Google Search Console verification (CRITICAL — site not indexed)
- ⬜ Google Business Profile creation
- ⬜ Directory submissions (banje-srbije.com, banjeusrbiji.com, TripAdvisor)
- ⬜ Outreach to B92, eKapija, pirotskikraj.com for link placement

---

## Phase 05 — Content Production Results

**Pillar page created:**
- ✅ `src/pages/vodic.astro` — "Zvonačka Banja — Kompletni vodič za posetioce"
  - ~2200 words, 7 question-format H2 sections
  - Answer-first intro with direct response
  - Article + FAQPage + BreadcrumbList JSON-LD schema (10 Q&A)
  - 10-question FAQ accordion section (`<details>/<summary>`)
  - Internal links to all 4 attraction subpages
  - URL: `/vodic/`
  - Responsive styles (desktop → mobile)

**Navigation updated:**
- ✅ Added "Vodič" link to desktop navbar and mobile menu

**Remaining content (to be produced per 12-month calendar):**
- ⏭️ Cluster articles: scheduled Jul 2026 – Jun 2027 per KEYWORD-STRATEGY.md
- ⏭️ Glossary page: deferred — not critical for tourism site
- ⏭️ FAQ hub page: covered by per-page FAQ sections (10 Q&A on vodic, 8 each on subpages = 42 total FAQs)

---

## Phase 06 — Brand & Entity Results

**Deliverables created:**
- ✅ `BRAND-ENTITY.md` — complete brand & entity document

**Brand descriptions (3 lengths):**
- ✅ 50-word version (directory listings, social bios)
- ✅ 150-word version (press, about pages, Google Business Profile)
- ✅ 250-word LinkedIn/long version (articles, detailed profiles)

**Entity status:**
- ✅ Wikidata entry confirmed: Q31182513
- ✅ NAP consistency audit (current state documented)
- ✅ Press page content prepared
- ✅ Entity building checklist created

**Actions requiring user (documented in BRAND-ENTITY.md):**
- ⬜ Add official website to Wikidata Q31182513 (P856 property)
- ⬜ Create Google Business Profile
- ⬜ Create TripAdvisor attraction listing
- ⬜ Update Facebook page website link (.com → .net)

---

## Phase 07 — Schema & AI Access Results

**Deliverables created:**
- ✅ `SCHEMA-AUDIT.md` — full schema & AI access audit

**Schema audit:**
- ✅ All 6 pages have correct primary schema types
- ✅ BreadcrumbList on all 6 pages
- ✅ FAQPage on 5 pages (42 total Q&A pairs)
- ✅ Organization schema on homepage with sameAs → Wikidata
- ✅ No malformed schema found

**Schema improvements (code changes):**
- ✅ Added `sameAs: ["https://www.wikidata.org/wiki/Q31182513"]` to Organization schema on homepage

**AI crawler access:**
- ✅ All 8 major AI bots explicitly allowed in robots.txt
- ✅ No changes needed

**llms.txt update:**
- ✅ Expanded brand description
- ✅ Added vodič page (was missing)
- ✅ Added "Ključne činjenice" section
- ✅ Added contact info

**Server rendering:**
- ✅ Static HTML — all content visible without JavaScript

**Internal linking improvements (code changes):**
- ✅ Bazen page: added 4 in-content cross-links (Kanjon Jerme, Manastir Poganovo, Asenovo Kale, Vodič)
- ✅ Vodič page: added RelatedAttractions component (shows 4 attraction cards)
- ✅ RelatedAttractions component: added vodič as 5th item — now appears on all subpages
- ✅ Result: complete internal link mesh — every page links to every other page

---

## Phase 08 — Link Building at Scale Results

**Deliverables created:**
- ✅ `LINK-BUILDING-SCALE.md` — complete scalable link building system

**Contents:**
- ✅ 20 new link building prospects (competitor backlink sources, niche resource pages, regional media)
- ✅ 10 guest post opportunities with specific article titles and target pages
- ✅ Guest post pitch email (ready to send, personalized for travel.rs)
- ✅ 7 resource page opportunities for directory submissions
- ✅ Expert roundup plan: question, 15 contributors, outreach email template
- ✅ Toxic link audit: N/A (new site, no backlink profile)
- ✅ Monthly outreach system template (weekly tasks, monthly KPIs, tracking columns)
- ✅ Priority action plan: 14 items across immediate/short-term/medium-term

---

## Phase 09 — UX & Conversion Results

**Deliverables created:**
- ✅ `UX-CONVERSION.md` — UX and conversion audit

**Completed without data:**
- ✅ UX audit of all 6 pages (structure, scannability, mobile, CTAs)
- ✅ CTA audit: identified missing CTAs on 5/6 pages
- ✅ Internal linking review: confirmed complete mesh from Phase 07
- ✅ Title/meta length review: all within limits

**Deferred (requires GA4/GSC data):**
- ⏳ Top landing page analysis — no organic traffic yet
- ⏳ High-impression / low-CTR pages — no GSC data
- ⏳ Title/meta rewrites for CTR — need actual search queries
- ⏳ Underperforming content review — site too new

**Key UX findings:**
- ⚠️ Only 1 CTA across entire site (Trivago link in navbar)
- ⚠️ No contact form or email capture
- ⚠️ Subpages have no action-oriented CTA before RelatedAttractions
- Recommendation: Add CTA blocks to subpages linking to /vodic/ or Trivago

---

## Phase 10 — Measurement Results

### Current State vs Phase 00 Baseline

| Metric | Phase 00 (baseline) | Phase 10 (current) | Change |
|--------|--------------------|--------------------|--------|
| Pages | 5 | 6 (+vodič) | +20% |
| Total word count | ~1,100 | ~6,600+ | +500% |
| Schema types | 2 (Tourist, Sports) | 6 (Tourist, Sports, Article, Org, FAQ, Breadcrumb) | +200% |
| FAQ questions in schema | 0 | 42 | New |
| Internal links per page | 1-2 | 5-8 | +300% |
| AI crawler access | Partial | Full (8 bots) | ✅ |
| llms.txt | Missing | Complete | New |
| Security headers | 1 | 6 | +500% |
| Robots.txt | Broken sitemap URL | Fixed + AI bots | ✅ |
| Meta descriptions | Generic | Optimized per page | ✅ |
| Title tags | Basic | Keyword-optimized | ✅ |
| Content structure | Flat paragraphs | Question H2s + FAQs | ✅ |
| Brand documentation | None | 3-length descriptions + entity checklist | New |
| Link building strategy | None | 35+ prospects + templates | New |
| Keyword strategy | None | 30 seeds, 8 clusters, 12-month calendar | New |

### Indexing Status

🚨 **CRITICAL BLOCKER: Site is NOT indexed by Google**
- `site:zvonackabanja.net` returns 0 results
- All SEO work is ready but invisible until indexed
- **User MUST complete Google Search Console verification**

### Deferred Items (require user action or time)

| Item | Depends on | When to do |
|------|-----------|------------|
| GSC verification | User action | ASAP |
| Sitemap submission | GSC verification | Immediately after GSC |
| Google Business Profile | User action | This week |
| TripAdvisor listing | User action | This week |
| Directory submissions | User action | This week |
| Wikidata P856 update | User action (Wikidata account) | This week |
| Traffic analysis | 4-6 weeks of index data | Aug 2026 |
| CTR optimization | GSC data | Aug 2026 |
| Content calendar (first article) | User writing | Jul 2026 |
| Link outreach (first batch) | User sending emails | This week |

### Monthly Report Template

```
# Monthly SEO Report — [Month Year]

## Organic Traffic (GA4)
- Sessions: [X] (vs last month: [+/-X%])
- New users: [X]
- Avg engagement time: [X]
- Top landing pages:
  1. [page] — [sessions]
  2. [page] — [sessions]
  3. [page] — [sessions]

## Rankings (GSC)
- Total impressions: [X]
- Total clicks: [X]
- Average CTR: [X%]
- Average position: [X]
- Keywords in top 3: [X]
- Keywords in top 10: [X]
- Keywords in top 30: [X]
- Notable movements:
  - [keyword] [old position] → [new position]

## Links
- New links acquired: [X]
- Outreach emails sent: [X]
- Response rate: [X%]
- Notable links:
  - [site] → [page]

## AEO Citations
- Brand mentions in AI answers: [X]
- New citations: [list]

## Content Published
- [article title] — [URL] — [word count]

## Top 3 Actions for Next Month
1. [action]
2. [action]
3. [action]
```

### Year 1 Targets (Jul 2026 – Jun 2027)

| Metric | Target | Basis |
|--------|--------|-------|
| Indexed pages | 6 → 20+ | 12-month content calendar |
| Monthly organic sessions | 0 → 500+ | Conservative for niche tourism |
| Keywords in top 10 | 0 → 15+ | 8 clusters × 2 keywords |
| Keywords in top 30 | 0 → 40+ | 30 seed keywords |
| Backlinks | 0 → 30+ | 2-4 links/month |
| AEO citations | 0 → 5+ | FAQ-rich content + schema |
| Content published | 6 → 20+ | 1-2 articles/month |
| Domain Rating | 0 → 15+ | Link building + directory submissions |
