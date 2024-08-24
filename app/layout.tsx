import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Adsense from "./components/AdSense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APKrona.se",
  description: "APK-listan som visar vilka produkter som har högst mängd alkohol per krona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Adsense pId="8117821348663742" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
