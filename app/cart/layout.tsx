import Navbar from "../Navbar";

interface IProps {
  children: React.ReactNode;
}

export const revalidate = 0;

export default function RootLayout({ children }: IProps) {
  return (
    <main className="max-w-6xl mx-auto pb-5 p-5 min-h-[100vh]">
      <Navbar isShowSearch={false} />
      {children}
    </main>
  );
}
