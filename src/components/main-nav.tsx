"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import DropdownSolutions from "./dropdown-solutions";
import React from "react";

interface MyButtonProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}
const MyButton: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  MyButtonProps
> = ({ onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="font-medium text-md text-white bg-primary hover:bg-secondary transition-colors duration-300 ease-in-out py-3 px-2 rounded-lg"
    >
      Agendar consulta
    </a>
  );
};
const ForwardedMyButton = React.forwardRef(MyButton);

export default function MainNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="hidden md:flex max-w-6xl mx-auto">
      <nav className="flex justify-between">
        {/* Logo */}
        <div className="flex-initial">
          <Link href="/" className="flex items-start py-5 px-3">
            <Image
              src="/images/KimbaIA.png"
              alt="KimbaIA"
              width={150}
              height={150}
              className="mb-4 mt-4"
            />
          </Link>
        </div>
        {/* Links */}
        <div className="flex items-center justify-between space-x-1">
          <DropdownSolutions />
          <div className="py-5 px-3">
            <Link
              href="/usecases"
              className="font-medium text-xl text-secondary hover:text-primary transition-colors
              duration-300 ease-in-out"
            >
              Casos de uso
            </Link>
          </div>
          <div className="py-5 px-3">
            <Link
              href="/contact"
              className="font-medium text-xl text-secondary hover:text-primary transition-colors
              duration-300 ease-in-out"
            >
              Contacto
            </Link>
          </div>
          <div className="py-5 px-3">
            <Link
              href="/resources"
              className="font-medium text-xl text-secondary hover:text-primary transition-colors
              duration-300 ease-in-out"
            >
              Recursos
            </Link>
          </div>
          <div className="py-5 px-3">
            <Link href={`/quote/create`} passHref legacyBehavior>
              <ForwardedMyButton />
            </Link>
          </div>
          <div className="py-5 px-3">
            {user && <UserButton user={user} />}
            {!user && session.status !== "loading" && <SignInButton />}
          </div>
        </div>
      </nav>
    </div>
  );
}
function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
