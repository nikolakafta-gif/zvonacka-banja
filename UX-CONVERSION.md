# Phase 09 — UX & Conversion

**Created:** 2026-06-20
**Site:** https://www.zvonackabanja.net

---

## Status: Partially Complete

Phases 09 requires GA4 and GSC data which are not yet available:
- **Site is NOT indexed by Google** (0 results for site:zvonackabanja.net)
- **No GSC data** — user has not verified ownership in Google Search Console
- **No GA4 traffic data** — site has analytics (G-9HHYCK1DJM) but no organic traffic yet

The following items can be completed without traffic data. Items requiring data are flagged for revisit.

---

## 1. Top Landing Page Analysis

**Status:** ⏳ DEFERRED — Requires GA4 organic landing page data

**When to revisit:** After 4-6 weeks of being indexed (site must first be verified in GSC and sitemap submitted)

**Action for user:** Paste your GA4 organic landing page report for the last 30 days when available.

---

## 2. High-Impression / Low-CTR Pages

**Status:** ⏳ DEFERRED — Requires GSC performance export

**When to revisit:** After site has 2-4 weeks of GSC data

**Action for user:** Paste your GSC performance export when available.

---

## 3. UX Audit (Top Pages — without traffic data)

Since we don't have traffic data, auditing all 6 pages for UX quality:

### Homepage (`/`)
- ✅ Clear value proposition in hero (Zvonačka Banja name + imagery)
- ✅ Scannable sections (Mission, About, Services, Testimonials, CTA)
- ✅ Mobile responsive with hamburger menu at ≤991px
- ✅ "Pogledaj smeštaj" CTA in navbar (links to Trivago)
- ⚠️ No contact form on homepage — CTA section exists but links externally
- ⚠️ No newsletter/email capture
- ✅ Works on mobile (tested via build output analysis)

### Vodič page (`/vodic/`)
- ✅ Answer-first intro delivers on title promise immediately
- ✅ Scannable — question-format H2 headings, short paragraphs
- ✅ FAQ accordion section for quick answers
- ✅ Internal links to all attraction subpages
- ✅ RelatedAttractions component at bottom
- ✅ Responsive design (hero scales, fonts adapt)

### Attraction subpages (x4)
- ✅ Clear page purpose (hero with title)
- ✅ Question-format H2 structure — scannable
- ✅ FAQ accordion at bottom (8 Q&A each)
- ✅ RelatedAttractions component for next steps
- ✅ "Nazad" back link to homepage
- ⚠️ No clear CTA on subpages (no booking/contact action)

### Overall UX observations:
- ✅ Smooth scroll (Lenis) creates premium feel
- ✅ Scroll animations (GSAP) are tasteful and not distracting
- ✅ Navigation is consistent across all pages
- ✅ Mobile menu works correctly with slide-in animation
- ⚠️ Only one CTA across the site (Trivago link in navbar)
- ⚠️ No contact form/email capture anywhere on the site

---

## 4. CTA Audit

| Page | Current CTA | Intent match | Suggested improvement |
|------|------------|--------------|----------------------|
| Homepage (navbar) | "Pogledaj smeštaj" → Trivago | ✅ Good | Keep — commercial intent |
| Homepage (CTA section) | Visual CTA block | ⚠️ Not actionable | Add booking link or contact form |
| Vodič | None (only in-content links) | ⚠️ Missing | Add CTA at end: "Rezervišite smeštaj" or "Kontaktirajte nas" |
| Bazen | None | ⚠️ Missing | Add "Pogledaj smeštaj u blizini" CTA after content |
| Poganovo | None | ⚠️ Missing | Add "Planirajte posetu" CTA linking to /vodic/ |
| Kanjon Jerme | None | ⚠️ Missing | Add "Planirajte posetu" CTA linking to /vodic/ |
| Asenovo Kale | None | ⚠️ Missing | Add "Planirajte posetu" CTA linking to /vodic/ |

**Recommended approach:**
- Add a simple CTA block before the RelatedAttractions section on all subpages
- CTA text: "Planirate posetu? Pogledajte vodič →" linking to /vodic/
- On vodič page: "Pogledaj smeštaj →" linking to Trivago

---

## 5. Internal Linking Improvements

**Completed in Phase 07:**
- ✅ Every page now links to every other page
- ✅ Bazen page got 4 new in-content cross-links
- ✅ Vodič page got RelatedAttractions component
- ✅ RelatedAttractions now includes vodič as 5th item

**No additional linking needed at this time.**

---

## 6. Title Tag & Meta Description Review

All pages already have optimized titles and meta descriptions (from Phase 01). Review when CTR data is available from GSC.

| Page | Title | Title length | Meta description length |
|------|-------|-------------|------------------------|
| Homepage | Zvonačka Banja \| Lekovita vazdušna banja u jugoistočnoj Srbiji | 62 chars | ✅ |
| Vodič | Zvonačka Banja — Kompletni vodič: bazeni, lečenje, atrakcije | 62 chars | ✅ |
| Bazen | Bazen Zvonačka Banja \| Zvonačka Banja | 40 chars | ✅ |
| Poganovo | Manastir Poganovo \| Zvonačka Banja | 35 chars | ✅ |
| Kanjon Jerme | Kanjon reke Jerme \| Zvonačka Banja | 35 chars | ✅ |
| Asenovo Kale | Asenovo Kale \| Zvonačka Banja | 30 chars | ✅ |

⚠️ Subpage titles are short — could benefit from more descriptive keywords when CTR data is available.

---

## 7. Underperforming Content Review

**Status:** ⏳ DEFERRED — Site is new (launched 2026), no content is old enough to be "underperforming"

**When to revisit:** After 4+ months of being indexed

---

## 8. Priority Actions

### Can do now (no data needed):
1. ⬜ Add CTA blocks to subpages (linking to /vodic/ or Trivago)
2. ⬜ Add contact form or email capture to homepage
3. ⬜ Consider adding a "Kontakt" page with map, directions, contact info

### Requires user action first:
4. ⬜ **Google Search Console verification** (CRITICAL — site not indexed)
5. ⬜ Submit sitemap in GSC after verification
6. ⬜ Wait 2-4 weeks for indexation
7. ⬜ Revisit this phase with actual traffic and CTR data

### Revisit in 4-6 weeks:
8. ⬜ Landing page analysis (GA4 data)
9. ⬜ CTR optimization (GSC data)
10. ⬜ Title/meta rewrites based on actual search queries
