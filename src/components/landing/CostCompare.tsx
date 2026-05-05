import { Check, X } from "lucide-react";

const rows = [
  {
    label: "비용",
    self: {
      head: "연 4,000만원 ~ 6,000만원+",
      sub: "(4대 보험 및 부대비용 별도)",
    },
    tradeit: {
      head: "월 990,000원~",
      sub: "대행 서비스로 부담 없이 시작",
    },
  },
  {
    label: "바이어 확보 시간",
    self: { head: "2주 ~ 3개월 이상", sub: "검색·검증·컨택까지 장기간 소요" },
    tradeit: { head: "즉시 확보 가능", sub: "검증된 바이어 데이터 즉시 제공" },
  },
  {
    label: "바이어 정확도",
    self: { head: "구글 검색 기반", sub: "추측 중심의 불확실한 타겟팅" },
    tradeit: { head: "실제 구매 이력 기반", sub: "수출입 거래 데이터로 검증" },
  },
  {
    label: "리스크",
    self: {
      head: "담당자 퇴사 시 업무 공백",
      sub: "감에 의존한 불확실한 영업 성과",
    },
    tradeit: {
      head: "리스크 Zero",
      sub: "실 수출 데이터 기반의 안정적 운영",
    },
  },
];

export const CostCompare = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">COMPARE</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight">
          해외영업, <span className="text-gradient-primary">직접 하면 얼마나 들까요?</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-base md:text-lg">
          인건비, 시간, 시행착오 비용까지 고려하면
          <br className="hidden md:block" />
          실제 비용은 생각보다 훨씬 큽니다
        </p>
      </div>

      <div className="mt-14 max-w-5xl mx-auto reveal">
        <div className="rounded-3xl border border-border/70 bg-card shadow-card overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-12 bg-muted/40 border-b border-border/70">
            <div className="col-span-4 md:col-span-3 p-5 md:p-6 text-sm font-semibold text-muted-foreground">
              비교 항목
            </div>
            <div className="col-span-4 md:col-span-4 p-5 md:p-6 text-center">
              <p className="text-sm md:text-base font-bold text-muted-foreground">직접 수행</p>
            </div>
            <div className="col-span-4 md:col-span-5 p-5 md:p-6 text-center bg-gradient-cta text-primary-foreground">
              <p className="text-sm md:text-base font-bold">TradeIt 이용 시</p>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-12 items-stretch group transition-smooth hover:bg-muted/30 ${
                i !== rows.length - 1 ? "border-b border-border/70" : ""
              }`}
            >
              <div className="col-span-4 md:col-span-3 p-5 md:p-7 flex items-center">
                <p className="text-sm md:text-base font-bold">{r.label}</p>
              </div>
              <div className="col-span-4 md:col-span-4 p-5 md:p-7 text-center flex flex-col justify-center items-center gap-1.5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4 shrink-0" />
                  <p className="text-base md:text-lg font-semibold">{r.self.head}</p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground/80">{r.self.sub}</p>
              </div>
              <div className="col-span-4 md:col-span-5 p-5 md:p-7 text-center bg-primary/5 border-l border-primary/10 flex flex-col justify-center items-center gap-1.5 group-hover:bg-primary/10 transition-smooth">
                <div className="flex items-center gap-2 text-primary">
                  <Check className="w-4 h-4 shrink-0" />
                  <p className="text-base md:text-xl font-bold">{r.tradeit.head}</p>
                </div>
                <p className="text-xs md:text-sm text-foreground/70">{r.tradeit.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm md:text-base text-muted-foreground reveal">
          ※ 직접 수행 시 발생하는 시간·시행착오 비용까지 고려하면 실제 격차는 더욱 커집니다.
        </p>
      </div>
    </div>
  </section>
);