import { Search, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

type Row = { co: string; country: string; history: string };

const defaultRows: Row[] = [
  { co: "Bellevue Cosmetics", country: "🇺🇸 USA", history: "12 shipments / 2024" },
  { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", history: "8 shipments / 2024" },
  { co: "Lumière Paris", country: "🇫🇷 France", history: "21 shipments / 2024" },
  { co: "Sakura Trading", country: "🇯🇵 Japan", history: "15 shipments / 2024" },
];

const datasets: Record<string, Row[]> = {
  "hydraulic excavator": [
    { co: "HeavyMach USA", country: "🇺🇸 USA", history: "18 shipments / 2024" },
    { co: "Gulf Equipment LLC", country: "🇦🇪 UAE", history: "14 shipments / 2024" },
    { co: "Andes Mining Co.", country: "🇨🇱 Chile", history: "9 shipments / 2024" },
    { co: "Sahara Build Group", country: "🇸🇦 KSA", history: "11 shipments / 2024" },
  ],
  "electric vehicle": [
    { co: "EV Motion GmbH", country: "🇩🇪 Germany", history: "32 shipments / 2024" },
    { co: "Neo Battery Inc", country: "🇺🇸 USA", history: "27 shipments / 2024" },
    { co: "Volt Mobility", country: "🇳🇱 Netherlands", history: "19 shipments / 2024" },
    { co: "GreenDrive Co.", country: "🇳🇴 Norway", history: "22 shipments / 2024" },
  ],
  "steel pipe": [
    { co: "Pacific Steelworks", country: "🇺🇸 USA", history: "24 shipments / 2024" },
    { co: "Orient Pipe Co.", country: "🇯🇵 Japan", history: "17 shipments / 2024" },
    { co: "Eurotube SRL", country: "🇮🇹 Italy", history: "13 shipments / 2024" },
    { co: "Gulf Steel LLC", country: "🇦🇪 UAE", history: "10 shipments / 2024" },
  ],
  "energy storage system": [
    { co: "GridCore Energy", country: "🇺🇸 USA", history: "26 shipments / 2024" },
    { co: "Helios Storage", country: "🇪🇸 Spain", history: "14 shipments / 2024" },
    { co: "PowerCell AG", country: "🇩🇪 Germany", history: "20 shipments / 2024" },
    { co: "BlueWatt Ltd.", country: "🇬🇧 UK", history: "11 shipments / 2024" },
  ],
  "tableware set": [
    { co: "Maison Table", country: "🇫🇷 France", history: "16 shipments / 2024" },
    { co: "HomeStyle Inc.", country: "🇺🇸 USA", history: "12 shipments / 2024" },
    { co: "Casa Bella SRL", country: "🇮🇹 Italy", history: "9 shipments / 2024" },
    { co: "NordicWare", country: "🇸🇪 Sweden", history: "8 shipments / 2024" },
  ],
  "soybean": [
    { co: "Agro Foods Vietnam", country: "🇻🇳 Vietnam", history: "21 shipments / 2024" },
    { co: "Grainex Trading", country: "🇸🇬 Singapore", history: "18 shipments / 2024" },
    { co: "Pampas Agro", country: "🇦🇷 Argentina", history: "25 shipments / 2024" },
    { co: "Asia Feed Co.", country: "🇨🇳 China", history: "30 shipments / 2024" },
  ],
  "pork belly": [
    { co: "Iberico Foods", country: "🇪🇸 Spain", history: "14 shipments / 2024" },
    { co: "MeatMaster Co.", country: "🇺🇸 USA", history: "19 shipments / 2024" },
    { co: "Tokyo Foods Ltd.", country: "🇯🇵 Japan", history: "11 shipments / 2024" },
    { co: "EuroMeat GmbH", country: "🇩🇪 Germany", history: "16 shipments / 2024" },
  ],
  "polyester yarn": [
    { co: "Textile Lanka", country: "🇱🇰 Sri Lanka", history: "22 shipments / 2024" },
    { co: "Istanbul Tekstil", country: "🇹🇷 Türkiye", history: "17 shipments / 2024" },
    { co: "FabricPro Inc.", country: "🇺🇸 USA", history: "13 shipments / 2024" },
    { co: "Asia Yarn Co.", country: "🇻🇳 Vietnam", history: "20 shipments / 2024" },
  ],
  "wind turbine": [
    { co: "NordWind A/S", country: "🇩🇰 Denmark", history: "15 shipments / 2024" },
    { co: "GreenPower Co.", country: "🇺🇸 USA", history: "12 shipments / 2024" },
    { co: "AeroEnergy GmbH", country: "🇩🇪 Germany", history: "18 shipments / 2024" },
    { co: "EolicaIberica", country: "🇪🇸 Spain", history: "10 shipments / 2024" },
  ],
  "patient monitor": [
    { co: "MedCare Systems", country: "🇺🇸 USA", history: "20 shipments / 2024" },
    { co: "EuroMedic AG", country: "🇩🇪 Germany", history: "15 shipments / 2024" },
    { co: "Tokyo Medical Co.", country: "🇯🇵 Japan", history: "13 shipments / 2024" },
    { co: "Health Plus Ltd.", country: "🇬🇧 UK", history: "11 shipments / 2024" },
  ],
  "sofa set": [
    { co: "Casa Living SRL", country: "🇮🇹 Italy", history: "14 shipments / 2024" },
    { co: "HomePlus Inc.", country: "🇺🇸 USA", history: "18 shipments / 2024" },
    { co: "Maison Décor", country: "🇫🇷 France", history: "10 shipments / 2024" },
    { co: "Nordic Home AB", country: "🇸🇪 Sweden", history: "12 shipments / 2024" },
  ],
  "lipstick": [
    { co: "Belle Cosmetics", country: "🇫🇷 France", history: "15 shipments / 2024" },
    { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", history: "12 shipments / 2024" },
    { co: "Glow Beauty Inc.", country: "🇺🇸 USA", history: "20 shipments / 2024" },
    { co: "Sakura Cosmetic", country: "🇯🇵 Japan", history: "14 shipments / 2024" },
  ],
  "kitchen cabinet": [
    { co: "KitchenPro USA", country: "🇺🇸 USA", history: "17 shipments / 2024" },
    { co: "Cucina Moderna", country: "🇮🇹 Italy", history: "11 shipments / 2024" },
    { co: "HomeBuild AU", country: "🇦🇺 Australia", history: "9 shipments / 2024" },
    { co: "EuroKitchen GmbH", country: "🇩🇪 Germany", history: "13 shipments / 2024" },
  ],
  "sheet mask": [
    { co: "GlowSkin Co.", country: "🇺🇸 USA", history: "26 shipments / 2024" },
    { co: "Beauté Paris", country: "🇫🇷 France", history: "18 shipments / 2024" },
    { co: "Tokyo Skin Lab", country: "🇯🇵 Japan", history: "22 shipments / 2024" },
    { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", history: "14 shipments / 2024" },
  ],
  "polyethylene resin": [
    { co: "PolyChem USA", country: "🇺🇸 USA", history: "28 shipments / 2024" },
    { co: "Asia Polymers", country: "🇨🇳 China", history: "34 shipments / 2024" },
    { co: "EuroPlast GmbH", country: "🇩🇪 Germany", history: "19 shipments / 2024" },
    { co: "Gulf Petrochem", country: "🇸🇦 KSA", history: "23 shipments / 2024" },
  ],
  "body lotion": [
    { co: "Pure Skin Co.", country: "🇺🇸 USA", history: "19 shipments / 2024" },
    { co: "Beauté Paris", country: "🇫🇷 France", history: "13 shipments / 2024" },
    { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", history: "11 shipments / 2024" },
    { co: "Sakura Trading", country: "🇯🇵 Japan", history: "15 shipments / 2024" },
  ],
  "stainless pipe": [
    { co: "InoxPro USA", country: "🇺🇸 USA", history: "16 shipments / 2024" },
    { co: "Eurotube SRL", country: "🇮🇹 Italy", history: "12 shipments / 2024" },
    { co: "Orient Pipe Co.", country: "🇯🇵 Japan", history: "14 shipments / 2024" },
    { co: "Gulf Steel LLC", country: "🇦🇪 UAE", history: "10 shipments / 2024" },
  ],
  "shampoo": [
    { co: "HairCare Inc.", country: "🇺🇸 USA", history: "21 shipments / 2024" },
    { co: "Beauté Paris", country: "🇫🇷 France", history: "16 shipments / 2024" },
    { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", history: "13 shipments / 2024" },
    { co: "Sakura Trading", country: "🇯🇵 Japan", history: "17 shipments / 2024" },
  ],
};

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
  const [tableKey, setTableKey] = useState(0);
  const handlePick = (k: string) => {
    setQuery(k);
    setTableKey((n) => n + 1);
  };
  const rows = useMemo(
    () => datasets[query.trim().toLowerCase()] ?? defaultRows,
    [query]
  );
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary-glow/20 blur-3xl animate-float-slow" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6 reveal">
            <Sparkles className="w-3.5 h-3.5" />
            B/L 데이터 × AI 바이어 발굴 서비스
          </div>
          <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] reveal">
            <span>해외 바이어,</span>
            <br />
            <span>전시회에서 찾지 마세요.</span>
            <br />
            <span className="text-gradient-primary">무역데이터로 찾아보세요.</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed reveal">
            글로벌 수출입 무역데이터와 AI 분석을 기반으로
            <br className="hidden md:block" />
            실제 구매 이력이 있는 해외 바이어를 발굴하고, 담당자 컨택까지 연결해드립니다.
          </p>
          <div className="mt-8 flex justify-center reveal">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">무료로 시작하기 <ArrowRight /></a>
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
            <KeywordRow keywords={keywordsTop} direction="left" onPick={handlePick} active={query} />
            <KeywordRow keywords={keywordsBottom} direction="right" onPick={handlePick} active={query} />
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto reveal">
          <div className="rounded-3xl bg-card shadow-card border border-border/60 p-4 md:p-6">
            <p className="text-xs font-semibold text-muted-foreground mb-3 px-1">
              "{query}" 검색 결과 — 실제 수입 이력 기반
            </p>
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <table className="w-full text-sm table-fixed">
                <thead className="bg-muted/60 text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-4 py-3 w-[50%]">회사명</th>
                    <th className="text-left font-medium px-4 py-3 w-[20%]">국가</th>
                    <th className="text-left font-medium px-4 py-3 w-[30%]">수입 이력</th>
                  </tr>
                </thead>
                <tbody key={tableKey} className="animate-fade-in">
                  {rows.map((r, i) => (
                    <tr key={i} className="border-t border-border/60 hover:bg-accent/40 transition-smooth">
                      <td className="px-4 py-3 font-medium truncate">{r.co}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.country}</td>
                      <td className="px-4 py-3">
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
  active,
}: {
  keywords: string[];
  direction: "left" | "right";
  onPick: (k: string) => void;
  active: string;
}) => {
  const items = [...keywords, ...keywords];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((k, i) => {
          const isActive = active.trim().toLowerCase() === k.trim().toLowerCase();
          return (
            <button
              key={`${k}-${i}`}
              onClick={() => onPick(k)}
              className={`shrink-0 px-4 py-2 rounded-full border text-sm shadow-soft transition-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border/70 text-foreground/80 hover:bg-accent hover:text-accent-foreground hover:border-primary/30"
              }`}
            >
              {k}
            </button>
          );
        })}
      </div>
    </div>
  );
};