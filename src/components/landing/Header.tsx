import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#service", label: "서비스 소개" },
  { href: "#process", label: "진행 방식" },
  { href: "#pricing", label: "가격" },
  { href: "#contact", label: "문의하기" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary shadow-soft" />
          <span className="text-xl font-bold tracking-tight">TradeIt</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="hero" size="default" asChild>
          <a href="#contact">무료 리서치 요청</a>
        </Button>
      </div>
    </header>
  );
};