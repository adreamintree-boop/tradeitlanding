import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { RequestModal } from "./RequestModal";

interface Ctx {
  open: (title?: string, plan?: string) => void;
}

const RequestModalContext = createContext<Ctx | null>(null);

export const RequestModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("무료 바이어 요청");
  const [plan, setPlan] = useState<string | undefined>(undefined);
  const open = useCallback((nextTitle?: string, nextPlan?: string) => {
    setTitle(nextTitle ?? "무료 바이어 요청");
    setPlan(nextPlan);
    setIsOpen(true);
  }, []);
  return (
    <RequestModalContext.Provider value={{ open }}>
      {children}
      <RequestModal open={isOpen} onOpenChange={setIsOpen} title={title} selectedPlan={plan} />
    </RequestModalContext.Provider>
  );
};

export const useRequestModal = () => {
  const ctx = useContext(RequestModalContext);
  if (!ctx) throw new Error("useRequestModal must be used within RequestModalProvider");
  return ctx;
};