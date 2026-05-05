import { HelpCircle, Mail, MessageSquareOff } from "lucide-react";

const items = [
  {
    icon: HelpCircle,
    title: "어떤 바이어를 찾아야 할지 모르겠습니다",
    desc: "검색은 많지만 실제 구매하는 기업인지 알 수 없습니다.",
  },
  {
    icon: Mail,
    title: "담당자 연락처를 찾기가 어렵습니다",
    desc: "이메일 하나 찾기 위해 많은 시간이 소요됩니다.",
  },
  {
    icon: MessageSquareOff,
    title: "연락을 해도 답장이 오지 않습니다",
    desc: "잘못된 타겟에게 연락하고 있기 때문입니다.",
  },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">PROBLEM</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          해외영업, 왜 이렇게 어려울까요?
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal group rounded-3xl border border-border/70 bg-card p-8 shadow-soft hover:-translate-y-1 hover:shadow-card transition-smooth"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-smooth">
              <it.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-lg md:text-xl font-medium reveal">
        문제는 <span className="text-gradient-primary font-bold">방법이 아니라 타겟</span>입니다.
      </p>
    </div>
  </section>
);