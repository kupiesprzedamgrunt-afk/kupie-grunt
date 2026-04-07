import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kupię Grunt",
  description: "Strona główna pod pozyskiwanie gruntów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
