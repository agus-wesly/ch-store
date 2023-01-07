interface IProps {
  children: React.ReactNode;
}

export const revalidate = 0;

export default function RootLayout({ children }: IProps) {
  return (
    <body className="h-screen overflow-hidden">
      <div className="pointer-events-none -z-[5] absolute w-[250px] h-[250px] rounded-full gradient_1 -left-1/3 top-24 md:w-[1013px] md:h-[975px] md:top-0 blur-[200px] opacity-[15%] md:opacity-[20%] overflow-hidden" />
      <main className="max-h-screen overflow-y-hidden">{children}</main>
      <div className="pointer-events-none absolute -z-[5] overflow-hidden opacity-[5%] w-[250px] h-[250px] rounded-full gradient_2 -right-1/3 bottom-1/4 md:w-[1013px] md:h-[975px] md:bottom-0 blur-[200px]"></div>
    </body>
  );
}
