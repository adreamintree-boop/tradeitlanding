import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import logo from "@/assets/tradeit-logo.png";

const Login = () => {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      <main className="flex-1 flex items-start justify-center px-6 pt-24 md:pt-32">
        <div className="w-full max-w-md">
          <Link to="/" className="flex justify-center mb-12">
            <img src={logo} alt="TradeIt" className="h-10 w-auto" />
          </Link>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="이메일 또는 아이디"
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPw ? "text" : "password"}
                placeholder="비밀번호"
                className="w-full h-12 pl-11 pr-11 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">
                비밀번호를 잊으셨나요?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-12 mt-2 rounded-xl bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:shadow-glow hover:brightness-110 transition-smooth"
            >
              로그인
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            처음이신가요? 계정을 만들어보세요.{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              회원가입
            </a>
          </div>

          <div className="mt-10 text-center text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Tradeit. All right reserved.
          </div>
        </div>
      </main>

      <footer className="py-10 px-6">
        <div className="max-w-2xl mx-auto text-center text-[11px] leading-relaxed text-muted-foreground/70 space-y-1">
          <p>
            (주)트레이드잇 &nbsp;&nbsp; 대표 | 문성용 &nbsp;&nbsp; 사업자등록번호 | 125-86-33444
          </p>
          <p>
            주소 | 부산광역시 해운대구 센텀서로 30, 904호 &nbsp;&nbsp; 연락처 | +82-70-8676-0984
          </p>
          <p>
            이메일 |{" "}
            <a href="mailto:businessmanager@tradeit.co.kr" className="text-primary/80 hover:text-primary">
              businessmanager@tradeit.co.kr
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;