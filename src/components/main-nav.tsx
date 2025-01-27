"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <nav className="flex gap-4 items-center justify-between w-full max-w-6xl p-4 mx-auto">
        <Link href="/" className="font-bold">
          Efisolar
        </Link>
        <Link href={`/quote/create`}>
          <Button>Cotizar</Button>
        </Link>
      </nav>
    </div>
  );
}
