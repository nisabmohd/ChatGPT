import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/theme-provider";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font" });

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
    <html lang="en" id="mode" suppressHydrationWarning>
      <body
        className={`${font.className} dark:bg-neutral-950 bg-white dark:text-neutral-200`}
      >
        <ThemeProvider>
          <>
            <main>
              <Toaster />
              {children}
            </main>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
