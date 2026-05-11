import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const url = new URL(req.url);
  const origin = url.searchParams.get("origin") || "https://tradeitlanding.lovable.app";

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!,
  );

  const { data } = await supabase
    .from("seo_pages")
    .select("page_type, product_slug, country_slug, updated_at")
    .eq("published", true);

  const staticUrls = ["/", "/export-agency", "/blog"];
  const dynamicUrls = (data || []).map((p) => ({
    loc: p.page_type === "country"
      ? `/kr/buyers/${p.product_slug}/${p.country_slug}`
      : `/kr/buyers/${p.product_slug}`,
    lastmod: p.updated_at,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map((u) => `  <url><loc>${origin}${u}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
${dynamicUrls.map((u) => `  <url><loc>${origin}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { ...corsHeaders, "Content-Type": "application/xml; charset=utf-8" },
  });
});