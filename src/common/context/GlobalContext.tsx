import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AxiosResponse } from "axios";

import api from "../services/api";

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface Transctions {
  name: string;
  value: string;
  operation: string;
  category: string;
  date: Date;
  id?: string;
}

interface GlobalContext {
  transactions: Transctions[] | [];
  setTransactions?: Dispatch<SetStateAction<Transctions[]>>;
  createTransaction?: (
    data: Transctions
  ) => Promise<AxiosResponse<Transctions[]>>;
  getTransactions?: () => Promise<AxiosResponse<Transctions[]>>;
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

  async function createTransaction(data: Transctions) {
    return await api.post<Transctions[]>("transactions", data);
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
    () => ({
      transactions,
      setTransactions,
      createTransaction,
      getTransactions,
    }),
    [transactions, setTransactions, createTransaction, getTransactions]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
