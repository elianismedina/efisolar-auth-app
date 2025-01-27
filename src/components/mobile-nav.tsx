"use client";

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

import React from "react";
import Image from "next/image";

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
  const session = useSession();
  const user = session.data?.user;
  return (
    <div className="md:hidden">
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
              src="/images/efisolar.png"
              alt="Efisolar"
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
