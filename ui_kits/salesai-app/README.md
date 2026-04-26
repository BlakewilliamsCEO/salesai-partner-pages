# SalesAi App — UI Kit

A hi-fi recreation of the SalesAi web product. Screens cover the core navigation:

- **Voice AI overview** — the default landing dashboard with KPI cards, recent-call table, and The Blob glow.
- **My Agents** — roster of configured voice agents.
- **Contacts** — lead list with drawer.
- **Workflows** — list of automated sequences.

Open `index.html` to click through the prototype.

## Files

```
index.html       — clickable shell with sidebar + view routing
App.jsx          — root, manages "current screen" state
Sidebar.jsx      — collapsible left nav (240/64px)
TopBar.jsx       — per-screen header with breadcrumb + actions
OverviewScreen.jsx
AgentsScreen.jsx
ContactsScreen.jsx
WorkflowsScreen.jsx
ui/              — shared primitives (Button, Badge, Card, MetricCard, Avatar, Input)
```

## Fidelity notes

- Icons are **Lucide stand-ins** for the SalesAi custom icon font — swap 1:1 when dropping this into the real codebase.
- Component implementations here are cosmetic React — not production behavior. Forms don't submit, tables don't sort.
- Data is hand-crafted to match Figma screenshot content (e.g. "1,089 answered calls", "Apollo", "Nova").
