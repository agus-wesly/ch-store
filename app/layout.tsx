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
      <body className="bg-white/80 backdrop-blur-xl h-auto overflow-hidden">
        <CartProvider>{children}</CartProvider>
        <div className="pointer-events-none -z-[5] absolute w-[250px] h-[250px] rounded-full gradient_1 -left-1/3 top-24 md:w-[1013px] md:h-[975px] md:top-0 blur-[200px] opacity-[15%] md:opacity-[20%] overflow-hidden" />

        <div className="pointer-events-none absolute -z-[5] overflow-hidden opacity-[5%] w-[250px] h-[250px] rounded-full gradient_2 -right-1/3 bottom-1/4 md:w-[1013px] md:h-[975px] md:bottom-0 blur-[200px]"></div>
      </body>
    </html>
  );
}
