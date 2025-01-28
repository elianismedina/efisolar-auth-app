"use client";
import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function Header({ pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {}, [router]);
  return (
    <header className="sticky top-0 w-full border-b bg-amber-400">
      <div className="h-14 container">
        {/* Desktop */}
        <MainNav {...pageProps} />

        {/* Mobile */}

        <MobileNav {...pageProps} />
      </div>
    </header>
  );
}
