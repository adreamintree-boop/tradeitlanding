import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { RequestModal } from "./RequestModal";

interface Ctx {
  open: () => void;
}

const RequestModalContext = createContext<Ctx | null>(null);

export const RequestModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  return (
    <RequestModalContext.Provider value={{ open }}>
      {children}
      <RequestModal open={isOpen} onOpenChange={setIsOpen} />
    </RequestModalContext.Provider>
  );
};

export const useRequestModal = () => {
  const ctx = useContext(RequestModalContext);
  if (!ctx) throw new Error("useRequestModal must be used within RequestModalProvider");
  return ctx;
};