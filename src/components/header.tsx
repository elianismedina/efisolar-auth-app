import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-gradient-to-r from-neutral-300 to-stone-400">
      <div className="h-24 flex items-center justify-end px-4 md:px-8">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}

        <MobileNav />
      </div>
    </header>
  );
}
