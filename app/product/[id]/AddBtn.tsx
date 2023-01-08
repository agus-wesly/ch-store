"use client";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";
import { ACTION_TYPE } from "../../CartProvider";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AddBtn({ product }: { product: Product }) {
  const router = useRouter();
  const { dispatch } = useContext(CartContext);
  const { data: session } = useSession();
  const pathName = usePathname();

  const handleBtn = () => {
    if (!session?.user) {
      dispatch({ type: ACTION_TYPE.addURL, payload: pathName });

      router.replace("/auth");
    } else {
      dispatch({ type: ACTION_TYPE.addItem, payload: product });
    }
  };

  return (
    <button
      onClick={handleBtn}
      className="text-center py-3 font-bold text-white text-lg cursor-pointer bg-primary rounded"
    >
      Add to cartt
    </button>
  );
}

export default AddBtn;
