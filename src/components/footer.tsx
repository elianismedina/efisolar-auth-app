import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
const footerLinks = [
  {
    title: "Soluciones IA",
    href: "/solutions",
  },
  {
    title: "Recursos",
    href: "/resources",
  },
  {
    title: "Precios",
    href: "/prices",
  },
  {
    title: "Trabaja con nosotros",
    href: "/careers",
  },
  {
    title: "Contacto",
    href: "/contact",
  },
  {
    title: "Política de Privacidad",
    href: "#",
  },
];
const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-neutral-300 to-stone-400">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <Image
                src="/images/AIBridge.png"
                alt="AIBridge"
                width={150}
                height={150}
              />
              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-amber-500 hover:font-semibold"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold text-muted-foreground">
                Recibe información útil sobre Inteligencia artificial
              </h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="correo electrónico" />
                <Button>Suscribirse</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                AIBridge Solutions
              </Link>
              . Todos los derechos reservados.
            </span>
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <Instagram className="h-5 w-5 hover:text-amber-500" />
              </Link>
              <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5 hover:text-amber-500" />
              </Link>
              <Link href="#" target="_blank">
                <Facebook className="h-5 w-5 hover:text-amber-500" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
