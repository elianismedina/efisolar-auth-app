"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

import React from "react";

const navbarLinks = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/quote/create",
    label: "Cotizar",
  },
];

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          <NavBar withSheetClose />
        </SheetContent>
      </Sheet>
    </div>
  );
}
interface NavBarProps {
  withSheetClose?: boolean;
}

const NavBar = (props: NavBarProps) => {
  const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  return (
    <nav>
      {navbarLinks.map((item) => (
        <SheetCloseWrapper {...shetCloseWrapperProps} key={item.id}>
          <Link
            key={item.id}
            href={item.href}
            className="block py-2 text-lg font-semibold text-gray-800"
          >
            {item.label}
          </Link>
        </SheetCloseWrapper>
      ))}
    </nav>
  );
};
