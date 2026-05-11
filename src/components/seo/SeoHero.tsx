import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { formatNum, formatUSD, blurName } from "@/lib/seo-helpers";
import type { SeoPage } from "@/lib/seo-types";

export const SeoHero = ({ page }: { page: SeoPage }) => {
  const headline =
    page.hero_headline ||
    (page.page_type === "country"
      ? `한국에서 수출된 ${page.product_label} ${page.country_label} 바이어 리스트`
      : `한국에서 수출된 ${page.product_label} 해외 바이어 리스트`);
  const preview = page.summary.top30.slice(0, 4);
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-soft">
      <div className="absolute -top-32 -right-40 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> TRADE INTELLIGENCE · {page.product_label.toUpperCase()}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.18]">
              {page.page_type === "country" ? (
                <>
                  한국에서 수출된 <span className="text-gradient-primary">{page.product_label}</span>
                  <br className="hidden sm:block" />
                  {" "}{page.country_label} 바이어 리스트
                </>
              ) : (
                <>
                  한국에서 수출된 <span className="text-gradient-primary">{page.product_label}</span>
                  <br className="hidden sm:block" /> 해외 바이어 리스트
                </>
              )}
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              2025년 한국발 실제 수출 데이터를 기반으로
              <br className="hidden sm:block" />
              검증된 해외 바이어 및 수출내역을 확인하세요.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/login">해외 바이어 확인하기 <ArrowRight /></Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <a href="#shipments">실제 선적 데이터 보기</a>
              </Button>
            </div>
            <p className="sr-only">{headline}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-background border border-border/60 shadow-card p-6 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-semibold text-primary tracking-wider uppercase">Live Preview</div>
                  <div className="text-sm font-semibold text-foreground mt-0.5">상위 바이어 스냅샷</div>
                </div>
                <div className="text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  {page.summary.startPeriod} ~ {page.summary.endPeriod}
                </div>
              </div>
              <div className="space-y-2.5">
                {preview.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[hsl(214_50%_98%)] border border-border/50">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-foreground truncate">{blurName(r.importer_name)}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{r.country} · {formatNum(r.shipment_count)} shipments</div>
                    </div>
                    <div className="text-sm font-bold text-primary tabular-nums shrink-0 ml-3">{formatUSD(r.trade_value_usd)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 pt-5 border-t border-border/60">
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">총 바이어</div>
                  <div className="text-xl font-bold text-foreground mt-1 tabular-nums">{formatNum(page.summary.totalBuyers)}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">총 거래금액</div>
                  <div className="text-xl font-bold text-foreground mt-1 tabular-nums">{formatUSD(page.summary.totalTradeValue)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};