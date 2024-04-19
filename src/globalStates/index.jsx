import { createContext, useContext } from "react";
import useFactory from "./_factory";

const Context = createContext();
export const useGlobalStates = () => useContext(Context);

const Index = ({ children }) => {
  const globalStates = {
    sort: useFactory("asc"),
    view: useFactory("big"),
  };

  return (
    <Context.Provider value={{ ...globalStates }}>{children}</Context.Provider>
  );
};

export default Index;
