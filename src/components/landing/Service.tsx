import { Check, Sparkles } from "lucide-react";

const main = [
  "실제 구매 이력 있는 바이어 발굴",
  "담당자 정보 및 연락처 확보",
  "이메일 소통 및 컨택이력 기록 및 관리",
  "바이어 Inquiry 확보 및 전달",
];
const self = [
  "무역데이터 기반 바이어 검색",
  "기업 정보 및 담당자 연락처 검색",
  "CRM을 통한 바이어 현황 관리",
  "이메일 연동 및 이메일 송수신 기능",
];

export const Service = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">SERVICE</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          툴이 아니라, <span className="text-gradient-primary">결과를 제공</span>합니다
        </h2>
      </div>

      <div className="mt-14 max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 items-stretch">
        <div className="lg:col-span-3 reveal relative rounded-3xl p-8 md:p-10 bg-gradient-cta text-primary-foreground shadow-elevated overflow-hidden flex">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col w-full">
            <div className="inline-flex w-fit self-start items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" /> 대행 서비스
            </div>
            <h3 className="mt-5 text-2xl md:text-4xl font-bold leading-tight">
              우리가 대신 진행해드립니다
            </h3>
            <ul className="mt-8 mb-8 space-y-3">
              {main.map((m) => (
                <li key={m} className="flex items-center gap-3 text-base md:text-lg">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-sm md:text-base opacity-90 border-t border-white/20">
              해외영업 인력이 없어도 가능합니다
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 reveal rounded-3xl p-8 md:p-10 bg-card border border-border/70 shadow-card flex flex-col">
          <div className="inline-flex w-fit self-start items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            셀프 활용
          </div>
          <h3 className="mt-5 text-2xl font-bold leading-tight">직접 활용도 가능합니다</h3>
          <ul className="mt-8 mb-8 space-y-3">
            {self.map((m) => (
              <li key={m} className="flex items-center gap-3 text-base md:text-lg text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </span>
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-6 text-sm md:text-base text-muted-foreground border-t border-border/70">
            해외영업부서가 있는 조직에서 활용 가능합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);