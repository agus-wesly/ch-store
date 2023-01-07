import React from "react";
import "../styles/globals.css";
const CartProvider = dynamic(() => import("./CartProvider"), { ssr: false });
import { Epilogue } from "@next/font/google";
import dynamic from "next/dynamic";

const epilogue = Epilogue({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-epilogue",
});

interface IProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: IProps) {
  return (
    <html className={epilogue.variable}>
      <head />
      <body className="bg-neutral-50">
        <div className="pointer-events-none z-[5] absolute w-[550px] h-[480px] rounded-full gradient_1 -left-1/3 top-24 md:w-[1013px] md:h-[975px] md:top-[140px] blur-[200px] opacity-[55%]" />
        <CartProvider>{children}</CartProvider>
        <div className="pointer-events-none absolute overflow-hidden opacity-[5%] w-[550px] h-[480px] rounded-full gradient_2 -right-1/3 bottom-1/4 md:w-[1013px] md:h-[975px] md:bottom-0 blur-[200px]"></div>
      </body>
    </html>
  );
}
