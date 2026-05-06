import { ArrowRight, Database, ShieldCheck, Users } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { SuccessCases } from "@/components/landing/SuccessCases";
import { Process } from "@/components/landing/Process";
import { CostCompare } from "@/components/landing/CostCompare";
import { Together } from "@/components/landing/Together";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta, Footer } from "@/components/landing/FinalCta";
import { Button } from "@/components/ui/button";
import { useRequestModal } from "@/components/landing/RequestModalContext";
import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  {
    icon: Database,
    title: "B/L 데이터 기반 발굴",
    desc: "실제 수출입 거래 이력으로 검증된 바이어만 컨택합니다.",
  },
  {
    icon: Users,
    title: "전담 영업 인력 운영",
    desc: "해외영업 경험을 갖춘 전문 인력이 직접 컨택과 협상을 수행합니다.",
  },
  {
    icon: ShieldCheck,
    title: "단순 DB 제공이 아닙니다",
    desc: "발굴부터 컨택, 응답 관리까지 실제 결과를 책임집니다.",
  },
];

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
                EXPORT AGENCY · 해외영업 대행 서비스
              </div>
              <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] reveal">
                우리가 대신
                <br />
                <span className="text-gradient-primary">해외 바이어를 발굴합니다</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed reveal">
                B/L 데이터와 전담 인력을 결합하여 실제 바이어 컨택부터 계약까지
                <br className="hidden md:block" />
                해외영업의 모든 과정을 대신 수행합니다.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center reveal">
                <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => open("해외영업 대행 상담 신청")}>
                  상담 신청하기 <ArrowRight />
                </Button>
                <Button variant="soft" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="#pricing">대행 상품 보기</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <SuccessCases />
        <Process />

        {/* Why TradeIt */}
        <section className="py-24 md:py-32 bg-gradient-soft">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center reveal">
              <p className="text-sm font-semibold text-primary mb-3">WHY TRADEIT</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                왜 <span className="text-gradient-primary">TradeIt</span> 인가요?
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="reveal rounded-3xl bg-card border border-border/70 p-8 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-5">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CostCompare />
        <Together />
        <Pricing variant="agency" />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default ExportAgency;