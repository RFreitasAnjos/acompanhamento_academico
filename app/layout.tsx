import type { Metadata } from "next";
import { Geist, Geist_Mono, Gloria_Hallelujah } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { AsideProvider } from "@/contexts/AsideContext";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria-hallelujah",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Academic Project",
  description: "Academic Project Followup and Contents about academics in general",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${gloriaHallelujah.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const storageKey = 'academic:theme-preference';
              const storedTheme = window.localStorage.getItem(storageKey);
              const themePreference = storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
                ? storedTheme
                : 'system';
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const resolvedTheme = themePreference === 'system' ? systemTheme : themePreference;
              const root = document.documentElement;
              root.setAttribute('data-theme', resolvedTheme);
              root.style.colorScheme = resolvedTheme;
            } catch (error) {}
          })();`}
        </Script>
      </head>
      <body className="bg-background text-foreground min-h-full flex flex-col">
        <AsideProvider>
          <ThemeProvider>
            <AOSProvider>
              <Navbar />
              <div className="pt-16 flex-1">
                {children}
              </div>
              <Footer />
              <WhatsAppFloat />
            </AOSProvider>
          </ThemeProvider>
        </AsideProvider>
      </body>
    </html>
  );
}
