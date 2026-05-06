import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/FinalCta";
import { useReveal } from "@/hooks/use-reveal";
import ceoInterview from "@/assets/blog-ceo-interview.png";
import teamParty from "@/assets/blog-team-party.png";
import aluminumExport from "@/assets/blog-aluminum-export.png";
import indonesiaExpo from "@/assets/blog-indonesia-expo.png";
import vietnamMat from "@/assets/blog-vietnam-mat.png";
import mongoliaHealth from "@/assets/blog-mongolia-health.png";

type BlogPost = {
  category: string;
  brand?: string;
  title: string[];
  date: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    category: "수출 성공 사례",
    title: ["건강기능식품,", "몽골 수출 협약 체결"],
    date: "Posting 2025.01.31",
    image: mongoliaHealth,
  },
  {
    category: "수출 성공 사례",
    title: ["매트리스, 수출 계약 성사"],
    date: "Posting 2025.01.21",
    image: vietnamMat,
  },
  {
    category: "Global Expo",
    title: ["트레이드잇, Manufacturing Indonesia 2024에서", "국내 기업의 글로벌 진출 지원"],
    date: "Posting 2025.01.20",
    image: indonesiaExpo,
  },
  {
    category: "수출 성공 사례",
    title: ["알루미늄 스크랩,", "글로벌 시장 진출"],
    date: "Posting 2025.01.10",
    image: aluminumExport,
  },
  {
    category: "Culture",
    brand: "트레이드잇 | Tradeit",
    title: ["국내판 구글 트레이드잇,", "특별한 회사 송년회 파티 진행!"],
    date: "Posting 2025.01.08",
    image: teamParty,
  },
  {
    category: "Interview",
    brand: "트레이드잇 | Tradeit",
    title: ["해외영업의 최종병기, 트레이드잇!", "[문성용 대표 인터뷰]"],
    date: "Posting 2025.01.07",
    image: ceoInterview,
  },
];

const categories = ["All Posts"];

const Blog = () => {
  useReveal();
  const [active, setActive] = useState("All Posts");
  const visible = posts; // future: filter by active category

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-gradient-soft">
          <div className="absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider reveal">
                BLOG
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] text-foreground reveal">
                글로벌이 가는 길,
                <br />
                <span className="text-gradient-primary">트레이드잇</span>이 함께합니다
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed reveal">
                우리가 함께 걸어온 이야기의 기록,
                <br className="hidden md:block" />
                도전과 일상의 기록을 담았습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Category bar */}
        <section className="pb-8 md:pb-12">
          <div className="container">
            <div className="max-w-6xl mx-auto reveal">
              <div className="flex items-center gap-2 p-2 rounded-full bg-muted/70 border border-border/60 overflow-x-auto">
                {categories.map((c) => {
                  const isActive = c === active;
                  return (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth ${
                        isActive
                          ? "bg-background text-primary shadow-soft"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
              {visible.map((p, i) => (
                <article
                  key={i}
                  className="reveal group relative rounded-[28px] overflow-hidden border border-border/60 shadow-soft hover:shadow-elevated transition-smooth cursor-pointer aspect-[3/4]"
                >
                  <img
                    src={p.image}
                    alt={p.title.join(" ")}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/75" />
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10 text-white">
                    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase opacity-90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
                      {p.category}
                    </div>
                    <h3 className="mt-2.5 text-[18px] md:text-[19px] font-bold leading-[1.35] tracking-tight">
                      {p.title.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <div className="mt-[18px] mb-3 h-px w-full bg-white/35" />
                    <div className="flex items-center gap-2 text-[12px] font-medium opacity-85">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {p.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;