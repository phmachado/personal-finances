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
  totalIncome?: () => string;
  totalOutcome?: () => string;
  totalBalance?: () => string;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}

const initialValue = { transactions: [] };

export const GlobalContext = createContext<GlobalContext>(initialValue);

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [transactions, setTransactions] = useState<Transctions[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getTransactions() {
    return await api.get<Transctions[]>("transactions");
  }

  async function createTransaction(data: Transctions) {
    return await api.post<Transctions[]>("transactions", data);
  }

  function totalIncome() {
    return String(
      transactions
        .filter(el => el.operation === "in")
        .reduce((accumulator, object) => {
          return accumulator + Number(object.value);
        }, 0)
    );
  }

  function totalOutcome() {
    return String(
      transactions
        .filter(el => el.operation === "out")
        .reduce((accumulator, object) => {
          return accumulator + Number(object.value);
        }, 0)
    );
  }

  function totalBalance() {
    return String(Number(totalIncome()) - Number(totalOutcome()));
  }

  useEffect(() => {
    setLoading(true);
    getTransactions()
      .then(res => {
        if (res?.data) {
          setTransactions(res?.data);
          setLoading(false);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log("Error", err);
        setLoading(false);
      });
  }, []);

  const value = useMemo(
    () => ({
      transactions,
      setTransactions,
      createTransaction,
      getTransactions,
      totalIncome,
      totalOutcome,
      totalBalance,
      loading,
      setLoading,
    }),
    [
      transactions,
      setTransactions,
      createTransaction,
      getTransactions,
      totalIncome,
      totalOutcome,
      totalBalance,
      loading,
      setLoading,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
