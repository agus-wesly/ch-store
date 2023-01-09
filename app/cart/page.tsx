"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, useContext, useEffect } from "react";
import { CartContext, ACTION_TYPE } from "../CartProvider";
import { useSession } from "next-auth/react";

const CardItem = ({
  item,
  dispatch,
}: {
  item: cartItem;
  dispatch: Dispatch<any>;
}) => (
  <div className="flex items-center space-x-3 lg:space-x-5 bg-white pr-3 md:px-3 md:h-[178px] shadow-md">
    <div className="relative min-h-[120px] h-full w-[120px]  ">
      <Image
        fill={true}
        className="object-contain"
        src={item.image}
        alt="cartImage"
      />
    </div>

    <div className="py-5 flex flex-col space-y-3 flex-1 md:border-l-[1px] md:pl-3 md:border-gray-200">
      <p className="text-gray-900 font-medium max-w-[80%] line-clamp-2 text-base md:text-lg">
        {item.title}
      </p>

      <p className="font-extrabold text-black text-lg md:text-xl">
        ${item.price}
      </p>

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
  const { data: session } = useSession();

  useEffect(() => {
    session?.user &&
      localStorage.setItem("cart", JSON.stringify(state.products));
  }, [state, session]);

  useEffect(() => {
    let timeOut: NodeJS.Timeout | undefined;
    if (!session?.user) {
      timeOut = setTimeout(() => {
        dispatch({ type: ACTION_TYPE.addURL, payload: "/cart" });
        router.replace("/auth");
      }, 3000);
    }
    return () => {
      timeOut && clearTimeout(timeOut);
    };
  }, [session]);

  if (!session)
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <h1 className="text-center text-xl md:text-2xl font-bold flex items-center justify-center min-h-screen">
          Loading...
        </h1>
      </div>
    );

  return (
    <>
      <div className="flex items-center p-5 pl-0 pt-20 md:pt-28 space-x-5">
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

      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex flex-col space-y-5 pb-20 md:flex-1">
          {state.products && state.products.length ? (
            state.products.map((card) => (
              <CardItem key={card.id} item={card} dispatch={dispatch} />
            ))
          ) : (
            <p>Ooops... Your cart is empty</p>
          )}
        </div>

        <div className="hidden md:flex min-w-[381px] self-start bg-white shadow-md space-y-5 p-5 flex-col">
          <h3 className="font-bold text-lg text-black">Summary</h3>

          <div className="space-y-3 flex flex-col ">
            <div className="flex justify-between items-center text-gray-600 text-base">
              <h4>Total Product</h4>
              <p>{state.products?.length || 0}</p>
            </div>

            <div className="flex justify-between items-center text-xl font-bold text-gray-900">
              <h4>Total Price</h4>
              <p>
                $
                {!state.products ? (
                  <span>0</span>
                ) : (
                  Math.floor(
                    state.products
                      .map((prod) => prod.qty * prod.price)
                      .reduce((sum, prod) => sum + prod, 0) * 10
                  ) / 10
                )}
              </p>
            </div>
          </div>

          <button
            disabled={!state.products?.length}
            className="bg-primary disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer w-full text-center px-4 py-2 rounded font-bold text-white"
          >
            Buy ( {state.products ? state.products.length : 0} )
          </button>
        </div>

        <div className="fixed bottom-0 z-[3] left-0 w-full p-10 py-3 pr-5 md:hidden flex justify-between items-center bg-white/70 backdrop-blur-xl">
          <div className="space-y-1">
            <p className="text-gray-700 font-medium text-base">Total Price</p>

            <h3 className="text-xl font-extrabold text-black ">
              $
              {!state.products ? (
                <span>0</span>
              ) : (
                Math.floor(
                  state.products
                    .map((prod) => prod.qty * prod.price)
                    .reduce((sum, prod) => sum + prod, 0) * 10
                ) / 10
              )}
            </h3>
          </div>

          <button className="bg-primary cursor-pointer w-[152px] text-center px-4 py-2 rounded font-bold text-white">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
