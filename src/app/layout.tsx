// Packages
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Styles
import "./globals.css";
import "@/assets/font-awesome-pro/css/all.css";

// Custom
import Navbar from "@/components/global/Nav/Navbar";
import Providers from "@/components/Providers";
import Bottombar from "@/components/global/Nav/Bottombar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata 
export const metadata: Metadata = {
  title: "Emmeservice Soccorso Stradale & Autotrasporto per Conto Terzi | Soccorso Stradale & Autotrasporto per Conto Terzi",
  description: "Emmeservice s.r.l. Soccorso Stradale/Autotrasporto conto terzi/Deposito vetture-furgoni-camper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Bottombar />
        </Providers>

        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
