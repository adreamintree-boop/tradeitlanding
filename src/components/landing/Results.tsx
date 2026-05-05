const items = [
  { industry: "화장품", main: "3주 만에 12개 바이어 확보", sub: "추가로 2건 샘플 요청 발생" },
  { industry: "산업용 자재", main: "1개월 내 첫 수출 계약 체결", sub: "유럽 신규 시장 진출" },
  { industry: "식품", main: "이메일 응답률 18% 달성", sub: "업계 평균 대비 6배" },
];

export const Results = () => (
  <section className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">RESULTS</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          실제로 이런 결과가 만들어집니다
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal group rounded-3xl bg-card border border-border/70 p-8 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              {it.industry}
            </span>
            <p className="mt-6 text-2xl font-bold leading-snug">{it.main}</p>
            <p className="mt-3 text-muted-foreground">{it.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);