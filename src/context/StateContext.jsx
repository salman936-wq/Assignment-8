"use client";

import { createContext, useContext, useState } from "react";

const StateContext = createContext(null);

export function StateProvider({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <StateContext.Provider value={{ login, setLogin }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);