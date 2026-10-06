import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dishant Rathi — Data, AI & Engineering",
  description: "Dishant Rathi is a Technical Associate at GSK working across data engineering, AI and cloud platforms, while building ideas beyond his day job.",
  openGraph: { title: "Dishant Rathi — Data, AI & Engineering", description: "Building useful data systems. Exploring what they can make possible.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
