import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/component/main/Background";
import Navbar from "@/component/main/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Kelvin Adinata",
  description: "Made by Kelvin Adinata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
