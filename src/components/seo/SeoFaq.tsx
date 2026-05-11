import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SeoFaq = ({ product, country }: { product: string; country?: string | null }) => {
  const where = country ? `${country}` : "해외 시장";
  const faqs = [
    {
      q: `한국 ${product} 제품을 실제로 수입한 ${where} 바이어는 어떻게 확인하나요?`,
      a: `TradeIt은 한국 관세 통관 기반의 한국 수출 데이터(B/L)를 활용해, 최근 ${product} 품목을 ${where}으로 실제 수입한 해외 바이어 기업을 추적합니다.\n
단순한 디렉토리나 검색엔진 노출 기반의 기업 리스트가 아니라, 실제 선적 이력이 확인된 반복 수입 기업을 중심으로 정렬되기 때문에, 해외영업 담당자가 바로 활용 가능한 ‘실제 거래 데이터’ 형태로 제공됩니다.\n
본 페이지에서는 정책상 상위 해외 바이어 30개 기업의 요약 데이터만 제한적으로 공개하며, 회원가입 후에는 전체 바이어 풀, 신규 진입 기업, 국가별 수요 변화, 시기별 거래 흐름까지 확장해 분석할 수 있습니다.\n
이를 통해 ${product} 분야에서 어떤 글로벌 시장이 가장 활발하게 움직이고 있는지, 어떤 기업이 한국 제품을 반복적으로 구매하고 있는지 한눈에 파악할 수 있습니다.`,
    },
    {
      q: `왜 일부 기업명이 가려져 있고, 회원가입을 해야만 전체 정보를 볼 수 있나요?`,
      a: `해외 바이어 정보는 한국 수출 기업에게 매우 민감한 영업 자산이기 때문에, 무단 스크래핑·경쟁사 노출 방지를 위해 공개 페이지에서는 기업명을 부분 마스킹 처리하고 있습니다.\n
또한 본 페이지의 데이터는 ‘공개된 상위 해외 바이어 30개 기업 기준’으로만 제한적으로 노출되며, 전체 글로벌 거래 데이터와는 차이가 있을 수 있습니다.\n
회원가입 후에는 전체 기업명, 본사 소재지, 담당자 컨택 포인트, 그리고 실제 수입 이력(선적 일자·물량·HS코드 단위)을 함께 확인할 수 있어, 단순한 기업 리스트가 아니라 실질적인 영업 타깃 리스트로 활용할 수 있습니다.\n
해외 바이어 발굴이 처음인 담당자라면, 회원가입 후 제공되는 ‘반복 수입 기업’ 우선 리스트부터 확인하는 것을 권장드립니다.`,
    },
    {
      q: `${product} 시장에서 ‘반복 수입 기업’이 왜 중요한가요?`,
      a: `해외영업 관점에서 가장 가치가 높은 바이어는 ‘1회성 테스트 수입 기업’이 아니라, 일정 기간 동안 동일 품목을 반복적으로 수입하는 기업입니다.\n
반복 수입 기업은 이미 해당 카테고리(예: ${product})의 유통 채널, 인증, 물류 라인을 갖춘 경우가 많고, 신규 공급사에 대한 검토 의사 결정 속도가 빠릅니다.\n
TradeIt은 한국 수출 데이터를 기반으로 동일 바이어가 몇 회에 걸쳐, 어떤 주기로, 어느 정도 규모로 한국 제품을 수입했는지 추적합니다. 이 ‘반복 수입 패턴’ 자체가 글로벌 거래 데이터에서 가장 의미 있는 시장 신호입니다.\n
페이지 상단의 요약 카드에서도 ‘반복 거래 바이어’ 비중을 확인할 수 있으며, 회원가입 후에는 반복 수입 기업만 별도로 정렬해 볼 수 있어 해외영업 우선순위 설정에 바로 활용할 수 있습니다.`,
    },
    {
      q: `${where} 외 다른 국가의 ${product} 바이어 데이터도 확인할 수 있나요?`,
      a: `네. TradeIt은 미국·베트남·인도·일본·동남아·중동·EU 등 한국 제품의 주요 수출 시장에 대한 실제 거래 데이터를 폭넓게 확보하고 있습니다.\n
같은 ${product} 카테고리라도 국가별로 수입 수요, 선호 단가, 반복 수입 패턴, 평균 거래 규모가 크게 다르기 때문에, 단일 국가만 보는 것이 아니라 국가별 수요를 비교 분석하는 것이 중요합니다.\n
예를 들어 어떤 국가는 소량·고빈도로 수입하고, 어떤 국가는 대량·저빈도로 수입할 수 있습니다. TradeIt에서는 이러한 국가별 수입 패턴을 시각화하여, ‘우리 제품에 가장 적합한 시장이 어디인지’ 데이터 기반으로 판단할 수 있도록 돕습니다.\n
회원가입 후에는 국가·HS코드·시기별 필터를 활용해, 우선 진입할 시장과 후순위 시장을 명확하게 구분할 수 있습니다.`,
    },
    {
      q: `이 페이지의 데이터는 ‘전체 글로벌 거래 데이터’와 어떻게 다른가요?`,
      a: `본 페이지는 검색엔진과 AI 검색에 노출하기 위한 공개용 SEO 페이지로, 정책상 ‘공개된 상위 해외 바이어 30개 기업 기준’으로만 데이터가 집계되어 있습니다.\n
따라서 표시된 총 선적 건수, 총 거래 금액, 국가 랭킹은 ${product} 품목의 전체 글로벌 거래 규모가 아니라, 가장 활동성이 높은 상위 표본 기업의 합산 지표입니다.\n
실제로는 이 30개 기업 외에도 신규 진입 바이어, 중소형 수입 기업, 특정 시즌에만 수입하는 기업 등 다양한 형태의 해외 바이어가 존재합니다. 이들은 회원가입 후 전체 데이터셋에서 확인할 수 있습니다.\n
이런 구조를 둔 이유는, 공개 페이지에서 모든 거래 정보를 노출할 경우 한국 수출 기업의 영업 자산이 무차별적으로 외부에 유출될 수 있기 때문입니다. 데이터 신뢰성을 유지하면서도, 시장 흐름을 가늠할 수 있도록 핵심 지표만 선별해 공개하고 있습니다.`,
    },
    {
      q: `데이터는 얼마나 자주 갱신되며, 신뢰성은 어떻게 보장되나요?`,
      a: `TradeIt의 한국 수출 데이터는 한국 통관 기반의 실제 선적 기록을 정기적으로 수집·정제하며, 신규 선적과 신규 바이어가 지속적으로 추가됩니다.\n
모든 데이터는 ‘기업이 자체 등록한 정보’가 아니라, 실제로 한국에서 출항된 선적 이력 기반이기 때문에 거래 사실 자체에 대한 신뢰도가 높습니다.\n
또한 동일 바이어가 여러 시기에 걸쳐 동일/유사 품목을 수입한 이력이 누적되어 있어, 단발성 데이터가 아닌 ‘반복 수입 패턴’ 단위의 분석이 가능합니다.\n
회원가입 사용자에게는 최신 갱신 데이터가 우선 반영되며, 특정 카테고리에 대한 신규 진입 바이어 알림도 함께 받아볼 수 있습니다.`,
    },
    {
      q: `해외영업 담당자는 이 데이터를 실제로 어떻게 활용할 수 있나요?`,
      a: `현장 해외영업 담당자는 보통 ‘어느 시장이 우리 제품을 사줄 가능성이 높은가’와 ‘구체적으로 어떤 기업에게 컨택해야 하는가’ 두 가지 질문을 갖고 있습니다.\n
TradeIt의 한국 수출 데이터 기반 SEO 페이지는 첫 번째 질문(국가별 수요·시장 흐름)에 대한 빠른 답을, 회원가입 후 제공되는 전체 데이터셋은 두 번째 질문(실제 거래 기반 컨택 리스트)에 대한 답을 제공합니다.\n
예를 들어 ${product} 담당자라면, 본 페이지에서 어떤 국가가 활발한 수입국인지, 평균 거래 규모는 어느 정도인지를 먼저 파악한 뒤, 회원가입 후 실제 반복 수입 기업을 추출해 메일·콜·전시회 미팅 우선순위를 세울 수 있습니다.\n
이 과정을 통해 막연한 시장 조사가 아닌, ‘실제 수입 이력이 있는 기업 중심의 해외 바이어 발굴’이 가능해집니다.`,
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