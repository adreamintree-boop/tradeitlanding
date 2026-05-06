import shipImg from "@/assets/problem-ship.jpg";
import clipboardImg from "@/assets/problem-clipboard.jpg";
import officeImg from "@/assets/problem-office.jpg";
import marketingImg from "@/assets/problem-marketing.jpg";

const cards = [
  {
    no: "01",
    title: "막연한 수출",
    desc: "어디 국가를 공략해야 할지, 누가 실제 바이어인지 판단하기 어렵습니다.",
    image: shipImg,
  },
  {
    no: "02",
    title: "바이어 발굴의 어려움",
    desc: "전시회, 검색, 지인 소개만으로는 실제 구매 가능성이 높은 바이어를 찾기 어렵습니다.",
    image: clipboardImg,
  },
  {
    no: "03",
    title: "해외영업 인력 부족",
    desc: "전담 해외영업팀 없이 대표님 또는 소수 인원이 모든 업무를 처리합니다.",
    image: officeImg,
  },
  {
    no: "04",
    title: "효율적인 마케팅 수단 부족",
    desc: "광고 비용은 높지만 실제 구매 가능성이 있는 바이어 연결은 어렵습니다.",
    image: marketingImg,
  },
];

export const AgencyProblem = () => (
  <section className="py-24 md:py-32 bg-[hsl(220_40%_98.5%)]">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3 tracking-wide">WHY TRADEIT</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight text-foreground">
          많은 제조사들이 왜
          <br />
          트레이드잇과 <span className="text-gradient-primary">함께할까요?</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          저희는 국내 중소 · 중견 기업들이
          <br className="hidden md:block" />
          가장 크게 어려워하는 해외영업 문제를 해결합니다.
        </p>
      </div>

      <div className="mt-14 md:mt-20 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible reveal">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 snap-x snap-mandatory md:snap-none">
          {cards.map((c) => (
            <article
              key={c.no}
              className="group shrink-0 w-[78%] sm:w-[60%] md:w-auto snap-center rounded-3xl bg-card border border-[hsl(220_60%_94%)] shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth p-5 flex flex-col"
            >
              <div className="overflow-hidden rounded-[18px] aspect-[4/3]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-5 pb-2 px-1">
                <p className="text-xs font-bold text-primary tracking-wider mb-2">{c.no}</p>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);