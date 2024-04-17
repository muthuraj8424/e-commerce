import { createContext, useContext, useReducer } from "react";

export const Context = createContext();
export const ShopProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStatevalue = () => useContext(Context);
