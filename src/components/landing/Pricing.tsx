import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRequestModal } from "./RequestModalContext";

const plans = [
  {
    name: "Starter Plan",
    price: "₩99,000",
    suffix: "/월",
    note: "VAT 포함",
    features: [
      "10,000 크레딧",
      "B/L 데이터 검색",
      "담당자 연락처 Enrichment",
      "CRM (Sales Note)",
      "이메일 연동",
    ],
    cta: "시작하기",
    badge: null,
  },
  {
    name: "Data Package",
    price: "₩99,000",
    suffix: "/1회",
    note: "VAT 포함",
    features: ["바이어 20개 제공", "실제 수입 이력 기반", "CRM에 정리 후 제공"],
    cta: "리스트 받아보기",
    badge: null,
  },
  {
    name: "해외영업 대행 A",
    price: "₩990,000",
    suffix: "/월",
    note: "6개월 계약 · VAT 포함",
    features: [
      "총 바이어 30개 발굴",
      "CRM 등록",
      "컨택 및 관리",
      "이메일 발송 및 대응",
    ],
    guarantee: "Target 바이어 2개 보장",
    cta: "상담 신청",
    badge: "Popular",
    highlight: true,
  },
  {
    name: "해외영업 대행 B",
    price: "₩1,990,000",
    suffix: "/월",
    note: "6개월 계약 · VAT 포함",
    features: [
      "총 바이어 50개 발굴",
      "CRM 등록",
      "컨택 및 관리",
      "이메일 발송 및 대응",
    ],
    guarantee: "Target 바이어 5개 보장",
    cta: "상담 신청",
    badge: null,
  },
];

export const Pricing = () => {
  const { open } = useRequestModal();
  return (
  <section id="pricing" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">PRICING</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          SaaS로 시작하고, 필요할 때 실행까지
        </h2>
        <p className="mt-5 text-muted-foreground text-base md:text-lg">
          데이터 플랫폼은 직접 사용하고, 대행 서비스는 필요한 만큼만 추가하세요.
        </p>
      </div>
      <div className="mt-14">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-4 reveal">
          SAAS PLANS
        </p>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {plans.filter((p) => !p.name.includes("대행")).map((p) => (
          <div
            key={p.name}
            className={`reveal relative rounded-3xl p-8 flex flex-col h-full transition-smooth hover:-translate-y-2 ${
              p.highlight
                ? "bg-gradient-cta text-primary-foreground shadow-elevated xl:scale-105 hover:shadow-glow border border-primary/20"
                : "bg-card border border-border/70 shadow-soft hover:shadow-card"
            }`}
          >
            {p.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground text-background text-[11px] font-semibold tracking-wide shadow-soft">
                <Star className="w-3 h-3 fill-current" /> {p.badge}
              </div>
            )}
            <h3 className="text-lg font-semibold min-h-[3.5rem]">{p.name}</h3>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-3xl md:text-4xl font-bold leading-none">{p.price}</span>
              <span className={`text-sm pb-1 ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>{p.suffix}</span>
            </div>
            <p className={`mt-2 text-xs h-4 ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>
              {p.note ?? ""}
            </p>
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

        <div className="mt-16 reveal">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">
              NEED EXECUTION SUPPORT?
            </p>
            <span className="text-xs text-muted-foreground/80 hidden md:block">
              해외영업 인력이 부족하다면 추가하세요
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {plans.filter((p) => p.name.includes("대행")).map((p) => (
              <div
                key={p.name}
                className="reveal relative rounded-2xl p-6 md:p-7 flex flex-col h-full bg-muted/40 border border-border/60 hover:bg-card hover:shadow-soft transition-smooth"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-muted-foreground">SERVICE</p>
                    <h3 className="mt-1 text-base md:text-lg font-semibold">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold leading-none">{p.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">{p.suffix}</div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{p.note}</p>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-primary/70 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {p.guarantee && (
                  <div className="mt-4 px-3 py-2 rounded-lg text-xs font-semibold text-center bg-accent text-accent-foreground">
                    ✓ {p.guarantee}
                  </div>
                )}
                <Button
                  variant="outline"
                  className="mt-6 w-full"
                  onClick={() => open(`${p.name} 상담 신청`, p.name)}
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};