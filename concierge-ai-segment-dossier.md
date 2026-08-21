# Concierge AI — Segment Investigation Dossier

**Prepared for:** Blake, Megan, George
**Date:** Friday, August 21, 2026
**Purpose:** Weekend research package ahead of Sunday regroup and Monday/Tuesday sessions
**Status:** Research complete. Recommendation is a *conditional* go — the conditions are in §8.

---

## 0. The one-page version

We picked **Concierge AI** — a permissioned agent that carries the cognitive load of running a household and a career: it makes the calls, takes the calls, holds the family's shared context, and closes the loop without being asked.

**What the research says, in four sentences:**

1. **The intersection we identified is genuinely empty.** Nobody combines outbound task-completing voice + shared multi-person household state + enterprise-grade security. Verified across ~60 products. Not one has two of the three.
2. **It is empty because three well-funded companies just died trying, not because nobody noticed.** Yohana (Panasonic, $149–249/mo) shut down Jan 30, 2026. Milo shut down Jan 2026. Maple is winding down Dec 2026. And Simple AI — a YC company that shipped *literally this product* for consumers in Dec 2024 — raised $14M in Feb 2026 and used it to walk away from consumer entirely and sell voice agents into B2B, including debt collection.
3. **Our COGS are fine and our retention is the whole ballgame.** Gross margin lands at 80–88% at $59–99/mo. But AI apps retain 36% worse than non-AI apps, and at benchmark retention with benchmark CAC this business has an LTV/CAC of ~0.9–1.5×. The infrastructure is not the risk. The churn is.
4. **The head of this market is being eaten in real time and the tail is not.** On Aug 10, 2026 — eleven days ago — OpenTable, Resy and Yelp launched in-chat reservations inside ChatGPT. Google is rolling free agentic calling for home repair, beauty and pet care to all US users this summer. Anywhere a clean API exists, the platforms will own it for free. **Where no API will ever exist — insurance appeals, school forms, pediatric intake, contractors, specialty medical, billing disputes — nobody is coming.**

**The recommendation:** go, but not at the product we described in the meeting. Run the test against the *long tail* positioning, price at $59–99 with the value denominated in dollars recovered rather than hours saved, and make **week-8 retention the gate**, not signup volume.

That is the same play Blake ran at Watsco. Avoka owns the PE platforms; we went after the 120,000 they won't serve. OpenAI and Google are about to own the reservation. **Let them have it. Go where they ain't.**

---

## 1. Category: Concierge AI

**Blake's call, and we're running with it.** One flag, one mitigation, then we move on.

**Definition (use this verbatim):**

> **Concierge AI is a persistent, permissioned agent that carries the cognitive labor of running a household and a career — anticipating what needs to happen, deciding among options, transacting with the outside world by phone and email, and monitoring until it's done.**
>
> Unlike a **chatbot**, it isn't summoned; it holds continuous context across a family's calendars, inboxes and commitments and initiates without being prompted.
> Unlike a **scheduling tool**, it doesn't display and de-conflict a calendar you maintain; it *makes the calls* — to the pediatrician, the dealership, the insurer, the school — completes the paperwork, confirms, re-books, and resolves the conflict instead of surfacing it.
> Unlike a **human assistant or concierge**, it runs continuously at software cost, holds every prior detail in durable memory, works across multiple household members at once, and requires no briefing overhead.
>
> Its unit of work is not a message, a meeting, or an hour. **It is a resolved obligation.**

**The one flag on the name:** "AI concierge" as a search term is currently dominated by hotel-tech. Nearly every top result is hotel front-desk software. Straight SEO spend on the bare phrase gets donated to that category.

**Mitigation, not a rename:** own **"Concierge AI"** as the brand-level category (capital C, capital A, as a proper noun — the way "Sales AI" works), and buy the demand under the terms people actually search: *AI personal assistant, AI executive assistant, life admin, AI that makes phone calls for you*. Those are capture pages that funnel to the Concierge AI positioning. We name the category; we rent the traffic.

### The vocabulary that goes in ads and landing pages

These have real provenance and they test well because people already use them about themselves:

| Phrase | Source / provenance | Use it for |
|---|---|---|
| **"Life admin"** | Elizabeth Emens, Columbia Law, *Life Admin* (2019). Owned commercially only by Duckbill. | Gender-neutral, professional-compatible. **Our lead phrase.** |
| **"Mental load"** | Emma, *You Should've Asked* (2017), viral comic → book | Highest recognition among the family audience. Heavily used already — high resonance, zero ownership. |
| **"Cognitive labor"** | Daminger, *American Sociological Review* (2019). Four components: **anticipation, identification, decision, monitoring**. | This is our product architecture *and* our ad copy. See below. |
| **"The anticipation gap"** | Coined independently twice in May 2026, unowned | The mechanism term. Explains why we're not a chatbot. Free to take. |
| **"The second shift"** | Hochschild (1989) | One use, in a manifesto or founder letter. Too academic for performance ads. |

**The Daminger framework is worth internalizing.** Cognitive labor breaks into four parts: *anticipating* needs, *identifying* options, *deciding*, and *monitoring* to completion. Women disproportionately carry **anticipation and monitoring** — and those are precisely the two components that no software has ever touched. Calendars do identification and decision support. Nothing anticipates. Nothing monitors.

That is the product spec and the positioning grid in one:

| Cognitive labor component | Chatbot | Scheduling tool | Human VA | **Concierge AI** |
|---|---|---|---|---|
| **Anticipation** | ✗ | ✗ | partial (needs briefing) | **core** |
| **Identification** | ✓ if asked | ✗ | ✓ | ✓ |
| **Decision** | advisory | de-confliction only | ✓ delegated | ✓ within policy |
| **Monitoring** | ✗ | reminders only | ✓ | **core** |

**And the single best citation we have** — Weeks, Kowalewska & Ruppanner, *Socius*, Oct 2025, n=2,133 partnered US parents: **women's employment and earnings reduce their physical household labor but not their cognitive burden.** High-earning mothers carry identical mental load to lower-earning ones. Mothers report responsibility for 13.72 cognitive tasks vs fathers' 8.18 — 68% more.

Read that again, because it's the whole thesis: **you can already buy your way out of the physical labor. Nannies, cleaners, meal kits, Instacart — a $2,250–5,900/month market that works. There is no product that buys you out of the cognitive layer.** That is a real, peer-reviewed, unserved job-to-be-done, and it is why this segment is worth investigating despite everything in §2.

---

## 2. The graveyard — read this before Monday

This is the part I'd want to know before spending a dollar. Every serious attempt at this exact product has died or fled in the last 14 months.

| Company | Backing | Price | Outcome |
|---|---|---|---|
| **Yohana** | Panasonic | launched at $149–249/mo | **Shut down Jan 30, 2026.** 4.5 years, ~140 employees, 3,000 families, 50,000 tasks completed, claimed 8–10 hrs/wk saved. Led by Yoky Matsuoka (ex-Google X). Panasonic cited "a comprehensive assessment of the business environment." |
| **Milo** | OpenAI-backed (Converge) | — | **Shut down Jan 2026.** Founder Avni Patel Thompson, in her own goodbye post (Jan 12, 2026): *"The technology is simply too early to be reliable in any useful way. We've prompted and few-shot and fine-tuned and trained our way through every possible path with promising demos but disappointing production and scale."* And: *"Too early is still wrong."* |
| **Maple** | ex-Shopify execs | $3–5/mo | Team acqui-hired by Wander July 2026. **Service dies Dec 31, 2026**; family data deleted. |
| **Poke** (Interaction Co.) | $25M, General Catalyst, $300M post | — | 100M+ messages in 3 months. **Acquired by Cognition July 2026.** Co-founder: it *"had been expensive to run, making it difficult to turn a profit."* |
| **Simple AI** | YC S24, then $14M Feb 2026 | consumer app | **Built our exact product.** Their own launch copy: *"Simple AI can make AI powered phone calls on your behalf… wait on hold and navigate phone trees"* — restaurants, doctors, dentists, retail, billing disputes. Shipped Dec 2024. **Raised $14M in Feb 2026 and pivoted entirely to B2B voice agents for sales, support and debt collection.** No consumer product on their site today. |
| **Facebook M** | Meta | — | Dead Jan 2018. Humans handled ~70% of requests. Never scaled economically. |
| **Hello Alfred** | $40M Series B | — | Consumer in-home concierge → pivoted to B2B multifamily property partnerships. |

**The pattern, stated plainly:** not one of these died from lack of demand. They died from (a) human labor economics at consumer price points — M, Yohana, Alfred; (b) reliability collapse from over-broad scope — Milo; or (c) consumer CAC/retention that didn't clear — Poke, Simple AI.

**Simple AI is the one that should keep us honest.** They are not a cautionary tale about the idea. They built it, ran it ~14 months with YC's backing and real users, and then their investors funded them to leave — for the *exact adjacent segment we were also considering yesterday*, including debt collection. Either consumer CAC/retention didn't work, or B2B ACVs were 100× better. **Finding out which is the highest-value phone call anyone on this team can make next week.**

We are the fourth entrant to this idea in 24 months. The prior three are gone. That doesn't kill it — the AI-native cost structure genuinely didn't exist when Yohana launched in 2021 — but it does mean **the burden of proof sits on us, and "we can do it cheaper because it's AI" is a cost-side answer to what looks like a demand-side failure.**

---

## 3. Who's actually in the space — and the empty intersection

### The hypothesis test

Blake's hypothesis was: *nobody combines (1) outbound voice that completes real tasks + (2) shared multi-person household coordination + (3) enterprise-grade security.*

**Verified across ~60 products. It holds. Nothing has two green cells.**

| | (1) Outbound task voice | (2) Multi-person household | (3) Enterprise-grade security |
|---|---|---|---|
| **Google** (Ask for Me / I/O 2026) | ✅ narrow verticals, **free** | ❌ | ✅ but no consumer contract |
| **Alexa+** ($19.99/mo, free w/ Prime) | ❌ API-only bookings | ⚠️ device-account, not person | ⚠️ |
| **ChatGPT** ($20–200/mo) | ❌ browser agent, no calls | ⚠️ **hiring for it** | ⚠️ |
| **Ohai.ai** ($9.99–29.99/mo web; $14.99–39.99 in App Store) | ❌ text/email/scan only | ✅ **"Circles," cross-household** | ❌ |
| **Duckbill** ($49 / $99 / $169 / $350/mo) | ⚠️ humans make the calls | ❌ | ❌ |
| **Assindo** ($20–70/mo) | ✅ **inbound + outbound** | ❌ | ❌ |
| **HeyRobyn** ($25/mo) | ✅ | ❌ | ❌ |
| **Skylight / Hearth / Cozi** ($3–7/mo) | ❌ | ✅ | ❌ |
| **Simple AI** | ✅ → **left consumer** | ❌ | ✅ now B2B |

An independent 2026 survey of 45 AI assistants concluded: *"Outbound Phone Calls: None of the 45 products listed explicitly mention the capability to make outbound phone calls on behalf of users."* A separate 68-company voice-agent market map found **64 of 68 target business operations** — the only consumer entries were language-learning apps.

### But here's where the hypothesis is weaker than it looks

**Pillar (2) is a commodity, not a differentiator.** Ohai already ships cross-household shared coordination — divorced parents, grandparents, nannies — at $29.99/mo, run by Care.com's founder with a celebrity-mother cap table. Cozi claims 12M users at $39/*year*. There are a dozen free family calendar apps. **If our pitch includes "and a shared family calendar," we're competing with free.** Household coordination is our retention substrate and our data moat. It is not the wedge.

**Pillar (1) has a half-life of about 12 months.** DialMCP launched a hosted MCP server that places compliant calls from the user's own verified caller ID, with system-enforced AI disclosure, calling-window limits and DNC handling — **free during pilot**. AgentPhone (YC) and AgentCall are commoditizing agent phone numbers. Voice COGS are already $0.06/min. Anyone can bolt outbound calling onto a family app by Q2 2027. **What's defensible isn't "we can call" — it's "we know Dr. Chen's office needs the insurance card number and the pre-visit form 48 hours ahead, and that Maya's soccer runs long on Thursdays."** That's accumulated household state, not voice capability.

**Pillar (3) does not sell to consumers.** There is no evidence any parent has ever chosen a household assistant on security grounds. SOC 2 sells to procurement. It becomes decisive only in a **B2B2C channel** — and that's the interesting part, see §6.

### The actual whitespace, narrowed

Every consumer call product is either **inbound-only** (Pixel Call Assist, Robokiller, Truecaller — free to ~$5/mo) or **outbound-only** (Google, HeyRobyn). Only Assindo does both, for one person, with no household model and no security story.

**Nobody closes the loop.** Your agent calls the dentist to book. The dentist's office calls back to confirm. Your agent answers *that* call, recognizes the context, confirms, and writes it to the family calendar so your spouse sees it without being told.

**Outbound + inbound + shared memory, one agent, one number, one context.** That's narrower and far more defensible than "life concierge," and it's the thing to build the test around.

### The two clocks running against us

**Aug 10, 2026 — eleven days ago:** OpenAI's own release notes announce restaurant reservations in ChatGPT with **OpenTable (worldwide), Resy (US) and Yelp (US/Canada)**, on all plans. Discovery and availability are in-chat; the final booking still hands off to the provider today, and the Apps SDK spec lists full in-chat completion as a near-term expansion. **The single most demo-able use case for a consumer calling agent just got absorbed into a product 900M people already use, at no incremental cost, via APIs that are faster and more reliable than a phone call — and the hand-off is closing, not widening.**

**Summer 2026:** Google expanded agentic calling at I/O (May 19) to **home repair, beauty and pet care**. Per Google's own posts, business calling is rolling out **free to all US Search users, with higher usage limits for AI Pro and AI Ultra subscribers.** Google has Search, Android, and — per Google Cloud's CEO — **Gemini-powered Siri later this year.**

Restaurants are also legislating against agent calls: New York's Restaurant Reservation Anti-Piracy Act fines up to $1,000/violation/day; Philadelphia followed; Illinois is moving. Reservation bots drove no-show rates 4× higher than legitimate diners.

**Conclusion: every category with a clean API is going to the platforms, for free. Plan accordingly.**

---

## 4. Segment definition and sizing

Blake's scope: *wide — families of prosumers and busy professionals who want enterprise-grade life concierge management.* Here's what that actually is, bottom-up from Census CPS ASEC 2025 and BLS 2025. These are verified from source spreadsheets, not analyst reports.

| Segment | Households | Verified? |
|---|---|---|
| All US households | 134.8M | ✅ Census HINC-06 |
| Households $150k+ | 35.2M (26.1%) | ✅ |
| Households $200k+ | 21.5M (16.0%) | ✅ |
| **Families with children <18, income $150k+** | **12.8M** | ✅ Census FINC-03 |
| Families with children <18, income $200k+ | 8.2M | ✅ |
| Dual-earner married-couple families with children <18 | **15.0M** (66.3% of 22.7M) | ✅ BLS Table 4 |
| **Tier A beachhead: dual-earner + kids + $150k+** | **~7.9M ± 0.8M** | ⚠️ estimate — Census killed the exact cross-tab after 2017 |
| **Solo professionals $150k+** | **2.9M** | ✅ |

**Two findings that should change how we scope this:**

**The solo-professional leg is a rounding error.** One-person households are 29% of all US households (39.7M) but only **7.3% of them earn $150k+ — 2.9M**. And they generate a fraction of the life-admin volume: no shared calendar, no kids' activities, no dependent intake paperwork. George's use case is real and I feel it too, but it is not a second growth leg. **Lead family, reach solo.**

**The honest time-savings number is much smaller than the pitch wants.** BLS American Time Use Survey 2025: "household management" is **0.17 hours/day** population-wide — 10 minutes — with only 18.6% of people doing any on a given day. "Telephone calls, mail and email" adds ~11 min/day. Total addressable time sink by the government's own diary instrument: **~20–25 min per adult per day**, roughly 2.5 hrs/week.

Meanwhile the Skylight/Harris survey that everyone cites claims parents spend **30.4 hrs/week** on family scheduling. That survey sells family calendars, and its internal math doesn't close (primary caregivers claim 75% of the load, non-primary claim 56% — 131%).

**Use ATUS for sizing. Use Skylight for felt pain and messaging only. And never put "saves you 10 hours a week" on a landing page** — it's contradicted by federal data and it's the kind of claim that gets torn apart in a comment section.

**Concrete coordination-volume numbers worth keeping** (same survey, more defensible than the hours claim): families receive **17.5 weekly communications** about kids' activities; children average **11.5 weekly activities**.

**Theoretical ceiling:** ~15.7M households × $60/mo = $11.3B/yr at 100% penetration. Worthless except as a sanity bound. The penetration math in §5 is two orders of magnitude smaller and is the number that matters.

---

## 5. Unit economics — the good news and the bad news

### The good news: COGS work

Full 2026 cost stack, built from published vendor pricing. Blended household (50% low / 35% medium / 15% heavy usage):

| Price | Blended COGS | Gross profit | **Gross margin** |
|---|---|---|---|
| $39/mo | $10.26 | $28.74 | **73.7%** |
| $59/mo | $10.98 | $48.02 | **81.4%** |
| $99/mo | $12.42 | $86.58 | **87.5%** |

Voice is $0.072/min all-in ($0.060 compute + $0.012 telephony). A medium household burns ~51 voice minutes/month. Gemini Live is $0.005/min in, $0.018/min out. Deepgram STT is $0.0042/min. This is genuinely cheap.

**Four cost findings that matter:**

1. **Vendor stack choice is worth 3× on margin.** Self-hosted (LiveKit OSS + Deepgram + Haiku + Telnyx) = $0.030/min. Premium managed (Vapi + ElevenLabs v3 + frontier LLM) = $0.149/min. At heavy usage that's the difference between 67% and **−5%** gross margin at $39.
2. **Background monitoring is the silent killer.** Naïve 15-minute polling costs $5.62–11.88/household/month — 14–30% of a $39 plan — *for households that never place a call*. Event-driven Gmail/Calendar `watch` + a nano-class triage gate + prompt caching brings it to ~$3.80. **This is a week-one architecture decision that determines whether the business works.** George — this one's yours.
3. **Adverse selection is structural.** Breakeven talk time is 7.4 hrs/mo at $39, 12 hrs/mo at $59. One subscriber who has the agent sit on hold with an insurer for 90 minutes burns $6.48 in a single call — 17% of a $39 month. **The users who most value delegating a 90-minute hold are the users who destroy the economics.** Ship metered tiers or a hard fair-use cap from launch. Never ship "unlimited."
4. **Google API access is free today and is an unhedged liability.** Gmail and Calendar both have published, *non-raisable* daily thresholds and explicit statements that billing arrives "later in 2026 with 90 days' notice." Ceiling is ~64,000 households per Cloud project on Gmail, ~20,000 on Calendar. Architect for multi-project sharding from day one.

**Compliance is cheaper than folklore says.** The "$50,000 Google CASA assessment" number circulating in this space is a myth — actual Google-empanelled assessor pricing is **$540–$1,800/yr (Tier 2), from ~$4,500/yr (Tier 3)**. Note $4,500 is TAC Security's list price as Google's low-cost partner; other labs run $5–8k+ for Tier 3. Total compliance run-rate (SOC 2 + CASA + counsel) is ~$77k/yr — $0.64/household/month at 10k subs, $0.06 at 100k. **But it's a hard floor before subscriber #1, which is what makes sub-10,000-subscriber scale structurally unprofitable.**

*Scope-minimization lever worth an explicit architecture decision:* Calendar scopes are classified *sensitive*; Gmail read/modify are *restricted* and are what pull us into CASA plus annual re-audit. If email coordination can ship on a forwarding address or `gmail.metadata`, the CASA obligation may be avoidable entirely.

### The bad news: retention is the whole business

| Benchmark | Figure | Source |
|---|---|---|
| AI apps vs traditional, 12-month retention | **36% worse** | RevenueCat SoSA 2026, 115k+ apps |
| AI app 12-mo payer retention (monthly plans) | **6.1%** vs 9.5% non-AI | same |
| AI app annual retention | 21.1% vs 30.7% non-AI | same |
| Trial→paid, hard paywall @ D35 | 10.7% median (freemium: 2.1%) | same |
| AI apps trial→paid | 8.5% vs 5.6% non-AI (**+52%**) | Creem |
| US households paying for *any* AI | **~2–3%**, avg $20/mo lasting **7 months** | BofA Institute; PNC |
| Fully-loaded CAC per paid install, productivity | $2 / **$6** / $14 | SemNexus 2026 |
| Meta all-industry CPA | **$38.19, up 38% YoY** | 2026 benchmarks |

**The AI subscription paradox: AI products acquire better and monetize better per user, and retain far worse.** Novelty converts. Habit doesn't form.

**Derived CAC per paying household: $120 low / $250 expected / $450 high.** I'd discount toward the high end for this product specifically — onboarding demands a phone number, Gmail OAuth *and* Calendar OAuth before first value, which is a heavier trust wall than any app in the benchmark cohort.

**The model at $59/mo, blended gross profit $48.02/mo:**

| CAC | Payback | LTV @ 8-mo payer life | LTV/CAC |
|---|---|---|---|
| $120 | 2.5 mo | $384 | **3.2×** ✅ |
| **$250 (expected)** | **5.2 mo** | **$384** | **1.54×** ⚠️ |
| $450 | 9.4 mo | $384 | **0.85×** ❌ value-destroying |

At **$39/mo**: expected CAC → 8.7-month payback, **LTV/CAC 0.92×. $39 does not clear CAC at benchmark retention.**

And 8 months of payer life is *generous* — the AI-app benchmark implies ~5 months, which drops LTV/CAC at $59 to **0.96×**.

> **Bottom line: gross margin at 80–88% is not the problem. The model breaks on CAC and retention, not infrastructure. $39 doesn't work. $59 is the floor. $99 is where the model is comfortable.**

### The pricing insight that reconciles everything

Look at what's alive and what's dead, and the pattern isn't about features — **it's about whether the value is denominated in dollars or in convenience:**

| Framing | Price band | Examples |
|---|---|---|
| **Convenience** ("save time, reduce stress") | **$5–30/mo** | Ohai $9.99–29.99 · Assindo $20–70 · Skylight $6.58 · Cozi $3.25 · Hearth $7.20 |
| **Measurable dollars recovered** | **$100–292/mo** | **Pine AI $99.90 / $174.90 / $291.60** billed annually — calls to negotiate bills, cancel subscriptions, dispute charges. Metered by credits. Alive and growing. |
| **The death zone** | **$149–249/mo selling time** | **Yohana. Dead.** |

Duckbill runs $49 / $99 / $169 / $350 with *humans* doing the work (200+ trained operators, ~4–20 tasks/mo depending on tier) — that's the price ladder at which a life-admin product is currently alive, and it's a human-labor gross margin business. **Our AI-native argument is that we serve the $99–169 band at 87% software margin where Duckbill serves it at labor margin.** That's the real business.

**But we only get to charge $99 if the customer can point at a number.** "It found the $340 duplicate charge on your insurance EOB and got it reversed" prices at $99. "It saved you time" prices at $19 and churns in seven months.

---

## 6. Sales AI's right to win

Honest inventory. Green = real asset, yellow = partial, red = gap.

| Requirement | Our position |
|---|---|
| Full-duplex outbound voice at production quality | 🟢 **Core competence.** This is the whole company. |
| Inbound call handling / screening | 🟢 We already do this for businesses |
| Telephony + number provisioning at scale | 🟢 Existing |
| SOC 2 Type II | 🟢 **Already in hand.** No consumer competitor has this. |
| Compliance function + audit discipline | 🟢 Existing — this is genuinely rare in consumer AI |
| Calendar + email connectors | 🟡 Exist for B2B; consumer OAuth + CASA is different work |
| MCP integration | 🟡 Exists, but not as a consumer front-end |
| ~18 deployable agent types | 🟢 Reusable across the task taxonomy |
| **Shared multi-person household state model** | 🔴 **Doesn't exist. Has to be built.** This is the moat and the work. |
| **Proactive/anticipatory monitoring layer** | 🔴 Doesn't exist. Event-driven architecture, week-one decision. |
| Consumer-grade onboarding (<15 min to first value) | 🔴 George's point stands: the product is too complex today |
| Consumer PLG / self-serve billing | 🔴 Doesn't exist |
| Consumer brand, creator/UGC motion | 🔴 Doesn't exist |
| Consumer CAC competence | 🔴 **Unproven. This is the real risk.** |

**What we have that the consumer field doesn't:** production voice reliability, SOC 2, a compliance function, and B2B-grade audit discipline. In a market where the FCC brought AI-generated voices under TCPA in Feb 2024, where roughly a dozen states require all-party consent to record phone calls — CA, CT, DE, FL, IL, MD, MA, MT, NV, NH, PA, WA, with Michigan contested and Connecticut's requirement arising under its civil statute — covering about a third of the US population and our densest target markets, and where a Chicago company settled at $4.2M for recording 5,000 calls without consent — **a two-person YC startup cannot safely ship this and we can.**

**What we don't have is the thing that actually kills consumer companies: the ability to acquire and retain a consumer cheaply.** That is exactly what the test in §7 exists to find out, and it should be the only thing we're trying to learn.

### George's question — "do we have a way in?"

It's the right question and it has a good answer. **The B2B2C channel is where our SOC 2 stops being decoration and starts being the reason we win**, and it happens to be the motion we already know how to run:

- **Employers** — a benefit. Megan's Slack analogy from the meeting was right: "the company buys it for all employees." A CHRO buying a mental-load benefit for working parents is a procurement conversation with a compliance review. That's our home turf.
- **Concierge medicine / direct primary care** — already sells "we handle it for you," already has patients paying $150–300/mo, already needs HIPAA-adjacent rigor.
- **Wealth management and family offices** — clients already expect concierge service; the advisor needs a defensible vendor.
- **Watsco-style distribution partners** — the same long-tail logic Blake ran: find the aggregator sitting on 100,000+ relationships nobody is serving with an offer.

**This is the real strategic point: consumer PLG is how we validate the product; B2B2C may be how we actually distribute it.** And it means we don't have to win a paid-acquisition war against OpenAI's brand — which we would lose.

---

## 7. The credible test

Blake's ask in the meeting was bigger than this one segment: *"can I design the framework of what a credible test would be… a wave that we continuously go through to keep pushing into new TAMs."* So this is written twice — the reusable gate structure, then this segment instantiated in it.

### 7.1 The reusable framework: five gates

Every segment we ever consider runs the same gauntlet. Each gate has a **kill / iterate / promote** threshold set *before* the test runs. No opinions after the fact.

| Gate | Question | Instrument | Duration | Cost |
|---|---|---|---|---|
| **1. Signal** | Does this pain exist at volume, and does anyone pay for relief today? | Desk research + 15 customer interviews | 1 wk | ~$0 |
| **2. Story** | Can we say it in a way that makes a stranger stop? | 12–20 ad creatives × 3 message angles | 1 wk | $3–5k |
| **3. Sell** | Will they enter a credit card at our price, before the product exists? | Real Stripe checkout → waitlist, refund immediately | 2–3 wks | $12–20k |
| **4. Stick** | Do they still use it at week 8? | Concierge MVP, humans behind the curtain, 25–50 households | 8–12 wks | $30–60k |
| **5. Scale** | Does CAC hold as we spend 10×? | Channel expansion | 8 wks | $100k+ |

**The discipline that makes this different from what most companies do: Gate 3 is not the finish line.** Almost everybody stops at "people entered a card, validated!" — and that is exactly the mistake that produced Poke, Milo and Simple AI's exit. **Gate 4 is the gate.** Blake's line in the meeting — *"until we let data come back to us to validate, none of it means shit"* — applies hardest to the data that takes eight weeks to arrive.

### 7.2 This segment, instantiated

**Gate 2 — Story (Week 1).** Three message angles, tested head-to-head:

| Angle | Copy direction | Hypothesis |
|---|---|---|
| **A. Dollars recovered** | "It found the $340 you were overcharged and got it back." | Prices at $99. Pine AI proves it. |
| **B. The cognitive layer** | "You already outsourced the cleaning. Nobody's ever taken the *remembering*." | Weeks et al. thesis. Highest defensibility, unproven in market. |
| **C. Closed loop** | "It calls the dentist. The dentist calls back. It answers. Your husband sees it on the calendar." | Our actual whitespace. Best demo. |

Kill any angle below 0.9% CTR. Promote the top two to Gate 3.

**Gate 3 — Sell (Weeks 2–4).** Real landing → real Stripe checkout → card captured → immediate refund + waitlist confirmation ("we're releasing in 60–90 days, you're in the first cohort, you have not been charged"). Blake has run exactly this motion at Glow's Lighting.

Test matrix: 2 winning angles × 3 price points (**$59 / $99 / $149**) × 2 audiences (dual-income parents 35–54 $150k+; solo professional 30–45). **Do not test $39.** The economics say it can't clear CAC, so a $39 winner would be a false positive that costs us a year.

Budget: $15–20k paid media (Meta primary — this audience is there and CPM is $14.19; Google search on capture terms secondary), plus $3–5k UGC creative at ~$175/video.

**Thresholds, set now:**

| Metric | Kill | Iterate | **Promote** |
|---|---|---|---|
| Landing → checkout start | <4% | 4–8% | **>8%** |
| Checkout start → card entered | <25% | 25–45% | **>45%** |
| **CAC per card, at $99/mo** | **>$300** | $150–300 | **<$150** |
| Price elasticity | $59 wins by >2× | mixed | **$99 within 1.3× of $59** |
| Qualitative: can they name the task? | vague | mixed | **>60% name a specific task in the follow-up survey** |

That last one matters more than it looks. If people sign up for a *feeling* rather than a *task*, they churn at week 6. Ask on the confirmation page: "What's the first thing you'd have it do?"

**Gate 4 — Stick (Weeks 5–16). This is the real test.**

Take 25–50 of the Gate 3 cards, charge them for real, and deliver with **humans behind the curtain plus our existing voice stack** — Wizard of Oz. We are not building product yet. We are measuring whether a household that has this for eight weeks still wants it.

| Metric | Kill | Iterate | **Promote** |
|---|---|---|---|
| Week-4 active (≥1 task) | <60% | 60–75% | **>75%** |
| **Week-8 active** | **<45%** | 45–65% | **>65%** |
| Tasks/household/month by week 8 | <3 | 3–6 | **>6** |
| Voluntary churn, months 1–2 | >20%/mo | 10–20% | **<10%/mo** |
| Task completion rate | <70% | 70–85% | **>85%** |
| Would-be-very-disappointed (Sean Ellis) | <25% | 25–40% | **>40%** |

**Sub-10%/month churn is the number the entire business hangs on.** At benchmark AI-app churn (~21%/mo) this is a value-destroying business at any price we can charge. At 8% it works. There is no third answer and no amount of Gate 3 enthusiasm substitutes for it.

**Data we should collect because it doesn't exist anywhere:** how many admin calls a household actually places per month, and minutes on hold per call. There is no public dataset on this. Our beta cohort would generate genuinely proprietary market data — worth something in a fundraise regardless of the outcome.

### 7.3 Total: ~$50–85k and 16 weeks to a real answer

Gates 2–4. Weekly readouts. Pre-committed thresholds. If Gate 3 fails we've spent $20k and three weeks to avoid a year.

---

## 8. Recommendation

**Conditional go.** Four conditions, all of which change what we test from what we described yesterday:

1. **Price at $99, test $59 and $149 as boundaries. Never test $39.** The economics say $39 doesn't clear CAC. A $39 winner is a false positive.
2. **Denominate value in dollars, not hours.** Pine AI charges $99.90 because it produces an invoice. Yohana charged $249 for time and died. And the ATUS data means we cannot honestly claim big hour savings anyway.
3. **Position on the long tail, not the head.** Restaurants and anything with a clean API belong to OpenAI and Google now, for free. Insurance appeals, school and camp paperwork, pediatric intake, contractors, specialty medical scheduling, billing disputes — no API will ever exist there, no platform will build one, and persistence through IVR trees and hold queues is exactly what we're good at. **This is the Watsco play.**
4. **Make Gate 4 week-8 retention the decision, and don't let anyone declare victory at Gate 3.**

**And run the B2B2C channel discovery in parallel** — 5 conversations with employers, concierge medicine practices and wealth advisors during the same 16 weeks. It costs nothing but calendar time, and it tests the one channel where our SOC 2 is worth something and where we don't have to outbid OpenAI for attention.

### Roles for Monday/Tuesday

| | Owner | Question to answer |
|---|---|---|
| **Message & creative** | Megan | Which of the three angles survives? Can we write copy that makes a stranger stop, without the "10 hours a week" claim? Build the Gate 2 creative matrix. |
| **Architecture & feasibility** | George | Event-driven vs polling (the $3.80 vs $11.88 decision). Can Gmail ship on non-restricted scopes to dodge CASA? What does the household state model actually look like? What's the shortest path to 15-minutes-to-first-value? |
| **Economics, test design, channel** | Blake | Lock the thresholds. Stand up the Gate 3 funnel. Start the B2B2C conversations. And make the Simple AI call. |

---

## 9. What we don't know, and shouldn't pretend to

Flagging these so nobody puts them in a deck as facts:

1. **Why Simple AI actually left consumer.** Highest-value unknown in this document. One conversation closes it.
2. **Keyword volume.** No public source gave real search volumes for any of these terms. 30 minutes in Ahrefs/Semrush on *AI personal assistant, life admin, AI that makes phone calls, mental load app* before committing media budget.
3. **Admin calls per household per month.** No public dataset exists. Our usage model is derived from a German time-use study (n=617) and dental/medical call-duration proxies. Instrument the beta.
4. **Agent-call answer rates.** 86% of calls from unknown numbers already go unanswered, and 46% of *legitimate* business calls go unanswered. Our agent calling from an unrecognized number inherits that problem. Unmeasured and material.
5. **Duckbill's actual health.** $33M in Sept 2023, nothing since, domain migrated to `.one`. Three years on a Series A. Check headcount on LinkedIn.
6. **Ohai's paid conversion.** "Thousands of families in beta" was the number in Aug 2025 and it's still the number. Their Aug 2025 round didn't disclose an amount.
7. **The Tier A sizing (~7.9M) is an estimate.** Census discontinued the exact cross-tab in 2017. Everything else in §4 is verified.
8. **No visible community groundswell.** I couldn't surface waitlists, Reddit threads or search-trend evidence of consumer demand for this. That's an unknown, not a negative — but the *absence* of any visible demand signal for a category this obvious, four years into the LLM era, deserves a minute of thought.
9. **Two-party consent is a product constraint, not just legal boilerplate.** In the all-party-consent states, real-time transcription counts as recording, and guidance suggests a natural (non-AI) voice must request consent *before* the AI interaction begins. That's awkward for a fully autonomous agent and it needs a design answer, not a footnote. Note also that the standard 50-state surveys **disagree with each other** on Michigan, Connecticut and Oregon — don't let anyone treat "twelve states" as settled law. Get counsel before launch, not after.

10. **Verification note:** every load-bearing number in this document was re-checked against a primary source. Nothing came back wrong. The three that got softened after checking: Yohana's price is *launch* pricing from 2021–22, not verified end-of-life pricing; ChatGPT's restaurant integration is in-chat *discovery* with a booking hand-off rather than full end-to-end booking (for now); and the all-party-consent state list is contested at the edges per above.

---

## Sources

**Category & vocabulary:** [Daminger, *ASR* 2019](https://journals.sagepub.com/doi/10.1177/0003122419859007) · [Weeks, Kowalewska & Ruppanner, *Socius* 2025](https://journals.sagepub.com/doi/10.1177/23780231251384527) · [Aviv et al., *Archives of Women's Mental Health* 2025](https://link.springer.com/article/10.1007/s00737-024-01490-w) · [Emens, *Life Admin*](https://www.law.columbia.edu/news/archive/elizabeth-emens-invisible-work-everyday-life) · [Menlo Ventures, State of Consumer AI](https://menlovc.com/perspective/2025-the-state-of-consumer-ai/) · [Gartner 2026 Trends](https://www.gartner.com/en/newsroom/press-releases/2025-10-20-gartner-identifies-the-top-strategic-technology-trends-for-2026) · [CB Insights AI Agent Market Map](https://www.cbinsights.com/research/ai-agent-market-map/) · [Product Hunt: AI Chief of Staff](https://www.producthunt.com/categories/ai-chief-of-staff) · [Nate's Newsletter: the anticipation gap](https://natesnewsletter.substack.com/p/consumer-ai-anticipation-gap)

**Competitive landscape:** [Yohana shutdown](https://www.channelnews.com.au/panasonics-ai-ambitions-stumble-as-consumer-apps-hit-delays-and-closures/) · [Yohana pricing, GeekWire](https://www.geekwire.com/2022/yohana-expands-beyond-seattle-bringing-personal-assistant-service-for-families-to-los-angeles/) · [Milo shutdown — Avni Patel Thompson's own post, Jan 12 2026](https://joinmilo.substack.com/p/hellogoodbye) · [Maple shutdown](https://alphamothers.com/resources/maple-family-assistant-shutting-down-alternatives) · [Simple AI $14M / B2B pivot, BusinessWire](https://www.businesswire.com/news/home/20260210526354/en/Simple-AI-Announces-$14M-from-First-Harmonic-and-Y-Combinator-to-Build-Voice-AI-Agents-That-Sell) · [Simple AI original YC consumer launch](https://www.ycombinator.com/launches/MOM-simple-ai-ai-phone-assistant-for-consumers) · [Cognition acquires Poke, TechCrunch](https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/) · [Ohai.ai pricing](https://www.ohai.ai/how-it-works/) · [Ohai funding](https://www.prnewswire.com/news-releases/ohaiai-raises-strategic-investment-led-by-muse-capital-celebrity-and-executive-mothers-to-save-parents-hours-of-mental-load-302533511.html) · [Duckbill pricing](https://www.getduckbill.com/pricing) · [Duckbill $33M](https://www.finsmes.com/2023/09/duckbill-raises-33m-in-seed-and-series-a-funding.html) · [Pine AI pricing](https://www.19pine.ai/pricing) · [Assindo pricing](https://assindo.com/) · [Google Search at I/O 2026](https://blog.google/products-and-platforms/products/search/search-io-2026/) · [Google "Ask for Me", TechCrunch](https://techcrunch.com/2025/01/30/googles-ask-for-me-feature-calls-businesses-on-your-behalf-to-inquire-about-services-pricing/) · [Pixel Call Assist](https://blog.google/products/pixel/pixel-call-assist-call-notes-tips/) · [Alexa+ pricing](https://www.aboutamazon.com/news/devices/alexa-plus-international-launch) · [ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent) · [OpenAI hiring for families, TechCrunch](https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/) · [ChatGPT × OpenTable/Resy/Yelp — OpenAI release notes, Aug 10 2026](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [Yelp's announcement](https://blog.yelp.com/news/yelp-chatgpt-integration/) · [Apps SDK restaurant reservation spec](https://developers.openai.com/apps-sdk/guides/restaurant-reservation-conversion-spec) · [Google business calling rollout](https://blog.google/products-and-platforms/products/search/deep-search-business-calling-google-search/) · [Gemini-powered Siri](https://www.macrumors.com/2026/04/22/google-gemini-powered-siri-2026/) · [DialMCP](https://dialmcp.com/) · [45-assistant survey](https://www.usecarly.com/blog/complete-list-ai-assistants-2026/) · [68-company voice agent market map](https://agentvoice.com/blog/ai-voice-agents-funding-market-map/) · [Facebook M shutdown](https://techcrunch.com/2018/01/08/facebook-is-shutting-down-its-standalone-personal-assistant-m/) · [Hello Alfred B2B pivot](https://helloalfred.com/property-partners/)

**Sizing & demand:** [Census HINC-06 2025](https://www.census.gov/data/tables/2025/demo/cps/hinc-06.html) · [Census HINC-01 2025](https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-hinc/hinc-01.html) · [Census FINC-03 2025](https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-finc/finc-03.html) · [BLS Employment Characteristics of Families 2025](https://www.bls.gov/news.release/famee.nr0.htm) · [BLS ATUS 2025 Table 1](https://www.bls.gov/news.release/atus.t01.htm) · [Skylight/Harris mental load survey, Forbes](https://www.forbes.com/sites/kimelsesser/2024/07/29/what-is-parental-mental-load-managing-a-household-is-worth-38-trillion-in-economic-value-survey-says/) · [Care.com 2026 Cost of Care](https://www.care.com/c/how-much-does-child-care-cost/) · [Pew, Americans and AI 2026](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/) · [NPR on AI subscription penetration](https://www.npr.org/2026/06/04/nx-s1-5791661/chatgpt-gemini-claude-subscription-revenue-openai) · [Accenture agentic commerce trust](https://chainstoreage.com/accenture-customers-trust-ai-agents-perform-these-tasks-them) · [a16z Top 100 Gen AI Consumer Apps](https://www.a16z.news/p/top-100-gen-ai-consumer-apps-march)

**Unit economics:** [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps) · [RevenueCat benchmarks](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026) · [Creem: the AI app retention paradox](https://www.creem.io/blog/ai-app-retention-paradox-churn-2026) · [Lenny Rachitsky, churn benchmarks](https://www.lennysnewsletter.com/p/monthly-churn-benchmarks) · [Lenny Rachitsky, free-to-paid conversion](https://www.lennysnewsletter.com/p/what-is-a-good-free-to-paid-conversion) · [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) · [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) · [Deepgram pricing](https://deepgram.com/pricing) · [LiveKit pricing](https://livekit.com/pricing) · [Telnyx SIP](https://telnyx.com/pricing/elastic-sip) · [Twilio voice US](https://www.twilio.com/en-us/voice/pricing/us) · [Gmail API quota](https://developers.google.com/workspace/gmail/api/reference/quota) · [Calendar API quota](https://developers.google.com/workspace/calendar/api/guides/quota) · [Google restricted-scope verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification) · [CASA cost reality](https://deepstrike.io/blog/google-casa-security-assessment-2025) · [SOC 2 cost](https://sprinto.com/blog/soc-2-compliance-cost/) · [Meta ads benchmarks 2026](https://www.get-ryze.ai/blog/meta-ads-cost-benchmarks-by-industry-2026) · [Mobile app CAC by vertical 2026](https://semnexus.com/the-2026-mobile-app-cac-benchmark-report-by-vertical) · [UGC creator rates](https://influee.co/blog/ugc-price) · [Stripe pricing](https://stripe.com/pricing)

**Regulatory:** [FCC AI voice / TCPA](https://www.henson-legal.com/ai-voice-compliance) · [California SB 1001](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1001) · [California AB 2905 text](https://legiscan.com/CA/text/AB2905/id/3022093) · [Call recording laws by state — Justia 50-state survey](https://www.justia.com/50-state-surveys/recording-phone-calls-and-conversations/) · [RecordingLaw's differing list](https://www.recordinglaw.com/party-two-party-consent-states/) · [Restaurant Reservation Anti-Piracy Act](https://blog.resy.com/newsroom/resy-and-partners-support-the-restaurant-reservation-anti-piracy-act/) · [Cooley on 2026 chatbot disclosure laws](https://www.cooley.com/news/insight/2025/2025-10-21-ai-chatbots-at-the-crossroads-navigating-new-laws-and-compliance-risks)
