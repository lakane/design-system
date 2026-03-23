import { ComponentPage } from "@/components/component-page";
import { StatusBadge } from "@/components/status-badge";

export default function StatusBadgePage() {
  return (
    <ComponentPage
      title="Status badge"
      description="A small inline label used to communicate ticket or conversation status at a glance."
    >
      <section style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#2C2C2A",
            marginBottom: "16px",
          }}
        >
          Variants
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <StatusBadge variant="success">Resolved</StatusBadge>
          <StatusBadge variant="warning">Pending</StatusBadge>
          <StatusBadge variant="danger">Overdue</StatusBadge>
          <StatusBadge variant="info">Open</StatusBadge>
        </div>
      </section>

      <section>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#2C2C2A",
            marginBottom: "16px",
          }}
        >
          Usage examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="success">Resolved</StatusBadge>
            <span style={{ fontSize: "12px", color: "#888780" }}>
              Resolved tickets, confirmations
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="warning">SLA risk</StatusBadge>
            <span style={{ fontSize: "12px", color: "#888780" }}>
              SLA warnings, pending states
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="danger">Error</StatusBadge>
            <span style={{ fontSize: "12px", color: "#888780" }}>
              Errors, destructive actions
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <StatusBadge variant="info">New ticket</StatusBadge>
            <span style={{ fontSize: "12px", color: "#888780" }}>
              Neutral notifications, tooltips
            </span>
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
