import { Search, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sample = [
  { co: "Bellevue Cosmetics", country: "🇺🇸 USA", product: "Vitamin C Serum", history: "12 shipments / 2024" },
  { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", product: "Niacinamide Serum", history: "8 shipments / 2024" },
  { co: "Lumière Paris", country: "🇫🇷 France", product: "Skincare Set", history: "21 shipments / 2024" },
  { co: "Sakura Trading", country: "🇯🇵 Japan", product: "Facial Serum", history: "15 shipments / 2024" },
];

const keywordsTop = [
  "hydraulic excavator", "electric vehicle", "Steel Pipe", "energy storage system",
  "tableware set", "soybean", "pork belly", "polyester yarn", "wind turbine",
];
const keywordsBottom = [
  "patient monitor", "sofa set", "lipstick", "kitchen cabinet", "sheet mask",
  "Polyethylene resin", "body lotion", "Stainless pipe", "shampoo",
];

export const Hero = () => {
  const [query, setQuery] = useState("vitamin c serum");
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary-glow/20 blur-3xl animate-float-slow" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6 reveal">
            <Sparkles className="w-3.5 h-3.5" />
            B/L 데이터 × AI 기반 바이어 발굴 플랫폼
          </div>
          <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] reveal">
            해외 바이어, 직접 찾지 마세요.
            <br />
            <span className="text-gradient-primary">데이터로 연결됩니다.</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed reveal">
            트레이드잇은 글로벌 B/L 데이터와 AI 분석으로
            <br className="hidden md:block" />
            실제 수입 이력이 있는 바이어를 직접 찾아볼 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center reveal">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">무료 바이어 요청하기 <ArrowRight /></a>
            </Button>
            <Button variant="soft" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#service">우리 제품으로 바이어 찾아보기</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 max-w-5xl mx-auto reveal">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-2 rounded-3xl sm:rounded-full bg-card shadow-elevated border border-border/60 focus-within:ring-2 focus-within:ring-primary/40 transition-smooth">
            <button
              type="button"
              className="inline-flex items-center justify-between sm:justify-start gap-2 pl-5 pr-4 h-12 rounded-full text-sm font-semibold text-foreground hover:bg-muted transition-smooth sm:border-r sm:border-border/60"
            >
              Product & Item
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="제품명을 입력하여 실제 바이어를 찾아보세요."
                className="flex-1 h-12 bg-transparent outline-none text-sm md:text-base placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="hero" className="h-12 rounded-full px-6 md:px-8 w-full sm:w-auto">
              Search
            </Button>
          </div>

          <div
            className="mt-6 space-y-3 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <KeywordRow keywords={keywordsTop} direction="left" onPick={setQuery} />
            <KeywordRow keywords={keywordsBottom} direction="right" onPick={setQuery} />
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto reveal">
          <div className="rounded-3xl bg-card shadow-card border border-border/60 p-4 md:p-6">
            <p className="text-xs font-semibold text-muted-foreground mb-3 px-1">
              "{query}" 검색 결과 — 실제 수입 이력 기반
            </p>
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-4 py-3">회사명</th>
                    <th className="text-left font-medium px-4 py-3">국가</th>
                    <th className="text-left font-medium px-4 py-3 hidden md:table-cell">제품</th>
                    <th className="text-left font-medium px-4 py-3 hidden md:table-cell">수입 이력</th>
                  </tr>
                </thead>
                <tbody>
                  {sample.map((r, i) => (
                    <tr key={i} className="border-t border-border/60 hover:bg-accent/40 transition-smooth">
                      <td className="px-4 py-3 font-medium">{r.co}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.country}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{r.product}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                          {r.history}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              ✓ 이미 수입 중인 기업만 선별합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const KeywordRow = ({
  keywords,
  direction,
  onPick,
}: {
  keywords: string[];
  direction: "left" | "right";
  onPick: (k: string) => void;
}) => {
  const items = [...keywords, ...keywords];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((k, i) => (
          <button
            key={`${k}-${i}`}
            onClick={() => onPick(k)}
            className="shrink-0 px-4 py-2 rounded-full bg-card border border-border/70 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground hover:border-primary/30 shadow-soft transition-smooth"
          >
            {k}
          </button>
        ))}
      </div>
    </div>
  );
};