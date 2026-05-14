import { ArrowRight } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { SuccessCases } from "@/components/landing/SuccessCases";
import { Process } from "@/components/landing/Process";
import { CostCompare } from "@/components/landing/CostCompare";
import { Together } from "@/components/landing/Together";
import { AgencyProblem } from "@/components/landing/AgencyProblem";
import { AgencySolution } from "@/components/landing/AgencySolution";
import { DataDrivenSalesFlow } from "@/components/landing/DataDrivenSalesFlow";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/FinalCta";
import { AgencyCta } from "@/components/landing/AgencyCta";
import { Button } from "@/components/ui/button";
import { useRequestModal } from "@/components/landing/RequestModalContext";
import { useReveal } from "@/hooks/use-reveal";

const ExportAgency = () => {
  useReveal();
  const { open } = useRequestModal();
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-soft">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6 reveal">
                해외영업실행 서비스
              </div>
              <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] reveal whitespace-pre-line break-keep">
                수출로 이어지지 않던 해외영업,
                <br />
                <span className="text-gradient-primary">트레이드잇과 함께하세요</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed reveal whitespace-pre-line">
                글로벌 무역데이터와 해외영업 전담 인력을 결합하여
                {"\n"}
                실제 바이어 컨택부터 계약까지 해외영업의 모든 과정을 대신 수행합니다.
              </p>
              <div className="mt-9 flex justify-center reveal">
                <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => open("해외영업 대행 상담 신청")}>
                  상담 신청하기 <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Together />
        <AgencyProblem />
        <AgencySolution />
        <SuccessCases />
        <Process />
        <DataDrivenSalesFlow />
        <CostCompare />
        <Pricing variant="agency" />
        <Faq />
        <AgencyCta />
      </main>
      <Footer />
    </div>
  );
};

export default ExportAgency;