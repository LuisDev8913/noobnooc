import "../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nooc's World",
  description: "Nooc's World",
  keywords: [
    "Nooc",
    "noobnooc",
    "noocink",
    "nookinc",
    "Noob Nooc",
    "Homepage",
    "Portfolio",
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="h-full">
      <body className="h-full bg-indigo-50 text-black dark:bg-neutral-900 dark:text-indigo-50">
        {children}
      </body>
    </html>
  );
}