import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Compare } from "@/components/landing/Compare";
import { AIWorkflow } from "@/components/landing/AIWorkflow";
import { Together } from "@/components/landing/Together";
import { Data } from "@/components/landing/Data";
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
        <Compare />
        <AIWorkflow />
        <Data />
        <Together />
        <Pricing variant="saas" />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
