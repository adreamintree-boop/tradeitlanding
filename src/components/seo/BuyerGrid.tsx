import { Building2, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blurName, formatNum, formatUSD } from "@/lib/seo-helpers";
import type { ShipmentRow } from "@/lib/seo-types";

export const BuyerGrid = ({ rows, title, subtitle }: { rows: ShipmentRow[]; title: string; subtitle: string }) => {
  const display = rows.slice(0, 9);
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Top Buyers</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
          <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
            상위 해외 바이어 기업 정보는 제한적으로 공개되며,
            <strong className="text-foreground"> 회원가입 후 전체 기업명·연락처·상세 거래 이력</strong>을 확인할 수 있습니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {display.map((r, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 p-6 transition-smooth hover:shadow-card hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-full">
                  #{i + 1}
                </div>
              </div>
              <div className="text-base font-bold text-foreground truncate">{blurName(r.importer_name)}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.country || "—"}</div>
              <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-border/60">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Shipments</div>
                  <div className="text-sm font-bold text-foreground mt-1 tabular-nums">{formatNum(r.shipment_count)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Trade Value</div>
                  <div className="text-sm font-bold text-primary mt-1 tabular-nums">{formatUSD(r.trade_value_usd)}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Lock className="w-3 h-3" /> Locked
                </span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  회원가입 후 열람 가능
                </span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-border/60 bg-accent/40 p-6">
          <div className="text-sm md:text-[15px] leading-7 text-foreground/80">
            <strong className="text-foreground">숨겨진 해외 바이어 데이터</strong>가 더 있습니다.
            전체 기업명, 신규 진입 바이어, 반복 수입 이력은 회원가입 후 열람할 수 있습니다.
          </div>
          <Button asChild variant="hero" size="lg" className="shrink-0">
            <Link to="/login">전체 바이어 확인하기 <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};