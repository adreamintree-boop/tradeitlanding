import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface RequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  selectedPlan?: string;
}

export const RequestModal = ({ open, onOpenChange, title = "무료 바이어 요청", selectedPlan }: RequestModalProps) => {
  const [form, setForm] = useState({ company: "", name: "", phone: "", mobile: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void selectedPlan;
    onOpenChange(false);
    toast.success("신청이 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.");
    setForm({ company: "", name: "", phone: "", mobile: "", email: "" });
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-3xl bg-white border border-primary/20 shadow-glow p-8 md:p-10 backdrop-blur-none">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-extrabold text-center text-foreground tracking-tight">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold text-foreground">
              업체명 <span className="text-destructive">*</span>
            </Label>
            <Input id="company" required value={form.company} onChange={update("company")} placeholder="예: (주)트레이드잇" className="h-11 bg-white border-border/80 focus-visible:ring-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold text-foreground">
              담당자명/직책 <span className="text-destructive">*</span>
            </Label>
            <Input id="name" required value={form.name} onChange={update("name")} placeholder="예: 홍길동 / 대리" className="h-11 bg-white border-border/80 focus-visible:ring-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                전화번호 <span className="text-destructive">*</span>
              </Label>
              <Input id="phone" required value={form.phone} onChange={update("phone")} placeholder="02-1234-5678" className="h-11 bg-white border-border/80 focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-semibold text-foreground">
                핸드폰 번호 <span className="text-destructive">*</span>
              </Label>
              <Input id="mobile" required value={form.mobile} onChange={update("mobile")} placeholder="010-1234-5678" className="h-11 bg-white border-border/80 focus-visible:ring-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-foreground">
              이메일 <span className="text-destructive">*</span>
            </Label>
            <Input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="name@company.com" className="h-11 bg-white border-border/80 focus-visible:ring-primary" />
          </div>
          <button
            type="submit"
            className="w-full h-14 rounded-full bg-gradient-cta text-primary-foreground font-bold text-base shadow-elevated hover:shadow-glow hover:brightness-110 transition-smooth inline-flex items-center justify-center gap-2"
          >
            신청하기 <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center pt-1">
            *남겨주신 정보는 영업 상담 목적 외에는 사용되지 않습니다.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};