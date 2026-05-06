const stats = [
  {
    value: "60M+",
    title: "6천만개 수출입 기업",
    desc: "전 세계 6천만 개 이상의 수출입 기업을 식별하고\n거래 맥락까지 연결하여 분석할 수 있습니다.",
  },
  {
    value: "8B+",
    title: "80억건 이상의 무역데이터",
    desc: "전 세계 200개 이상 국가의 세관·선적 데이터를 기반으로 \n글로벌 무역 흐름을 포착합니다.",
  },
  {
    value: "200+",
    title: "200개 이상의 국가",
    desc: "전 세계 200개 이상 국가의 세관·선적 데이터를 기반으로 글로벌 무역 흐름을 포착합니다.",
  },
];

export const Data = () => (
  <section className="py-24 md:py-32 bg-gradient-cta text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold opacity-90 mb-3">DATA</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          실제 데이터를 기반으로 합니다
        </h2>
        <p className="mt-4 opacity-90 text-base md:text-lg">
          단순 검색 데이터가 아닌, 실제 거래 기반 데이터입니다
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.title} className="text-center rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-10">
            <p className="text-5xl md:text-6xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-4 text-lg md:text-xl font-semibold">{s.title}</p>
            <p className="mt-3 text-sm opacity-80 leading-relaxed whitespace-pre-line">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);