import Link from "next/link";
const page = () => {
  return (
    <div>
      <Link href={"/products/2"}>Go to single page</Link> <br />
      <Link href={"/auth"}>Login</Link>
    </div>
  );
};

export default page;
