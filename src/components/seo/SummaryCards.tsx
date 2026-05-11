import { Package, Users, DollarSign, RefreshCw, Globe2, Calendar } from "lucide-react";
import { formatNum, formatUSD } from "@/lib/seo-helpers";
import type { SeoSummary } from "@/lib/seo-types";

export const SummaryCards = ({ summary }: { summary: SeoSummary }) => {
  const items = [
    { icon: Package, label: "총 선적 건수", value: formatNum(summary.totalShipments) },
    { icon: Users, label: "총 바이어 수", value: formatNum(summary.totalBuyers) },
    { icon: DollarSign, label: "총 거래 금액", value: formatUSD(summary.totalTradeValue) },
    { icon: RefreshCw, label: "반복 거래 바이어", value: formatNum(summary.repeatBuyers) },
    { icon: Globe2, label: "최대 수입 국가", value: summary.topImportCountry },
    { icon: Calendar, label: "거래 기간", value: `${summary.startPeriod} ~ ${summary.endPeriod}` },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Trade Summary</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">거래 요약</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            요약 데이터는 공개된 상위 해외 바이어 30개 기업 기준으로 집계된 데이터입니다.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 p-5 md:p-6 transition-smooth hover:shadow-card hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <it.icon className="w-5 h-5" />
              </div>
              <div className="text-xs md:text-sm font-medium text-muted-foreground">{it.label}</div>
              <div className="text-xl md:text-2xl font-bold text-foreground mt-1.5 tabular-nums">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};