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

export interface Transctions {
  name: string;
  value: string;
  operation: string;
  category: string;
  date: Date;
  id?: string;
}

interface GlobalContext {
  transactions?: Transctions[] | [];
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
  getLatestIncomeDate?: () => 0 | Date;
  getLatestOutcomeDate?: () => 0 | Date;
  getTransactionPeriod?: () => { latestDate: 0 | Date; firstDate: 0 | Date };
}

const initialValue = {};

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

  function getLatestIncomeDate() {
    return (
      transactions.length &&
      transactions.filter(el => el.operation === "in").length &&
      transactions
        .filter(el => el.operation === "in")
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))[0]
        .date
    );
  }

  function getLatestOutcomeDate() {
    return (
      transactions.length &&
      transactions.filter(el => el.operation === "out").length &&
      transactions
        .filter(el => el.operation === "out")
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))[0]
        .date
    );
  }

  function getTransactionPeriod() {
    return {
      latestDate:
        transactions.length &&
        transactions.sort(
          (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        )[0].date,
      firstDate:
        transactions.length &&
        transactions.sort(
          (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        )[transactions.length - 1].date,
    };
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
      getLatestIncomeDate,
      getLatestOutcomeDate,
      getTransactionPeriod,
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
      getLatestIncomeDate,
      getLatestOutcomeDate,
      getTransactionPeriod,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
