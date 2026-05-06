import { Globe2, UserSearch, ClipboardList, BarChart3, Layers, MessageSquare, CheckCircle2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "글로벌 바이어 맵핑",
    desc: "B/L 데이터를 기반으로 실제 구매 가능성이 높은 바이어를 추적합니다.",
  },
  {
    icon: UserSearch,
    title: "바이어 프로필 분석",
    desc: "실제 기업 정보를 기반으로 구매 가능성을 분석합니다.",
  },
  {
    icon: ClipboardList,
    title: "영업활동 기록",
    desc: "바이어별 소통 내역과 진행 현황을 체계적으로 관리합니다.",
  },
  {
    icon: BarChart3,
    title: "영업흐름 분석",
    desc: "국가·산업·단계별로 해외영업 진행 현황을 분석합니다.",
  },
];

const funnelStages = [
  { label: "Lead", value: 16, pct: "53.33%", color: "bg-primary" },
  { label: "Target", value: 9, pct: "30.00%", color: "bg-primary/70" },
  { label: "Client", value: 3, pct: "10.00%", color: "bg-primary/45" },
  { label: "Lost", value: 2, pct: "6.66%", color: "bg-primary/25" },
];

const pipeline = [
  {
    stage: "Lead",
    count: 12,
    accent: "bg-[hsl(40_95%_55%)]",
    cards: [
      { name: "Zovell Medical", country: "🇺🇸 USA", tag: "Health" },
      { name: "ICS Pharma", country: "🇩🇪 GER", tag: "Pharma" },
    ],
  },
  {
    stage: "Target",
    count: 8,
    accent: "bg-[hsl(0_84%_62%)]",
    cards: [
      { name: "Globally Pharma", country: "🇫🇷 FRA", tag: "Pharma" },
      { name: "Dabro Pharma", country: "🇪🇸 ESP", tag: "Health" },
    ],
  },
  {
    stage: "Client",
    count: 5,
    accent: "bg-primary",
    cards: [
      { name: "3 in 1 Vietnam", country: "🇻🇳 VNM", tag: "Food" },
      { name: "Healthy Opt Ltd", country: "🇮🇳 IND", tag: "Health" },
    ],
  },
];

export const DataDrivenSalesFlow = () => (
  <section className="bg-background">
    {/* SECTION 1 — OUTBOUND */}
    <div className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider">
            OUTBOUND
          </span>
          <p className="mt-5 text-sm md:text-base font-medium text-muted-foreground">
            바이어 발굴, 아직도 전시회에 의존하고 계신가요?
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight text-foreground">
            글로벌 무역데이터를 통해
            <br />
            <span className="text-gradient-primary">구매 가능성이 높은 바이어</span>를
            <br className="md:hidden" />
            우선적으로 찾아드립니다
          </h2>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto reveal">
          <div className="rounded-3xl bg-card border border-[hsl(220_60%_94%)] shadow-elevated overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/60 bg-[hsl(220_40%_98.5%)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0_84%_62%)]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(40_95%_55%)]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(140_60%_50%)]/70" />
              <div className="ml-4 text-xs font-semibold text-muted-foreground">tradeit · Dashboard</div>
            </div>

            <div className="p-5 md:p-8 grid lg:grid-cols-12 gap-5">
              {/* KPI cards */}
              <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Total Buyer", v: "1,284", sub: "+128 this week", icon: UserSearch },
                  { label: "Active Deals", v: "37", sub: "12 advancing", icon: TrendingUp },
                  { label: "Response Rate", v: "24.6%", sub: "+3.2%", icon: MessageSquare },
                  { label: "Closed", v: "9", sub: "MTD", icon: CheckCircle2 },
                ].map((k) => (
                  <div key={k.label} className="rounded-2xl border border-border/70 bg-background p-4">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] font-semibold uppercase tracking-wider">{k.label}</span>
                      <k.icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="mt-1.5 text-xl md:text-2xl font-bold text-foreground">{k.v}</div>
                    <div className="mt-0.5 text-[11px] text-primary font-medium">{k.sub}</div>
                  </div>
                ))}
              </div>

              {/* Funnel */}
              <div className="lg:col-span-5 rounded-2xl border border-border/70 bg-background p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-foreground">Funnel Analysis</h4>
                  <span className="text-[11px] text-muted-foreground">2025 · YTD</span>
                </div>
                <div className="space-y-2.5">
                  {funnelStages.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-3" style={{ paddingLeft: `${i * 8}px`, paddingRight: `${i * 8}px` }}>
                      <div className={`flex-1 h-9 rounded-md ${s.color} flex items-center justify-between px-3 text-[11px] font-semibold text-primary-foreground`}>
                        <span>{s.label}</span>
                        <span>{s.value}</span>
                      </div>
                      <span className="text-[11px] text-muted-foreground w-12 text-right tabular-nums">{s.pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* World map placeholder */}
              <div className="lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-to-br from-[hsl(214_100%_98%)] to-background p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-foreground">Global Buyer Map</h4>
                  <span className="text-[11px] text-muted-foreground">42 countries</span>
                </div>
                <div className="relative h-[180px] md:h-[210px]">
                  {/* Dotted world style */}
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, hsl(222 89% 56% / 0.18) 1px, transparent 1.2px)",
                      backgroundSize: "12px 12px",
                      maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, black 60%, transparent 100%)",
                    }}
                  />
                  {/* Pins */}
                  {[
                    { t: "22%", l: "20%" },
                    { t: "30%", l: "48%" },
                    { t: "55%", l: "55%" },
                    { t: "40%", l: "78%" },
                    { t: "65%", l: "30%" },
                    { t: "48%", l: "12%" },
                  ].map((p, i) => (
                    <span
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full bg-primary shadow-glow"
                      style={{ top: p.t, left: p.l }}
                    >
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Activity bar */}
              <div className="lg:col-span-12 rounded-2xl border border-border/70 bg-background p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-foreground">Monthly Activity</h4>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-primary" /> Outreach</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-primary/40" /> Reply</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 md:gap-3 h-28">
                  {[40, 65, 35, 78, 90, 55, 70, 85, 50, 95, 72, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-primary/30" style={{ height: `${h * 0.4}%` }} />
                      <div className="w-full rounded-t-md bg-primary" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2x2 grid */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto grid sm:grid-cols-2 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-3xl bg-card border border-[hsl(220_60%_94%)] shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth p-7 md:p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent text-primary flex items-center justify-center group-hover:scale-105 transition-smooth">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2.5 text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* SECTION 2 — SALES NOTE CRM */}
    <div className="py-24 md:py-32 bg-[hsl(220_40%_98.5%)]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider">
            SALES NOTE CRM
          </span>
          <p className="mt-5 text-sm md:text-base font-medium text-muted-foreground">
            바이어별 영업현황, 투명하게 보여드립니다.
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight text-foreground">
            <span className="text-gradient-primary">Sales Note CRM</span>으로
            <br />
            모든 바이어 정보를 체계적으로 관리해드립니다
          </h2>
        </div>

        {/* CRM mockup */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto reveal">
          <div className="rounded-3xl bg-card border border-[hsl(220_60%_94%)] shadow-elevated overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60 bg-background">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">Buyer Pipeline</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">· 25 active deals</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                {["All", "USA", "EU", "APAC"].map((t, i) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                      i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-7 grid md:grid-cols-3 gap-4 md:gap-5 bg-[hsl(220_40%_98.5%)]">
              {pipeline.map((col) => (
                <div key={col.stage} className="rounded-2xl bg-background border border-border/60 p-4">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${col.accent}`} />
                      <span className="text-sm font-bold text-foreground">{col.stage}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{col.count}</span>
                  </div>
                  <div className="space-y-2.5">
                    {col.cards.map((c) => (
                      <div key={c.name} className="rounded-xl border border-border/70 bg-card p-3.5 hover:border-primary/40 transition-smooth">
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-bold text-foreground">{c.name}</span>
                          <span className="text-[10px] font-semibold text-primary bg-accent px-1.5 py-0.5 rounded">{c.tag}</span>
                        </div>
                        <div className="mt-1.5 text-[11px] text-muted-foreground">{c.country}</div>
                        <div className="mt-3 flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <span
                              key={s}
                              className={`h-1 flex-1 rounded-full ${
                                s <= (col.stage === "Client" ? 4 : col.stage === "Target" ? 3 : 2) ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity log strip */}
            <div className="border-t border-border/60 px-5 md:px-7 py-5 bg-background">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Recent Activity
                </h4>
                <span className="text-[11px] text-muted-foreground">Updated · 2m ago</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { who: "Globally Pharma", what: "샘플 요청 회신 수신", when: "방금" },
                  { who: "3 in 1 Vietnam", what: "MOU 초안 발송", when: "1시간 전" },
                  { who: "Healthy Opt Ltd", what: "단가 협상 미팅 예정", when: "오늘 16:00" },
                ].map((a) => (
                  <div key={a.who} className="rounded-xl bg-[hsl(220_40%_98.5%)] border border-border/60 p-3.5">
                    <div className="flex items-center gap-2 text-[12px] font-bold text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {a.who}
                    </div>
                    <div className="mt-1 text-[12px] text-muted-foreground">{a.what}</div>
                    <div className="mt-1.5 text-[10px] text-primary font-semibold">{a.when}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);