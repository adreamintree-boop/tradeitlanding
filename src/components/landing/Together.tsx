import logos from "@/assets/partners-logos.png";

export const Together = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="text-sm font-semibold text-primary mb-3">TOGETHER</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight">
          국내 주요 제조사들이
          <br />
          <span className="text-gradient-primary">트레이드잇</span>과 함께하고 있어요
        </h2>
      </div>

      <div className="mt-16 md:mt-20 max-w-6xl mx-auto reveal">
        <img
          src={logos}
          alt="트레이드잇과 함께하는 국내 주요 제조사 파트너 로고"
          loading="lazy"
          className="w-full h-auto opacity-90 hover:opacity-100 transition-smooth"
        />
      </div>
    </div>
  </section>
);