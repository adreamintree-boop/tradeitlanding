import shipImg from "@/assets/problem-ship.jpg";
import officeImg from "@/assets/problem-office.jpg";
import marketingImg from "@/assets/problem-marketing.jpg";

const cards = [
  {
    title: "바이어를 어디서 찾아야 할지 모릅니다",
    desc: "전시회, 구글 검색만으로는 실제 구매 가능성이 있는 해외 바이어를 찾기 어렵습니다.",
    label: "실제 구매 이력 기반 바이어 발굴 필요",
    image: shipImg,
    alt: "글로벌 물류 컨테이너 항구",
  },
  {
    title: "누구에게 연락해야 할지 막막합니다",
    desc: "기업은 찾았지만 실제 구매를 결정하는 담당자 연결이 어려워 영업이 중단되는 경우가 많습니다.",
    label: "핵심 의사결정권자 확보 필요",
    image: officeImg,
    alt: "해외 바이어 의사결정자 미팅",
  },
  {
    title: "해외영업 진행 과정이 복잡합니다",
    desc: "문의, 견적, 계약, 후속관리까지 모든 과정을 직접 관리하기에는 시간과 리소스 부담이 큽니다.",
    label: "체계적인 해외영업 관리 필요",
    image: marketingImg,
    alt: "수출 영업 프로세스 관리",
  },
];

export const AgencyProblem = () => (
  <section className="py-24 md:py-32 bg-[hsl(220_40%_98.5%)]">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3 tracking-[0.2em] uppercase">Problem</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight text-foreground">
          해외영업,
          <br />
          왜 항상 <span className="text-gradient-primary">어려울까요?</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          기업이 실제 해외영업 과정에서 겪는 대표적인 문제들을
          <br className="hidden md:block" />
          트레이드잇이 함께 해결합니다.
        </p>
      </div>

      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 reveal">
        {cards.map((c, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-3xl bg-card border border-[hsl(220_30%_92%)] shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth flex flex-col"
          >
            <div className="relative aspect-[5/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
            </div>

            <div className="flex flex-col flex-1 px-7 md:px-8 pt-7 pb-7">
              <h3 className="text-xl md:text-[22px] font-bold text-foreground leading-snug tracking-tight">
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