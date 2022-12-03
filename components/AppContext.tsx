// @ts-nocheck
import { createContext, createRef, useContext } from "react";

const AppContext = createContext();
const introRef = createRef();
const productRef = createRef();
const contactRef = createRef();

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <AppContext.Provider value={{
      introRef,
      productRef,
      contactRef,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
