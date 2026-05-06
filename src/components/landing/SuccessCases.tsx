import healthImg from "@/assets/success-health.jpg";
import aluminumImg from "@/assets/success-aluminum.jpg";
import campingImg from "@/assets/success-camping.jpg";

const cases = [
  {
    category: "건강기능식품",
    company: "(주)한국****연구소",
    desc: "바이어와 대면 미팅 이후 샘플 구매 과정을 거쳐, MOU 체결과 본 계약을 성공적으로 추진하며 계약 성사를 도와하였습니다.",
    image: healthImg,
  },
  {
    category: "알루미늄 스크랩",
    company: "(주)제이****소재",
    desc: "수출입 데이터를 분석하고 시장 조사를 면밀히 하며 시장 가격 변동을 주의 깊게 살핀 후, 적절한 가격으로 바이어에게 제안하여 수출을 성사시켰습니다.",
    image: aluminumImg,
  },
  {
    category: "캠핑매트",
    company: "(주)대***티",
    desc: "바이어가 요청한 제품 사양과 OEM 세부 사항을 신속히 조율하였고, 선적 데드라인 준수를 위해 제조사와 긴밀한 협의를 통해 수출을 성공하였습니다.",
    image: campingImg,
  },
];

export const SuccessCases = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">수출성공사례</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight">
          <span className="text-gradient-primary">트레이드잇</span>과 함께하여 다수의
          <br />
          중소기업들이 해외 시장에 진출하였습니다
        </h2>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div
            key={c.company}
            className="reveal group rounded-3xl bg-card border border-border/70 overflow-hidden shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={c.image}
                alt={`${c.company} 수출 성공 사례`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {c.category}
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight">{c.company}</h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);