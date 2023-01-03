"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      emailRef.current &&
      passRef.current &&
      confirmRef.current &&
      nameRef.current &&
      passRef.current.value === confirmRef.current.value
    ) {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      );

      await setDoc(doc(db, "users", newUser.user.uid), {
        name: nameRef.current.value,
        isHandsome: false,
      });
      console.log("created");

      router.push("/");
    }
  };
  return (
    <div className="mt-16 mx-auto max-w-[290px] gap-3 items-center flex flex-col ">
      <h1 className="text-4xl font-semibold text-black mb-5">Sign Up</h1>

      <form className="flex flex-col gap-3 text-lg" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="w-[290px] focus:outline-none rounded px-4 py-2 border-[#1a73e865] border-[1px]"
          type="text"
          ref={nameRef}
          name="name"
          required
          autoComplete={"false"}
        />

        <input
          placeholder="Email"
          className="w-[290px] focus:outline-none rounded px-4 py-2 border-[#1a73e865] border-[1px]"
          type="text"
          ref={emailRef}
          name="username"
          required
          autoComplete="false"
        />

        <input
          placeholder="Password"
          type="password"
          ref={passRef}
          className="w-[290px] focus:outline-none px-4 rounded py-2 border-[#1a73e865] border-[1px]"
          name="pass"
          required
        />

        <input
          placeholder="Confirm Password"
          type="password"
          className="w-[290px] focus:outline-none px-4 rounded py-2 border-[#1a73e865] border-[1px]"
          ref={confirmRef}
          name="pass"
          required
        />

        <button
          type="submit"
          className="bg-[#1a73e8] hover:bg-[#2b87ff] mt-5 rounded-lg text-center text-white py-3"
        >
          Sign Up
        </button>
      </form>
      <span className="text-base flex items-center mt-3 w-full gap-3">
        <div className="h-[1px] bg-slate-300  flex-1 w-full" />
        OR
        <div className="h-[1px] bg-slate-300  flex-1 w-full" />
      </span>
      <button className="bg-white mt-3 border-[#dbdbdb]  hover:bg-[rgb(247,245,245)] text-black rounded-lg py-3 border-2 px-2 text-center flex items-center gap-3">
        <img
          src="/google.png"
          alt="google"
          className="w-[20px] h-[20px] object-contain"
        />
        Sign Up with Google
      </button>
    </div>
  );
};

export default page;
