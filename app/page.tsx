import { StatusBadge } from "@/components/status-badge";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <header>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "var(--color-text-primary)",
            marginBottom: "8px",
          }}
        >
          Status badge
        </h1>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
          }}
        >
          A small inline label used to communicate ticket or conversation status
          at a glance.
        </p>
      </header>

      <section
        style={{
          backgroundColor: "var(--color-surface-card)",
          borderRadius: "12px",
          padding: "24px",
          border: "0.5px solid var(--color-border-default)",
        }}
      >
        <h2
          style={{
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--color-text-primary)",
            marginBottom: "16px",
          }}
        >
          Variants
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <StatusBadge variant="success">Resolved</StatusBadge>
          <StatusBadge variant="warning">Pending</StatusBadge>
          <StatusBadge variant="danger">Overdue</StatusBadge>
          <StatusBadge variant="info">Open</StatusBadge>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface-card)",
          borderRadius: "12px",
          padding: "24px",
          border: "0.5px solid var(--color-border-default)",
        }}
      >
        <h2
          style={{
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--color-text-primary)",
            marginBottom: "16px",
          }}
        >
          Usage examples
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="success">Resolved</StatusBadge>
            <span
              style={{
                fontSize: "12px",
                color: "var(--color-text-secondary)",
              }}
            >
              Resolved tickets, confirmations
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="warning">SLA risk</StatusBadge>
            <span
              style={{
                fontSize: "12px",
                color: "var(--color-text-secondary)",
              }}
            >
              SLA warnings, pending states
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="danger">Error</StatusBadge>
            <span
              style={{
                fontSize: "12px",
                color: "var(--color-text-secondary)",
              }}
            >
              Errors, destructive actions
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="info">New ticket</StatusBadge>
            <span
              style={{
                fontSize: "12px",
                color: "var(--color-text-secondary)",
              }}
            >
              Neutral notifications, tooltips
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
