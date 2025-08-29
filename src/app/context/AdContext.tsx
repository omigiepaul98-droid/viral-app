"use client";
import { createContext, useState, useContext } from "react";

type Ad = {
  id: number;
  title: string;
  description: string;
};

type AdContextType = {
  ads: Ad[];
  addAd: (title: string, description: string) => void;
};

const AdContext = createContext<AdContextType | undefined>(undefined);

export function AdProvider({ children }: { children: React.ReactNode }) {
  const [ads, setAds] = useState<Ad[]>([
    { id: 1, title: "Follow @brand1", description: "Earn 5 coins for following." },
    { id: 2, title: "Like this video", description: "Earn 5 coins for liking." },
  ]);

  const addAd = (title: string, description: string) => {
    setAds((prev) => [...prev, { id: prev.length + 1, title, description }]);
  };

  return (
    <AdContext.Provider value={{ ads, addAd }}>
      {children}
    </AdContext.Provider>
  );
}

export function useAds() {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error("useAds must be used inside AdProvider");
  }
  return context;
}
