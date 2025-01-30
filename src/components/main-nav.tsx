"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function MainNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="hidden md:flex">
      <nav className="flex flex-nowrap w-full justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/AIBridge.png"
              alt="AIBridge"
              width={150}
              height={50}
              className="mb-6"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <Link href={`/quote/create`}>
              <Button>Cotizar</Button>
            </Link>
          </div>
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
