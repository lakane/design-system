import { type ReactNode } from "react";

type StatusBadgeVariant = "success" | "warning" | "danger" | "info";

interface StatusBadgeProps {
  variant: StatusBadgeVariant;
  children: ReactNode;
}

const variantStyles: Record<
  StatusBadgeVariant,
  { background: string; text: string }
> = {
  success: {
    background: "var(--color-success-background)",
    text: "var(--color-success-text)",
  },
  warning: {
    background: "var(--color-warning-background)",
    text: "var(--color-warning-text)",
  },
  danger: {
    background: "var(--color-danger-background)",
    text: "var(--color-danger-text)",
  },
  info: {
    background: "var(--color-info-background)",
    text: "var(--color-info-text)",
  },
};

export function StatusBadge({ variant, children }: StatusBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "4px 10px",
        backgroundColor: styles.background,
        color: styles.text,
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: 1.5,
        borderRadius: "4px",
      }}
    >
      {/* 6px filled dot */}
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "9999px",
          backgroundColor: styles.text,
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
