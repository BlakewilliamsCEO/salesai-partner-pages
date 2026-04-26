/* eslint-disable */
/* useState is declared in ui.jsx (loaded first) and lives on the shared Babel scope. */

function OverviewScreen() {
  useLucide();
  const calls = [
    { name: "Elena Park",    agent: "Apollo", tone: "brand",   outcome: "Booked",      dur: "4m 12s", time: "2m ago" },
    { name: "Marcus Reyes",  agent: "Apollo", tone: "success", outcome: "Answered",    dur: "2m 38s", time: "12m ago" },
    { name: "Jasmine Liu",   agent: "Nova",   tone: "info",    outcome: "Transferred", dur: "1m 02s", time: "28m ago" },
    { name: "Dev Patel",     agent: "Nova",   tone: "warning", outcome: "Voicemail",   dur: "0m 22s", time: "41m ago" },
    { name: "Sofia Álvarez", agent: "Atlas",  tone: "success", outcome: "Answered",    dur: "3m 44s", time: "1h ago" },
    { name: "Kenji Tanaka",  agent: "Atlas",  tone: "error",   outcome: "No answer",   dur: "—",      time: "1h ago" },
  ];

  return (
    <div style={{ padding: "0 32px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <MetricCard label="ANSWERED CALLS"  value="1,089" delta="12.3%" direction="up"/>
        <MetricCard label="MEETINGS BOOKED" value="156"   delta="15.4%" direction="up"/>
        <MetricCard label="LIVE TRANSFERS"  value="89"    delta="5.2%"  direction="down"/>
        <MetricCard label="TOTAL CALLS"     value="1,247" delta="8.1%"  direction="up"/>
      </div>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h3 className="title-md" style={{ margin: 0 }}>Recent calls</h3>
            <Badge tone="brand" dot>Live</Badge>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Input icon="search" placeholder="Search calls…" style={{ width: 220 }}/>
            <Button variant="tertiary" size="md" icon="sliders-horizontal">Filter</Button>
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["CONTACT","AGENT","OUTCOME","DURATION","TIME",""].map((h, i) => (
                <th key={i} style={{
                  textAlign: "left", padding: "10px 20px",
                  font: "var(--type-numeric-eyebrow)", color: "var(--fg-2)",
                  letterSpacing: "0.2px", textTransform: "uppercase",
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "var(--neutral-900)",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calls.map((c, i) => (
              <tr key={i} style={{ background: i % 2 ? "var(--neutral-900)" : "transparent" }}>
                <td style={cell}><div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar initials={c.name.split(" ").map(w => w[0]).join("")} size={28}/>
                  <span className="body-md">{c.name}</span>
                </div></td>
                <td style={cell}><span className="body-md" style={{ color: "var(--fg-2)" }}>{c.agent}</span></td>
                <td style={cell}><Badge tone={c.tone} dot={c.tone === "brand"}>{c.outcome}</Badge></td>
                <td style={{ ...cell, fontFamily: "var(--font-numeric)", color: "var(--fg-1)" }}>{c.dur}</td>
                <td style={cell}><span className="body-sm" style={{ color: "var(--fg-3)" }}>{c.time}</span></td>
                <td style={cell}><Icon name="chevron-right" size={14} style={{ color: "var(--fg-3)" }}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
const cell = { padding: "14px 20px", borderBottom: "1px solid var(--border-subtle)" };

function AgentsScreen() {
  useLucide();
  const agents = [
    { name: "Apollo", role: "Outbound SDR",      voice: "Male · US",    calls: 412, book: "14.2%", tone: "brand" },
    { name: "Nova",   role: "Inbound Qualifier", voice: "Female · US",  calls: 298, book: "18.6%", tone: "info" },
    { name: "Atlas",  role: "Warm Follow-up",    voice: "Male · UK",    calls: 186, book: "22.1%", tone: "purple" },
    { name: "Orion",  role: "Reactivation",      voice: "Female · AU",  calls: 94,  book: "9.4%",  tone: "warning" },
  ];

  return (
    <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {agents.map((a, i) => (
        <Card key={i} interactive style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar initials={a.name.slice(0,2).toUpperCase()} size={48} tone={a.tone === "warning" ? "neutral" : a.tone} ring/>
            <div style={{ flex: 1 }}>
              <div className="title-md">{a.name}</div>
              <div className="body-sm" style={{ color: "var(--fg-2)" }}>{a.role}</div>
            </div>
            <Badge tone="brand" dot>Active</Badge>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge tone="neutral"><Icon name="mic" size={10}/>&nbsp;{a.voice}</Badge>
            <Badge tone="neutral"><Icon name="phone" size={10}/>&nbsp;{a.calls} calls</Badge>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                        paddingTop: 12, borderTop: "1px solid var(--border-subtle)" }}>
            <div>
              <div className="eyebrow">BOOK RATE</div>
              <div className="metric-value" style={{ fontSize: 24, lineHeight: "28px" }}>{a.book}</div>
            </div>
            <Button variant="secondary" size="md" trailingIcon="arrow-right">Configure</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ContactsScreen() {
  useLucide();
  const contacts = [
    { name: "Elena Park",    company: "Northwind Corp",   phone: "+1 415 555 0123", stage: "Qualified",   tone: "brand",   last: "2m ago" },
    { name: "Marcus Reyes",  company: "Helix Labs",       phone: "+1 512 555 0188", stage: "Contacted",   tone: "info",    last: "12m ago" },
    { name: "Jasmine Liu",   company: "Aperture Retail",  phone: "+1 206 555 0144", stage: "Meeting Set", tone: "success", last: "28m ago" },
    { name: "Dev Patel",     company: "Hemlock Health",   phone: "+1 646 555 0109", stage: "Voicemail",   tone: "warning", last: "41m ago" },
    { name: "Sofia Álvarez", company: "Meridian Finance", phone: "+34 911 555 099", stage: "Qualified",   tone: "brand",   last: "1h ago" },
    { name: "Kenji Tanaka",  company: "Sunrise Logistics",phone: "+81 3 5555 0177", stage: "No Answer",   tone: "error",   last: "1h ago" },
    { name: "Priya Shah",    company: "Orbital Systems",  phone: "+91 22 5555 015", stage: "Contacted",   tone: "info",    last: "2h ago" },
  ];

  return (
    <div style={{ padding: "0 32px 32px" }}>
      <Card style={{ padding: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px",
                      borderBottom: "1px solid var(--border-subtle)" }}>
          <Input icon="search" placeholder="Search contacts" style={{ width: 260 }}/>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="tertiary" size="md" icon="download">Export</Button>
            <Button variant="primary"  size="md" icon="plus">Add contact</Button>
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            {["NAME","COMPANY","PHONE","STAGE","LAST ACTIVITY",""].map((h, i) => (
              <th key={i} style={{ textAlign: "left", padding: "10px 20px",
                                   font: "var(--type-numeric-eyebrow)", color: "var(--fg-2)",
                                   letterSpacing: "0.2px", textTransform: "uppercase",
                                   borderBottom: "1px solid var(--border-subtle)",
                                   background: "var(--neutral-900)" }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i} style={{ background: i % 2 ? "var(--neutral-900)" : "transparent" }}>
                <td style={cell}><div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar initials={c.name.split(" ").map(w => w[0]).join("")} size={28}/>
                  <span className="body-md">{c.name}</span>
                </div></td>
                <td style={cell}><span className="body-md" style={{ color: "var(--fg-2)" }}>{c.company}</span></td>
                <td style={{...cell, fontFamily: "var(--font-numeric)"}}>{c.phone}</td>
                <td style={cell}><Badge tone={c.tone} dot={c.tone === "brand"}>{c.stage}</Badge></td>
                <td style={cell}><span className="body-sm" style={{ color: "var(--fg-3)" }}>{c.last}</span></td>
                <td style={cell}><Icon name="chevron-right" size={14} style={{ color: "var(--fg-3)" }}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function WorkflowsScreen() {
  useLucide();
  const flows = [
    { name: "Inbound lead → SDR call",       trigger: "Webhook", steps: 6, active: true,  runs: 412 },
    { name: "Meeting no-show reactivation",  trigger: "HubSpot", steps: 4, active: true,  runs: 98  },
    { name: "Cold list — NYC region",        trigger: "Manual",  steps: 3, active: false, runs: 1247 },
    { name: "Post-demo follow-up",           trigger: "Salesforce", steps: 5, active: true, runs: 187 },
  ];
  return (
    <div style={{ padding: "0 32px 32px", display: "flex", flexDirection: "column", gap: 12 }}>
      {flows.map((f, i) => (
        <Card key={i} interactive style={{ display: "flex", alignItems: "center", gap: 20, padding: 20 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--mint-80)",
                        border: "1px solid var(--mint-240)", display: "grid", placeItems: "center",
                        color: "var(--mint-default)" }}>
            <Icon name="workflow" size={18}/>
          </div>
          <div style={{ flex: 1 }}>
            <div className="title-md">{f.name}</div>
            <div className="body-sm" style={{ color: "var(--fg-2)", marginTop: 2 }}>
              Triggered by <b style={{ color: "var(--fg-1)" }}>{f.trigger}</b> · {f.steps} steps · {f.runs} runs
            </div>
          </div>
          <Badge tone={f.active ? "brand" : "neutral"} dot={f.active}>{f.active ? "Active" : "Paused"}</Badge>
          <Button variant="ghost" size="md" trailingIcon="chevron-right">Open</Button>
        </Card>
      ))}
    </div>
  );
}

Object.assign(window, { OverviewScreen, AgentsScreen, ContactsScreen, WorkflowsScreen });
