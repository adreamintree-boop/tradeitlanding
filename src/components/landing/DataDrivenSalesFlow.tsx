import { MapPin, UserSearch, ClipboardList, BarChart3 } from "lucide-react";
import blTrackingMain from "@/assets/bl-tracking-main.png";
import buyerStreetView from "@/assets/buyer-streetview.png";
import buyerProfileSalesnote from "@/assets/buyer-profile-salesnote.png";
import featureActivityLog from "@/assets/feature-activity-log.jpg";
import featureSalesAnalytics from "@/assets/feature-sales-analytics.jpg";
import salesNoteShowcase from "@/assets/sales-note-showcase.png";

const outboundFeatures = [
  {
    icon: MapPin,
    title: "글로벌 바이어 맵핑",
    desc: "B/L 데이터를 활용해 추출된 글로벌 바이어의 위치를 한눈에 파악",
    image: buyerStreetView,
    objectPosition: "center",
  },
  {
    icon: UserSearch,
    title: "바이어 프로필 분석",
    desc: "정확한 바이어 프로파일링으로 구매 트렌드를 파악",
    image: buyerProfileSalesnote,
    objectPosition: "top left",
  },
];

const crmFeatures = [
  {
    icon: ClipboardList,
    title: "영업활동 기록",
    desc: "바이어별 이메일·미팅·문의 내역을 체계적으로 기록 및 관리",
    image: featureActivityLog,
    objectPosition: "center",
  },
  {
    icon: BarChart3,
    title: "영업흐름 분석",
    desc: "국가·산업·단계별 해외영업 진행 흐름 분석",
    image: featureSalesAnalytics,
    objectPosition: "center",
  },
];

type FeatureItem = (typeof outboundFeatures)[number];

const FeatureRows = ({ items }: { items: FeatureItem[] }) => (
  <div className="mt-20 md:mt-28 max-w-6xl mx-auto space-y-16 md:space-y-24">
    {items.map((f, i) => {
      const imageRight = i % 2 === 0;
      return (
        <div
          key={f.title}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch"
        >
          <div
            className={`order-1 ${imageRight ? "lg:order-1" : "lg:order-2"} rounded-2xl md:rounded-[28px] bg-card border border-[hsl(220_60%_94%)] shadow-soft p-8 md:p-12 flex flex-col justify-center`}
          >
            <div className="w-12 h-12 rounded-2xl bg-accent text-primary flex items-center justify-center">
              <f.icon className="w-5 h-5" />
            </div>
            <h3 className="mt-6 text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {f.title}
            </h3>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
          <div
            className={`order-2 ${imageRight ? "lg:order-2" : "lg:order-1"} group relative rounded-2xl md:rounded-[28px] overflow-hidden shadow-soft border border-[hsl(220_60%_94%)] bg-[hsl(220_40%_98.5%)] min-h-[280px] md:min-h-[360px]`}
          >
            <img
              src={f.image}
              alt={f.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-[1.03]"
              style={{ objectPosition: f.objectPosition }}
            />
          </div>
        </div>
      );
    })}
  </div>
);

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

        <FeatureRows items={outboundFeatures} />
      </div>
    </div>

    {/* SECTION 2 — SALES NOTE CRM */}
    <div className="py-24 md:py-32 bg-[hsl(220_40%_98.5%)]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider">
            CRM
          </span>
          <p className="mt-5 text-sm md:text-base font-medium text-muted-foreground">
            바이어별 영업현황, 투명하게 보여드립니다.
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] md:leading-[1.15] text-foreground">
            <span className="block"><span className="text-gradient-primary">Sales Note CRM</span>으로</span>
            <span className="block">모든 바이어 정보를 체계적으로</span>
            <span className="block">관리해드립니다</span>
          </h2>
        </div>

        {/* CRM showcase image */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto reveal">
          <div className="rounded-3xl bg-card border border-[hsl(220_60%_94%)] shadow-elevated overflow-hidden">
            <img
              src={salesNoteShowcase}
              alt="TradeIt Sales Note CRM — 지도와 바이어 파이프라인 관리 화면"
              loading="lazy"
              className="w-full h-auto block object-cover"
            />
          </div>
        </div>

        <FeatureRows items={crmFeatures} />
      </div>
    </div>
  </section>
);