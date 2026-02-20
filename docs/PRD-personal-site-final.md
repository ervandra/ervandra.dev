# PRD: Personal Website Redesign — ervandra.dev
**Author:** Russel  
**Version:** 2.0 — FINAL (Reversed Base)  
**Date:** Feb 20, 2026  
**Status:** Ready for Implementation

---

## 1. Strategy: Reversed Base Decision

**Base: ervandra.dev (old site)**  
**Import content from: new-ervandra-dev.vercel.app**

### Why the Reversal Makes Sense

| | ervandra.dev (Base) | new-ervandra-dev (Source) |
|---|---|---|
| **Aesthetic** | ✅ Clean, minimal, human — doesn't feel AI-generated | ❌ Crowded, generic AI-template feel |
| **Voice** | ✅ Authentic, personal | ❌ Over-polished, corporate |
| **Testimonials** | ✅ 7 real, strong testimonials (gold) | ❌ Section exists, appears empty |
| **Positioning** | ❌ "Software Engineer & Tech Specialist" — outdated | ✅ "Strategic Systems Architect & Tech Partner" |
| **Services** | ❌ Not defined | ✅ Defined (wrong order, but fixable) |
| **Philosophy** | ❌ Missing | ✅ "How I Work" — strong 3-principle section |
| **Availability** | ❌ Missing | ✅ "Current Focus & Availability" — excellent |
| **Work/Impact** | ❌ Resume-style role history | ✅ Project highlights with metrics |

**Formula:** Old site's soul + new site's strategic content = right outcome.

---

## 2. What Gets Kept, Replaced, Imported, Removed

### ✅ KEEP from old site
- Overall clean, minimal aesthetic and layout style
- Personal, human tone of voice
- The greeting energy (`Hi, I am Ervandra Halim` — keep this authenticity)
- **All 7 testimonials** — these are the most valuable asset on the entire site
- Logo strip (R/GA, LifeLearn, Syntax, Komunal, MTF, CIAYO, DDTC, Paper.id)

### 🔄 REPLACE in old site (update copy, keep the section's place in the flow)
- **Title tag:** "Software Engineer & Technology Specialist" → "Strategic Systems Architect & Tech Partner"
- **Hero H1:** Generic buzzword headline → sharp new positioning (see Section 4)
- **Hero subheadline:** Rewrite (see Section 4)
- **"About Me" prose:** Rewrite to match new positioning (see Section 4)

### 📥 IMPORT from new site (add as new sections)
- "How I Work" — 3 philosophy principles (replaces the tech skills bullet list)
- Services section — reordered (Strategic Partnerships first)
- Work & Impact — 4 project highlights with metrics + `/works` link
- "Current Focus & Availability" + "Not Available For"
- Final CTA block with Book Call

### ❌ REMOVE from old site
| Element | Why |
|---------|-----|
| "Where I'm Contributing" role history | Resume feel — belongs on LinkedIn, not here |
| Task bullets under each role (Strategic Planning, Financial Management, etc.) | Job description language, not client-facing copy |
| Tech skills list (Solution Architecture, Dashboard, BI, etc.) | Vague, adds noise — replaced by concrete service cards |

---

## 3. Final Page Structure (7 Sections)

```
┌─────────────────────────────────────────────┐
│ 1. HERO                                     │
│    Personal greeting + H1 + subheadline     │
│    2 CTAs                                   │
├─────────────────────────────────────────────┤
│ 2. HOW I WORK (Philosophy)                  │
│    Import from new site — 3 principles      │
│    + 1 new intro line                       │
├─────────────────────────────────────────────┤
│ 3. HOW I CAN HELP (Services)                │
│    Strategic Partnerships first             │
│    Custom Dev second                        │
│    Productized = brief mention only         │
├─────────────────────────────────────────────┤
│ 4. WORK & IMPACT                            │
│    4 project highlights + metrics           │
│    Logo strip                               │
│    → Link to /works                         │
├─────────────────────────────────────────────┤
│ 5. TESTIMONIALS                             │
│    Keep all 7 from old site                 │
│    (carousel or 2-col grid)                 │
├─────────────────────────────────────────────┤
│ 6. CURRENT AVAILABILITY                     │
│    Active projects / Available for /        │
│    Not available for                        │
├─────────────────────────────────────────────┤
│ 7. CTA                                      │
│    "If your needs align, let's talk."       │
│    Book Call + WhatsApp                     │
└─────────────────────────────────────────────┘
```

**Not in the list = not on the page:**
- ❌ Stats bar (0+ damages credibility — add only when real numbers are ready)
- ❌ Standalone Pricing section (pricing lives inside service cards)
- ❌ FAQ (empty — move to /contact if copy is written later)
- ❌ 4 service icons in hero

---

## 4. Section-by-Section Copy

---

### Section 1 — HERO

**Keep the personal greeting.** It's what makes the old site feel human.

```
Hi, I'm Ervandra Halim.

[H1] I Align Technology With Your Business Growth.

Strategic tech architecture for founders, operators, and business owners
who want to scale without chaos.
Think of me as your tech partner — not a vendor who disappears after delivery.

[Book Free Strategy Call]    [See My Work →]
```

**Notes:**
- H1 alternative (if Van prefers more energy): *"I Build Technology That Scales Your Business — Not Your Chaos."*
- Subheadline line 2 ("Think of me as your tech partner...") is a conversion asset — keep verbatim
- Two CTAs only. Primary → Calendly. Secondary → /works

---

### Section 2 — HOW I WORK

**Import from new site. Add one intro line.**

**New intro line (add before the 3 principles):**
> "Technology is only valuable if it protects revenue, reduces costs, or unlocks growth. I start with your business goals and bottlenecks — not your codebase."

**3 Principles (keep verbatim from new site):**

**Strategic Before Technical**
> I start with your business goals, not technology trends. What are you trying to achieve? Where are the bottlenecks? Only then do we talk solutions.

**Systems That Scale Without You**
> Every solution I build is designed to work independently. Documented, maintainable, and structured so your team can operate it — or hand it off entirely.

**Transparent Partnerships**
> Fixed-scope audits, clear pricing, honest capacity communication. I'll tell you if I'm not the right fit. No surprises, no scope creep.

---

### Section 3 — HOW I CAN HELP

**Order matters. Lead with the most strategic (highest value) offer.**

#### Primary: Strategic Engagements

| | Service | Price | One-liner |
|--|---------|-------|-----------|
| 🔝 | **Fractional CPTO** | IDR 15M/month | Part-time tech leadership. Strategy, architecture, team oversight, vendor management. |
| | **Systems Audit & Design** | IDR 5M / 2 weeks | Deep dive into your ops and tech bottlenecks. You get a map, gap analysis, and 90-day roadmap. |
| | **Custom AI Implementation** | From IDR 10M | Custom AI agents, workflow automation, RAG pipelines. Not demos — production systems. |

Each card has: Title + Price + 2-line description + CTA button  
Primary CTA on all: `[Book Strategy Call]`

#### Secondary: Custom Development
Brief single card. No price listed.
> "Scoped, project-based engagements for critical systems that need to be built right."
→ `[Let's Scope It]`

#### Tertiary: Productized (Mention Only)
Not a full section. A small secondary card or a single line:
> "Need something faster? I also run [KaryaKilat.com](https://karyakilat.com) — premium microsites for SMEs, live in 24 hours."

#### Bottom: Mentorship
Small card at section footer.
> "1-on-1 guidance for developers, PMs, and aspiring tech leaders. Limited slots. Application required."  
→ `[Apply]`

---

### Section 4 — WORK & IMPACT

**4 project highlights with impact metrics. Import from new site.**

| Project | Headline |
|---------|----------|
| MTF Fleet Management | Reduced document processing time by 60% for Indonesia's largest fleet operator |
| R/GA Brand Experiences | 10+ Fortune 500 campaigns delivered — inducted into R/GA Hall of Immortality |
| CIAYO Comics | Built web platform from scratch to 656,000 registered users |
| LifeLearn Holdings | Saved 40+ engineering hours/month — without a backend rewrite |

Below the grid: logo strip (R/GA · LifeLearn · Syntax · MTF · Komunal · CIAYO · DDTC · Paper.id)

**Add link below logo strip:**  
→ `[See All Case Studies →]` pointing to `/works`

---

### Section 5 — TESTIMONIALS

**Keep all 7 from old site. Rank order by seniority/impact:**

1. **Jussi Hurmola** — CEO, LifeLearn Holdings ⭐ (lead with this — CEO + "overdeliver" language)
   > "Ervandra is a very special person for us. He always overdeliver his services, even without being asked... Indeed, our most valuable person regarding technology."

2. **David Alfa Sunarna** — Associate Technology Director, R/GA
   > "When I first meet Ervan, I know he will be a leader in engineering team someday... He deliver world-class technology solution for client and working with people from around the globe."

3. **Eko Purnomo** — VP of Technology, Komunal Indonesia
   > "His technical skills are unquestionable, I can trust him to deliver without any supervision whatsoever."

4. **Donny Riantori** — VP Engineering, DDTC
   > "Ervandra is an extraordinary software engineer, he always comes with a great solution, practical and impactful."

5. **Effene Henry** — Lead Squad Engineer, Paper.id
   > "His energy to make things happen was contagious and it helped us achieve great goals."

6. **Erick Liemarga** — CPO, LABABOOK
   > "If you're looking for a versatile frontend web developer I'll definitely recommend Ervandra right away."

7. **Fran Sisco** — Android Developer, MNC Bank *(keep but display last — less senior)*

**Display:** Carousel (mobile-friendly) or 2-column masonry grid. Each card: Name → Position + Company → Quote → LinkedIn source link.

---

### Section 6 — CURRENT AVAILABILITY

**Import from new site verbatim. This is one of the strongest differentiators on the page.**

**Active Projects**
- Co-founder & CPTO at Syntax Solution
- Building & growing KaryaKilat productized service
- NDA consulting engagements with corporates & startups

**Available Capacity**
- 1–2 fractional CPTO partnerships (8–12 hrs/week each)
- Systems audit projects (2-week engagements)
- AI implementation projects (scoped, project-based)
- Custom development for critical paths

**Not Available For**
- Full-time employment
- 24/7 support or maintenance-only contracts
- Pure execution without strategic input
- Projects requiring 40+ hours/week commitment
- Native mobile apps or embedded systems

> "If your needs align with my availability, let's talk. If I'm not the right fit, I'll tell you — and recommend alternatives."

---

### Section 7 — FINAL CTA

**Simplified. One action.**

```
If your needs align, let's talk.

I'll tell you upfront if I'm not the right fit —
and point you somewhere better if I'm not.

[Book Free 45-Min Call]    [Message on WhatsApp]
```

---

## 5. Navigation

**Simplified to 4 items:**

```
Ervandra Halim    |    Works    About    Contact    |    [Book Call]
```

- **Works** → `/works` (portfolio index)
- **About** → `/about` (if page exists, otherwise skip for now)
- **Contact** → `/contact`
- **Book Call** → sticky CTA button (Calendly)

Add redirect: `/case-studies` → `/works`

---

## 6. What Not to Build (Yet)

| Element | Decision |
|---------|----------|
| Stats bar | Add only when real numbers confirmed (13+ years, 30+ projects, etc.) |
| Pricing page | Not needed — pricing lives in service cards |
| FAQ | Not needed — move to /contact later |
| Blog | Out of scope |
| /about page | Nice to have — not blocking launch |

---

## 7. Full Site Map

```
/                       ← Homepage (7 sections, this PRD)
/works                  ← Portfolio index (PRD-works-final.md)
/works/[slug]           ← Case study detail (PRD-works-final.md)
/about                  ← Optional, Phase 2
/contact                ← Contact + optional FAQ
```

---

## 8. Execution Sequence

| Phase | Task | Effort |
|-------|------|--------|
| **1 — Foundation** | Update title, H1, subheadline. Rewrite About prose. Remove role history + task bullets. | 1–2 hours |
| **2 — Add Sections** | Import "How I Work" + rewrite intro line. Add Services section (reordered). Add Availability section. | 2–3 hours |
| **3 — Work & Impact** | Add 4 project highlights with metrics. Add logo strip. Link to /works. | 1 hour |
| **4 — Testimonials** | Reorder existing 7 by seniority. Add display polish if needed. | 30 min |
| **5 — CTA + Nav** | Simplify final CTA. Update nav to 4 items. Add /works redirect. | 30 min |
| **6 — Works Pages** | Build /works index + /works/[slug] (see PRD-works-final.md) | Separate sprint |

**Phases 1–5 = homepage only. No new routes needed. Realistic in one focused day.**

---

## 9. Tone Guidelines

The old site's authentic voice is an asset. Don't let the new content make it sound corporate.

| ❌ Avoid | ✅ Use instead |
|---------|---------------|
| "Harness technology with a Digital Transformation Expert" | "Think of me as your tech partner" |
| "Optimize your business operations" | "Make your business run without you" |
| "Drive efficiency and growth" | "Protect revenue, reduce costs, unlock growth" |
| "Revolutionize your business processes" | Cut. Say nothing, or say something real. |
| Bullet lists of job responsibilities | Short, direct prose in human voice |

**Rule:** If it sounds like it was written for a corporate brochure, rewrite it.

---

*Final PRD v2.0 — ervandra.dev as base, importing from new site. Companion: PRD-works-final.md*
