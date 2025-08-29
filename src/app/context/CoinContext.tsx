"use client";
import { createContext, useState, useContext } from "react";

type CoinContextType = {
  coins: number;
  addCoins: (amount: number) => void;
};

const CoinContext = createContext<CoinContextType | undefined>(undefined);

export function CoinProvider({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState(0);

  const addCoins = (amount: number) => {
    setCoins((prev) => prev + amount);
  };

  return (
    <CoinContext.Provider value={{ coins, addCoins }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoins must be used inside CoinProvider");
  }
  return context;
}
