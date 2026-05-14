import { useMemo, useState } from "react";
import { Building2, Lock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blurName, formatNum, formatUSD } from "@/lib/seo-helpers";
import type { ShipmentRow } from "@/lib/seo-types";

type SortKey = "shipments" | "value" | "weight";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "shipments", label: "선적횟수 기준" },
  { key: "value", label: "거래금액 기준" },
  { key: "weight", label: "중량 기준" },
];

const PAGE_SIZE = 6;
const UNMASKED_RANK = 6;

const formatWeight = (kg: number) => {
  if (!kg || isNaN(kg) || kg <= 0) return null;
  if (kg >= 1_000_000) return `${(kg / 1_000_000).toFixed(2)}kt`;
  if (kg >= 1_000) return `${(kg / 1_000).toFixed(1)}t`;
  return `${Math.round(kg).toLocaleString()}kg`;
};

export const BuyerGrid = ({ rows, title, subtitle }: { rows: ShipmentRow[]; title: string; subtitle: string }) => {
  const [sortKey, setSortKey] = useState<SortKey>("shipments");
  const [page, setPage] = useState(0);

  const sorted = useMemo(() => {
    const pool = rows.slice(0, 30);
    const getter = (r: ShipmentRow) =>
      sortKey === "value" ? r.trade_value_usd || 0 : sortKey === "weight" ? r.weight_kg || 0 : r.shipment_count || 0;
    return [...pool].sort((a, b) => getter(b) - getter(a));
  }, [rows, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const slice = sorted.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const handleSort = (k: SortKey) => {
    setSortKey(k);
    setPage(0);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Top Buyers</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
            <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
              상위 해외 바이어 기업 정보는 제한적으로 공개되며,
              <strong className="text-foreground"> 회원가입 후 전체 기업명·연락처·상세 거래 이력</strong>을 확인할 수 있습니다.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
              Sort by
            </div>
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-border/60 bg-[hsl(220_30%_98%)] p-1">
              {SORT_OPTIONS.map((opt) => {
                const active = sortKey === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSort(opt.key)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-smooth ${
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {slice.map((r, i) => {
            const rank = safePage * PAGE_SIZE + i + 1;
            const unmasked = rank <= UNMASKED_RANK;
            const weight = formatWeight(r.weight_kg);
            return (
            <div
              key={`${rank}-${r.importer_name}`}
              className="group relative rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 p-6 transition-smooth hover:shadow-card hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-full">
                  #{rank}
                </div>
              </div>
              <div className="text-base font-bold text-foreground truncate">
                {unmasked ? r.importer_name : blurName(r.importer_name)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{r.country || "—"}</div>
              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border/60">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Shipments</div>
                  <div className="text-sm font-bold text-foreground mt-1 tabular-nums">{formatNum(r.shipment_count)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Trade Value</div>
                  {r.trade_value_usd && r.trade_value_usd > 0 ? (
                    <div className="text-sm font-bold text-primary mt-1 tabular-nums">{formatUSD(r.trade_value_usd)}</div>
                  ) : (
                    <div className="text-xs font-medium text-muted-foreground mt-1.5">집계 불가</div>
                  )}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Weight</div>
                  {weight ? (
                    <div className="text-sm font-bold text-foreground mt-1 tabular-nums">{weight}</div>
                  ) : (
                    <div className="text-xs font-medium text-muted-foreground mt-1.5">집계 불가</div>
                  )}
                </div>
              </div>
              {!unmasked && (
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    회원가입 후 열람 가능
                  </span>
                </div>
              )}
            </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={safePage === 0}
            className="inline-flex items-center gap-1 h-9 px-3 rounded-lg border border-border/60 bg-background text-xs font-semibold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-smooth"
            aria-label="이전 페이지"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Previous
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const active = i === safePage;
            return (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-9 h-9 grid place-items-center rounded-lg text-xs font-semibold tabular-nums transition-smooth border ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border/60 hover:bg-muted"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={safePage >= totalPages - 1}
            className="inline-flex items-center gap-1 h-9 px-3 rounded-lg border border-border/60 bg-background text-xs font-semibold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-smooth"
            aria-label="다음 페이지"
          >
            Next <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-border/60 bg-accent/40 p-6">
          <div className="text-sm md:text-[15px] leading-7 text-foreground/80">
            상위 30개 바이어 외에도 <strong className="text-foreground">더 많은 해외 바이어 데이터</strong>를 확인할 수 있습니다.
          </div>
          <Button asChild variant="hero" size="lg" className="shrink-0">
            <Link to="/login">전체 바이어 확인하기 <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};