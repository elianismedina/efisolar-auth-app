import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-gradient-to-r from-zinc-700 to-zinc-800">
      <div className="h-16 flex items-center justify-end px-4 md:px-8">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}

        <MobileNav />
      </div>
    </header>
  );
}
