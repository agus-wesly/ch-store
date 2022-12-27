"use client";

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../utils/firebase";
// import { authContext } from "../../ProviderAuth";
import { FormEvent, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const router = useRouter();

  // const { dispatch } = useContext(authContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleGoogleLogin = async () => {
    console.log("Tes");

    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const user = result.user;
    //     dispatch({
    //       type: "LOGIN",
    //       payload: user,
    //     });
    //     localStorage.setItem("credit", JSON.stringify(user));
    //     router.replace("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="mt-16 mx-auto max-w-[290px] gap-3 items-center flex flex-col ">
      <Link href={"/products/2"}>Product Page</Link>
      <h1 className="text-4xl font-semibold text-black mb-5">Sign In</h1>
      <form className="flex flex-col gap-3 text-lg" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          placeholder="Email"
          className="w-[290px] focus:outline-none rounded px-4 py-2 border-slate-300 border-[1px]"
          type="text"
          name="username"
        />

        <input
          ref={pwdRef}
          placeholder="Password"
          type="password"
          className="w-[290px] focus:outline-none px-4 rounded py-2 border-slate-300 border-[1px]"
          name="pass"
        />

        <button
          type="submit"
          className="bg-[#1a73e8] hover:bg-[#2b87ff] mt-5 rounded-lg text-center text-white py-3"
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
