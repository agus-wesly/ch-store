"use client";

import { FormEvent, useRef } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (emailRef.current && pwdRef.current) {
        await signIn("credentials", {
          username: emailRef.current.value,
          password: pwdRef.current.value,
          redirect: true,
          callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
    });
  };

  return (
    <div className="mt-16 mx-5 rounded-md sm:mx-auto max-w-[390px] shadow-sm gap-3 items-center flex flex-col bg-white p-10 border-[1px] border-gray-300">
      <h1 className="text-4xl font-semibold text-black mb-5">Sign In</h1>
      <form
        className="flex flex-col px-10 gap-3 text-lg"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          ref={emailRef}
          placeholder="Email"
          className="focus:outline-none rounded px-4 py-2 border-slate-300 border-[1px]"
          type="text"
          name="username"
        />

        <input
          autoComplete="off"
          ref={pwdRef}
          placeholder="Password"
          type="password"
          className="focus:outline-none px-4 rounded py-2 border-slate-300 border-[1px]"
          name="pass"
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark mt-5 rounded-lg text-center text-white py-3"
        >
          Login
        </button>
      </form>
      <span className="text-base flex items-center mt-3 w-full gap-3">
        <div className="h-[1px] bg-slate-300  flex-1 w-full" />
        OR
        <div className="h-[1px] bg-slate-300  flex-1 w-full" />
      </span>
      <button
        onClick={handleGoogleLogin}
        className="bg-white mt-3 hover:bg-[rgb(247,245,245)] border-[#dbdbdb] text-black rounded-lg py-3 border-2 px-2 text-center flex items-center gap-3"
      >
        <img
          src="/google.png"
          alt="google"
          className="w-[20px] h-[20px] object-contain"
        />
        Login with Google
      </button>
    </div>
  );
};

export default page;
