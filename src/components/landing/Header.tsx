import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tradeit-logo.png";
import { useRequestModal } from "./RequestModalContext";

const links = [
  { href: "#service", label: "서비스 소개" },
  { href: "#process", label: "진행 방식" },
  { href: "#pricing", label: "가격" },
  { href: "#contact", label: "문의하기" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useRequestModal();
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
          <img src={logo} alt="TradeIt" className="h-7 md:h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="default" className="bg-background text-foreground/80 hover:bg-muted">
            <Link to="/login">로그인</Link>
          </Button>
          <Button variant="hero" size="default" onClick={() => open("무료 바이어 요청")}>
            무료 바이어 요청
          </Button>
        </div>
      </div>
    </header>
  );
};