import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TonProviders from "./ton-providers";
import WebAnimations from "./web-animations";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebAnimations />

        <TonProviders>{children}</TonProviders>
      </body>
    </html>
  );
}
