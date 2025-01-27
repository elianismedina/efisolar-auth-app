import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./UserButton";
import { Button } from "./ui/button";

export default function Header() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}

        <MobileNav />
        <div className="flex items-center mt-4">
          {user && <UserButton user={user} />}
          {!user && session.status !== "loading" && <SignInButton />}
        </div>
      </div>
    </header>
  );
}
function SignInButton() {
  return <Button onClick={() => signIn()}>Iniciar sesión</Button>;
}
