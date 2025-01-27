import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}

        <MobileNav />

        {/* Desktop & Mobile */}
        <Link href={`/`}>
          <Image
            src="/images/efisolar.png"
            alt="Efisolar"
            width={150}
            height={50}
          />
        </Link>
      </div>
    </header>
  );
}
