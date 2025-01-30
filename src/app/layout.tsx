import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { TailwindIndicator } from "../components/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Consultoría IA",
    absolute: "AIBridge",
  },
  description: "Consultoría en Inteligencia Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
          <TailwindIndicator />
        </SessionProvider>
      </body>
    </html>
  );
}
