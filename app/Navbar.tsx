"use client";

import Search from "./Search";
import Link from "next/link";
import ShopImage from "../components/ShopImage";
import AuthBtn from "../components/AuthBtn";
import { useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  return (
    <>
      <nav className="w-full left-0 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07)] z-10 px-5 md:px-10 py-5 flex items-center fixed z-5 top-0 justify-between space-x-5">
        <Link href="/">
          <h1 className="text-black font-semibold text-2xl">
            <span className="text-primary">CH</span> -STORE
          </h1>
        </Link>
        <div className="hidden md:flex flex-1">
          <Search />
        </div>

        <div className="flex items-center space-x-5">
          <ShopImage />
          {!session?.user ? (
            <Link
              href="/register"
              className="bg-white cursor-pointer px-4 py-2 rounded font-semibold text-primary border-[1px] border-primary hidden md:flex"
            >
              Register
            </Link>
          ) : (
            <h3 className="hidden md:block font-bold text-xl">
              Hi, <span className="text-primary">{session.user.name}</span>
            </h3>
          )}
          <AuthBtn />
        </div>
      </nav>
      <div className="flex md:hidden px-5 mt-20">
        <Search />
      </div>
    </>
  );
}

export default Navbar;
