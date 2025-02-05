"use client";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropdownSolutions = () => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
};

export default DropdownSolutions;
