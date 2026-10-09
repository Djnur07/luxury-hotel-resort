import type { Metadata } from "next";
import { Cinzel, Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  description: "A quiet, elegant place to stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
