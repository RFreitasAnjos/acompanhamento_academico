"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AsideContextType {
  isOpen: boolean;
  openAside: () => void;
  closeAside: () => void;
  toggleAside: () => void;
}

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);
  const toggleAside = () => setIsOpen(!isOpen);

  return (
    <AsideContext.Provider value={{ isOpen, openAside, closeAside, toggleAside }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAside() {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error("useAside must be used within AsideProvider");
  }
  return context;
}
