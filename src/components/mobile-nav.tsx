"use client";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./UserButton";
import Image from "next/image";

export default function MobileNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link href="/" className="font-bold">
              <Image
                src="/images/efisolar.png"
                alt="Efisolar"
                width={90}
                height={90}
              />
            </Link>
            <Link href={`/quote/create`}>
              <Button>Cotizar</Button>
            </Link>
            <div>
              {user && <UserButton user={user} />}
              {!user && session.status !== "loading" && <SignInButton />}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
