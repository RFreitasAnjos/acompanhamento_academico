import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { AsideProvider } from "@/contexts/AsideContext";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AsideProvider>
          <AOSProvider>
            <Navbar />
            <div className="pt-16 flex-1">
              {children}
            </div>
            <Footer />
            <WhatsAppFloat />
          </AOSProvider>
        </AsideProvider>
      </body>
    </html>
  );
}
