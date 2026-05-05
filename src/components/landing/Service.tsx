import { Check, Sparkles } from "lucide-react";

const main = [
  "바이어 발굴 및 필터링",
  "담당자 정보 확보",
  "이메일 발송 및 관리",
  "응답 바이어 전달",
];
const self = ["바이어 검색", "CRM 관리", "이메일 송수신"];

export const Service = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">SERVICE</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          툴이 아니라, <span className="text-gradient-primary">결과를 제공</span>합니다
        </h2>
      </div>

      <div className="mt-14 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 reveal relative rounded-3xl p-8 md:p-12 bg-gradient-cta text-primary-foreground shadow-elevated overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" /> 대행 서비스
            </div>
            <h3 className="mt-5 text-2xl md:text-4xl font-bold leading-tight">
              우리가 대신 진행해드립니다
            </h3>
            <ul className="mt-8 space-y-3">
              {main.map((m) => (
                <li key={m} className="flex items-center gap-3 text-base md:text-lg">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm md:text-base opacity-90 border-t border-white/20 pt-5">
              해외영업 인력이 없어도 가능합니다
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 reveal rounded-3xl p-8 md:p-10 bg-card border border-border/70 shadow-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            셀프 활용
          </div>
          <h3 className="mt-5 text-2xl font-bold">직접 활용도 가능합니다</h3>
          <ul className="mt-6 space-y-3">
            {self.map((m) => (
              <li key={m} className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);