import fetchers from "../../../utils";
import Navbar from "../../Navbar";
import Link from "next/link";
import Product from "../../../components/Product";

interface IProps {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }: IProps) {
  const allProduct: Product[] = await fetchers("products");

  //Filter all data based on slug
  const searchProduct = allProduct.filter((prod) => {
    return (
      prod.title
        .toLowerCase()
        .includes(slug.replace("%20", " ").toLowerCase()) ||
      prod.category.toLowerCase() === slug.replace("%20", " ").toLowerCase()
    );
  });

  if (!searchProduct) return <p>Not found...</p>;

  return (
    <div className="max-w-6xl mx-auto pb-5">
      <Navbar isShowSearch={true} />
      <div className="flex items-center p-5 pt-10 md:pt-36 space-x-5">
        <Link href={"/"} className="text-lg font-bold cursor-pointer">
          &#8592;
        </Link>
        <h1 className="font-bold text-black text-lg md:text-xl">
          <span className="text-primary capitalize">
            {slug.replace("%20", " ")}
          </span>{" "}
          Category
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 px-5">
        {searchProduct?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
