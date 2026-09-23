# Carrier ICP Elite '26 — Agent Enablement

<p class="meta">Owner: Blake Williams · Builder: Kim Yang · Live at <a href="https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/">https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/</a></p>

<div class="cards">
<div class="card"><h3>Knowledge base</h3><p>One KB for all three agents. Event, company, HVAC value prop, P&amp;L, use cases, channel, partner offer, competitive, never-say list.</p><a class="btn" href="kb.html">Open kb.html</a></div>
<div class="card"><h3>Distributor Partner agent</h3><p>104 distributor contacts. Partnership motion. Books to Blake Williams.</p><a class="btn" href="agent-distributor.html">Open</a></div>
<div class="card"><h3>Dealer agent — Travis</h3><p>171 dealer contacts. Books to Travis Hankins.</p><a class="btn" href="agent-dealer-travis.html">Open</a></div>
<div class="card"><h3>Dealer agent — Kelpin</h3><p>172 dealer contacts. Books to Blake Kelpin.</p><a class="btn" href="agent-dealer-kelpin.html">Open</a></div>
</div>

## Links to hand Kim

| Agent | Page | Knowledge base |
|---|---|---|
| Distributor Partner | `https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/agent-distributor.html` · `.md` · `.json` | `https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/kb.html` · `.md` · `.json` |
| Dealer — Travis | `https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/agent-dealer-travis.html` · `.md` · `.json` | same |
| Dealer — Kelpin | `https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp/agent-dealer-kelpin.html` · `.md` · `.json` | same |

Every page has a Markdown twin (`.md`, for pasting into a prompt) and a JSON twin (`.json`, structured: rep, booking, filters, SMS templates, voicemail, cadence steps, stop rules, objections, outcome tags; the KB JSON carries sections, proof points, people, never-list). `index.json` lists everything.


Enablement package for the voice + SMS agents following up the Carrier ICP Elite Dealer Meeting (San Antonio, September 2026). Owner: Blake Williams (Head of Ecosystems). Builder: Kim Yang.

This is a living package. Edit in place; the links below are the source of truth for the agents.

## The three agents

| Agent | Audience | Contacts (passport list) | Books to | Owner |
|---|---|---|---|---|
| Distributor Partner | HVAC distributor branch/territory reps and managers who stamped at the SalesAI booth. Offer: co-marketing, dealer enablement, AI training, 20% referral, or white-label/resell (wholesale, self-set margin, unlimited after 12 paid agents) | 104 (`Agent Message Track = Distributor Partner`) | `https://cal.com/blake-williams-salesai/30min` | Blake Williams |
| Dealer — Travis | HVAC dealers, `Contact Owner = travis.hankins@salesai.com` | 171 (`Agent Message Track = Dealer`) | `https://meetings.hubspot.com/travis-hankins1` | Travis Hankins |
| Dealer — Kelpin | HVAC dealers, `Contact Owner = blake.kelpin@salesai.com` | 172 (`Agent Message Track = Dealer`) | `https://meetings.hubspot.com/kelpin` | Blake Kelpin |

Source list: `3_carrier_icp_passport_lead_capture.csv` (460 rows). HubSpot list: *Contacts :: Carrier ICP Elite '26 -- Passport Lead Capture* (list 27449).

## List rules the agents must respect

- **Agent Suppress = Yes (13 rows):** do not call or text. Someone else at that company is already high intent and getting a personal touch from a rep.
- **No phone (13 rows, `Post Conference Follow Up Method = Manually F/U`):** no voice, no SMS. Email-only, handled by the owning rep.
- **Meetings Booked and High Intent lists** are NOT agent audiences. Reps follow up personally.
- Route by `Agent Message Track` (Dealer vs Distributor Partner), then by `Contact Owner` for the dealer split.

## Variables the agents need per contact

`First Name`, `Company Name`, `City`, `State/Region`, `ICP Distributor` (the Carrier distributor the dealer buys from), `Contact Owner` (rep name + booking link), `Agent Message Track`.

## Consent basis (for the record)

SalesAI was the headline sponsor of Carrier ICP Elite '26. Attendees consented at registration to sponsor communications by mail, phone, email, and text. Every passport contact physically visited the SalesAI booth for a stamp. Standard opt-out handling applies (see flows doc).
