"use client";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";
import { ACTION_TYPE } from "../../CartProvider";

function AddBtn({ product }: { product: Product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <button
      onClick={() => dispatch({ type: ACTION_TYPE.addItem, payload: product })}
      className="text-center py-3 font-bold text-white text-lg cursor-pointer bg-primary rounded"
    >
      Add to cartt
    </button>
  );
}

export default AddBtn;
