"use client";

import React, { useReducer, createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

const initialState: InitState = {
  credit:
    typeof window !== "undefined"
      ? JSON.parse(localStorage?.getItem("credit") || "null")
      : null,
};

const reducer = (state: InitState, action: Action): InitState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        credit: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        credit: null,
      };

    default:
      return state;
  }
};

export const authContext = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

export const useAuthContext = () => useContext(authContext);

const ProviderAuth = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      <SessionProvider>{children}</SessionProvider>
    </authContext.Provider>
  );
};

export default ProviderAuth;
