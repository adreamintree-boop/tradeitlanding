import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "어떤 방식으로 바이어를 발굴하나요?",
    a: (
      <>
        <p>
          TradeIt은 글로벌 수출입 무역데이터(B/L Data)를 기반으로 실제 수입 이력이 있는 해외 바이어를 탐색합니다.
        </p>
        <p>
          단순 기업 리스트가 아닌, 실제로 귀사의 제품군을 수입했거나 유사 제품을 지속적으로 수입한 기업을 우선적으로 분석합니다.
        </p>
        <p>
          이후 기업 규모, 수입 빈도, 취급 품목, 국가, 담당자 정보 등을 종합적으로 검토하여 구매 가능성이 높은 바이어를 선별합니다.
        </p>
      </>
    ),
  },
  {
    q: "어떤 기업에게 적합한 서비스인가요?",
    a: (
      <>
        <p>아래와 같은 기업들에게 특히 적합합니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>해외영업 인력이 부족한 기업</li>
          <li>전시회 중심 영업의 효율이 낮았던 기업</li>
          <li>신규 해외 바이어 발굴이 필요한 기업</li>
          <li>수출을 시작하려는 제조기업</li>
          <li>기존 국가 외 새로운 시장을 찾는 기업</li>
        </ul>
        <p>식품, 화장품, 산업재, 소비재, 부품, 건자재 등 다양한 산업군에서 활용 가능합니다.</p>
      </>
    ),
  },
  {
    q: "수출 경험이 없어도 진행 가능한가요?",
    a: (
      <>
        <p>가능합니다.</p>
        <p>
          트레이드잇은 단순 바이어 리스트 제공이 아니라, 담당자 정보 확보부터 바이어 컨택까지 함께 진행합니다.
        </p>
        <p>
          수출 경험이 부족한 기업도 현재 제품과 시장 상황에 맞춰 해외영업 방향을 설정할 수 있도록 지원합니다.
        </p>
      </>
    ),
  },
  {
    q: "어느 국가의 데이터를 제공하나요?",
    a: (
      <>
        <p>
          TradeIt은 글로벌 수출입 데이터를 기반으로 다양한 국가의 무역 기록을 분석합니다.
        </p>
        <p>
          미국, 베트남, 인도, 중동 등 주요 글로벌 시장의 바이어 발굴이 가능하며, 산업군 및 국가별 특성에 맞춰 바이어를 발굴하고 컨택을 진행합니다.
        </p>
      </>
    ),
  },
  {
    q: "바이어와의 연락 내용은 어떻게 확인할 수 있나요?",
    a: (
      <>
        <p>
          바이어와의 영업 내용은 Sales Note CRM 상에서 투명하게 공개됩니다.
        </p>
        <p>
          어떤 바이어가 발굴되었는지, 영업을 진행하면서 어떤 소통이 오갔는지 등을 영업활동일지 형태로 기록하여 실시간으로 확인할 수 있습니다.
        </p>
      </>
    ),
  },
  {
    q: "실제 수출 성과 사례가 있나요?",
    a: (
      <>
        <p>
          트레이드잇은 다양한 산업군에서 실제 해외 바이어 발굴 및 수출 연결 사례를 만들어가고 있습니다.
        </p>
        <p className="font-semibold text-foreground">대표 사례:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>건강기능식품 몽골 수출 계약</li>
          <li>매트리스 베트남 수출 계약</li>
          <li>산업재 글로벌 시장 진출</li>
          <li>해외 전시회 기반 후속 바이어 발굴</li>
        </ul>
        <p>등 실제 해외영업 사례를 지속적으로 축적하고 있습니다.</p>
      </>
    ),
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div
                key={i}
                className="reveal rounded-3xl bg-[hsl(220_30%_97%)] border border-border/50 transition-smooth hover:shadow-card overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-7 py-6 md:px-8 md:py-7"
                >
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 md:px-8 pb-7 pt-2 text-sm md:text-[15px] leading-7 text-muted-foreground space-y-3">
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