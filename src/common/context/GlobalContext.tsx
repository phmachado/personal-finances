import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import api from "../services/api";

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface Transctions {
  name: string;
  value: number;
  operation: string;
  category: string;
  date: Date;
  id: string;
}

interface GlobalContext {
  transactions: Transctions[] | [];
  setTransactions?: Dispatch<SetStateAction<Transctions[]>>;
}

const initialValue = { transactions: [] };

export const GlobalContext = createContext<GlobalContext>(initialValue);

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [transactions, setTransactions] = useState<Transctions[]>([]);

  async function getTransactions() {
    return await api.get<Transctions[]>("transactions");
  }

  useEffect(() => {
    getTransactions()
      .then(res => {
        if (res?.data) {
          setTransactions(res?.data);
        }
      })
      .catch(err => console.log("Error", err));
  }, []);

  const value = useMemo(
    () => ({ transactions, setTransactions }),
    [transactions, setTransactions]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
