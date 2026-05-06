import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/tradeit-logo.png";
import { useRequestModal } from "./RequestModalContext";
import buyerNetwork from "@/assets/cta-buyer-network.png";
import aiBuyerFit from "@/assets/cta-ai-buyer-fit.png";
import aiCore from "@/assets/cta-ai-core.png";
import companyInfo from "@/assets/cta-company-info.png";

export const FinalCta = () => {
  const { open } = useRequestModal();
  return (
  <section id="contact" className="py-20 md:py-28">
    <div className="container">
      <div
        className="reveal relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border/60 shadow-card px-6 sm:px-10 md:px-14 py-12 md:py-20"
        style={{
          background:
            "linear-gradient(115deg, hsl(36 100% 96%) 0%, hsl(0 0% 100%) 45%, hsl(214 100% 97%) 100%)",
        }}
      >
        <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-[hsl(36_100%_88%)]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2]">
              <span className="text-gradient-primary">검증된 바이어</span>를
              <br />
              찾아보세요
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              지금 무료로 B/L 검색과 AI 바이어 분석을
              <br className="hidden sm:block" />
              시작할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto rounded-2xl"
                onClick={() => open("무료 바이어 요청")}
              >
                무료 바이어 요청 <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Right product preview collage */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] md:h-[500px]">
            {/* Main: buyer network */}
            <div className="absolute top-0 left-0 right-4 sm:right-12 rounded-2xl overflow-hidden bg-white border border-border/70 shadow-elevated animate-float-slow">
              <img
                src={buyerNetwork}
                alt="Top 5 Trading Companies and Shipping Activity"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            {/* Floating: AI Buyer Fit (right) */}
            <div
              className="hidden sm:block absolute -right-2 sm:right-0 top-24 sm:top-32 w-[44%] sm:w-[40%] rounded-2xl overflow-hidden bg-white border border-border/70 shadow-elevated"
              style={{ animation: "float-slow 7s ease-in-out infinite", animationDelay: "0.6s" }}
            >
              <img src={aiBuyerFit} alt="AI Buyer Fit panel" className="w-full h-auto block" loading="lazy" />
            </div>

            {/* Floating: AI Core (bottom-left) */}
            <div
              className="absolute bottom-0 left-0 sm:left-6 w-[78%] sm:w-[58%] rounded-2xl overflow-hidden bg-white border border-border/70 shadow-elevated"
              style={{ animation: "float-slow 8s ease-in-out infinite", animationDelay: "1.2s" }}
            >
              <img src={aiCore} alt="AI Core analysis" className="w-full h-auto block" loading="lazy" />
            </div>

            {/* Floating: Company info (bottom-right) */}
            <div
              className="hidden md:block absolute bottom-6 right-0 w-[42%] rounded-2xl overflow-hidden bg-white border border-border/70 shadow-elevated"
              style={{ animation: "float-slow 9s ease-in-out infinite", animationDelay: "1.8s" }}
            >
              <img src={companyInfo} alt="CRM Company Info" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export const Footer = () => (
  <footer className="w-full border-t border-border/60 bg-muted/50">
    <div className="container py-10 md:py-12">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-sm text-muted-foreground text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <img src={logo} alt="TradeIt" className="h-6 w-auto" />
          <span className="text-muted-foreground/80">
            © {new Date().getFullYear()} TradeIt. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7">
          <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-foreground transition-smooth">이용약관</a>
            <a href="#" className="hover:text-foreground transition-smooth">개인정보처리방침</a>
          </nav>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-background hover:-translate-y-0.5 transition-smooth"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);