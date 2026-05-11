import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { SeoPage } from "@/lib/seo-types";

export const FooterInternalLinks = ({ related }: { related: SeoPage[] }) => {
  if (!related.length) return null;
  return (
    <section className="py-16 md:py-20 bg-background border-t border-border/60">
      <div className="container">
        <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-4">Related Pages</div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-8">관련 해외 바이어 리스트</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {related.map((p) => {
            const url = p.page_type === "country"
              ? `/kr/buyers/${p.product_slug}/${p.country_slug}`
              : `/kr/buyers/${p.product_slug}`;
            const title = p.page_type === "country"
              ? `${p.product_label} ${p.country_label} 바이어`
              : `${p.product_label} 글로벌 바이어`;
            return (
              <Link key={p.id} to={url} className="group flex items-center justify-between gap-3 rounded-xl bg-[hsl(220_30%_98%)] border border-border/60 px-4 py-4 transition-smooth hover:shadow-card hover:-translate-y-0.5">
                <span className="text-sm font-semibold text-foreground truncate">{title}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};