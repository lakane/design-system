import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Design System",
  description: "Customer service software design system components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
