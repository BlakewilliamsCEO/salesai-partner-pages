/* eslint-disable */
// Shared primitives for the SalesAi UI kit.
// Exports everything to window so sibling <script type="text/babel"> files can use them.

const { useState } = React;

const Icon = ({ name, size = 16, stroke = 1.5, className = "", style }) => (
  <i data-lucide={name} style={{
    width: size, height: size, strokeWidth: stroke, display: "inline-block", flexShrink: 0, ...style,
  }} className={className}></i>
);

// Refresh lucide after mount. Call this from any component that renders icons.
const useLucide = (deps) => {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, deps ?? []);
};

const Button = ({ children, variant = "primary", size = "md", icon, trailingIcon, onClick, disabled, style, full }) => {
  const variants = {
    primary:   { background: "var(--mint-default)", color: "var(--fg-on-brand)", border: "1px solid var(--mint-pressed)" },
    secondary: { background: "var(--mint-80)", color: "var(--mint-default)", border: "1px solid var(--mint-240)" },
    tertiary:  { background: "var(--neutral-900)", color: "var(--fg-1)", border: "1px solid var(--neutral-700)" },
    ghost:     { background: "transparent", color: "var(--fg-1)", border: "1px solid transparent" },
    danger:    { background: "rgba(228,88,100,0.08)", color: "var(--error-border)", border: "1px solid rgba(228,88,100,0.24)" },
  };
  const sizes = {
    sm: { height: 28, padding: "0 12px", fontSize: 12, borderRadius: 6, gap: 6 },
    md: { height: 32, padding: "0 14px", fontSize: 13, borderRadius: 8, gap: 6 },
    lg: { height: 40, padding: "0 20px", fontSize: 14, borderRadius: 8, gap: 8 },
  };
  useLucide([icon, trailingIcon]);
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.005em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: full ? "100%" : undefined,
      whiteSpace: "nowrap",
      transition: "all 150ms ease",
      ...sizes[size], ...variants[variant], ...style,
    }}>
      {icon && <Icon name={icon} size={sizes[size].fontSize + 2} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} size={sizes[size].fontSize + 2} />}
    </button>
  );
};

const Badge = ({ children, tone = "neutral", dot = false, style }) => {
  const tones = {
    neutral: { bg: "var(--neutral-800)", fg: "var(--fg-2)", br: "var(--border-subtle)" },
    brand:   { bg: "var(--mint-80)",     fg: "var(--mint-default)", br: "var(--mint-240)" },
    success: { bg: "rgba(33,184,115,0.10)", fg: "var(--mint-default)", br: "transparent" },
    info:    { bg: "rgba(38,169,216,0.10)",  fg: "var(--info)", br: "transparent" },
    warning: { bg: "rgba(255,184,0,0.10)",   fg: "var(--warning)", br: "transparent" },
    error:   { bg: "rgba(228,88,100,0.10)",  fg: "var(--error-border)", br: "transparent" },
  };
  const t = tones[tone] ?? tones.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      height: 22, padding: "0 8px", borderRadius: 999,
      fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, lineHeight: 1,
      whiteSpace: "nowrap",
      background: t.bg, color: t.fg, border: `1px solid ${t.br}`, ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />}
      {children}
    </span>
  );
};

const Card = ({ children, padding = 20, radius = 8, interactive, style, onClick }) => (
  <div onClick={onClick} style={{
    background: "var(--surface-raised)", border: "1px solid var(--border-subtle)",
    borderRadius: radius, padding, cursor: interactive ? "pointer" : undefined,
    transition: "all 150ms ease", ...style,
  }}
  onMouseEnter={(e) => interactive && (e.currentTarget.style.borderColor = "var(--border-default)")}
  onMouseLeave={(e) => interactive && (e.currentTarget.style.borderColor = "var(--border-subtle)")}>
    {children}
  </div>
);

const MetricCard = ({ label, value, delta, direction = "up", timeframe = "Last 30 days" }) => (
  <Card style={{ flex: 1, minWidth: 220 }}>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      gap: 12, marginBottom: 24, whiteSpace: "nowrap",
    }}>
      <span className="eyebrow" style={{ whiteSpace: "nowrap" }}>{label}</span>
      <span className="body-sm" style={{ color: "var(--fg-2)", whiteSpace: "nowrap" }}>{timeframe}</span>
    </div>
    <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
      <span className="metric-value">{value}</span>
      {delta && (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          padding: "2px 6px", borderRadius: 4,
          fontFamily: "var(--font-numeric)", fontSize: 12,
          background: direction === "up" ? "rgba(62,222,111,0.08)" : "rgba(228,88,100,0.08)",
          color: direction === "up" ? "var(--mint-default)" : "var(--error-border)",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
            {direction === "up" ? <path d="M2 6 L5 3 L8 6"/> : <path d="M2 4 L5 7 L8 4"/>}
          </svg>
          {delta}
        </span>
      )}
    </div>
  </Card>
);

const Avatar = ({ initials, src, size = 32, tone = "neutral", ring }) => {
  const tones = {
    neutral: { bg: "var(--neutral-800)", fg: "var(--fg-1)", br: "var(--border-default)" },
    brand:   { bg: "var(--mint-80)", fg: "var(--mint-default)", br: "var(--mint-240)" },
    purple:  { bg: "rgba(138,56,245,.12)", fg: "#BD8AFF", br: "rgba(138,56,245,.3)" },
    info:    { bg: "rgba(38,169,216,.12)", fg: "var(--info)", br: "rgba(38,169,216,.3)" },
  };
  const t = tones[tone];
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      background: t.bg, color: t.fg, border: `1px solid ${t.br}`,
      display: "grid", placeItems: "center",
      fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: Math.max(10, size * 0.38),
      position: "relative", flexShrink: 0, overflow: "hidden",
    }}>
      {src ? <img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }}/> : initials}
      {ring && <span style={{ position: "absolute", inset: -3, borderRadius: 999, border: `1px solid ${t.fg}` }}/>}
    </div>
  );
};

const Input = ({ icon, placeholder, value, onChange, style, trailing }) => {
  useLucide([icon, trailing]);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      height: 32, borderRadius: 8,
      background: "var(--neutral-950)", border: "1px solid var(--border-default)",
      padding: "0 10px", boxShadow: "var(--shadow-xs)", ...style,
    }}>
      {icon && <Icon name={icon} size={14} style={{ color: "var(--fg-3)" }}/>}
      <input value={value ?? ""} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder}
        style={{ flex: 1, border: "none", background: "transparent", color: "var(--fg-1)",
                 fontFamily: "var(--font-sans)", fontSize: 13, outline: "none" }}/>
      {trailing && <Icon name={trailing} size={14} style={{ color: "var(--fg-3)" }}/>}
    </div>
  );
};

Object.assign(window, { Icon, useLucide, Button, Badge, Card, MetricCard, Avatar, Input });
