import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SeoCta = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="relative max-w-5xl mx-auto rounded-[2rem] bg-gradient-cta text-primary-foreground p-8 md:p-14 lg:p-16 overflow-hidden shadow-elevated">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-tight">
                더 많은 해외 바이어
                <br />
                정보를 확인해보세요.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed">
                회원가입 후 더 많은 해외 바이어 기업과
                <br className="hidden sm:block" />
                국가별 수요 데이터를 확인할 수 있습니다.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 transition-smooth">
                  <Link to="/login">해외 바이어 확인하기 <ArrowRight /></Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-6">
              <div className="text-xs font-semibold text-white/80 tracking-wider uppercase mb-4 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Locked Preview
              </div>
              <div className="space-y-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold blur-[3px] select-none">PT XXXX****** GLOBAL</div>
                      <div className="text-[11px] blur-[3px] select-none mt-0.5">Vietnam · 38 shipments</div>
                    </div>
                    <div className="text-sm font-bold blur-[3px] select-none tabular-nums ml-3">$2.4M</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-xs text-white/70">
                회원가입 시 전체 바이어 정보가 공개됩니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};