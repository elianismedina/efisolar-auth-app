import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}

        <MobileNav />
      </div>
    </header>
  );
}
