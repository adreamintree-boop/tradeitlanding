import { Package, Users, DollarSign, Globe2, Calendar, Info, TrendingUp, Layers, RefreshCw } from "lucide-react";
import { formatNum, formatUSD } from "@/lib/seo-helpers";
import type { SeoSummary } from "@/lib/seo-types";

export const SummaryCards = ({ summary }: { summary: SeoSummary }) => {
  const avgTrade = summary.totalBuyers > 0 ? summary.totalTradeValue / summary.totalBuyers : 0;
  const avgShipments = summary.totalBuyers > 0 ? summary.totalShipments / summary.totalBuyers : 0;
  const repeatRatio = summary.totalBuyers > 0 ? Math.round((summary.repeatBuyers / summary.totalBuyers) * 100) : 0;
  const topCountries = summary.countryRanking.slice(0, 3).map((c) => c.country).filter(Boolean);

  const heroKpis = [
    {
      icon: Package,
      label: "총 선적 건수",
      value: formatNum(summary.totalShipments),
      hint: "상위 30개 바이어 합산 기준",
    },
    {
      icon: Users,
      label: "총 바이어 수",
      value: formatNum(summary.totalBuyers),
      hint: "공개된 상위 해외 바이어 표본",
    },
    {
      icon: DollarSign,
      label: "총 거래 금액",
      value: formatUSD(summary.totalTradeValue),
      hint: "상위 30개 바이어 누적 거래액",
    },
  ];

  const insights = [
    {
      tag: "Market Insight",
      icon: Globe2,
      title: summary.topImportCountry || "—",
      headline: `${summary.topImportCountry || "주요 국가"} 시장에서 가장 활발한 수입 활동이 확인됩니다.`,
      body:
        "선적 건수 기준 1위 수입국으로, 해당 시장에서 안정적인 수요 베이스가 형성되어 있어 우선 진입 후보로 검토할 만합니다.",
    },
    {
      tag: "Buyer Activity",
      icon: RefreshCw,
      title: `반복 거래 비율 ${repeatRatio}%`,
      headline: `2회 이상 수입한 바이어가 전체의 ${repeatRatio}%를 차지합니다.`,
      body:
        repeatRatio >= 30
          ? "재구매 흐름이 뚜렷한 시장으로, 신규 진입 이후 장기 거래 전환 가능성이 높습니다."
          : "단발성 거래 비중이 높은 시장으로, 신규 바이어 발굴과 트라이얼 오더 전략이 효과적입니다.",
    },
    {
      tag: "Trade Pattern",
      icon: TrendingUp,
      title: formatUSD(avgTrade),
      headline: "바이어 1개사당 평균 거래 규모입니다.",
      body:
        "시장 단가 수준과 평균 거래 체급을 가늠할 수 있는 지표로, 가격 포지셔닝 및 최소주문수량(MOQ) 설계에 활용할 수 있습니다.",
    },
  ];

  const secondary = [
    {
      icon: Calendar,
      label: "데이터 집계 기간",
      value: `${summary.startPeriod} ~ ${summary.endPeriod}`,
    },
    {
      icon: Layers,
      label: "바이어당 평균 선적",
      value: `${avgShipments.toFixed(1)} 건`,
    },
    {
      icon: Globe2,
      label: "주요 거래 국가",
      value: topCountries.length > 0 ? topCountries.slice(0, 3).join(" · ") : "—",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.18em] uppercase mb-4">
            <span className="w-8 h-px bg-primary/60" />
            Market Report
          </div>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight leading-[1.2]">
            실제 거래 기반 시장 분석 요약
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed md:text-[15px]">
            한국 관세 통관(B/L) 기반의 실제 수출 선적 이력 중,
            공개된 <strong className="text-foreground font-semibold">상위 해외 바이어 30개 기업</strong>의 거래 활동을
            합산·분석한 시장 리포트입니다. 핵심 지표와 시장 인사이트를 통해 글로벌 수입 흐름의 윤곽을 가늠할 수 있습니다.
          </p>
        </div>

        {/* SECTION 01 — Hero KPI */}
        <div className="relative rounded-3xl border border-border/60 bg-gradient-to-br from-[hsl(214_60%_99%)] via-background to-[hsl(220_40%_98%)] overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60 relative">
            {heroKpis.map((it, i) => (
              <div key={i} className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <it.icon className="w-3.5 h-3.5 text-primary" />
                  KPI · 0{i + 1}
                </div>
                <div className="mt-6 text-sm font-medium text-muted-foreground">{it.label}</div>
                <div className="mt-2 text-4xl md:text-5xl font-bold text-foreground tracking-tight tabular-nums leading-none">
                  {it.value}
                </div>
                <div className="mt-4 text-[13px] text-muted-foreground/90 leading-6">{it.hint}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 02 — Market Insights */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6 md:mb-8">
            <div>
              <div className="text-[11px] font-semibold text-primary tracking-[0.18em] uppercase mb-2">
                02 · Insights
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">시장 인사이트</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              데이터에서 도출된 핵심 시장 신호를 분석가 관점에서 정리했습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {insights.map((it, i) => (
              <article
                key={i}
                className="group relative rounded-2xl bg-background border border-border/60 p-7 md:p-8 transition-smooth hover:shadow-card hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {it.tag}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-accent/60 text-primary grid place-items-center">
                    <it.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl md:text-[1.65rem] font-bold text-foreground tracking-tight tabular-nums leading-tight">
                  {it.title}
                </div>
                <div className="mt-4 h-px bg-border/60" />
                <p className="mt-4 text-[14px] font-semibold text-foreground leading-6">
                  {it.headline}
                </p>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                  {it.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 03 — Secondary data row */}
        <div className="mt-12 md:mt-14 rounded-2xl border border-border/60 bg-[hsl(220_30%_99%)] px-6 md:px-8 py-5 md:py-6">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Reference Data
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 flex-1">
              {secondary.map((it, i) => (
                <div key={i} className="flex items-center gap-2.5 min-w-0">
                  <it.icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span className="text-[12px] text-muted-foreground">{it.label}</span>
                  <span className="text-[13px] font-semibold text-foreground tabular-nums truncate">
                    {it.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-accent/60 border border-border/60 p-5 md:p-6">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm md:text-[15px] leading-7 text-foreground/80">
            아래 데이터는 <strong className="text-foreground">공개된 상위 해외 바이어 30개 기업 기준</strong>으로 집계된
            데이터이며, 전체 글로벌 거래 데이터와는 차이가 있을 수 있습니다. 전체 바이어 풀, 신규 진입 기업,
            상세 선적 이력은 회원가입 후 TradeIt B/L 데이터에서 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};