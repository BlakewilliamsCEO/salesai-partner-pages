/* eslint-disable */
/* useState is declared in ui.jsx (loaded first) and lives on the shared Babel scope. */

function App() {
  const [screen, setScreen] = useState(() => localStorage.getItem("salesai-screen") || "overview");
  const [collapsed, setCollapsed] = useState(false);

  const navigate = (id) => { setScreen(id); localStorage.setItem("salesai-screen", id); };

  const config = {
    overview:  { title: "Voice AI",   breadcrumb: ["Dashboard"],
                 actions: [<Button key="r" variant="tertiary" size="md" icon="refresh-cw">Refresh</Button>,
                           <Button key="c" variant="primary"  size="md" icon="plus">New call campaign</Button>] },
    agents:    { title: "My Agents",  breadcrumb: ["Agents"],
                 actions: [<Button key="n" variant="primary"  size="md" icon="plus">New agent</Button>] },
    contacts:  { title: "Contacts",   breadcrumb: ["Contacts"],
                 actions: [<Button key="i" variant="tertiary" size="md" icon="upload">Import</Button>,
                           <Button key="a" variant="primary"  size="md" icon="plus">Add contact</Button>] },
    workflows: { title: "Workflows",  breadcrumb: ["Workflows"],
                 actions: [<Button key="n" variant="primary"  size="md" icon="plus">New workflow</Button>] },
    knowledge: { title: "Knowledge Library", breadcrumb: ["Knowledge"], actions: [] },
    activity:  { title: "Activity Log",       breadcrumb: ["Activity"],  actions: [] },
    import:    { title: "Data Import",        breadcrumb: ["Settings","Data Import"], actions: [] },
  };
  const cfg = config[screen] ?? config.overview;

  const body = {
    overview:  <OverviewScreen/>,
    agents:    <AgentsScreen/>,
    contacts:  <ContactsScreen/>,
    workflows: <WorkflowsScreen/>,
  }[screen] ?? (
    <div style={{ padding: "0 32px", color: "var(--fg-2)" }}>
      <Card style={{ padding: 48, textAlign: "center" }}>
        <Icon name="construction" size={32} style={{ color: "var(--fg-3)", marginBottom: 12 }}/>
        <div className="title-md" style={{ marginBottom: 4 }}>Not in this prototype</div>
        <div className="body-md" style={{ color: "var(--fg-2)" }}>
          {cfg.title} is in the Figma but not wired up here. Try Voice AI, My Agents, Contacts, or Workflows.
        </div>
      </Card>
    </div>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--surface-page)", color: "var(--fg-1)" }}>
      <Sidebar current={screen} onNavigate={navigate} collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}/>
      <main style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
        <TopBar title={cfg.title} breadcrumb={cfg.breadcrumb} actions={cfg.actions}/>
        {body}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
