"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CartContext, ACTION_TYPE } from "../app/CartProvider";

function ShopImage() {
  const { state, dispatch } = useContext(CartContext);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div
      onClick={() => {
        dispatch({ type: ACTION_TYPE.addURL, payload: pathName });
        router.push("/cart");
      }}
      className="w-6 h-6 cursor-pointer relative"
    >
      <img
        src="/shop-cart.svg"
        alt="shopCart"
        className="w-6 h-6 object-contain hover:scale-110 transition duration-200"
      />
      {state.products && state.products.length ? (
        <div className="w-4 h-4 text-center rounded-full bg-primary font-bold text-[10px] text-white absolute -top-1/4 right-0 z-[5]">
          {state.products.length}
        </div>
      ) : null}
    </div>
  );
}

export default ShopImage;
