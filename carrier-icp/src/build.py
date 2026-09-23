#!/usr/bin/env python3
"""Build per-agent pages + KB page for GitHub Pages.

Sources: 01–05 markdown docs in this folder.
Output:  site/ — index.html, kb.html, agent-distributor.html,
         agent-dealer-travis.html, agent-dealer-kelpin.html, plus .md twins.
Run:     python3 build.py
"""
import re, pathlib, datetime, json
import markdown

ROOT = pathlib.Path(__file__).parent
OUT = ROOT / "site"
OUT.mkdir(exist_ok=True)

BASE = "https://blakewilliamsceo.github.io/salesai-partner-pages/carrier-icp"
TODAY = datetime.date.today().strftime("%B %d, %Y")

AGENTS = {
    "distributor": {
        "title": "Distributor Partner Agent",
        "audience_doc": "01-distributor-motion.md",
        "vars": {
            "rep_first": "Blake", "rep_full": "Blake Williams",
            "rep_title": "Head of Ecosystems, SalesAI",
            "booking_link": "https://cal.com/blake-williams-salesai/30min",
            "contact_owner": "blake.williams@salesai.com",
            "track": "Distributor Partner", "count": "104",
        },
    },
    "dealer-travis": {
        "title": "Dealer Agent — Travis Hankins",
        "audience_doc": "02-dealer-motion.md",
        "vars": {
            "rep_first": "Travis", "rep_full": "Travis Hankins",
            "rep_title": "Account Executive, SalesAI",
            "booking_link": "https://meetings.hubspot.com/travis-hankins1",
            "contact_owner": "travis.hankins@salesai.com",
            "track": "Dealer", "count": "171",
        },
    },
    "dealer-kelpin": {
        "title": "Dealer Agent — Blake Kelpin",
        "audience_doc": "02-dealer-motion.md",
        "vars": {
            "rep_first": "Blake", "rep_full": "Blake Kelpin",
            "rep_title": "Account Executive, SalesAI",
            "booking_link": "https://meetings.hubspot.com/kelpin",
            "contact_owner": "blake.kelpin@salesai.com",
            "track": "Dealer", "count": "172",
        },
    },
}

CSS = """
:root{--bg:#FFFFFF;--wash:#F4F1FB;--ink:#0B0B0F;--ink-soft:#3C3A4A;--ink-faint:#6E6B7E;--rule:#E3DFF0;--violet:#6D3DF5;--green:#22C55E;--code:#F6F4FB}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Inter","Segoe UI",Roboto,sans-serif}
.top{background:var(--wash);border-bottom:1px solid var(--rule)}
.top .in{max-width:900px;margin:0 auto;padding:14px 20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;font-size:13px;color:var(--ink-faint)}
.top a{color:var(--violet);text-decoration:none;font-weight:600}.top a:hover{text-decoration:underline}
.top .brand{color:var(--ink);font-weight:700;letter-spacing:.2px}
main{max-width:900px;margin:0 auto;padding:28px 20px 80px}
h1{font-size:30px;line-height:1.15;margin:0 0 6px;letter-spacing:-.3px}
h2{font-size:22px;margin:40px 0 10px;padding-top:18px;border-top:1px solid var(--rule);letter-spacing:-.2px}
h3{font-size:17px;margin:26px 0 8px;color:var(--ink)}
p,ul,ol{margin:0 0 12px}ul,ol{padding-left:22px}li{margin:3px 0}
a{color:var(--violet)}
code{background:var(--code);border:1px solid var(--rule);border-radius:4px;padding:1px 5px;font-size:.9em;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
pre{background:var(--code);border:1px solid var(--rule);border-radius:8px;padding:12px;overflow:auto}
table{width:100%;border-collapse:collapse;margin:12px 0 18px;font-size:14.5px}
th,td{border:1px solid var(--rule);padding:8px 10px;vertical-align:top;text-align:left}
th{background:var(--wash);font-weight:600}
blockquote{margin:0 0 12px;padding:8px 14px;border-left:3px solid var(--violet);background:var(--wash);color:var(--ink-soft)}
hr{border:0;border-top:1px solid var(--rule);margin:28px 0}
.meta{color:var(--ink-faint);font-size:13px;margin-bottom:22px}
.pill{display:inline-block;background:var(--violet);color:#fff;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:600;margin-right:6px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:18px 0 8px}
.card{border:1px solid var(--rule);border-radius:10px;padding:16px;background:var(--bg)}
.card h3{margin:0 0 6px}.card p{font-size:14px;color:var(--ink-soft);margin:0 0 10px}
.card a.btn{display:inline-block;background:var(--violet);color:#fff;text-decoration:none;border-radius:6px;padding:6px 12px;font-size:13px;font-weight:600}
@media (max-width:600px){h1{font-size:24px}main{padding:20px 16px 60px}table{font-size:13px}th,td{padding:6px}}
"""

NAV = ('<div class="top"><div class="in"><span class="brand">SalesAi · Carrier ICP Elite \'26 follow-up</span>'
       '<a href="index.html">Index</a><a href="kb.html">Knowledge base</a>'
       '<a href="agent-distributor.html">Distributor agent</a>'
       '<a href="agent-dealer-travis.html">Dealer · Travis</a>'
       '<a href="agent-dealer-kelpin.html">Dealer · Kelpin</a></div></div>')


def read(name):
    return (ROOT / name).read_text()


def sub(text, v):
    for k, val in v.items():
        text = text.replace("{{" + k + "}}", val)
    return text


def html_page(title, body_md, description):
    body = markdown.markdown(body_md, extensions=["tables", "fenced_code", "sane_lists"])
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="description" content="{description}">
<title>{title}</title><style>{CSS}</style></head><body>{NAV}<main>{body}
<hr><p class="meta">Source of truth for this agent. Edit in the repo and republish. Last built {TODAY}.</p></main></body></html>"""


def strip_top_heading(md):
    return re.sub(r"^# .*\n", "", md, count=1)


def relink(md):
    """Point cross-doc links at the built pages."""
    return (md.replace("(01-distributor-motion.md)", "(agent-distributor.html)")
              .replace("(02-dealer-motion.md)", "(agent-dealer-travis.html)")
              .replace("(03-voice-and-sms-flows.md)", "(#voice-flow-sms-flow)")
              .replace("(04-outreach-cadence.md)", "(#outreach-cadence)")
              .replace("(05-knowledge-base.md)", "(kb.html)")
              .replace("[01](", "[Distributor messaging](")
              .replace("[02](", "[Dealer messaging](")
              .replace("[03]", "[Flows]").replace("[04]", "[Cadence]").replace("[05]", "[KB]"))


flows = read("03-voice-and-sms-flows.md")
cadence = read("04-outreach-cadence.md")
kb = read("05-knowledge-base.md")

# ---- KB page
kb_md = relink(kb)
(OUT / "kb.md").write_text(kb_md)
(OUT / "kb.html").write_text(html_page("Knowledge Base — Carrier ICP Elite '26 Agents", kb_md,
                                       "Single knowledge base attached to all three SalesAi follow-up agents."))

# ---- Agent pages
for slug, a in AGENTS.items():
    v = a["vars"]
    audience = strip_top_heading(read(a["audience_doc"]))
    if slug == "distributor":
        # distributor doc has no template vars; make the rep block explicit
        pass
    else:
        # drop the two-column rep block; replace with the resolved one
        audience = re.sub(r"## Rep block.*?(?=\n\*\*Objective)", "", audience, flags=re.S)
        audience = audience.replace("Build two agents from this doc. They are identical except for the rep block.\n", "")
        audience = audience.replace("343 contacts, split by `Contact Owner`.", f"{v['count']} contacts owned by `{v['contact_owner']}`.")
    header = f"""# {a['title']}

<p class="meta"><span class="pill">{v['track']}</span> {v['count']} contacts · Books to <a href="{v['booking_link']}">{v['booking_link']}</a> · Contact Owner <code>{v['contact_owner']}</code> · KB: <a href="kb.html">kb.html</a></p>

## Rep block

| Variable | Value |
|---|---|
| Rep | {v['rep_full']} ({v['rep_title']}) |
| First name the agent uses | {v['rep_first']} |
| Booking link (BAM target) | `{v['booking_link']}` |
| List filter | `Agent Message Track = {v['track']}`, `Contact Owner = {v['contact_owner']}` |
| Exclusions | `Agent Suppress = Yes`; rows with no phone (`Manually F/U`) |
| Knowledge base | [{BASE}/kb.html]({BASE}/kb.html) · [kb.json]({BASE}/kb.json) |
| This agent as JSON | [{BASE}/agent-{slug}.json]({BASE}/agent-{slug}.json) |

## Messaging and conversation instructions
"""
    body = header + audience
    body += "\n\n## Voice flow + SMS flow\n" + strip_top_heading(flows)
    body += "\n\n## Outreach cadence\n" + strip_top_heading(cadence)
    body = relink(sub(body, v))
    (OUT / f"agent-{slug}.md").write_text(body)
    (OUT / f"agent-{slug}.html").write_text(html_page(a["title"], body, f"{a['title']} — messaging, flows, cadence."))

# ---- Index
readme = strip_top_heading(read("README.md"))
readme = re.sub(r"## What's in here.*?(?=## The three agents)", "", readme, flags=re.S)
index_md = f"""# Carrier ICP Elite '26 — Agent Enablement

<p class="meta">Owner: Blake Williams · Builder: Kim Yang · Live at <a href="{BASE}/">{BASE}/</a></p>

<div class="cards">
<div class="card"><h3>Knowledge base</h3><p>One KB for all three agents. Event, company, HVAC value prop, P&amp;L, use cases, channel, partner offer, competitive, never-say list.</p><a class="btn" href="kb.html">Open kb.html</a></div>
<div class="card"><h3>Distributor Partner agent</h3><p>104 distributor contacts. Partnership motion. Books to Blake Williams.</p><a class="btn" href="agent-distributor.html">Open</a></div>
<div class="card"><h3>Dealer agent — Travis</h3><p>171 dealer contacts. Books to Travis Hankins.</p><a class="btn" href="agent-dealer-travis.html">Open</a></div>
<div class="card"><h3>Dealer agent — Kelpin</h3><p>172 dealer contacts. Books to Blake Kelpin.</p><a class="btn" href="agent-dealer-kelpin.html">Open</a></div>
</div>

## Links to hand Kim

| Agent | Page | Knowledge base |
|---|---|---|
| Distributor Partner | `{BASE}/agent-distributor.html` · `.md` · `.json` | `{BASE}/kb.html` · `.md` · `.json` |
| Dealer — Travis | `{BASE}/agent-dealer-travis.html` · `.md` · `.json` | same |
| Dealer — Kelpin | `{BASE}/agent-dealer-kelpin.html` · `.md` · `.json` | same |

Every page has a Markdown twin (`.md`, for pasting into a prompt) and a JSON twin (`.json`, structured: rep, booking, filters, SMS templates, voicemail, cadence steps, stop rules, objections, outcome tags; the KB JSON carries sections, proof points, people, never-list). `index.json` lists everything.

""" + relink(readme)
(OUT / "index.md").write_text(index_md)
(OUT / "index.html").write_text(html_page("Carrier ICP Elite '26 — Agent Enablement", index_md,
                                          "Index of the SalesAi follow-up agents and their knowledge base."))

# ---- JSON twins ------------------------------------------------------------
def md_sections(md):
    """Split on ## headings -> [{id, heading, content_md}]"""
    out=[]; cur=None
    for line in md.splitlines():
        m=re.match(r"^## (.+)$", line)
        if m:
            if cur: out.append(cur)
            h=m.group(1).strip()
            cur={"id": re.sub(r"[^a-z0-9]+","-",h.lower()).strip("-"), "heading": h, "content_md": ""}
        elif cur is not None:
            cur["content_md"] += line+"\n"
    if cur: out.append(cur)
    for s in out: s["content_md"]=s["content_md"].strip()
    return out

def bullets(md_block):
    return [re.sub(r"^\s*[-*]\s+","",l).strip() for l in md_block.splitlines() if re.match(r"^\s*[-*]\s+", l)]

def table_rows(md_block):
    rows=[]
    for l in md_block.splitlines():
        if l.startswith("|") and not re.match(r"^\|\s*-+", l):
            rows.append([c.strip() for c in l.strip("|").split("|")])
    return rows[0], rows[1:] if rows else ([],[])

def sms_templates(flows_md, kind):
    """kind = 'Dealer' | 'Distributor'. Returns {A,B,C,D1,D2}"""
    out={}
    for key,label in [("A","SMS-A"),("B","SMS-B"),("C","SMS-C"),("D","SMS-D")]:
        m=re.search(r"\*\*"+re.escape(label)+r"[^\n]*\*\*\n(.*?)(?=\n\*\*SMS-|\n\*\*Inbound|\n## )", flows_md, re.S)
        if not m: continue
        block=m.group(1)
        if key=="C":
            out["C"]=re.search(r'"(.*?)"', block, re.S).group(1)
        elif key=="D":
            for sub_ in ["D1","D2"]:
                mm=re.search(kind+r" "+sub_+r': "(.*?)"', block, re.S)
                if mm: out[sub_]=mm.group(1)
        else:
            mm=re.search(kind+r': "(.*?)"', block, re.S)
            if mm: out[key]=mm.group(1)
    return out

def voicemail(flows_md, kind):
    m=re.search(kind+r': "(.*?)"', flows_md.split("### Voicemail script")[1].split("## SMS flow")[0], re.S)
    return m.group(1) if m else None

def cadence_steps(cad_md):
    hdr, rows = table_rows(cad_md.split("## Sequence")[1].split("## Launch order")[0])
    steps=[]
    for r in rows:
        if len(r)<4: continue
        steps.append({"day": int(r[0]) if r[0].isdigit() else r[0], "touch": r[1], "channel": r[2], "notes": r[3]})
    return steps

def objections(aud_md):
    sec=aud_md.split("## Objections")[1].split("## Do not")[0]
    hdr, rows = table_rows(sec)
    return [{"objection": r[0].strip('"'), "response": r[1]} for r in rows if len(r)>=2]

kb_sections = md_sections(kb)
kb_json = {
    "id": "carrier-icp-elite-26-kb",
    "title": "Knowledge Base: Carrier ICP Elite '26 Follow-Up Agents",
    "version": TODAY,
    "url": {"html": f"{BASE}/kb.html", "md": f"{BASE}/kb.md", "json": f"{BASE}/kb.json"},
    "applies_to": ["distributor", "dealer-travis", "dealer-kelpin"],
    "pricing_line_agent_may_state": "Starts at $249 a month plus usage (per-minute voice and per-text). The rep walks through exact numbers.",
    "compliance": ["SOC 2 Type II", "HIPAA compliant, BAA available"],
    "approved_proof_points": [
        "2M+ calls handled by SalesAI voice agents", "98% client satisfaction", "99.9% uptime",
        "Speed to lead under 90 seconds; 85%+ lead contact rate",
        "~40% increase in jobs booked; 3x more booked leads",
        "One agent booked 52 leads in 30 days and outbooked a 3-person SDR team by 3x",
        "~90% lower hiring cost for the function the agent covers"],
    "booking_links": {"blake_williams": AGENTS["distributor"]["vars"]["booking_link"],
                      "travis_hankins": AGENTS["dealer-travis"]["vars"]["booking_link"],
                      "blake_kelpin": AGENTS["dealer-kelpin"]["vars"]["booking_link"]},
    "people_agent_may_name": [
        {"name":"Blake Williams","role":"Head of Ecosystems, SalesAI","when":"Distributor motion; any partnership question"},
        {"name":"Travis Hankins","role":"Account Executive, SalesAI","when":"Dealer — Travis agent only"},
        {"name":"Blake Kelpin","role":"Account Executive, SalesAI","when":"Dealer — Kelpin agent only"}],
    "never": bullets(next(s["content_md"] for s in kb_sections if s["heading"].startswith("10."))),
    "sections": kb_sections,
}
(OUT/"kb.json").write_text(json.dumps(kb_json, indent=2, ensure_ascii=False))

hdr_w, rows_w = table_rows(flows.split("## Send windows")[1].split("## Voice flow")[0])
send_windows = {r[0]: {"mon_fri": r[1], "sat": r[2], "sun": r[3]} for r in rows_w if len(r)>=4}
stop_rules = bullets(cadence.split("## Stop rules")[1].split("## Pause rules")[0])
pause_rules = bullets(cadence.split("## Pause rules")[1].split("## Re-sequencing")[0])
gates = bullets(cadence.split("## Pre-launch gates")[1].split("## Stop rules")[0])

index_agents=[]
for slug, a in AGENTS.items():
    v=a["vars"]; kind = "Distributor" if slug=="distributor" else "Dealer"
    aud = read(a["audience_doc"])
    aud_r = sub(aud, v)
    tags_line = aud_r.split("## Outcome tags")[1].strip().splitlines()[0]
    tags = [re.sub(r"\s*\(.*?\)","",t.strip("` ")).strip("`") for t in tags_line.split("·")]
    donts = bullets(aud_r.split("## Do not")[1].split("## Outcome tags")[0])
    j = {
        "agent_id": f"carrier-icp-{slug}",
        "title": a["title"],
        "version": TODAY,
        "url": {"html": f"{BASE}/agent-{slug}.html", "md": f"{BASE}/agent-{slug}.md", "json": f"{BASE}/agent-{slug}.json"},
        "knowledge_base": kb_json["url"],
        "audience": {"type": kind.lower(), "message_track": v["track"], "contact_count": int(v["count"]),
                     "source_list": "3_carrier_icp_passport_lead_capture.csv", "hubspot_list_id": 27449,
                     "filters": {"Agent Message Track": v["track"], "Contact Owner": v["contact_owner"]},
                     "exclusions": [{"field":"Agent Suppress","equals":"Yes"},
                                    {"field":"Conference :: Post Conference Follow Up Method","equals":"Manually F/U","reason":"no phone; email-only by rep"}]},
        "rep": {"first_name": v["rep_first"], "full_name": v["rep_full"], "title": v["rep_title"], "email": v["contact_owner"]},
        "booking": {"method": "BAM", "live_transfer": False, "link": v["booking_link"]},
        "contact_variables": ["First Name","Company Name","City","State/Region","ICP Distributor","Contact Owner","Agent Message Track"],
        "identity": {"introduces_as": f"[agent name] with SalesAI, following up for {v['rep_first']}",
                     "discloses_ai_if_asked": True},
        "send_windows_local": send_windows,
        "messaging_md": sub(strip_top_heading(aud), v).strip(),
        "objections": [{k: x.replace("`","") for k,x in o.items()} for o in objections(aud_r)],
        "do_not": donts,
        "outcome_tags": tags,
        "voice_flow_md": sub(flows.split("## Voice flow")[1].split("## SMS flow")[0], v).strip(),
        "voicemail_script": sub(voicemail(flows, kind) or "", v).replace("`",""),
        "sms_templates": {k: sub(t_, v).replace("`","") for k,t_ in sms_templates(flows, kind).items()},
        "sms_reply_rules": [{"reply": r[0], "action": r[1]} for r in table_rows(flows.split("**Inbound reply handling.**")[1].split("## Outcome tags")[0])[1] if len(r)>=2],
        "cadence": {"days": 12, "max_calls": 4, "max_sms": 4, "steps": cadence_steps(cadence),
                    "pre_launch_gates": gates, "stop_rules": stop_rules, "pause_rules": pause_rules},
        "owner_notifications_on": ["Meeting Booked","Human Requested","Competitor – Churn Opportunity","Referred to Other Contact","Interested – White-Label"],
    }
    (OUT/f"agent-{slug}.json").write_text(json.dumps(j, indent=2, ensure_ascii=False))
    index_agents.append({"agent_id": j["agent_id"], "title": a["title"], "contacts": int(v["count"]),
                         "rep": v["rep_full"], "booking_link": v["booking_link"], "url": j["url"]})
(OUT/"index.json").write_text(json.dumps({"package":"carrier-icp-elite-26-agent-enablement","version":TODAY,
    "base_url": BASE, "knowledge_base": kb_json["url"], "agents": index_agents}, indent=2, ensure_ascii=False))

print("built:", sorted(p.name for p in OUT.iterdir()))
