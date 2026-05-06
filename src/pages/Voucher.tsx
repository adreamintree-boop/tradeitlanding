import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/tradeit-logo.png";

const Voucher = () => {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col animate-fade-in">
      <header className="container py-6">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src={logo} alt="TradeIt" className="h-7 w-auto" />
        </Link>
      </header>
      <main className="flex-1 container flex items-center justify-center text-center">
        <div className="max-w-xl py-24">
          <p className="text-sm font-semibold text-primary mb-3">EXPORT VOUCHER</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            수출바우처사업 <span className="text-gradient-primary">전용 페이지</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            TradeIt은 수출바우처 수행기관으로, 바우처 예산을 활용해
            바이어 발굴부터 컨택까지 지원해 드립니다.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/80">
            전용 랜딩 페이지는 곧 공개될 예정입니다.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> 홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Voucher;