import Link from "next/link";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";

export default function Header() {
  //we can destructure the userId from clerk auth
  //this userId can be saved to your database, so you can match user with posts (one to many)
  const { userId } = auth();
  return (
    <>
      <h1 className="flex flex-col items-center text-4xl">header component</h1>
      <nav className="flex justify-around content-around text-3xl">
        <Link href="/" className="">
          Home
        </Link>
        {/* <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link> */}
      </nav>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </SignedOut>
    </>
  );
}
