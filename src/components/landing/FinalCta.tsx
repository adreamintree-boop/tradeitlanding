import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCta = () => (
  <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="reveal max-w-4xl mx-auto rounded-[2rem] bg-card border border-border/70 shadow-elevated p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            지금, 우리 제품으로
            <br />
            <span className="text-gradient-primary">실제 바이어를 확인</span>해보세요
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg">
            무료로 바이어 리스트를 확인하고, 가능성을 먼저 검증해보세요.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hello@tradeit.kr">무료 리서치 요청 <ArrowRight /></a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="mailto:hello@tradeit.kr">상담 신청</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="border-t border-border/60 py-10 bg-background">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-gradient-primary" />
        <span className="font-semibold text-foreground">TradeIt</span>
        <span>· 해외영업을 대신해드립니다</span>
      </div>
      <p>© {new Date().getFullYear()} TradeIt. All rights reserved.</p>
    </div>
  </footer>
);