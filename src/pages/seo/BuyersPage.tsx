import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/FinalCta";
import { SeoHero } from "@/components/seo/SeoHero";
import { SummaryCards } from "@/components/seo/SummaryCards";
import { BuyerGrid } from "@/components/seo/BuyerGrid";
import { CountryAnalytics } from "@/components/seo/CountryAnalytics";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { SeoCta } from "@/components/seo/SeoCta";
import { FooterInternalLinks } from "@/components/seo/FooterInternalLinks";
import type { SeoPage } from "@/lib/seo-types";
import NotFound from "@/pages/NotFound";

export default function BuyersPage() {
  const { product, country } = useParams();
  const [page, setPage] = useState<SeoPage | null>(null);
  const [related, setRelated] = useState<SeoPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      setNotFound(false);
      let q = supabase
        .from("seo_pages")
        .select("*")
        .eq("product_slug", product!)
        .eq("published", true);
      q = country ? q.eq("country_slug", country) : q.is("country_slug", null);
      const { data } = await q.maybeSingle();
      if (!active) return;
      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setPage(data as unknown as SeoPage);
      const { data: rel } = await supabase
        .from("seo_pages")
        .select("*")
        .eq("product_slug", product!)
        .eq("published", true)
        .neq("id", data.id)
        .limit(6);
      if (!active) return;
      setRelated((rel || []) as unknown as SeoPage[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [product, country]);

  const canonical = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${window.location.pathname}`;
  }, []);

  const jsonLd = useMemo(() => {
    if (!page) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: page.meta_title,
      description: page.meta_description,
      keywords: [
        page.product_label,
        page.country_label,
        "수출 바이어",
        "trade data",
        "B/L data",
      ].filter(Boolean),
      creator: { "@type": "Organization", name: "TradeIt" },
      url: canonical,
      variableMeasured: ["importer_name", "country", "shipment_count", "trade_value_usd"],
    };
  }, [page, canonical]);

  if (notFound) return <NotFound />;
  if (loading || !page) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-40 pb-20 container">
          <div className="h-8 w-48 bg-muted rounded animate-pulse mb-4" />
          <div className="h-12 w-2/3 bg-muted rounded animate-pulse" />
        </div>
      </div>
    );
  }

  const countryRows = page.country_label
    ? page.summary.top30.filter((r) => r.country?.toLowerCase() === page.country_label?.toLowerCase())
    : [];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Helmet>
        <title>{page.meta_title}</title>
        <meta name="description" content={page.meta_description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={page.meta_title} />
        <meta property="og:description" content={page.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        {page.og_image_url && <meta property="og:image" content={page.og_image_url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.meta_title} />
        <meta name="twitter:description" content={page.meta_description} />
        {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      </Helmet>

      <Header />
      <main>
        <SeoHero page={page} />
        <SummaryCards summary={page.summary} />
        <BuyerGrid
          rows={page.summary.top30}
          title={`글로벌 상위 ${page.product_label} 바이어`}
          subtitle="2025년 한국발 수출 데이터 기준, 거래 활동이 활발한 상위 해외 바이어 기업 정보를 제공합니다."
        />
        <CountryAnalytics ranking={page.summary.countryRanking} />
        {page.page_type === "country" && countryRows.length > 0 && (
          <BuyerGrid
            rows={countryRows}
            title={`${page.country_label} 상위 바이어`}
            subtitle={`${page.country_label} 시장에서 ${page.product_label}을(를) 가장 활발히 수입한 바이어 기업 정보입니다.`}
          />
        )}
        <SeoFaq product={page.product_label} country={page.country_label} />
        <SeoCta />
        <FooterInternalLinks related={related} />
      </main>
      <Footer />
    </div>
  );
}