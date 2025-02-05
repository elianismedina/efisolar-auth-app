"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function MainNav() {
  const session = useSession();
  const user = session.data?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden md:flex max-w-6xl mx-auto">
      <nav className="flex justify-between">
        {/* Logo */}
        <div className="flex-initial">
          <Link href="/" className="flex items-start py-5 px-3">
            <Image
              src="/images/QuimbaIA.png"
              alt="QuimbaIA"
              width={100}
              height={100}
              className="mb-4 mt-4"
            />
          </Link>
        </div>
        {/* Links */}
        <div className="flex items-center justify-between space-x-1">
          <div className="py-5 px-3">
            <DropdownMenu onOpenChange={handleToggle}>
              <DropdownMenuTrigger asChild>
                <div
                  className="font-medium text-xl text-secondary hover:text-primary transition-colors
              duration-300 ease-in-out cursor-pointer mr-2"
                >
                  Soluciones IA
                  <span className="absolute mt-1 ml-1">
                    {" "}
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Automatiza tu negocio</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/solutions">Chatbots</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/solutions">Automatización de procesos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/solutions">Análisis de sentimientos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/solutions">
                      Campañas de marketing personalizadas
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
            <Link href={`/quote/create`}>
              <Button>Agendar consulta</Button>
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
