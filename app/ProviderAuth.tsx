"use client";

import React, { useReducer, createContext } from "react";

const initialState: InitState = {
  credit: JSON.parse(localStorage.getItem("credit") || "null"),
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
  dispatch: () => null,
});

const ProviderAuth = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default ProviderAuth;
