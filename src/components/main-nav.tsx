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
      <nav className="flex gap-4 items-center justify-center w-full max-w-6xl p-2 mx-auto">
        <div className="flex-1">
          <Link href="/" className="font-bold">
            AIbril
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={`/quote/create`}>
            <Button>Cotizar</Button>
          </Link>
          <div>
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
