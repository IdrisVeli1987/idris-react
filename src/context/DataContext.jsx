import { createContext } from "react";

let human = {
  age: 35,
  name: "Idris",
};
export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={human}>
    {children}
     </DataContext.Provider>;
};
