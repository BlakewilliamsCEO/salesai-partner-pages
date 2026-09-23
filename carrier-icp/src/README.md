# Carrier ICP Elite '26 — Post-Event Agent Enablement

Enablement package for the voice + SMS agents following up the Carrier ICP Elite Dealer Meeting (San Antonio, September 2026). Owner: Blake Williams (Head of Ecosystems). Builder: Kim Yang.

This is a living package. Edit in place; the links below are the source of truth for the agents.

## What's in here (the four deliverables)

| # | Deliverable | File | Use |
|---|---|---|---|
| 1 | Messaging / conversation instructions per audience | [01-distributor-motion.md](01-distributor-motion.md) · [02-dealer-motion.md](02-dealer-motion.md) | Agent prompt source. Dealer doc carries the Kelpin and Travis variants. |
| 2 | Voice flow + SMS flow instructions | [03-voice-and-sms-flows.md](03-voice-and-sms-flows.md) | Call structure, SMS structure, objection handling, voicemail, compliance behaviors, outcome tagging. Shared by all three agents. |
| 3 | Outreach sequence / cadence | [04-outreach-cadence.md](04-outreach-cadence.md) | Day-by-day voice/SMS sequence, send windows, stop rules, reply routing. |
| 4 | Centralized Knowledge Base | [05-knowledge-base.md](05-knowledge-base.md) | Attach to all three agents. Carrier/Watsco channel, how SalesAI helps HVAC companies, competitive positioning, partnership/GTM investment, event context. |

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
