# Mint — SalesAi Design System

Mint is the design system for **SalesAi**, a voice-AI sales platform. Its interfaces are built around AI "agents" that make outbound calls, run playbooks, qualify leads, and book meetings — so the system is dense, dashboard-first, dark by default, and obsessed with legibility at small sizes.

> "We call our design system Mint because it keeps our interfaces fresh, pristine, and consistent. Mint combines a unified set of components, colors, and guidelines that help our designers design and our developers build faster all while keeping quality and accessibility consistent across the SalesAi product."
> — About Mint (Figma cover)

**Tagline:** _Fresh. Fun. Functional._

---

## Products in scope

Everything in Mint points at one surface: **the SalesAi web product**. The left-nav shows the full product map:

- **Voice AI** — overview dashboard, call logs, live transfers, agent performance metrics
- **Workflows** — builder for automated sequences (action cards, headers, section blocks)
- **Knowledge Library** — playbooks, scripts, documents the agents cite on calls
- **Activity Log** — timeline of agent + human actions
- **Contacts** — lead records with activity history drawers
- **My Agents** — roster of configured AI agents (with avatars, voices, templates)
- **Data Import / Integrations** — Salesforce, HubSpot, GHL, Google Sheets, Calendly, Twilio, Outlook, OpenAI, Webhook

There is no separate marketing site, mobile app, or docs product in the Figma — Mint is a single-product system.

## Sources

- **Figma (authoritative):** `Mint Design System.fig` — mounted as a virtual filesystem. 71 pages, 306 top-level frames. Foundations live under `/About-Mint`, `/Colors`, `/Typography`, `/Shadows`, `/Icons-Logos`, `/The-Blob`. Components are one page per component. Product screens are under `/Sidebar`, `/Voice-Overview`, `/Agent`, `/Workflows`, `/Blocks`, `/Cover`, etc.
- **Codebase:** _none provided._ All visual truth is reconstructed from the Figma pseudocode (`index.jsx` per frame) with spot-check screenshots where needed.

## Index (what's in this folder)

```
README.md                  — this file
SKILL.md                   — agent-skill manifest; point Claude Code or a design agent at the folder
colors_and_type.css        — CSS variables + semantic classes for color, type, radii, shadow
fonts/                     — Roboto (brand face) + Inter Tight (UI scaffold) — fully self-hosted.
                             Sen + Geist files remain for reference but are NOT wired (retired).
assets/
  logos/                   — SalesAi wordmark + integration logos (Hubspot, Salesforce, Twilio, …)
  brand/                   — The Blob, hero mint-burst, textures
preview/                   — small HTML cards for the Design System tab
ui_kits/
  salesai-app/             — recreation of the SalesAi product (dashboard, agents, contacts, workflows)
```

---

## Content fundamentals — voice, tone, copy

Mint's copy is **terse, functional, product-UI copy**. It is not marketing. A few things are consistent across the Figma:

- **Sentence case, always.** Labels like `Knowledge Library`, `My Agents`, `Voice AI`, `Data Import`, `Activity Log`. No ALL CAPS for nav or headers.
- **UPPER CASE is reserved for metric eyebrows / table headers** — `ANSWERED CALLS`, `MEETINGS BOOKED`, `LIVE TRANSFERS`, `TOTAL CALLS`. Tracked wide (letter-spacing ~0.2px) in 12px Inter Tight Semi Bold. This is the _only_ place capitals show up.
- **Numbers are the hero.** On overview cards, the value is 28px Roboto Bold with tight 0.88 leading. Everything else — eyebrow, delta, timeframe — is 12–14px Inter Tight, muted.
- **Directness over cleverness.** `Last 30 days`, `Last 7 days`, `15.4%`, `1,247`. No emoji. No exclamation points. No "Let's…", no "Oops!", no filler.
- **Second person in instructional copy, first person plural in brand copy.** Onboarding and empty states use "you"; brand copy on the cover uses "we" ("We call our design system Mint…").
- **No emoji.** None appear anywhere in the Figma. Don't introduce them.
- **Vibe:** a competent ops tool made by people who have shipped B2B software before. Calm, informational, slightly clinical. The _fun_ is in the mint-green accent and The Blob — not in the copy.

Example eyebrows seen verbatim: `ANSWERED CALLS`, `MEETINGS BOOKED`, `LIVE TRANSFERS`, `TOTAL CALLS`. Example sidebar labels verbatim: `Voice AI`, `Workflows`, `Knowledge Library`, `Activity Log`, `Contacts`, `My Agents`, `Data Import`.

---

## Visual foundations

### Color

Mint is **dark-mode first**, with a single signature green. It does not ship a light theme at the foundation level.

- **Surfaces** stair-step from near-black to raised black:
  - `#0A0C10` page background
  - `#141416` raised (cards, sidebar, tables)
  - `#202022` subtle (secondary surfaces, muted rows)
  - `#1C1C1E` tertiary pressed state
- **Brand mint green** — `#3EDE6F` is _the_ accent. It's the logo color, the primary-button fill, the "active agent" pulse. `#47ED7D` is hover, `#6DF79A` is pressed. Transparent `rgba(62,222,111, 0.05–0.6)` is used heavily for glows, rings, selection states.
- **Text**
  - `#F5F5F7` primary foreground (off-white, not pure white)
  - `#ABADAE` secondary (labels, captions, timestamps)
  - `#8E8E90` / `#5F6061` tertiary
  - `#404142` quaternary / disabled
- **Borders** step through `#272729` (subtle), `#353637` (default), `#4E4F50` (stronger), `#8E8E90` (strongest). Brand border is `#3EDE6F` with `#052A18` as its muted counterpart.
- **Semantic** — `info #26A9D8`, `success #21B873`, `warning #FFB800` (border `#FFC93D`), `error #E45864` (border `#ED7E88`, deep `#731F29`).
- **Supporting accents** (Brand Guidelines 2025 p.11) — `blue #236BD0`, `purple #955DF1`, `deep purple #602BB6`, `orange #F69315`. Exposed as `--support-blue` / `--support-purple` / `--support-purple-2` / `--support-orange`. **Used sparingly** — never the hero, never more than one per surface. Reserve for category tiles, tags, callouts, promo moments. Mint green remains THE accent; these fill in when mint is already taken.
- **Figma-only tooling colors** — dashed purple `#8A38F5` / `#BD8AFF` wrappers live in the source file. Never ship them.

Every product surface uses the same palette; no per-product tints.

### Type

Mint runs a **dual type system**. The brand face carries voice; the UI face carries information density. Use them as a pair — never swap them.

- **Roboto — the brand face** (`--font-brand`). This is the voice of SalesAi per **Brand Guidelines 2025 (p.5, p.9)**. Use Roboto for:
  - Headlines (H1–H4) at **Bold 700, line-height 0.88** (tight, near-flush baseline).
  - Hero / cover display sizes (36 → 240px) at **Black 900 / 0.88**.
  - Long-form prose on marketing surfaces and decks, at **Regular 400 / 1.5**.
  - Metric card values (28px Bold / 0.88) — the "numbers are the hero" rule.
  - The full family ships self-hosted (Thin 100 → Black 900, upright + italic, 18 files).
  - Roboto Condensed / SemiCondensed TTFs are also present in `fonts/` but not wired by default; add `@font-face` rules for display/promo work as needed.

- **Inter Tight — the UI scaffold** (`--font-sans`). Organizes information _under_ a Roboto headline. Use Inter Tight for:
  - Product UI chrome: sidebar labels, table cells, form inputs, button labels, tooltips, chips.
  - Subheads (title/lg, title/md, title/sm) — 14–20px at Medium 500 / Semi 600.
  - Eyebrows — Semi Bold 600, 12px, tracked 0.2px, uppercase (e.g. `ANSWERED CALLS`).
  - Metric-card delta chips (12px Medium) — the value above is Roboto; the chip beside it is Inter Tight.
  - Full 18-file family (Thin → Black, italics) self-hosted.

- **Fallback chain** (Brand Guidelines): `Arial, Helvetica, system-ui`. No Google Fonts CDN; every face is local.

- **Retired faces** — Sen and Geist appeared in earlier Figma explorations but are **not in Brand Guidelines 2025** and are not wired as `@font-face`. The TTFs remain in `fonts/` for archival only. Do not introduce them in new work.

- **Leading & tracking.**
  - Headings: lh **0.88**, letter-spacing `-0.005em` → `-0.01em` as size grows.
  - UI body: pixel-exact leading — 14 / 16 / 20 / 24 / 28.
  - Prose: `line-height: 1.5` for reading at 14–18px Roboto Regular.
  - Eyebrows: `letter-spacing: 0.200px`, always uppercase.

- **Mono** is a utility only. A `--font-mono` token exists for code, hex values, and phone-number rendering — not a brand voice.

- **No serif.** No second sans (no system-ui hero, no Inter, no Geist). If you find yourself reaching for a third face, you are solving the wrong problem.

### Spacing & radius

- Grid ticks at **4px**; real spacing is 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48.
- Radii: `2` (section dividers), `5` (Figma tooling wrappers — don't ship), `8` (buttons, metric cards, chips), `12` (sidebar, panels, input wrappers), `16` (big cards), `80` (hero/cover only).
- Padding patterns: buttons `8×20`, cards `20`, drawers `16–24`, sidebar items `8×12`.

### Shadows

Shadows are **tinted with mint-green, not neutral gray**, which is the system's most distinctive cue. All blur modals also ship with a hard black outer ring for contrast against the dark canvas.

- `/xs` — `0 1px 2px rgba(46,120,86,.20)` → input fields, inner borders
- `/sm` — `0 2px 4px rgba(40,140,95,.22)` → buttons, small cards
- `/md` — `2px 4px 12px -1px rgba(45,100,84,.22)` → cards, dropdowns
- `/lg` — `1px 2px 24px -2px rgba(40,110,90,.24)` → modals, side panels
- `/xl` — `2px 4px 48px -4px rgba(35,120,95,.26)` → dialogs, popovers, sheets
- `/dark` — `0 0 24px rgba(0,0,0,.4), 0 0 80px rgba(0,0,0,1), 0 0 160px rgba(0,0,0,.3)` → modal scrim/dropdown

### Backgrounds, textures & motifs

- **The Blob** — a soft green radial glow (`rgba(94,207,129,0.08)` with `hard-light` / `lighten` blend) anchored top-left of large frames and the sidebar. This is the signature brand moment.
- **Dot Background** — dense dot matrix used behind "product" screenshots in cover/marketing frames. The dot is a 2px `#272729` circle on a `#0A0C10` field.
- **Mint-hero texture** — a large diagonal photographic/noise PNG (`assets/brand/mint-hero-texture.png`) laid over dark frames in `lighten` mode. Used sparingly on cover frames.
- **Dashed purple wrappers (`1px dashed #8A38F5`)** are Figma-only tooling — wrappers around component families in the source file. **Never ship these.**

### Borders, strokes, hover/press

- Default border is `1px solid #272729`. Focus uses `#ABADAE` (no bright ring — the cursor + outline is enough).
- **Hover** lifts surfaces one step in the scale (e.g. card `#141416` → `#202022`) or shifts a ghost button to `rgba(62,222,111,0.08)` secondary. Hover _never_ changes text color unless the element was already brand-mint.
- **Press** goes _lighter_, not darker: primary green `#3EDE6F → #47ED7D → #6DF79A`. Secondary surfaces bump from `0.08 → 0.12 → 0.24` alpha of mint.
- **Disabled** = `#141416` fill + `#272729` border + `#404142` text. No reduced opacity.

### Transparency & blur

- The sidebar panel is `rgba(10,12,16,0.64)` with a `#052A18` brand-subtle border, sitting over The Blob. Backdrop blur is implied — use `backdrop-filter: blur(12px)` when recreating.
- Modal scrims use `#0A0C10` at 64% alpha.
- Transparent mint `rgba(62,222,111, 0.05 / 0.08 / 0.12 / 0.24 / 0.6)` is the secondary-button / selection / glow family. Memorize those five stops.

### Cards

- Default card: `#141416` fill, `1px solid #272729` border, `8–16px` radius, `20px` padding. No shadow until raised or interactive.
- Metric card: same skeleton, 261×144, eyebrow + big number + delta chip stacked.
- Agent card: vertical, 280–320 wide, avatar + name + voice chip + stats row.

### Animation

Not explicitly specified in Figma tokens, but the component states imply:

- 150–200ms cubic ease-out for hover/press on buttons and list items.
- The Blob should feel **alive but not moving** — a very slow (10–20s) opacity/translate drift is appropriate; do not bounce or pulse it.
- No bounces, no elastic, no skeuomorphic flips. This is a serious ops tool.
- Loading uses a `/Spinner` component (3 sizes) — a thin mint ring on neutral background.

### Layout rules

- Sidebar is fixed 240px expanded / 64px collapsed; it has two states with distinct motion.
- Top of the app has no fixed global header — screens define their own `Header` (see `/Header/Workflows.Header`) with breadcrumbs + actions.
- Content max-width is not capped; the product is designed for 1440–1920 wide dashboards.
- Drawers slide from the right at 420–560px wide, with `/lg` shadow and a 16px radius on the **inside** edges only.

---

## Iconography

SalesAi ships a **custom icon set** inside the Figma, not a third-party library. The set is classified by two axes:

- **Format** — `Stroke` (pure line), `Outline` (line with hit-area), `Fill` / `Solid`
- **Weight** — `Thin`, `Light`, `Regular`, `Bold`

Most product UI uses **Stroke / Light** at 16 or 24px on a 32px frame. `Format=Outline, Weight=Regular` is the second-most-common set — used for table-cell iconography and chips. There are thousands of instances — e.g. `Format=Stroke, Weight=Light` alone has 2,210 instances across 13 pages.

- **No icon font** — every icon is a discrete SVG symbol in the Figma.
- **No emoji** anywhere in the file.
- **No unicode-as-icon** tricks.
- **Flag icons** exist as a separate set (`/Icons-Logos/Logo.Flag`) — `CountryAu`, `CountryUs`, `CountryGb`, `CountryDe`, `CountryFr`, `CountryBr`, `CountryCa`, `CountryIn`, `CountryJp`, `CountryMx` — for phone-number prefixes.
- **Integration logos** (`/Icons-Logos/Logo.Misc` + `Logo.Flag` neighbors) are rendered in brand color: HubSpot orange, Salesforce blue, Twilio red, Google multicolor, OpenAI white, Webhook white, Calendly blue, Outlook multicolor, GHL dark blue, Google Sheets green. Keep brand colors — do not de-saturate.

### Substitution in this project

> ⚠️ **We did not ship the custom SalesAi icon font here.** The Figma holds ~3,000 discrete SVG nodes and the binary is pseudocode-only — there is no clean export.
>
> As a **stand-in**, the UI kits and preview cards in this project link **Lucide Icons** (`https://unpkg.com/lucide@latest`). Lucide's stroke-based, 24px, 1.5px-weight aesthetic is the closest open-source match to `Format=Stroke, Weight=Light`.
>
> When this skill is used against the real SalesAi codebase, **replace every Lucide icon with the corresponding project icon**. The component names in Figma (`FormatStrokeWeightLight5`, etc.) are GUIDs, not semantic — always trust the icon's surrounding context to choose the right replacement.

Logos copied into this project:

```
assets/logos/salesai-icon-green.svg        — 24px brand mark, green
assets/logos/salesai-wordmark.svg          — full "SalesAi" wordmark, off-white
assets/logos/salesai-icon-green-alt.svg
assets/logos/logo-hubspot.png              — HubSpot
assets/logos/logo-salesforce.png           — Salesforce
assets/logos/logo-twilio.svg               — Twilio (red glyph)
assets/logos/logo-openai.svg               — OpenAI (white)
assets/logos/logo-webhook.svg              — Webhook (white)
assets/logos/logo-calendly-*.svg           — Calendly glyphs
```

---

## Caveats & open questions

See the bottom of the chat — this document is the source of truth for the ASK section.
