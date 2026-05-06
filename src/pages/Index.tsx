import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Compare } from "@/components/landing/Compare";
import { Service } from "@/components/landing/Service";
import { SuccessCases } from "@/components/landing/SuccessCases";
import { Together } from "@/components/landing/Together";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { Data } from "@/components/landing/Data";
import { CostCompare } from "@/components/landing/CostCompare";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta, Footer } from "@/components/landing/FinalCta";
import { RequestModalProvider } from "@/components/landing/RequestModalContext";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <RequestModalProvider>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Compare />
        <Results />
        <Process />
        <Data />
        <CostCompare />
        <SuccessCases />
        <Together />
        <Service />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
    </RequestModalProvider>
  );
};

export default Index;
