import { Check, Star } from "lucide-react";
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
  const filtered = plans.filter((p) => {
    if (variant === "saas") return p.kind === "saas";
    if (variant === "agency") return p.kind === "agency";
    return true;
  });
  const heading =
    variant === "saas"
      ? "합리적인 요금으로 시작하세요"
      : variant === "agency"
        ? "해외영업 대행 상품"
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