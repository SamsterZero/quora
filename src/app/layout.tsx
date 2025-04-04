import type { Metadata } from "next";
import { Geist, Geist_Mono, Noticia_Text } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Navbar from "@/components/Navbar";
import FAB from "@/components/FAB";
import SearchBar from "@/components/SearchBar";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quora",
  description: "A modern Quora clone built with Next.js, Tailwind CSS, and TypeScript.",
  icons: {
    icon: "/Q.ico",
    shortcut: "/Q.ico",
  },
};

const noticiaText = Noticia_Text({
  variable: "--font-noticia-text",
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${noticiaText.variable} antialiased max-h-screen min-h-screen md:flex overflow-hidden`}
      >
        <Providers>
          <Navbar/>
          <main className="mx-auto max-h-screen w-full flex justify-center overflow-y-auto font-[family-name:var(--font-geist-sans)]">
            <div className="mx-auto w-full flex flex-col items-center">
              <SearchBar/>
              {children}
            </div>
          </main>
          <FAB/>
        </Providers>
      </body>
    </html>
  );
}