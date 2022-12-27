"use client";

import React, { useReducer, createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const ProviderAuth = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

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

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default ProviderAuth;
