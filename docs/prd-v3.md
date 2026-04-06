# ervandra.dev Revamp — Design & Copy Brief

## Context

You are redesigning ervandra.dev — the personal site of Ervandra Halim (Van), a CTO & Principal Architect with 15+ years in tech. The current deployed version (revamped branch) has good structure but wrong positioning, generic design, and inaccurate copy. This brief defines exactly what to change.

## Global Rules

- **Title:** CTO & Principal Architect (NOT "CPTO", NOT "Solo founder")
- **Location:** Tangerang, Indonesia (NOT Jakarta)
- **Email:** ervandra.halim@gmail.com (NOT hi@ervandra.com)
- **Tone:** Earned authority. Personal, direct, confident without being salesy. He's an architect who's selective about partnerships — not a consultant chasing leads.
- **No fake content.** Don't generate blog posts, downloadable checklists, or lead magnets that don't exist yet. If a section needs future content, mark it "Coming soon" or remove it.

---

## Design Direction

Shift from generic SaaS template to **Swiss Design / International Typographic Style** with architectural personality.

### Typography
- **Headings:** Serif font (Merriweather, Playfair Display, or similar) — editorial, authoritative
- **Body:** Clean sans-serif (Fira Sans, Inter, or similar) — readable, modern
- **Labels/Tags:** Monospace (Fira Code, JetBrains Mono) — technical identity
- Use extreme typographic scale: large headlines (4-6rem+), small labels (0.7-0.85rem uppercase tracked)

### Color
- **Primary:** Dark navy (#0a0f1a or similar deep dark)
- **Accent:** Warm gold/brass (#b8976a) — used sparingly for highlights, dividers, hover states
- **Background:** Off-white/warm white (#faf9f7) with subtle paper grain texture (CSS noise or background-image)
- **Text:** Near-black for body, navy for headings
- NO bright colors, no gradients, no colored cards

### Layout & Texture
- **Grid-based layouts** with visible structure (shared borders, architectural precision)
- **Section numbering:** "01 — About", "02 — What I Do", etc. in small monospace labels
- **Dividers:** Diamond (◆) or thin ruled lines instead of blank space
- **Trust bar:** Scrolling marquee with company names separated by ◆ diamonds
- **Watermark numbers:** Large faded numerals (the section number) as background decoration
- **NO rounded corners** on cards or buttons — use sharp edges or subtle 2px radius max
- **NO border-left accent bars** — this is the most common AI template pattern, avoid it

### Animations
- Subtle scroll-reveal (fade-up on enter)
- No parallax, no complex transitions, no loading animations

---

## Copy — Section by Section

### Navigation
```
ERVANDRA HALIM    About  Work  Career  Voices  Contact
```

### Hero
- **Label:** CTO · Architect · Tech Partner
- **Headline:** "I build systems that outlast me."
- **Subhead:** Fifteen years of engineering what matters. I'm the technical partner companies trust when the architecture has to be right.
- **Metrics row:**
  - 15+ → Years in Tech
  - 656K → Users Served
  - 6 → Companies Built
- **CTAs:** "See My Work" (anchor to #work) + "Get in touch" (anchor to #contact or mailto)
- NO "Book Free Consultation" as primary CTA — too salesy for this positioning

### Trust Bar
Scrolling marquee: R/GA ◆ MTF Finance ◆ Komunal ◆ CIAYO Comics ◆ LifeLearn ◆ Syntax Solution ◆ Magnificat Consulthink ◆ CakraStudio

### 01 — About
- **Heading:** "Engineer first. Architect always."
- **Layout:** Two columns — narrative text (left/main) + Quick Facts card (right/sidebar)
- **Quick Facts:**
  - Location → Tangerang, ID
  - Current Role → CTO & Principal Architect
  - Core Stack → React · Next.js · Flutter · .NET
  - Focus → Architecture · Leadership · AI
  - Recognition → R/GA Hall of Immortality
- **Narrative (2 paragraphs):**

> I started writing code fifteen years ago because I wanted to understand how things work. That instinct hasn't changed — only the scale has. I built CIAYO Comics' reading platform from scratch, serving **656,000 readers**. I replaced my predecessor at R/GA New York to lead global engineering teams. I built Yoona's entire platform — dashboard, webstore, partner system — **solo, in eight months**.
>
> Today, I lead engineering at **Syntax Solution**, co-founded **Magnificat Consulthink** to bring technology to financial consulting, and selectively partner with businesses that need **architectural clarity** — not just more code.

- **Pull quote:** "I'd rather build one system that lasts than ten that don't."

### 02 — What I Do
- **Heading:** "Three roles, one standard."
- **Subhead:** not needed — let the cards speak
- **3 cards** (NOT 4 — remove generic "Custom Software Development"):

**Card 01 — Syntax Solution**
- Role: CTO & Principal Architect
- Copy: Enterprise systems for financial institutions — fleet management, mobile banking, collection platforms. If it needs to scale and it needs to work on day one, this is where I operate.

**Card 02 — Magnificat Consulthink**
- Role: Tech Partner & Co-founder
- Copy: Tax compliance is complicated. Technology shouldn't make it worse. We bridge traditional financial consulting with modern systems that actually simplify operations.

**Card 03 — Strategic Partnerships**
- Role: Independent Tech Partner
- Copy: Not every company needs a full-time CTO. Some need someone who's built at this scale before — to audit, to architect, to course-correct. That's what I offer.

### 03 — Selected Work
- **Heading:** "Proof of work."
- **4 project cards** with real metrics:

**MTF Fleet System** — Enterprise · Fleet Management
> When a major multifinance company needed their entire field operations digitized — prospect tracking, inventory, credit simulation — they didn't need a prototype. They needed it to work.
- Enterprise / Scale — Full-stack / Scope — Active / Status

**Collecta** — Mobile · Collection & Inventory
> A billion-rupiah system for asset repossession, grading, and auction lifecycle. I didn't just architect it — I laid the technical foundation that the entire vendor team builds on.
- 1.17B IDR / Contract Value — Flutter + .NET / Stack — 2026 / Kickoff

**CIAYO Comics** — Consumer · Digital Comics
> Built the web reading platform from scratch. 656,000 people used it daily. When CIAYO shut down in 2020, the technology was the last thing standing.
- 656K / Users — Frontend Lead / Role — 2015–2020 / Period

**R/GA — New York** — Agency · Global Teams
> My predecessor told R/GA I'd replace him someday. I did. Leading global teams remotely from Indonesia for one of the world's most awarded agencies taught me that great engineering has no timezone.
- 🏆 Award / Hall of Immortality — Global / Team Scope — 2021–2022 / Period

Each card should have a large faded watermark label (FLEET, COLLECTA, CIAYO, R/GA).

### 04 — Career Timeline
- **Heading:** "Fifteen years. One trajectory."
- Grid/list format, current roles highlighted:

| Period | Title | Company | Note |
|--------|-------|---------|------|
| 2026–Present | CTO & Principal Architect | Syntax Solution | ★ current |
| 2026–Present | Tech Partner & Co-founder | Magnificat Consulthink | ★ current |
| 2024–2025 | VP of Engineering & Product | Syntax Solution | |
| 2022–2026 | Tech Partner & Lead Dev | Yoona | Built entire platform solo in 8 months |
| 2021–2022 | Tech Lead | R/GA (New York, Remote) | Hall of Immortality award |
| 2017–2020 | Tech Partner & Full-stack Dev | LifeLearn (Finland) | |
| 2015–2020 | Frontend Division Head | CIAYO Comics | 656,000 users platform |
| 2012–2015 | Senior Web Developer | CakraStudio | |

### 05 — Testimonials
- **Heading:** "Trust is earned."
- Use ALL 6 existing testimonials from the current revamped version (David, Eko, Donny, Erick, Jussi, Effene) — these are real LinkedIn recommendations
- Display as pull-quote cards with photo, name, title
- Carousel or grid — designer's choice, but ensure all are accessible without excessive clicking

### 06 — Contact
- **Heading:** "The best partnerships start with honest conversations."
- **Copy:** I'm selective about what I take on — not out of arrogance, but because the work deserves full commitment. If you have a hard problem and need someone who'll tell you the truth about it, let's talk.
- **Contact grid:**
  - Email → ervandra.halim@gmail.com
  - LinkedIn → in/ervandra
  - GitHub → @ervandra
  - Instagram → @ervandra
  - Phone → +62 877 0877 0800
- Optional: "Book a call" link (only if a real Calendly exists)

### Footer
- 4 columns: Company info | Ventures (Syntax, Magnificat) | Services (Tech Audit, Fractional CTO, Tech Partnership, System Architecture) | Connect (LinkedIn, Instagram, Facebook, Email, Phone)
- **Copyright:** © 2011–2026 Ervandra Halim
- **Location:** Tangerang, Indonesia

---

## What to Remove
- ❌ "CPTO" title anywhere
- ❌ "Jakarta, Indonesia"
- ❌ "50+ Projects Shipped" metric
- ❌ "hi@ervandra.com"
- ❌ AI Readiness Checklist / lead magnet section
- ❌ Fake blog posts (keep the blog route, show "Coming soon" or remove from homepage)
- ❌ "Book Free Consultation" as primary CTA
- ❌ Magnificat described as "E-Commerce / Full Stack" — it's tax + financial consulting
- ❌ Generic service card "Custom Software Development" with bullet lists
- ❌ Rounded corners, border-left accent bars, gradient backgrounds

## What to Keep from Current Revamped
- ✅ Multi-page routing (Services, Work, About, Blog as separate routes) — good for SEO
- ✅ All 6 real testimonials with photos
- ✅ Blog route structure (even if content comes later)
- ✅ Responsive mobile layout
- ✅ Next.js + Vercel deployment pipeline

---

## Reference Aesthetic
Think: rauno.me, brittanychiang.com, dennissnellenberg.com — minimal, typographic, architectural. NOT: generic Tailwind templates, SaaS landing pages, or "hire me" freelancer sites.
