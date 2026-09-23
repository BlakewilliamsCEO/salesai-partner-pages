# 04 — Outreach Sequence / Cadence (Voice + SMS)

Same cadence for all three agents. 12 days, max 4 calls + 4 texts per contact, front-loaded while the event is fresh. Day 0 = launch day (target Thu Sep 24, Mon Sep 28 at the latest).

## Sequence

| Day | Touch | Channel | Notes |
|---|---|---|---|
| 0 | T1 | SMS-A | Morning window. Identifies SalesAI + rep, booth reference, booking link, STOP language. |
| 0 | T2 | Call 1 | Afternoon, ≥3 hours after SMS-A. Leave voicemail if VM (the one VM of the sequence). |
| 1 | T3 | Call 2 | Different window than Call 1 (if Call 1 was afternoon, call morning). No VM. |
| 2 | T4 | SMS-D1 | Value nudge. |
| 4 | T5 | Call 3 | No VM. |
| 6 | T6 | SMS-D2 | Final value nudge, soft close. |
| 8 | T7 | Call 4 | Last call. No VM. |
| 11 | — | Sequence ends | Tag *No Response – Sequence Complete*. Contact stays in HubSpot list for a rep-driven email touch. |

Business days only for calls. SMS may go Saturday within window. Nothing on Sunday.

## Launch order

1. **Dealer — Kelpin and Dealer — Travis launch first** (Day 0). Dealers are the volume and the reps' calendars are open.
2. **Distributor Partner launches Day 0 or Day 1**, after Blake confirms his calendar availability for the following two weeks.
3. Stagger dials so that no more than ~60 calls per agent per hour go out; keep dealer agents from calling two people at the same company within the same hour.

## Pre-launch gates (must be true before Day 0)

- Reps have sent their personal emails to Meetings Booked and High Intent contacts (Blake's EOD-Thursday ask). The agent never touches those lists.
- `Agent Suppress = Yes` rows excluded from all three agents.
- `Post Conference Follow Up Method = Manually F/U` (no phone) rows excluded.
- HubSpot attribution (Event → Carrier ICP Elite '26) and lead-tier tags applied (Garrett).
- Each agent's booking link tested end to end (invite lands, SMS-C sends).

## Stop rules (halt all channels immediately)

- `Meeting Booked`
- `Opt-Out` (STOP or verbal)
- `Not Interested` (one clear no is enough)
- `Wrong Number`
- `Human Requested` (rep takes over)
- `Referred to Other Contact` (Blake takes over; new contact is a fresh entry, not auto-sequenced)
- Contact replies to a rep's email or books via any other path (dedupe against HubSpot meetings daily)

## Pause rules

- `Interested – Callback` with a time: pause the sequence, call at the requested time, then resume from the next step if no connect.
- `Interested – Send Info`: send SMS-B, skip the next scheduled SMS, keep the call schedule.
- Inbound question by SMS: answer, keep cadence.

## Re-sequencing after the 12 days

Non-responders go to the owning rep as a HubSpot task for one personal email. No second agent sequence without Blake's sign-off.

## Volume math (for capacity planning)

| Agent | Contacts | Calls (max) | SMS (max) |
|---|---|---|---|
| Dealer — Kelpin | 172 | 688 | 688 |
| Dealer — Travis | 171 | 684 | 684 |
| Distributor Partner | 104 | 416 | 416 |
| **Total** | **447** | **1,788** | **1,788** |

Realistic usage is well under max because stop rules fire early. Day 0 is the heaviest day: ~447 SMS + ~447 dials.

## Daily reporting (to #revenue-team, end of day)

Per agent: dials, connects, connect rate, meetings booked, callbacks scheduled, send-info, not interested, opt-outs, wrong numbers, competitor/churn flags. Plus the named list of booked meetings with rep and date.
