"use client";

import { createContext, ReactNode, useReducer } from "react";

interface initialState {
  products: cartItem[] | null;
}
export const ACTION_TYPE: {
  addItem: "ADD";
  decrItem: "DECREASE";
  delItem: "REMOVE";
} = {
  addItem: "ADD",
  decrItem: "DECREASE",
  delItem: "REMOVE",
};

type Action =
  | { type: typeof ACTION_TYPE.delItem; payload: number }
  | { type: typeof ACTION_TYPE.decrItem; payload: number }
  | { type: typeof ACTION_TYPE.addItem; payload: cartItem };

const initialState: initialState = {
  products: JSON.parse(localStorage.getItem("cart") || "null"),
};

export const CartContext = createContext<{
  state: initialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: initialState, action: Action) => {
  const { products } = state;
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
            products: products.map((pro, i) => {
              if (i === found) {
                return { ...pro, ...action.payload };
              }
              return pro;
            }),
          };
        }
        return {
          products: [...products, { ...action.payload, qty: 1 }],
        };
      }
      return {
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
          products: products.filter((prod) => prod.id !== findProd.id),
        };
      }

      console.log("Executed");

      return {
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

    case "REMOVE":
      if (!products?.length) return state;
      return {
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
      {children}
    </CartContext.Provider>
  );
}

// {
//   "products": {
//     "products": [
//       {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "qty": 2
//       }
//     ]
//   }
// }
