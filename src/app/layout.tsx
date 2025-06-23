import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/app/app.scss'
import Providers from "@/store/provider";
import CustomWhatsAppWidget from "../component/whatsapp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestix InfoTech",
  description: "Celextx InfoTech",
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
        {children}
        </Providers>
                <CustomWhatsAppWidget/>


      </body>
    </html>
  );
}
