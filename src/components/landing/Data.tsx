const stats = [
  { value: "8B+", label: "글로벌 수출입 데이터" },
  { value: "60M+", label: "기업 데이터" },
  { value: "200+", label: "국가" },
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
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-10">
            <p className="text-5xl md:text-6xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-3 opacity-90">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center opacity-90 reveal">
        단순 검색 데이터가 아닌, 실제 거래 기반 데이터입니다.
      </p>
    </div>
  </section>
);