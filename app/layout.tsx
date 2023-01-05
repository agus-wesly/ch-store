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

export default function RootLayout({ children }: IProps) {
  return (
    <html className={epilogue.variable}>
      <head />
      <body className="bg-neutral-100">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
