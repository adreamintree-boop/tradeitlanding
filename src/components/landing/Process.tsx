const steps = [
  {
    n: "01",
    label: "Market Analysis",
    title: "제품 및 시장 분석",
    desc: "귀사의 제품 경쟁력과 적합한 해외 시장을 분석하여\n산업 특성과 국가별 수요에 맞는\n실행 가능한 해외영업 방향을 설계합니다.",
  },
  {
    n: "02",
    label: "Buyer Outreach",
    title: "실제 바이어 발굴 및 컨택",
    desc: "글로벌 무역데이터와 실제 거래 이력을 기반으로\n구매 가능성이 높은 바이어를 선별하고\n담당자 컨택 및 초기 커뮤니케이션을 진행합니다.",
  },
  {
    n: "03",
    label: "Sales Operation",
    title: "영업 진행 및 후속 관리",
    desc: "문의 대응, 미팅 조율,\n견적 및 후속 커뮤니케이션까지\n실제 해외영업 진행 과정을\n체계적으로 운영하고 관리합니다.",
  },
];

export const Process = () => (
  <section id="process" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary mb-4 uppercase">HOW</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.25]">
          바이어 발굴부터 수출까지
          <br />
          여정을 이렇게 진행합니다.
        </h2>
      </div>
      <div className="mt-20 relative grid md:grid-cols-3 gap-10 md:gap-8">
        <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s) => (
          <div key={s.n} className="reveal group relative rounded-2xl border border-border/60 bg-card p-8 md:p-9 shadow-sm hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 shrink-0 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-elevated">
                {s.n}
              </div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary/80">
                {s.label}
              </span>
            </div>
            <h3 className="mt-7 text-xl md:text-2xl font-bold tracking-tight leading-snug">
              {s.title}
            </h3>
            <div className="mt-5 h-px w-10 bg-primary/40" />
            <p className="mt-5 text-[15px] text-muted-foreground leading-[1.85] whitespace-pre-line break-keep">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-16 text-center text-muted-foreground reveal break-keep">
        전담 인력이 전 과정을 직접 운영하여, 결과로 이어지는 해외영업을 만들어냅니다.
      </p>
    </div>
  </section>
);