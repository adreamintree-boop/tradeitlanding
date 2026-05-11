import { Building2 } from "lucide-react";
import { blurName, formatNum, formatUSD } from "@/lib/seo-helpers";
import type { ShipmentRow } from "@/lib/seo-types";

export const BuyerGrid = ({ rows, title, subtitle }: { rows: ShipmentRow[]; title: string; subtitle: string }) => {
  const display = rows.slice(0, 9);
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Top Buyers</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {display.map((r, i) => (
            <div key={i} className="rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 p-6 transition-smooth hover:shadow-card hover:-translate-y-0.5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};