import buyerImg from "@/assets/bl-tracking-main.png";
import contactImg from "@/assets/buyer-profile-salesnote.png";
import crmImg from "@/assets/sales-note-showcase.png";

const cards = [
  {
    eyebrow: "BUYER DISCOVERY",
    title: "실제 구매 이력이 있는\n해외 바이어를 발굴합니다",
    desc: "글로벌 수출입 무역데이터를 기반으로 귀사의 제품군을 실제로 수입한 해외 바이어를 발굴합니다.",
    label: "실제 거래 기반 바이어 분석",
    image: buyerImg,
    alt: "실제 거래 데이터 기반 바이어 발굴",
  },
  {
    eyebrow: "DECISION MAKER",
    title: "실제 구매 담당자와\n연결 가능성을 높입니다",
    desc: "기업 정보와 담당자 데이터를 기반으로 실제 구매 및 협의를 진행할 가능성이 높은 담당자에게 컨택합니다.",
    label: "핵심 담당자 기반 해외영업",
    image: contactImg,
    alt: "핵심 의사결정권자 컨택",
  },
  {
    eyebrow: "SALES MANAGEMENT",
    title: "바이어 발굴 이후의\n영업 과정까지 관리합니다",
    desc: "문의, 견적, 미팅, 후속관리 등 실제 해외영업 진행 상황을 체계적으로 운영하고 기록합니다.",
    label: "체계적인 해외영업 운영 관리",
    image: crmImg,
    alt: "해외영업 운영 관리",
  },
];

export const AgencySolution = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3 tracking-[0.2em] uppercase">Solution</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight text-foreground">
          막막한 문제를
          <br />
          <span className="text-gradient-primary">대신 해결</span>해드립니다
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          트레이드잇은 글로벌 무역데이터와 실제 해외영업 운영 경험을 기반으로
          <br className="hidden md:block" />
          바이어 발굴부터 담당자 연결, 후속 관리까지 함께 진행합니다.
        </p>
      </div>

      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 reveal">
        {cards.map((c, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-3xl bg-card border border-[hsl(220_30%_92%)] shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth flex flex-col"
          >
            <div className="relative aspect-[5/3] overflow-hidden bg-[hsl(220_40%_97%)]">
              <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/95 backdrop-blur text-[11px] font-bold tracking-[0.15em] text-primary">
                  {c.eyebrow}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 px-7 md:px-8 pt-7 pb-7">
              <h3 className="text-xl md:text-[22px] font-bold text-foreground leading-snug tracking-tight whitespace-pre-line">
                {c.title}
              </h3>
              <p className="mt-4 text-[15px] md:text-base text-muted-foreground leading-[1.8]">
                {c.desc}
              </p>

              <div className="mt-7 pt-5 border-t border-border/60">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {c.label}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
