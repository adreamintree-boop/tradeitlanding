import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SeoFaq = ({ product, country }: { product: string; country?: string | null }) => {
  const where = country ? `${country}` : "해외 시장";
  const faqs = [
    {
      q: `${product} 해외 바이어 데이터는 어떻게 수집되나요?`,
      a: `TradeIt은 글로벌 통관·수출입(B/L) 데이터를 기반으로 ${product} 품목을 실제 수입한 ${where} 바이어를 추적합니다. 단순 기업 디렉토리가 아닌, 실제 거래 이력에 기반한 검증된 데이터입니다.`,
    },
    {
      q: "기업명이 일부 가려진 이유는 무엇인가요?",
      a: "데이터 보호 및 경쟁사 노출 방지를 위해 공개 페이지에서는 기업명 일부를 마스킹 처리하고 있습니다. 회원가입 후 인증된 사용자에게는 전체 기업명, 담당자 정보, 상세 거래 내역이 제공됩니다.",
    },
    {
      q: `${where} 외 다른 국가의 바이어도 확인할 수 있나요?`,
      a: "네. TradeIt은 미국, 베트남, 인도, 중동, 동남아 등 글로벌 주요 시장의 수출입 데이터를 보유하고 있습니다. 회원가입 후 국가·산업·HS코드 단위로 필터링하여 원하는 시장의 바이어를 찾을 수 있습니다.",
    },
    {
      q: "데이터는 얼마나 자주 업데이트되나요?",
      a: "TradeIt의 무역 데이터는 정기적으로 갱신되며, 신규 선적 기록과 신규 바이어가 지속적으로 추가됩니다. 가입 회원은 최신 데이터를 우선적으로 확인할 수 있습니다.",
    },
    {
      q: "수출 경험이 없어도 바이어와 컨택할 수 있나요?",
      a: "가능합니다. TradeIt의 해외영업 대행 서비스를 통해 발굴된 바이어에게 직접 컨택을 진행해드립니다. 수출 초기 기업도 검증된 바이어에게 즉시 영업을 시작할 수 있습니다.",
    },
  ];

  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-3">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">자주 묻는 질문</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={i} className="rounded-2xl bg-[hsl(220_30%_98%)] border border-border/60 overflow-hidden transition-smooth hover:shadow-card">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7 md:py-6"
                >
                  <span className="text-base md:text-[17px] font-semibold text-foreground">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-1 text-sm md:text-[15px] leading-7 text-muted-foreground">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};