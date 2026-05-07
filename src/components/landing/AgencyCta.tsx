import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRequestModal } from "./RequestModalContext";

export const AgencyCta = () => {
  const { open } = useRequestModal();
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div
          className="reveal relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border/60 shadow-card px-6 sm:px-10 md:px-14 py-16 md:py-24 text-center"
          style={{
            background:
              "linear-gradient(115deg, hsl(36 100% 96%) 0%, hsl(0 0% 100%) 45%, hsl(214 100% 97%) 100%)",
          }}
        >
          <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-[hsl(36_100%_88%)]/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2]">
              <span className="text-gradient-primary">해외 바이어 발굴</span>부터
              <br />
              실제 컨택까지 함께 진행합니다.
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              전시회·검색·리스트 구매 중심의 해외영업에서 벗어나
              <br className="hidden sm:block" />
              실제 구매 이력이 있는 바이어를 기반으로 해외영업을 시작해보세요.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                variant="hero"
                size="xl"
                className="rounded-2xl"
                onClick={() => open("무료 상담 요청하기")}
              >
                무료 상담 요청하기 <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};