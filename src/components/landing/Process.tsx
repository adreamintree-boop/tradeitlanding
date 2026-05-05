const steps = [
  { n: "01", title: "제품 및 시장 분석", desc: "제품 특성과 타겟 시장을 분석하여 진출 전략을 수립합니다." },
  { n: "02", title: "바이어 발굴 및 선별", desc: "B/L 데이터와 AI를 활용해 가능성이 높은 바이어를 추립니다." },
  { n: "03", title: "컨택 및 응답 확보", desc: "이메일 발송과 후속 대응으로 실제 응답까지 만들어냅니다." },
];

export const Process = () => (
  <section id="process" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">PROCESS</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          진행 방식은 간단합니다
        </h2>
      </div>
      <div className="mt-16 relative grid md:grid-cols-3 gap-8 md:gap-6">
        <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s) => (
          <div key={s.n} className="reveal text-center">
            <div className="relative w-14 h-14 mx-auto rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-elevated animate-pulse-ring">
              {s.n}
            </div>
            <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-14 text-center text-muted-foreground reveal">
        복잡한 과정 없이 결과만 전달드립니다.
      </p>
    </div>
  </section>
);