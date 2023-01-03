import React from "react";
import "../styles/globals.css";
const ProviderAuth = dynamic(() => import("../ProviderAuth"), { ssr: false });
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
        <ProviderAuth>{children}</ProviderAuth>
      </body>
    </html>
  );
}
