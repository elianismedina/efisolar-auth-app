"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { signIn, useSession } from "next-auth/react";

export default function MainNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:px-4 md:py-2">
      <nav>
        <Link href="/" className="font-bold">
          Efisolar
        </Link>
        <Link href={`/quote/create`}>
          <Button>Cotizar</Button>
        </Link>
        <div>
          {user && <UserButton user={user} />}
          {!user && session.status !== "loading" && <SignInButton />}
        </div>
      </nav>
    </div>
  );
}
function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
