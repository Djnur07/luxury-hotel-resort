import type { Metadata } from "next";
import { Cinzel, Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cinzel = Cinzel({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const cormorant = Cormorant({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Serene Stay",
  description: "A quiet boutique hotel in Pecatu, Bali, with garden rooms, sea views, and warm service.",
  openGraph: {
    title: "Serene Stay",
    description: "A quiet boutique hotel in Pecatu, Bali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-olive" data-scroll-behavior="smooth">
      <body className={`${cinzel.variable} ${cormorant.variable} font-sans antialiased flex min-h-dvh flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
