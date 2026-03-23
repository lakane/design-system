"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  implemented: boolean;
}

const navItems: NavItem[] = [
  { name: "Status badge", href: "/status-badge", implemented: true },
  { name: "Badge", href: "/badge", implemented: false },
  { name: "Button", href: "/button", implemented: false },
  { name: "Form inputs", href: "/form-inputs", implemented: false },
  { name: "Avatar", href: "/avatar", implemented: false },
  { name: "Ticket card", href: "/ticket-card", implemented: false },
  { name: "Navigation", href: "/navigation", implemented: false },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        padding: "24px 0",
        borderRight: "0.5px solid #D3D1C7",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "0 20px", marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#2C2C2A",
            letterSpacing: "-0.01em",
          }}
        >
          Design system
        </h1>
      </div>

      <nav>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "8px 20px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: isActive ? "#2C2C2A" : "#888780",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
