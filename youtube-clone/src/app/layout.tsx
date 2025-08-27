import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StreamNow",
    template: "%s • StreamNow",
  },
  description: "A beautiful YouTube-style video platform UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex gap-6">
          <Sidebar />
          <main className="flex-1 pb-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
