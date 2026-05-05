import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Compare } from "@/components/landing/Compare";
import { Service } from "@/components/landing/Service";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { Data } from "@/components/landing/Data";
import { CostCompare } from "@/components/landing/CostCompare";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta, Footer } from "@/components/landing/FinalCta";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Compare />
        <Service />
        <Results />
        <Process />
        <Data />
        <CostCompare />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
