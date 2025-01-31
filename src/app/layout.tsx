import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { TailwindIndicator } from "../components/tailwind-indicator";
import Footer from "../components/footer";
import WhatsappLive from "../components/whatsapp-live";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Consultoría IA",
    absolute: "AIBridge | Consultoría en IA",
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
          <Footer />
          <WhatsappLive />
          <TailwindIndicator />
        </SessionProvider>
      </body>
    </html>
  );
}
