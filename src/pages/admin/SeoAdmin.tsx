import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Eye, EyeOff, Pencil, Trash2, ExternalLink, Globe, Database } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { AdminGate } from "./AdminGate";
import { useToast } from "@/hooks/use-toast";
import type { SeoPage } from "@/lib/seo-types";

function Inner() {
  const [pages, setPages] = useState<SeoPage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("seo_pages").select("*").order("created_at", { ascending: false });
    setPages((data || []) as unknown as SeoPage[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const togglePublish = async (p: SeoPage) => {
    await supabase.from("seo_pages").update({ published: !p.published }).eq("id", p.id);
    toast({ title: p.published ? "Unpublished" : "Published", description: p.meta_title });
    load();
  };

  const remove = async (p: SeoPage) => {
    if (!confirm(`${p.meta_title} 페이지를 삭제할까요?`)) return;
    await supabase.from("seo_pages").delete().eq("id", p.id);
    toast({ title: "삭제됨", description: p.meta_title });
    load();
  };

  const urlFor = (p: SeoPage) =>
    p.page_type === "country"
      ? `/kr/buyers/${p.product_slug}/${p.country_slug}`
      : `/kr/buyers/${p.product_slug}`;

  const productCount = pages.filter((p) => p.page_type === "product").length;
  const countryCount = pages.filter((p) => p.page_type === "country").length;
  const publishedCount = pages.filter((p) => p.published).length;

  return (
    <div className="min-h-screen bg-[hsl(220_30%_98%)]">
      <header className="bg-background border-b border-border/60 sticky top-0 z-30">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold text-sm">T</div>
            <div>
              <div className="text-xs font-semibold text-primary tracking-wider uppercase">TradeIt Admin</div>
              <div className="text-sm font-bold text-foreground">Programmatic SEO Generator</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm"><Link to="/">사이트로</Link></Button>
            <Button asChild variant="hero" size="sm"><Link to="/admin/seo/new"><Plus className="w-4 h-4" /> 신규 페이지</Link></Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Database, label: "총 페이지", value: pages.length },
            { icon: Globe, label: "Published", value: publishedCount },
            { icon: Database, label: "Product / Country", value: `${productCount} / ${countryCount}` },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-background border border-border/60 p-5">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground"><s.icon className="w-4 h-4 text-primary" /> {s.label}</div>
              <div className="text-2xl font-bold text-foreground mt-2 tabular-nums">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-background border border-border/60 shadow-card overflow-hidden">
          <div className="px-6 py-5 border-b border-border/60 flex items-center justify-between">
            <div>
              <div className="text-base font-bold text-foreground">생성된 SEO 페이지</div>
              <div className="text-xs text-muted-foreground mt-0.5">Dataset 기반 자동 생성된 페이지를 관리합니다.</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(220_30%_97%)]">
                <tr className="text-left">
                  <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">URL</th>
                  <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Meta Title</th>
                  <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground text-sm">불러오는 중…</td></tr>
                )}
                {!loading && pages.length === 0 && (
                  <tr><td colSpan={5} className="px-6 py-16 text-center">
                    <div className="text-sm text-muted-foreground mb-4">아직 생성된 페이지가 없습니다.</div>
                    <Button asChild variant="hero"><Link to="/admin/seo/new"><Plus className="w-4 h-4" /> 첫 페이지 생성</Link></Button>
                  </td></tr>
                )}
                {pages.map((p) => (
                  <tr key={p.id} className="border-t border-border/60 hover:bg-[hsl(220_30%_98%)] transition-smooth">
                    <td className="px-6 py-4 font-mono text-xs text-foreground whitespace-nowrap">{urlFor(p)}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-foreground line-clamp-1">{p.meta_title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{p.meta_description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${p.page_type === "country" ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                        {p.page_type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${p.published ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`}>
                        {p.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1.5">
                        <a href={urlFor(p)} target="_blank" rel="noreferrer" className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 hover:bg-muted text-foreground transition-smooth" title="열기">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button onClick={() => togglePublish(p)} className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 hover:bg-muted text-foreground transition-smooth" title={p.published ? "Unpublish" : "Publish"}>
                          {p.published ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                        <Link to={`/admin/seo/${p.id}`} className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 hover:bg-muted text-foreground transition-smooth" title="편집">
                          <Pencil className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={() => remove(p)} className="w-8 h-8 grid place-items-center rounded-lg border border-border/60 hover:bg-destructive/10 hover:text-destructive text-foreground transition-smooth" title="삭제">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SeoAdmin() {
  return <AdminGate><Inner /></AdminGate>;
}