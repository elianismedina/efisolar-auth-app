"use client";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { AlignJustify, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./UserButton";

import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const navbarLinks = [
  {
    id: 1,
    href: "/",
    label: "Inicio",
  },
  {
    id: 2,
    href: "/solutions",
    label: "Soluciones IA",
    submenus: [
      {
        id: 21,
        href: "/solutions",
        label: "Chatbots",
      },
      {
        id: 22,
        href: "/solutions",
        label: "Automatización de procesos",
      },
      {
        id: 23,
        href: "/solutions",
        label: "Análisis de sentimientos",
      },
      {
        id: 24,
        href: "/solutions",
        label: "Campañas de marketing personalizadas",
      },
    ],
  },
  {
    id: 3,
    href: "/resources",
    label: "Recursos",
  },
  {
    id: 4,
    href: "/about",
    label: "Sobre nosotros",
  },
  {
    id: 5,
    href: "/prices",
    label: "Precios",
  },
  {
    id: 6,
    href: "/quote/create",
    label: "Hablar con ventas",
  },
];

export default function MobileNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="md:hidden flex flex-col-2 justify-between w-full">
      <div className="mt-4 flex justify-center">
        <Link href="/">
          <Image
            src="/images/KimbaIA.png"
            alt="KimbaIA"
            width={150}
            height={150}
            className="mb-6 mt-4"
          />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="mt-4" size={40} />
        </SheetTrigger>
        <SheetContent side="left">
          <NavBar withSheetClose />
          <div className="flex flex-row items-center justify-center gap-5 text-muted-foreground mt-4">
            <Link href="#" target="_blank">
              <Instagram className="h-5 w-5 hover:primary" />
            </Link>
            <Link href="#" target="_blank">
              <Linkedin className="h-5 w-5 hover:primary" />
            </Link>
            <Link href="#" target="_blank">
              <Facebook className="h-5 w-5 hover:primary" />
            </Link>
          </div>
          <div className="flex flex-col items-center mt-8">
            {user && <UserButton user={user} />}
            {!user && session.status !== "loading" && <SignInButton />}
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
  const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  return (
    <nav>
      {navbarLinks.map((item) => (
        <div key={item.id}>
          <SheetCloseWrapper {...sheetCloseWrapperProps}>
            <Link
              href={item.href}
              className={`block py-2 text-center ${
                isActive(item.href)
                  ? "text-primary font-extrabold"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          </SheetCloseWrapper>
          {item.submenus && (
            <div className="pl-4">
              {item.submenus.map((submenu) => (
                <SheetCloseWrapper {...sheetCloseWrapperProps} key={submenu.id}>
                  <Link
                    href={submenu.href}
                    className="block py-2 text-left text-gray-700"
                  >
                    {submenu.label}
                    <Separator />
                  </Link>
                </SheetCloseWrapper>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
