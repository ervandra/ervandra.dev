# REVAMP BRIEF — ervandra.dev
**Author:** Russel (Virtual CEO, Karya Kilat)
**Date:** Feb 24, 2026
**Status:** Ready for Implementation

---

## MISSION

Revamp ervandra.dev to position Ervandra Halim as a **Strategic Tech Partner** — someone who combines deep technical expertise with business acumen. Not a freelancer. Not a vendor. A partner who understands that technology is a business tool, not the goal.

## TARGET AUDIENCE

Established business owners, founders, and operators in Indonesia (especially BSD/Gading Serpong area and beyond) who:
- Have a running business but struggle with tech decisions
- Need someone who speaks both "business" and "tech"
- Value quality over cheap, and partnership over transactional vendor relationships

## POSITIONING

**"Strategic Tech Partner"** — I help businesses align technology with growth. Through system audits, fractional CTO partnerships, AI implementation, and premium development — I don't just build, I partner.

---

## DESIGN DIRECTION (Frontend-Design Skill)

### Aesthetic: **Editorial Luxury meets Tech Credibility**
Think: a high-end consulting firm's site meets a senior architect's portfolio. Not startup-bro. Not corporate-stiff. **Authoritative, warm, refined.**

### Typography
- **Display/Headings:** Use `Instrument Serif` (Google Fonts) — editorial, distinctive, warm authority
- **Body:** Use `Plus Jakarta Sans` (Google Fonts) — clean, modern, Indonesian-designed, professional
- Remove Fira Sans entirely

### Color Palette
- **Primary Background:** Off-white `#FAFAF8` (warm, not sterile)
- **Text:** Near-black `#1A1A1A` 
- **Accent:** Deep teal `#1B4D4F` (trust, sophistication — NOT typical tech blue/purple)
- **Highlight:** Warm gold `#C9973E` (sparingly — for CTAs, emphasis, testimonial accents)
- **Muted:** `#6B7280` for secondary text
- **Card backgrounds:** `#F5F3EF` (warm gray)

### Layout & Spatial Composition
- **Generous whitespace** — let the content breathe. This signals premium.
- **Asymmetric hero** — photo on right (existing profile.svg works), text left, but with more editorial spacing
- **Section dividers:** Subtle, not borders. Use spacing and background color shifts.
- **Grid-breaking moments:** Testimonial section can use an offset layout or magazine-style quotes

### Motion & Micro-interactions
- Keep BlurFade for entrance animations (already installed)
- Add subtle hover states on service cards (slight lift + shadow deepening)
- Smooth scroll between sections
- NO bouncing emojis — remove all `animate-bounce` on emoji spans. It's playful but undermines the premium feel.

### Background & Texture
- Remove the bg-grid.webp and bg-dust.webp textures — they feel dated
- Use a very subtle CSS noise/grain overlay instead (3-4% opacity)
- Clean, minimal backgrounds with color shifts between sections

---

## PAGE STRUCTURE (7 Sections — revised)

### 1. HERO
```
Hi, I'm Ervandra Halim.

[H1] I Align Technology With Your Business Growth.

Strategic tech architecture for founders and business owners 
who need a partner — not another vendor.

15+ years building systems that scale. From startups to Fortune 500.

[Book Free Strategy Call]    [See My Work →]
```

**Implementation notes:**
- Remove the email subscribe dialog completely. "Book Call" → direct link to Calendly
- Profile illustration (profile.svg) on the right side, desktop only
- Two CTAs: Primary (filled) → Calendly, Secondary (outlined) → #works anchor

### 2. HOW I WORK (Philosophy)
Keep the 3 principles. Update intro:

> "I've spent 15 years learning that technology projects fail not because of bad code — but because of misaligned goals. Every engagement starts with understanding your business."

Principles (keep verbatim):
1. **Strategic Before Technical** — "I start with your business goals..."
2. **Systems That Scale Without You** — "Every solution I build..."  
3. **Transparent Partnerships** — "Fixed-scope audits, clear pricing..."

**Design:** 3 cards in a row, each with a subtle icon or number. Clean, editorial.

### 3. HOW I CAN HELP (Services) — REVISED

**Order (strategic → tactical → fast-track):**

#### A. Strategic Engagements (Primary)
Three cards:

1. **Tech & System Audit**
   - Starting from IDR 5M / 2 weeks
   - "A deep dive into your operations and technology. You get a gap analysis, risk map, and a 90-day action plan — not a generic report."
   - CTA: Book Strategy Call

2. **Fractional CTO**
   - Starting from IDR 15M/month
   - "Part-time tech leadership for your business. Strategy, architecture, team oversight, vendor management — without the full-time commitment."
   - CTA: Book Strategy Call

3. **AI Implementation**
   - Starting from IDR 10M
   - "Custom AI agents, workflow automation, and intelligent systems. Production-ready, not demo-ware."
   - CTA: Book Strategy Call

#### B. Custom Development (Secondary)
Single card, no price listed:
> "For critical systems that need to be built right. Let's scope it together to see if we're the right fit for your tech needs."
> CTA: Let's Scope It → Calendly

#### C. Fast Track (Tertiary — Karya Kilat mention)
Small mention, link out:
> "Need a premium microsite fast? I also run [KaryaKilat.com](https://karyakilat.com) — professionally crafted microsites delivered in 14 days."

**NO MENTORSHIP SECTION.** Removed entirely.

### 4. WORK & IMPACT — REVISED (Problem → Impact → Solution)

**Reframe as business stories, not project lists.**

Each card structure:
```
[Company Logo or Name]
THE CHALLENGE: [Business problem in client's language]
THE IMPACT: [Measurable result — the number that matters]
MY ROLE: [What I actually did — strategic + technical]
```

**4 Case Studies:**

1. **MTF Fleet Management**
   - Challenge: Indonesia's largest fleet operator was drowning in manual document processing across thousands of vehicles
   - Impact: 60% reduction in document processing time, millions in operational savings
   - Role: Led digital transformation as principal architect — rebuilt core systems while serving as business analyst for existing operations

2. **R/GA (Fortune 500 Campaigns)**
   - Challenge: Global agency needed senior technical leadership to deliver complex digital experiences for the world's biggest brands
   - Impact: 10+ Fortune 500 campaigns shipped. Inducted into R/GA Hall of Immortality — their highest technical recognition.
   - Role: Technology Lead managing cross-office, cross-discipline teams across APAC

3. **CIAYO Comics**
   - Challenge: Startup needed to build a digital comics platform from zero and scale it to compete in Indonesia's growing digital content market
   - Impact: 656,000 registered users. Platform became one of Indonesia's leading comics platforms.
   - Role: Co-founded the tech side. Led frontend team from first line of code through full scale.

4. **LifeLearn Holdings**
   - Challenge: Finnish education company struggled with an outdated backend system that consumed engineering time instead of enabling growth
   - Impact: Saved 40+ engineering hours/month — without a backend rewrite. CEO called me "our most valuable person regarding technology."
   - Role: Provided rapid, pragmatic solutions that worked within constraints. Overdelivered consistently.

**Below the cards:** Logo strip (text-based is fine, or use real logos if available):
R/GA · LifeLearn · Syntax · MTF · Komunal · CIAYO · DDTC · Paper.id

**Link:** → See All Case Studies → /works

### 5. TESTIMONIALS
Keep all 7, reorder by seniority (current order is already correct).

**Design upgrade:**
- Use a horizontal scroll/carousel with larger, more editorial-style cards
- Quote mark (") as a large decorative element in accent color
- Name + Role + Company prominently displayed
- Source link subtle
- Consider featuring Jussi's quote as a "hero testimonial" — larger, standalone before the carousel

### 6. CURRENT AVAILABILITY
Keep but REFRAME positively:

**Currently:**
- Co-founder & CTO at Syntax Solution
- Growing KaryaKilat premium service  
- Select consulting engagements (NDA)

**Open For:**
- 1–2 fractional CTO partnerships (8–12 hrs/week)
- Systems audit projects (2-week sprints)
- AI implementation (scoped, project-based)
- Custom development for critical paths

**Not the right fit if you need:**
- Full-time employment
- 24/7 support or maintenance-only contracts
- Execution without strategic input

> "If your needs align, let's talk. If I'm not the right fit, I'll tell you upfront — and recommend someone better."

### 7. FINAL CTA
```
Ready to align your technology with growth?

I'll tell you upfront if I'm not the right fit —
and point you somewhere better if I'm not.

[Book Free 45-Min Call]    [Message on WhatsApp]
```

---

## NAVIGATION (Simplified)
```
Ervandra Halim    |    Works    About    Contact    |    [Book Call ↗]
```

- Book Call → Calendly (external, opens new tab)
- Works → /works
- About → #about (anchor to How I Work)
- Contact → #contact (anchor to CTA)

## MOBILE MENU
Update mobile menu links to match:
- How I Work
- Services  
- Work & Impact
- Testimonials
- Contact
- [Book Call] button

---

## WHAT TO REMOVE
- [ ] Email subscribe dialog (Dialog component) — replace "Book Call" with direct Calendly link
- [ ] All `animate-bounce` on emoji spans
- [ ] Mentorship section entirely
- [ ] bg-grid.webp and bg-dust.webp background textures from CSS
- [ ] Fira Sans font — replace with Instrument Serif + Plus Jakarta Sans
- [ ] "Not Available For" as separate negative list → merge into availability as softer "Not the right fit if..."
- [ ] Experience/role history data in profile.js (not displayed but clean up)

## WHAT TO ADD
- [ ] Google Fonts: Instrument Serif + Plus Jakarta Sans
- [ ] CSS noise/grain overlay (subtle, 3-4% opacity)
- [ ] Problem → Impact → Solution case study cards
- [ ] Decorative quote mark on testimonial cards
- [ ] Hero testimonial (Jussi) featured before carousel
- [ ] Warm color palette (off-white, teal, gold accents)
- [ ] Hover micro-interactions on cards

## TECHNICAL CONSTRAINTS
- Next.js 12 (pages router) — keep this, don't upgrade
- Tailwind CSS 3 — keep
- BlurFade component — keep, it's good
- motion library — available, use for card hover effects
- SCSS files — can refactor to simpler CSS/Tailwind but not required
- Node 16 (volta pinned) — respect this

## FILES TO MODIFY
1. `pages/_document.tsx` — Update Google Fonts link
2. `styles/app.scss` — New color scheme, remove textures, new typography
3. `styles/global.scss` — Update CSS variables for new palette
4. `pages/index.tsx` — Full page restructure per sections above
5. `config/profile.js` — Update profile data, add case study data
6. `tailwind.config.js` — Update theme colors if needed

---

_Brief by Russel. Execute with precision. The site should feel like talking to a senior partner at a consulting firm — not browsing a developer's portfolio._
