import { useState } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { blurName, formatNum, formatUSD } from "@/lib/seo-helpers";
import type { ShipmentRow } from "@/lib/seo-types";

const PAGE_SIZE = 10;

export const ShipmentsTable = ({ rows }: { rows: ShipmentRow[] }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const slice = rows.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="shipments" className="py-20 md:py-28 bg-[hsl(220_30%_98%)]">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Shipment Records</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">실제 선적 데이터</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            글로벌 통관 데이터를 기반으로 검증된 한국발 수출 선적 내역입니다. 기업명은 일부 마스킹되어 표시됩니다.
          </p>
        </div>

        <div className="rounded-3xl bg-background border border-border/60 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(220_30%_97%)] sticky top-0 z-10">
                <tr className="text-left">
                  <th className="px-5 md:px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Importer</th>
                  <th className="px-5 md:px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Country</th>
                  <th className="px-5 md:px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">Shipments</th>
                  <th className="px-5 md:px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">Trade Value</th>
                </tr>
              </thead>
              <tbody>
                {slice.map((r, i) => (
                  <tr key={i} className="border-t border-border/60 hover:bg-[hsl(220_30%_98%)] transition-smooth">
                    <td className="px-5 md:px-6 py-4 font-semibold text-foreground whitespace-nowrap">{blurName(r.importer_name)}</td>
                    <td className="px-5 md:px-6 py-4 text-muted-foreground whitespace-nowrap">{r.country || "—"}</td>
                    <td className="px-5 md:px-6 py-4 text-foreground text-right tabular-nums whitespace-nowrap">{formatNum(r.shipment_count)}</td>
                    <td className="px-5 md:px-6 py-4 text-foreground text-right tabular-nums font-semibold whitespace-nowrap">{formatUSD(r.trade_value_usd)}</td>
                  </tr>
                ))}
                {/* Locked preview rows */}
                {[0, 1, 2].map((i) => (
                  <tr key={`lock-${i}`} className="border-t border-border/60 bg-[hsl(220_30%_99%)]">
                    <td className="px-5 md:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="blur-sm select-none text-foreground font-semibold">PT XXX***** PACIFIC</span>
                      </div>
                    </td>
                    <td className="px-5 md:px-6 py-4 blur-sm select-none text-muted-foreground">Indonesia</td>
                    <td className="px-5 md:px-6 py-4 text-right blur-sm select-none tabular-nums">42</td>
                    <td className="px-5 md:px-6 py-4 text-right blur-sm select-none tabular-nums font-semibold">$1.24M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between gap-3 px-5 md:px-6 py-4 border-t border-border/60 bg-[hsl(220_30%_98%)]">
            <div className="text-xs text-muted-foreground">
              {rows.length === 0 ? "데이터가 없습니다" : `${page * PAGE_SIZE + 1}–${Math.min((page + 1) * PAGE_SIZE, rows.length)} / ${rows.length}`}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 bg-background text-foreground disabled:opacity-40 hover:bg-muted transition-smooth"
                aria-label="이전 페이지"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-xs font-medium text-foreground tabular-nums px-2">{page + 1} / {totalPages}</div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 bg-background text-foreground disabled:opacity-40 hover:bg-muted transition-smooth"
                aria-label="다음 페이지"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};