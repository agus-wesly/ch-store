"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, useContext, useEffect } from "react";
import { CartContext } from "../CartProvider";
import { ACTION_TYPE } from "../CartProvider";

const CardItem = ({
  item,
  dispatch,
}: {
  item: cartItem;
  dispatch: Dispatch<any>;
}) => (
  <div className="flex items-center space-x-3 lg:space-x-5 bg-white pr-3 shadow-md">
    <div className="relative min-h-[120px] h-full w-[120px] ">
      <Image
        fill={true}
        className="object-contain"
        src={item.image}
        alt="cartImage"
      />
    </div>

    <div className="py-5 flex flex-col space-y-3 flex-1">
      <p className="text-gray-700 font-medium text-base">{item.title}</p>

      <p className="font-extrabold text-black text-lg">${item.price}</p>

      <div className="flex justify-between rounded items-center w-[130px] border-[1px] border-gray-200 p-1">
        <img
          src="/min.png"
          alt="min"
          className="cursor-pointer w-3 h-3 object-contain"
          onClick={() =>
            dispatch({
              type: ACTION_TYPE.decrItem,
              payload: item.id,
            })
          }
        />

        <p>{item.qty}</p>

        <img
          src="/plus.png"
          alt="plus"
          className="cursor-pointer w-3 h-3 object-contain"
          onClick={() =>
            dispatch({
              type: ACTION_TYPE.addItem,
              payload: { ...item, qty: item.qty + 1 },
            })
          }
        />
      </div>
    </div>

    <img
      src="/trashcan.png"
      alt="trashcan"
      className="w-6 h-6 object-contain cursor-pointer"
      onClick={() => dispatch({ type: ACTION_TYPE.delItem, payload: item.id })}
    />
  </div>
);

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.products));
  }, [state]);

  return (
    <>
      <div className="flex items-center p-5 pl-0 pt-20 md:pt-36 space-x-5">
        <div
          onClick={() => router.back()}
          className="text-lg font-bold cursor-pointer"
        >
          &#8592;
        </div>
        <h1 className="text-xl text-black/95 font-bold">
          <span className="text-primary font-extrabold">Cart</span> Menu
        </h1>
      </div>

      <div className="flex flex-col space-y-5 pb-20">
        {state.products && state.products.length ? (
          state.products.map((card) => (
            <CardItem key={card.id} item={card} dispatch={dispatch} />
          ))
        ) : (
          <p>Ooops... Your cart is empty</p>
        )}
      </div>

      <div className="fixed bottom-0 left-0  w-full p-10 py-3 pr-5 md:hidden flex justify-between items-center bg-white/70 backdrop-blur-xl">
        <div className="space-y-1">
          <p className="text-gray-700 font-medium text-base">Total Price</p>

          <h3 className="text-xl font-extrabold text-black ">
            $
            {!state.products ? (
              <span>0</span>
            ) : (
              state.products
                .map((prod) => prod.qty * prod.price)
                .reduce((sum, prod) => sum + prod, 0)
            )}
          </h3>
        </div>

        <button className="bg-primary cursor-pointer w-[152px] text-center px-4 py-2 rounded font-bold text-white">
          Buy Now
        </button>
      </div>
    </>
  );
}

export default Cart;
