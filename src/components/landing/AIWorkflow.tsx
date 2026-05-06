import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import enrichmentImg from "@/assets/workflow-enrichment.png";
import aiCoreImg from "@/assets/workflow-aicore.png";
import buyerFitImg from "@/assets/workflow-buyerfit.png";

const cards = [
  {
    title: "Enrichment",
    desc: "추출된 바이어를 대상으로\n기업 데이터를 보강합니다.",
    img: enrichmentImg,
  },
  {
    title: "AI CORE",
    desc: "유저 기업 정보를 바탕으로\n해외시장 진출 가능성을 분석합니다.",
    img: aiCoreImg,
  },
  {
    title: "Buyer Fit",
    desc: "AI CORE 정보를 기반으로\n해당 바이어의 영업 가능성을 분석합니다.",
    img: buyerFitImg,
  },
];

export const AIWorkflow = () => {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const len = cards.length;

  const next = useCallback(() => setActive((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setActive((i) => (i - 1 + len) % len), [len]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, paused]);

  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    return d;
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(110deg, hsl(38 60% 94%) 0%, hsl(38 50% 96%) 35%, hsl(210 70% 95%) 70%, hsl(205 80% 92%) 100%)",
      }}
    >
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-primary/30 text-primary text-xs font-semibold mb-6">
            Future Ready
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            AI를 통해 <span className="text-primary">해외영업 흐름</span>을 연결합니다.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            글로벌 시장 조사부터 바이어별 분석까지
            <br className="hidden md:block" />
            AI 기능을 통해 연락 여부를 미리 판단하세요.
          </p>
        </div>

        <div
          className="mt-16 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[480px] md:h-[520px] flex items-center justify-center">
            {cards.map((c, i) => {
              const d = offsetOf(i);
              const isActive = d === 0;
              const abs = Math.abs(d);
              const translatePct = d * 60;
              const scale = isActive ? 1 : 0.85;
              const opacity = isActive ? 1 : abs === 1 ? 0.55 : 0;
              const blur = isActive ? 0 : 2;
              const z = 10 - abs;
              return (
                <div
                  key={c.title}
                  className="absolute top-0 w-[300px] md:w-[380px] transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translatePct}%) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: z,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div
                    className={`group rounded-3xl bg-white border border-border/40 overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "shadow-[0_30px_80px_-20px_hsl(210_80%_40%/0.25)] hover:-translate-y-2"
                        : "shadow-xl"
                    }`}
                  >
                    <div className="aspect-[4/5] bg-gradient-to-br from-amber-50/40 to-sky-50/40 flex items-center justify-center p-6 overflow-hidden">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:p-8 text-center border-t border-border/40">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-border/40 flex items-center justify-center text-foreground hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-border/40 flex items-center justify-center text-foreground hover:scale-110 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="mt-10 flex items-center justify-center gap-2">
            {cards.map((c, i) => (
              <button
                key={c.title}
                aria-label={`Go to ${c.title}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};