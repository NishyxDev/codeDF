import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "codeDF - Premium Landing Page Developer",
  description: "High-performance landing pages for your business. Clean code, fast load times, more conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-paper text-charcoal overflow-x-hidden selection:bg-indigo-brand selection:text-white relative`}
      >
        <CustomCursor />
        <ScrollReveal />

        {/* Decorative Background Grid */}
        <div
          className="fixed inset-0 z-[-1] opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        >
        </div>

        {/* Animated Blobs */}
        <div className="blob-bg blob-1 w-[32rem] h-[32rem] top-0 -left-20 mix-blend-multiply opacity-70" aria-hidden="true"></div>
        <div className="blob-bg blob-2 w-[32rem] h-[32rem] bottom-0 -right-20 mix-blend-multiply opacity-70" aria-hidden="true"></div>
        <div className="blob-bg blob-3 w-[28rem] h-[28rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-60" aria-hidden="true"></div>

        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
