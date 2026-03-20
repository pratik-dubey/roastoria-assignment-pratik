import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roastoria — Own a Coffee Empire",
  description:
    "India's fastest-growing premium coffee franchise. Join 480+ franchisees who turned a passion for coffee into a thriving, scalable business.",
  keywords: ["coffee franchise", "franchise India", "café franchise", "Roastoria"],
  openGraph: {
    title: "Roastoria — Own a Coffee Empire",
    description: "Join 480+ franchisees. Start your Roastoria journey today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
