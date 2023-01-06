"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function AuthBtn() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session?.user ? (
        <button
          onClick={() => signOut()}
          className="bg-red-500 cursor-pointer px-4 py-2 rounded font-semibold text-white"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/auth"
          className="bg-primary cursor-pointer px-4 py-2 rounded font-semibold text-white"
        >
          Login
        </Link>
      )}
    </>
  );
}

export default AuthBtn;
