import { type ReactNode } from "react";

interface ComponentPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ComponentPage({
  title,
  description,
  children,
}: ComponentPageProps) {
  return (
    <main
      style={{
        flex: 1,
        padding: "48px",
        backgroundColor: "#F1EFE8",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          padding: "32px",
          maxWidth: "800px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "#2C2C2A",
            marginBottom: "8px",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#888780",
            marginBottom: "32px",
          }}
        >
          {description}
        </p>
        {children}
      </div>
    </main>
  );
}
