import { useState, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PASS_KEY = "tradeit_admin_ok_v1";
const ADMIN_PASS = "tradeit2025";

export const AdminGate = ({ children }: { children: ReactNode }) => {
  const [ok, setOk] = useState<boolean>(() => sessionStorage.getItem(PASS_KEY) === "1");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  if (ok) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === ADMIN_PASS) {
      sessionStorage.setItem(PASS_KEY, "1");
      setOk(true);
    } else {
      setErr("비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-soft px-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-background border border-border/60 shadow-card p-8 md:p-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5">
          <Lock className="w-5 h-5" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">관리자 인증</h1>
        <p className="text-sm text-muted-foreground mt-2">SEO Generator에 접근하려면 비밀번호를 입력하세요.</p>
        <div className="mt-6 space-y-2">
          <label className="text-xs font-semibold text-foreground">비밀번호</label>
          <Input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="••••••••" />
          {err && <div className="text-xs text-destructive">{err}</div>}
        </div>
        <Button type="submit" variant="hero" className="w-full mt-6">인증</Button>
        <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
          임시 관리자 게이트입니다. 운영 환경에서는 정식 인증으로 교체하세요.
        </p>
      </form>
    </div>
  );
};