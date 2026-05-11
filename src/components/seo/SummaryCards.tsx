import { Package, Users, DollarSign, RefreshCw, Globe2, Calendar, Info, TrendingUp, Layers } from "lucide-react";
import { formatNum, formatUSD } from "@/lib/seo-helpers";
import type { SeoSummary } from "@/lib/seo-types";

export const SummaryCards = ({ summary }: { summary: SeoSummary }) => {
  const avgTrade = summary.totalBuyers > 0 ? summary.totalTradeValue / summary.totalBuyers : 0;
  const avgShipments = summary.totalBuyers > 0 ? summary.totalShipments / summary.totalBuyers : 0;
  const repeatRatio = summary.totalBuyers > 0 ? Math.round((summary.repeatBuyers / summary.totalBuyers) * 100) : 0;
  const topCountries = summary.countryRanking.slice(0, 3).map((c) => c.country).filter(Boolean);

  const primary = [
    { icon: Package, label: "총 선적 건수", value: formatNum(summary.totalShipments), hint: "상위 30개 바이어 합산" },
    { icon: Users, label: "총 바이어 수", value: formatNum(summary.totalBuyers), hint: "공개된 상위 표본" },
    { icon: DollarSign, label: "총 거래 금액", value: formatUSD(summary.totalTradeValue), hint: "상위 30개 바이어 합산" },
    { icon: RefreshCw, label: "반복 거래 바이어", value: `${formatNum(summary.repeatBuyers)} (${repeatRatio}%)`, hint: "2회 이상 수입 기업 비중" },
    { icon: Globe2, label: "최대 수입 국가", value: summary.topImportCountry, hint: "선적 건수 1위 국가" },
    { icon: Calendar, label: "주요 거래 기간", value: `${summary.startPeriod} ~ ${summary.endPeriod}`, hint: "데이터 집계 범위" },
  ];

  const insights = [
    {
      icon: TrendingUp,
      label: "평균 거래 규모",
      value: formatUSD(avgTrade),
      desc: "상위 30개 해외 바이어 1개사당 평균 거래 금액으로, 시장 단가 수준을 가늠하는 지표입니다.",
    },
    {
      icon: Layers,
      label: "바이어당 평균 선적",
      value: `${avgShipments.toFixed(1)} 건`,
      desc: "1개 바이어가 평균적으로 진행한 수입 선적 횟수. 반복 수입이 활발할수록 높아집니다.",
    },
    {
      icon: Globe2,
      label: "주요 거래 국가",
      value: topCountries.length > 0 ? topCountries.join(" · ") : "—",
      desc: "상위 30개 바이어 데이터 기준 가장 활발한 수입 활동을 보이는 국가군입니다.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Trade Summary</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">실제 거래 기반 데이터 요약</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            아래 수치는 한국 관세 통관(B/L) 기반의 실제 수출 선적 이력에서 추출되었으며,
            공개된 <strong className="text-foreground">상위 해외 바이어 30개 기업</strong>의 거래 활동을 합산·분석한
            결과입니다. 반복 수입 기업, 국가별 수요, 평균 거래 규모를 통해 글로벌 시장에서의
            실제 수입 흐름을 가늠할 수 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {primary.map((it, i) => (
            <div key={i} className="rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 p-5 md:p-6 transition-smooth hover:shadow-card hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <it.icon className="w-5 h-5" />
              </div>
              <div className="text-xs md:text-sm font-medium text-muted-foreground">{it.label}</div>
              <div className="text-xl md:text-2xl font-bold text-foreground mt-1.5 tabular-nums">{it.value}</div>
              <div className="text-[11px] text-muted-foreground/80 mt-1.5">{it.hint}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {insights.map((it, i) => (
            <div key={i} className="rounded-2xl bg-background border border-border/60 p-6 transition-smooth hover:shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                <it.icon className="w-4 h-4" /> Data Insight
              </div>
              <div className="text-sm font-medium text-muted-foreground">{it.label}</div>
              <div className="text-2xl font-bold text-foreground mt-1.5 tabular-nums">{it.value}</div>
              <p className="text-[13px] leading-6 text-muted-foreground mt-3">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl bg-accent/60 border border-border/60 p-5 md:p-6">
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