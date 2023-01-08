"use client";

import { createContext, ReactNode, useReducer } from "react";
import { SessionProvider } from "next-auth/react";

interface initialState {
  products: cartItem[] | null;
  prevUrl: string;
}
export const ACTION_TYPE: {
  addItem: "ADD";
  decrItem: "DECREASE";
  delItem: "REMOVE";
  addURL: "ADD_URL";
  removeURL: "REMOVE_URL";
} = {
  addItem: "ADD",
  decrItem: "DECREASE",
  delItem: "REMOVE",
  addURL: "ADD_URL",
  removeURL: "REMOVE_URL",
};

type Action =
  | { type: typeof ACTION_TYPE.delItem; payload: number }
  | { type: typeof ACTION_TYPE.decrItem; payload: number }
  | { type: typeof ACTION_TYPE.addItem; payload: cartItem }
  | { type: typeof ACTION_TYPE.addURL; payload: string }
  | { type: typeof ACTION_TYPE.removeURL };

const initialState: initialState = {
  products: JSON.parse(localStorage.getItem("cart") || "null"),
  prevUrl: "",
};

export const CartContext = createContext<{
  state: initialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: initialState, action: Action) => {
  const { products, prevUrl } = state;
  switch (action.type) {
    case "ADD":
      if (products?.length && state.products !== null) {
        //Find the item in array
        const found = products.findIndex(
          (prod) => prod.id === action.payload.id
        );

        //If found then update the array
        if (found >= 0) {
          return {
            prevUrl,
            products: products.map((pro, i) => {
              if (i === found) {
                return { ...pro, ...action.payload };
              }
              return pro;
            }),
          };
        }
        return {
          prevUrl,
          products: [...products, { ...action.payload, qty: 1 }],
        };
      }
      return {
        prevUrl,
        products: [{ ...action.payload, qty: 1 }],
      };
    case "DECREASE":
      if (!products) return state;
      //Find the product in array
      const findProd = products.find((prod) => prod.id === action.payload);
      if (!findProd) return state;

      //Check if the product qty is 1, if yes then remove it
      if (findProd.qty === 1) {
        return {
          prevUrl,
          products: products.filter((prod) => prod.id !== findProd.id),
        };
      }

      return {
        prevUrl,
        products: products.map((prod) => {
          if (prod === findProd) {
            return {
              ...findProd,
              qty: findProd.qty - 1,
            };
          }
          return prod;
        }),
      };

    case "ADD_URL":
      return {
        products,
        prevUrl: action.payload,
      };

    case "REMOVE_URL":
      return {
        products,
        prevUrl: "",
      };

    case "REMOVE":
      if (!products?.length) return state;
      return {
        prevUrl,
        products: products.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <SessionProvider>{children}</SessionProvider>
    </CartContext.Provider>
  );
}
