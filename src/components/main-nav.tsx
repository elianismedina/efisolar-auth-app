"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { signIn, useSession } from "next-auth/react";

export default function MainNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8 ">
        <Link href="/" className="font-bold">
          Efisolar
        </Link>
        <Link href={`/quote/create`}>
          <Button>Cotizar</Button>
        </Link>
        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </div>
  );
}
function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
