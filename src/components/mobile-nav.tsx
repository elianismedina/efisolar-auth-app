"use client";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./UserButton";

import Image from "next/image";
import React from "react";

const navbarLinks = [
  {
    id: 1,
    href: "/",
    label: "Inicio",
  },
  {
    id: 2,
    href: "/quote/create",
    label: "Cotizar",
  },
  {
    id: 3,
    href: "/about",
    label: "Quienes somos",
  },
  {
    id: 4,
    href: "/solutions",
    label: "Soluciones IA",
  },
  {
    id: 5,
    href: "/contact",
    label: "Contáctanos",
  },
];

export default function MobileNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <div className="md:hidden flex flex-col-2 justify-between w-full">
      <div className="">
        <Link href="/">
          <Image
            src="/images/AIbril.png"
            alt="AIbril"
            width={150}
            height={50}
            className="mb-6"
          />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="mt-4" />
        </SheetTrigger>
        <SheetContent side="left">
          <NavBar withSheetClose />
          <div className="flex flex-col items-center mt-8">
            {user && <UserButton user={user} />}
            {!user && session.status !== "loading" && <SignInButton />}
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/AIbril.png"
              alt="AIbril"
              width={150}
              height={150}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
interface NavBarProps {
  withSheetClose?: boolean;
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
const NavBar = (props: NavBarProps) => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath === path;
  };
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
            className={`block py-2 text-center ${
              isActive(item.href) ? "text-amber-500" : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        </SheetCloseWrapper>
      ))}
    </nav>
  );
};
