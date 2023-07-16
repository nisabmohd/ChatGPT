import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" id="mode" className="dark">
      <body
        className={`${font.className} dark:bg-neutral-950 bg-white dark:text-neutral-200`}
      >
        <main>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
