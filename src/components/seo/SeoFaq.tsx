import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SeoFaq = ({ product, country }: { product: string; country?: string | null }) => {
  const where = country ? `${country}` : "해외 시장";
  const faqs = [
    {
      q: `한국에서 수출된 ${product} 바이어를 어떻게 찾을 수 있나요?`,
      a: `한국에서 수출된 ${product} 바이어를 찾기 위해서는 단순 기업 검색보다 실제 수입 거래 데이터를 기반으로 접근하는 것이 중요합니다.\n
실제 해외 바이어들은 반복적으로 특정 제품을 수입하는 경향이 있기 때문에, 실제 거래 이력이 존재하는 기업을 분석하면 보다 정확한 타겟 발굴이 가능합니다.\n
반복적으로 한국 제품을 수입하는 기업에서는 신규 공급처를 검토할 가능성도 상대적으로 높습니다.\n
트레이드잇은 실제 한국발 수출 데이터를 기반으로 해외 바이어 활동을 분석하여, 거래 이력이 확인된 해외 기업 정보를 제공합니다.`,
    },
    {
      q: `어떤 국가가 한국으로부터 ${product} 제품을 많이 수입하나요?`,
      a: `한국에서 수출된 ${product} 제품의 수입 수요는 국가별 시장 구조와 소비 트렌드에 따라 차이가 있습니다.\n
일반적으로 한국 제품에 대한 선호도가 높은 국가일수록 반복적인 수입 활동이 활발하게 나타나는 경향이 있으며, 특히 K-Beauty, K-Food, 산업재와 같이 한국 경쟁력이 높은 산업군에서는 특정 국가를 중심으로 안정적인 수입 시장이 형성되고 있습니다.\n
실제 거래 데이터를 분석하면 일부 국가에서는 지속적으로 한국 ${product} 제품을 수입하는 기업 수가 많게 나타나며, 이는 해당 시장 내 수요가 꾸준하게 유지되고 있다는 의미로 해석할 수 있습니다.\n
트레이드잇은 상위 해외 바이어 데이터를 기반으로 주요 수입 국가와 바이어 활동 흐름을 분석합니다.`,
    },
    {
      q: `한국에서 ${product} 수출을 시작할 때 가장 중요한 것은 무엇인가요?`,
      a: `한국에서 ${product} 수출을 처음 시작하는 기업들이 가장 많이 어려워하는 부분은 실제 구매 가능성이 있는 해외 바이어를 찾는 과정입니다.\n
많은 기업들이 전시회, 검색 엔진, 기업 디렉토리 등을 통해 바이어를 찾고 있지만, 실제 거래 의사가 있는 기업을 선별하는 데에는 상당한 시간이 소요됩니다.\n
반면 실제 수입 거래 데이터를 활용하면 이미 한국 제품 또는 유사 제품을 수입한 이력이 있는 기업들을 우선적으로 확인할 수 있기 때문에 보다 효율적인 해외영업 전략 수립이 가능합니다.\n
특히 반복 수입 이력이 있는 바이어 기업들은 지속적인 공급망 확보가 필요한 경우가 많아 신규 공급처 검토 가능성이 상대적으로 높은 편입니다.`,
    },
    {
      q: `신규 해외 바이어를 B/L 데이터를 기반으로 찾는게 왜 중요한가요?`,
      a: `해외 바이어 발굴 과정에서 가장 중요한 것은 실제 구매 활동 여부를 확인하는 것입니다.\n
단순 기업 리스트나 디렉토리 기반 데이터의 경우 실제 수입 활동이 이루어지고 있는지 확인하기 어려운 경우가 많지만, 실제 거래 기반 데이터는 특정 기업이 어떤 제품을 어느 국가에서 반복적으로 수입하고 있는지 파악할 수 있다는 장점이 있습니다.\n
예를 들어 한국산 ${product} 바이어를 찾고 있는 경우, 실제 한국발 ${product}을 지속적으로 수입한 기업 데이터를 분석하면 보다 현실적인 타겟 시장과 바이어 후보군을 확보할 수 있습니다.\n
이러한 데이터 기반 접근 방식은 해외영업 효율을 높이고 바이어 탐색 과정에서의 시행착오를 줄이는 데 도움이 됩니다.`,
    },
    {
      q: `한국산 ${product} 시장은 글로벌 시장에서 어떤 경쟁력을 가지고 있나요?`,
      a: `한국의 ${product} 산업은 글로벌 시장에서 품질 경쟁력, 가격 경쟁력, 그리고 빠른 제품 대응력을 기반으로 지속적인 수출 성장을 이어가고 있습니다.\n
특히 화장품, 식품, 산업재와 같은 분야에서는 한국 제품에 대한 해외 수요가 꾸준하게 증가하고 있으며, 일부 국가에서는 특정 한국 브랜드 및 제품군에 대한 선호도가 높게 형성되어 있습니다.\n
실제 글로벌 거래 데이터를 분석해보면 한국 제품을 반복적으로 수입하는 해외 기업들이 꾸준히 존재하며, 이는 한국 제품에 대한 안정적인 시장 수요가 형성되어 있다는 점을 보여줍니다.\n
또한 최근에는 단순 OEM 제품뿐 아니라 한국 브랜드 자체에 대한 관심도 증가하면서 해외 바이어들의 수입 활동이 더욱 다양해지고 있습니다.`,
    },
    {
      q: `해외 바이어 발굴 시 반복 거래 이력이 중요한 이유는 무엇인가요?`,
      a: `반복 거래 이력이 있다는 것은 해당 기업이 특정 제품군에 대해 지속적인 수입 수요를 가지고 있다는 의미로 해석할 수 있습니다.\n
실제 글로벌 무역 시장에서는 일회성 거래보다 반복 거래를 수행하는 바이어 기업들의 가치가 훨씬 높게 평가되며, 이러한 기업들은 안정적인 공급망 확보를 중요하게 생각하는 경우가 많습니다.\n
따라서 ${product} 수출을 확대하고자 하는 기업 입장에서는 단순 신규 기업 리스트보다 반복 수입 활동이 확인된 해외 바이어 데이터를 우선적으로 분석하는 것이 보다 효율적인 접근 방식이 될 수 있습니다.\n
트레이드잇은 실제 B/L 데이터를 기반으로 해외 바이어 활동을 분석하여 반복 거래 이력이 있는 기업 정보를 제공합니다.`,
    },
  ];
  void where;

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
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-1 text-sm md:text-[15px] leading-7 text-muted-foreground whitespace-pre-line">
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