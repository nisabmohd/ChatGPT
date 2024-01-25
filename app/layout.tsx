import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NextAuthProvider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "OpenChat",
  description: "An OpenAI based chat system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${font.className}`} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="sm:px-10 px-5">{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
