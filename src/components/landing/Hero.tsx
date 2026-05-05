import { Search, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sample = [
  { co: "Bellevue Cosmetics", country: "🇺🇸 USA", product: "Vitamin C Serum", history: "12 shipments / 2024" },
  { co: "Aurora Beauty Ltd.", country: "🇬🇧 UK", product: "Niacinamide Serum", history: "8 shipments / 2024" },
  { co: "Lumière Paris", country: "🇫🇷 France", product: "Skincare Set", history: "21 shipments / 2024" },
  { co: "Sakura Trading", country: "🇯🇵 Japan", product: "Facial Serum", history: "15 shipments / 2024" },
];

export const Hero = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] reveal">
            해외 바이어, 직접 찾지 마세요.
            <br />
            <span className="text-gradient-primary">대신 찾아드립니다.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed reveal">
            글로벌 B/L 수출입 데이터와 AI 분석을 기반으로
            <br className="hidden md:block" />
            실제 구매 이력이 있는 해외 바이어를 발굴하고, 담당자 컨택까지 연결해드립니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center reveal">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">무료 바이어 리서치 요청하기 <ArrowRight /></a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#service">우리 제품으로 바이어 찾아보기</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto reveal">
          <div className="rounded-3xl bg-card shadow-elevated border border-border/60 p-4 md:p-6">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary border border-border/60">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                defaultValue="vitamin c serum"
                className="flex-1 bg-transparent outline-none text-sm md:text-base"
                readOnly
              />
              <Button variant="hero" size="sm">검색</Button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-border/60">
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