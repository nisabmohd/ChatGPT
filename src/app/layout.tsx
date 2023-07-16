import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "ChatGPT clone with simple design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-neutral-950 text-neutral-200`}>
        {children}
      </body>
    </html>
  );
}
