import { Target, Contact, Send } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "실제 구매하는 바이어만 찾습니다",
    desc: "B/L 데이터 기반으로 실제 수입 이력이 있는\n기업만 선별합니다.",
  },
  {
    icon: Contact,
    title: "담당자 컨택 정보를 확보합니다",
    desc: "이메일, 전화번호 등 실제 연결 가능한 정보를 제공합니다.",
  },
  {
    icon: Send,
    title: "실제 컨택까지 이어집니다",
    desc: "이메일 발송 및 후속 대응까지 전 과정을 지원합니다.",
  },
];

export const Solution = () => (
  <section id="service" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">SOLUTION</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          트레이드잇은 <span className="text-gradient-primary">이렇게 해결</span>합니다
        </h2>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal relative rounded-3xl bg-card border border-border/70 p-8 shadow-card hover:-translate-y-2 hover:shadow-elevated transition-smooth"
          >
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-soft">
              {i + 1}
            </div>
            <div className="mt-3 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
              <it.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);