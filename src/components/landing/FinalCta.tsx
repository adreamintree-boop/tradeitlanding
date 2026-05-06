import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/tradeit-logo.png";
import { useRequestModal } from "./RequestModalContext";

export const FinalCta = () => {
  const { open } = useRequestModal();
  return (
  <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="reveal max-w-4xl mx-auto rounded-[2rem] bg-card border border-border/70 shadow-elevated p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            지금 우리 제품을 구매하고 있는
            <br />
            <span className="text-gradient-primary">실제 바이어를 확인</span>해보세요
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg">
            무료로 바이어 리스트를 확인하고, 가능성을 먼저 검증해보세요.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => open("무료 바이어 요청")}>
              무료 바이어 요청 <ArrowRight />
            </Button>
            <Button variant="soft" size="xl" className="w-full sm:w-auto" onClick={() => open("상담 신청")}>
              상담 신청
            </Button>
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