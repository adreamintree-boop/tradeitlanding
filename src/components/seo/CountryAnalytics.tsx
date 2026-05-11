import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { formatNum } from "@/lib/seo-helpers";
import type { CountryRank } from "@/lib/seo-types";

export const CountryAnalytics = ({ ranking }: { ranking: CountryRank[] }) => {
  const data = ranking.slice(0, 10).map((r) => ({ country: r.country, shipments: r.shipments, buyers: r.buyers }));
  return (
    <section className="py-20 md:py-28 bg-[hsl(220_30%_98%)]">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">Country Analytics</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">글로벌 상위 수입국</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            한국발 수출 데이터에서 가장 활발한 수입 활동을 보이는 상위 국가들의 분포입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl bg-background border border-border/60 shadow-card p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground mb-1">Shipment Volume by Country</div>
            <div className="text-xs text-muted-foreground mb-6">상위 10개 수입국의 선적 건수 분포</div>
            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 16, right: 24, top: 4, bottom: 4 }}>
                  <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(215 16% 47%)" }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="country" type="category" tick={{ fontSize: 12, fill: "hsl(222 47% 11%)" }} axisLine={false} tickLine={false} width={100} />
                  <Tooltip
                    cursor={{ fill: "hsl(214 100% 97%)" }}
                    contentStyle={{ borderRadius: 12, border: "1px solid hsl(214 32% 91%)", fontSize: 12 }}
                    formatter={(v: number) => [formatNum(v), "Shipments"]}
                  />
                  <Bar dataKey="shipments" radius={[0, 8, 8, 0]}>
                    {data.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "hsl(222 89% 56%)" : i < 3 ? "hsl(217 91% 70%)" : "hsl(214 100% 88%)"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-background border border-border/60 shadow-card p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground mb-5">Country Ranking</div>
            <div className="space-y-3">
              {ranking.slice(0, 8).map((r, i) => (
                <div key={r.country} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg grid place-items-center text-xs font-bold ${i < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate">{r.country}</div>
                    <div className="text-[11px] text-muted-foreground">{formatNum(r.buyers)} buyers</div>
                  </div>
                  <div className="text-sm font-bold text-foreground tabular-nums">{formatNum(r.shipments)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};