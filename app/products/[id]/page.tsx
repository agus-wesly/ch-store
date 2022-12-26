"use client";
import { useContext } from "react";
import { authContext } from "../../ProviderAuth";

const page = () => {
  const { state } = useContext(authContext);
  console.log(state);

  return (
    <div>
      {state.credit ? (
        <h1>You already logged in</h1>
      ) : (
        <h1>You aren't logged in</h1>
      )}
    </div>
  );
};

export default page;
