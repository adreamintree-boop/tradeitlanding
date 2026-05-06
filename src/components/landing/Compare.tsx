import { Lightbulb, Sparkles, Search, Database, Send, KanbanSquare, Mail, ArrowRight } from "lucide-react";
import searchImg from "@/assets/howitworks-search.png";
import enrichImg from "@/assets/howitworks-enrich.png";
import contactImg from "@/assets/howitworks-contact.png";
import crmImg from "@/assets/howitworks-crm.png";
import emailImg from "@/assets/howitworks-email.png";

const oldWays = [
  "바이어는 어디에 있을까?",
  "전시회에 가면 만날 수 있을까?",
  "구글에서 검색해볼까?",
  "알리바바에 올려볼까?",
  "아는 사람에게 소개받을까?",
  "콜드 메일을 보내볼까?",
];

const newWays = [
  "누가 이 제품을 실제로 사고 있는가?",
  "경쟁사는 누구에게 판매하고 있는가?",
  "담당자 연락처 확보가 가능한가?",
  "기업 정보 및 매출 규모는?",
  "우리 제품과 적합한 바이어인가?",
  "이메일 발송 후 반응은 어떤가?",
];

const steps = [
  {
    n: "Step 1",
    title: "SEARCH",
    icon: Search,
    desc: "무역데이터를 기반으로 실제 수입 이력이 있는 바이어를 탐색하고 CRM에 등록합니다.",
    image: searchImg,
  },
  {
    n: "Step 2",
    title: "ENRICH",
    icon: Database,
    desc: "영업 시작 전 바이어 기업 정보와 담당자 연락처를 확보합니다.",
    image: enrichImg,
  },
  {
    n: "Step 3",
    title: "CONTACT",
    icon: Send,
    desc: "검증된 바이어를 대상으로 이메일을 발송하고 응답을 관리합니다.",
    image: contactImg,
  },
];

const extras = [
  {
    icon: KanbanSquare,
    tag: "CRM",
    title: "영업 파이프라인 관리",
    desc: "발굴된 바이어를 단계별로 등록하고, 각 바이어의 진행 상황을 한눈에 확인합니다.",
    image: crmImg,
  },
  {
    icon: Mail,
    tag: "EMAIL",
    title: "이메일 송수신 자동 기록",
    desc: "회사 이메일을 연동해 바이어와 주고받은 모든 기록을 자동으로 저장합니다.",
    image: emailImg,
  },
];

export const Compare = () => (
  <section className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">WHY B/L DATA</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight">
          B/L 데이터를 활용하면
          <br />
          <span className="text-gradient-primary">무엇이 달라질까요?</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-base md:text-lg">
          누가 실제로 제품을 사고 있는지 알면,
          <br className="hidden md:block" />
          어디에 팔아야 할지도 보입니다.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6 reveal">
        {/* Old way */}
        <div className="rounded-3xl border border-border/70 bg-muted/40 p-8 md:p-10 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-foreground/5 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-muted-foreground">
              전통적인 해외영업 방식
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5 opacity-80">
            {oldWays.map((q) => (
              <span
                key={q}
                className="px-4 py-2 rounded-full bg-background/70 border border-border text-sm text-muted-foreground"
              >
                {q}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground/80">
            ※ 가능성에 의존한, 비효율적인 추측 기반의 영업
          </p>
        </div>

        {/* New way */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-cta text-primary-foreground p-8 md:p-10 shadow-elevated relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                데이터 기반 해외영업 방식
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {newWays.map((q) => (
                <span
                  key={q}
                  className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-sm font-medium"
                >
                  {q}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs opacity-90">
              ✓ 실제 수출입 이력 기반의 정확한 타겟팅
            </p>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-lg md:text-xl font-semibold reveal">
        이제는 <span className="text-gradient-primary">추측이 아니라 데이터로</span> 영업합니다
      </p>

      {/* Process Steps */}
      <div className="mt-24 max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">HOW IT WORKS</p>
        <h2 className="text-2xl font-bold tracking-tight leading-tight md:text-5xl">
          해외영업의 시작은
          <br />
          <span className="text-gradient-primary">정확한 바이어</span>로부터 시작합니다
        </h2>
        <p className="mt-4 text-muted-foreground">
          B/L 검색부터 바이어 분석, 컨택까지 해외영업의 전 과정을 하나로 연결합니다.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 relative pt-4">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s) => (
          <div
            key={s.n}
            className="reveal relative rounded-3xl bg-card border border-border/70 p-7 pb-0 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth flex flex-col overflow-hidden"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-cta text-primary-foreground text-xs font-semibold shadow-elevated whitespace-nowrap z-10">
              {s.n}
            </div>
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-bold tracking-tight">{s.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-6 -mx-1 rounded-t-xl border-t border-x border-border/60 bg-muted/30 shadow-inner overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} 화면 미리보기`}
                loading="lazy"
                className="w-full h-44 object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {extras.map((e) => (
          <div
            key={e.tag}
            className="reveal rounded-3xl bg-card border border-border/70 p-8 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-smooth flex flex-col overflow-hidden"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <e.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary tracking-wider">{e.tag}</span>
                  <ArrowRight className="w-3 h-3 text-primary/60" />
                  <h4 className="text-base font-semibold">{e.title}</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 shadow-inner overflow-hidden">
              <img
                src={e.image}
                alt={`${e.tag} 화면 미리보기`}
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
