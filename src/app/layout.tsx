import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/navbar";
import Providers from "@/container/provider";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-controller";

// --- TYPOGRAPHY SETUP ---
// Inter: Clean, modern sans-serif for body copy and technical specs
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Playfair Display: Classical, elegant serif for high-impact headers
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Rahman | Software Engineer",
  description:
    "Portfolio of Abdul Rahman — a software engineer building AI-native apps, full-stack systems, and blockchain-powered platforms. Specializing in LLM pipelines, RAG, Next.js, and Web3.",
  keywords: [
    "Abdul Rahman",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "LangChain",
    "RAG",
    "Blockchain",
    "Solidity",
    "Portfolio",
  ],
  openGraph: {
    title: "Abdul Rahman | Software Engineer",
    description:
      "Building AI-native apps, full-stack systems, and blockchain-powered platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is required when using next-themes at the root level
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-900 relative dark:bg-slate-950 dark:text-slate-50 min-h-screen flex flex-col antialiased selection:bg-[#D4AF37]/30 selection:text-slate-900 dark:selection:text-white`}
      >
        {/* BACKGROUND GLOW EFFECTS (Architectural/Premium Colors) */}
        
        {/* Subtle Slate/Gold glow top right */}
        <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-[10] rounded-full blur-[10rem] sm:w-[68.75rem] bg-slate-200/50 dark:bg-slate-900/50 opacity-80 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
        
        {/* Subtle Gold/Navy glow top left */}
        <div className="absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] h-[31.25rem] w-[50rem] sm:w-[68.75rem] -z-[10] rounded-full blur-[12rem] bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 pointer-events-none"></div>

        {/* Global Providers & Structure */}
        <Providers>
          <Navbar />
          <main className="flex-1 w-full flex flex-col items-center">
            {children}
          </main>
          <Footer />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}