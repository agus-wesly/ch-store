import React from "react";
import "../styles/globals.css";
import ProviderAuth from "./ProviderAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-50">
        <ProviderAuth>{children}</ProviderAuth>
      </body>
    </html>
  );
}
