"use client"
import { Suspense } from "react";
import { useAuthStore } from "@/store/authStore"
import localFont from "next/font/local";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Loading from "@/src/components/Loading";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="48x48" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
        </Suspense>
      </body>
    </html>
  );
}
