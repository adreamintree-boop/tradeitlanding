import { Check, Star, Briefcase, Users, MessageSquare, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRequestModal } from "./RequestModalContext";

type Plan = {
  name: string;
  price: string;
  suffix: string;
  note?: string;
  credits?: string;
  features: string[];
  guarantee?: string;
  cta: string;
  badge?: string | null;
  recommended?: boolean;
  highlight?: boolean;
  kind: "saas" | "agency";
};

const plans: Plan[] = [
  {
    name: "플러스(Plus)",
    price: "49,000원",
    suffix: "/ 월(VAT 포함)",
    note: "고빈도 수출을 하는 해외영업 담당자를 위한 플랜",
    credits: "매월 5,000 크레딧 제공",
    features: [
      "Sales Note CRM을 통한 바이어 관리",
      "바이어 검색 'B/L 데이터'",
      "해외시장 분석 'AI Core'",
      "바이어 정보 보강 'Enrichment'",
      "바이어 적합도 분석 'Buyer Fit'",
      "영업활동일지 'Sales Note'",
    ],
    cta: "시작하기",
    badge: null,
    kind: "saas" as const,
  },
  {
    name: "프로(Pro)",
    price: "99,000원",
    suffix: "/ 월(VAT 포함)",
    note: "고빈도 수출 담당자를 위한 고급 플랜",
    credits: "매월 10,000 크레딧 제공",
    features: [
      "Sales Note CRM을 통한 바이어 관리",
      "바이어 검색 'B/L 데이터'",
      "해외시장 분석 'AI Core'",
      "바이어 정보 보강 'Enrichment'",
      "바이어 적합도 분석 'Buyer Fit'",
      "영업활동일지 'Sales Note'",
    ],
    cta: "시작하기",
    badge: "Recommended",
    recommended: true,
    kind: "saas" as const,
  },
  {
    name: "프리미엄(Premium)",
    price: "490,000원",
    suffix: "/ 월(VAT 포함)",
    note: "팀 단위 운영 및 대량 활용을 위한 기업형 플랜",
    credits: "매월 50,000 크레딧 제공",
    features: [
      "Sales Note CRM을 통한 바이어 관리",
      "바이어 검색 'B/L 데이터'",
      "해외시장 분석 'AI Core'",
      "바이어 정보 보강 'Enrichment'",
      "바이어 적합도 분석 'Buyer Fit'",
      "영업활동일지 'Sales Note'",
      "팀 단위 운영 지원",
    ],
    cta: "시작하기",
    badge: null,
    kind: "saas" as const,
  },
  {
    name: "하이브리드(Hybrid)",
    price: "₩1,990,000",
    suffix: "/ 월",
    note: "6개월 계약 · VAT 포함",
    features: [
      "총 바이어 50개 발굴",
      "발굴된 바이어 CRM 등록 및 관리",
      "이메일 소통 및 컨택이력 기록",
      "바이어 Inquiry 전달",
    ],
    guarantee: "Target 바이어 5개 보장",
    cta: "상담 신청",
    badge: null,
    kind: "agency" as const,
  },
];

interface PricingProps {
  variant?: "saas" | "agency" | "all";
}

export const Pricing = ({ variant = "all" }: PricingProps) => {
  const { open } = useRequestModal();

  if (variant === "agency") {
    const hybrid = plans.find((p) => p.name.startsWith("하이브리드"))!;
    const services = [
      {
        icon: Briefcase,
        title: "데이터 기반의 정교한 진출 전략 수립",
        desc: "제품 및 타겟 국가의 시장성을 분석하고, 실행 가능한 글로벌 진출 전략을 설계합니다.",
      },
      {
        icon: Users,
        title: "AI와 전문가가 검증한 진성 바이어 발굴",
        desc: "실제 수입 데이터를 기반으로 구매 가능성이 높은 바이어를 선별합니다.",
      },
      {
        icon: MessageSquare,
        title: "바이어 커뮤니케이션 및 미팅 어레인지",
        desc: "초기 소통부터 이메일 Follow-up, 미팅 일정 조율까지 직접 지원합니다.",
      },
      {
        icon: BarChart3,
        title: "CRM 기반 진행 현황 관리 및 리포트 제공",
        desc: "컨택 이력과 진행 상태를 기록하고 주간 단위로 리포트를 제공합니다.",
      },
    ];
    const industries = ["뷰티·화장품", "산업재", "식품", "헬스케어", "IT·SaaS"];

    return (
      <section id="pricing" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="text-sm font-semibold text-primary mb-3">PRICING</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              해외영업 대행 상품
            </h2>
            <p className="mt-4 text-muted-foreground">
              전담 해외영업 매니저가 발굴부터 컨택, 리포트까지 직접 수행합니다.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Left: Hybrid card */}
            <div className="lg:col-span-4 reveal">
              <div className="relative rounded-3xl bg-card border border-border/70 shadow-elevated p-8 flex flex-col h-full">
                <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wide mb-5">
                  HYBRID PLAN
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{hybrid.name}</h3>
                <div className="mt-4 flex items-end gap-1.5 flex-wrap">
                  <span className="text-4xl font-bold leading-none tracking-tight">
                    {hybrid.price}
                  </span>
                  <span className="text-xs pb-1 text-muted-foreground">{hybrid.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{hybrid.note}</p>

                <div className="my-6 h-px bg-border/70" />

                <ul className="space-y-3 text-sm">
                  {hybrid.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                {hybrid.guarantee && (
                  <div className="mt-6 px-3 py-2.5 rounded-xl text-xs font-semibold text-center bg-accent text-accent-foreground">
                    ✓ {hybrid.guarantee}
                  </div>
                )}

                <div className="mt-4 px-4 py-3 rounded-xl bg-muted/50 border border-border/60 text-center text-xs text-muted-foreground">
                  전담 해외영업 매니저 배정
                </div>

                <Button
                  className="mt-8 w-full"
                  onClick={() => open(`${hybrid.name} 상담 신청`, hybrid.name)}
                >
                  상담 신청
                </Button>
              </div>
            </div>

            {/* Right: Services */}
            <div className="lg:col-span-8 reveal">
              <p className="text-sm font-semibold text-foreground mb-5 border-l-2 border-primary pl-3">
                전담 핵심 서비스
              </p>
              <div className="space-y-4">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-card transition-smooth p-6 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-1.5">{s.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold text-muted-foreground mb-3 tracking-wide">
                  지원 가능한 산업군
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-accent/60 text-accent-foreground text-xs font-medium border border-border/50"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const filtered = plans.filter((p) => {
    if (variant === "saas") return p.kind === "saas";
    return true;
  });
  const heading =
    variant === "saas"
      ? "합리적인 요금으로 시작하세요"
      : "우리 상황에 맞게 선택하세요";
  const gridCols =
    filtered.length === 1
      ? "max-w-md mx-auto"
      : filtered.length <= 2
        ? "md:grid-cols-2 max-w-3xl mx-auto"
        : filtered.length === 3
          ? "md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          : "md:grid-cols-2 xl:grid-cols-4";
  return (
  <section id="pricing" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">PRICING</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {heading}
        </h2>
      </div>
      <div className={`mt-14 grid ${gridCols} gap-6 items-stretch`}>
        {filtered.map((p) => (
          <div
            key={p.name}
            className={`reveal relative rounded-3xl p-8 flex flex-col h-full transition-smooth hover:-translate-y-2 ${
              p.highlight
                ? "bg-gradient-cta text-primary-foreground shadow-elevated xl:scale-105 hover:shadow-glow border border-primary/20"
                : p.recommended
                  ? "bg-card border-2 border-primary shadow-elevated lg:scale-[1.02] hover:shadow-glow"
                  : "bg-card border border-border/70 shadow-soft hover:shadow-card"
            }`}
          >
            {p.badge && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-soft ${
                p.recommended ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
              }`}>
                <Star className="w-3 h-3 fill-current" /> {p.badge}
              </div>
            )}
            <h3 className="text-base font-semibold">{p.name}</h3>
            <div className="mt-3 flex items-end gap-1.5 flex-wrap">
              <span className="text-3xl md:text-4xl font-bold leading-none tracking-tight">{p.price}</span>
              <span className={`text-xs pb-1 ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>{p.suffix}</span>
            </div>
            <p className={`mt-3 text-sm min-h-[2.5rem] ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>
              {p.note ?? ""}
            </p>
            {p.credits && (
              <p className={`mt-2 text-sm font-semibold ${p.highlight ? "" : "text-foreground"}`}>
                {p.credits}
              </p>
            )}
            <ul className="mt-6 space-y-3 text-sm flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`w-4 h-4 mt-0.5 ${p.highlight ? "" : "text-primary"}`} />
                  <span className={p.highlight ? "" : "text-foreground/90"}>{f}</span>
                </li>
              ))}
            </ul>
            {p.guarantee && (
              <div className={`mt-6 px-3 py-2.5 rounded-xl text-xs font-semibold text-center ${
                p.highlight ? "bg-white/15" : "bg-accent text-accent-foreground"
              }`}>
                ✓ {p.guarantee}
              </div>
            )}
            {p.cta === "상담 신청" ? (
              <Button
                variant={p.highlight ? "secondary" : "default"}
                className={`mt-8 w-full inline-flex items-center justify-center text-center leading-none ${p.highlight ? "bg-white text-primary hover:bg-white/90" : ""}`}
                onClick={() => open(`${p.name} 상담 신청`, p.name)}
              >
                {p.cta}
              </Button>
            ) : (
              <Button
                asChild
                variant={p.highlight ? "secondary" : "default"}
                className={`mt-8 w-full inline-flex items-center justify-center text-center leading-none ${p.highlight ? "bg-white text-primary hover:bg-white/90" : ""}`}
              >
                <Link to="/login">{p.cta}</Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};