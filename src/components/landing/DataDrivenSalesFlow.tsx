import { Layers, MessageSquare } from "lucide-react";
import blTrackingMain from "@/assets/bl-tracking-main.png";
import buyerMappingProfile from "@/assets/buyer-mapping-profile.png";
import featureActivityLog from "@/assets/feature-activity-log.jpg";
import featureSalesAnalytics from "@/assets/feature-sales-analytics.jpg";

const features = [
  {
    title: "글로벌 바이어 맵핑",
    desc: "B/L 데이터를 활용해 추출된 글로벌 바이어의 위치를 한눈에 파악",
    image: buyerMappingProfile,
    objectPosition: "top right",
    spanClass: "lg:col-span-7 lg:mt-0",
  },
  {
    title: "바이어 프로필 분석",
    desc: "정확한 바이어 프로파일링으로 구매 트렌드를 파악",
    image: buyerMappingProfile,
    objectPosition: "bottom left",
    spanClass: "lg:col-span-5 lg:mt-12",
  },
  {
    title: "영업활동 기록",
    desc: "바이어별 이메일·미팅·문의 내역을 체계적으로 기록 및 관리",
    image: featureActivityLog,
    objectPosition: "center",
    spanClass: "lg:col-span-5 lg:-mt-8",
  },
  {
    title: "영업흐름 분석",
    desc: "국가·산업·단계별 해외영업 진행 흐름 분석",
    image: featureSalesAnalytics,
    objectPosition: "center",
    spanClass: "lg:col-span-7 lg:mt-4",
  },
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
            <span className="block">글로벌 무역데이터를 통해</span>
            <span className="block">
              <span className="text-gradient-primary">구매 가능성이 높은 바이어</span>를
            </span>
            <span className="block">우선적으로 찾아드립니다</span>
          </h2>
        </div>

        {/* Main hero visual — B/L Tracking screenshot */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto reveal">
          <div className="relative group">
            {/* background glow */}
            <div
              aria-hidden
              className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[40px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl opacity-70"
            />
            <div className="rounded-2xl md:rounded-[28px] bg-card border border-white/80 ring-1 ring-[hsl(220_60%_94%)] shadow-elevated overflow-hidden transition-smooth group-hover:scale-[1.01] group-hover:shadow-glow">
              <img
                src={blTrackingMain}
                alt="TradeIt B/L Tracking — 글로벌 바이어 무역 데이터 화면"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Feature image-dominant staggered grid */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {features.map((f, i) => (
            <article
              key={f.title + i}
              className={`reveal group rounded-2xl md:rounded-[28px] bg-card border border-[hsl(220_60%_94%)] shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth overflow-hidden flex flex-col ${f.spanClass}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[hsl(220_40%_98.5%)]">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-[1.03]"
                  style={{ objectPosition: f.objectPosition }}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </article>
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