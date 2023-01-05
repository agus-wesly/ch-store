import Link from "next/link";
import Search from "../Search";
import ShopImage from "../../components/ShopImage";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <main className="max-w-6xl mx-auto pb-5 p-5">
      <nav className="w-full left-0 bg-neutral-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07)] z-10 px-5 md:px-10 py-5 flex items-center fixed z-5 top-0 justify-between space-x-5">
        <Link href="/">
          <h1 className="text-black font-semibold text-2xl">
            <span className="text-primary">CH</span> -STORE
          </h1>
        </Link>
        <div className="hidden md:flex flex-1">
          <Search />
        </div>

        <div className="flex items-center space-x-5">
          <ShopImage />
          <Link
            href="/register"
            className="bg-white cursor-pointer px-4 py-2 rounded font-bold text-primary border-[1px] border-primary hidden md:flex"
          >
            Register
          </Link>
          <Link
            href="/auth"
            className="bg-primary cursor-pointer px-4 py-2 rounded font-bold text-white"
          >
            Login
          </Link>
        </div>
      </nav>
      {children}
    </main>
  );
}
