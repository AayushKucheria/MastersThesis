import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StrictMode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thesis Presentation - LLM Behavior in Educational Contexts",
  description: "Fluid Interfaces and Fixed Patterns: Understanding LLM Behavior in Educational Contexts",
  icons: {
    icon: [],
    apple: [],
    shortcut: []
  }
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
        suppressHydrationWarning
      >
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
