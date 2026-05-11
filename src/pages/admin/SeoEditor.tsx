import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload, Eye, Save, Image as ImageIcon, Sparkles } from "lucide-react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AdminGate } from "./AdminGate";
import {
  computeSummary,
  normalizeRow,
  slugify,
  formatNum,
  formatUSD,
} from "@/lib/seo-helpers";
import type { ShipmentRow, SeoSummary, SeoPage } from "@/lib/seo-types";

function Inner() {
  const { id } = useParams();
  const isEdit = !!id;
  const nav = useNavigate();
  const { toast } = useToast();

  const [productLabel, setProductLabel] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [countryLabel, setCountryLabel] = useState("");
  const [countrySlug, setCountrySlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [hero, setHero] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [published, setPublished] = useState(true);
  const [rows, setRows] = useState<ShipmentRow[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      const { data } = await supabase.from("seo_pages").select("*").eq("id", id!).maybeSingle();
      if (!data) return;
      const p = data as unknown as SeoPage;
      setProductLabel(p.product_label);
      setProductSlug(p.product_slug);
      setCountryLabel(p.country_label || "");
      setCountrySlug(p.country_slug || "");
      setMetaTitle(p.meta_title);
      setMetaDesc(p.meta_description);
      setHero(p.hero_headline || "");
      setOgUrl(p.og_image_url || "");
      setPublished(p.published);
      setRows(p.dataset || []);
    })();
  }, [id, isEdit]);

  const summary: SeoSummary = useMemo(() => computeSummary(rows), [rows]);

  // Auto suggestions
  useEffect(() => {
    if (!isEdit && productLabel && !productSlug) setProductSlug(slugify(productLabel));
  }, [productLabel, productSlug, isEdit]);
  useEffect(() => {
    if (!isEdit && countryLabel && !countrySlug) setCountrySlug(slugify(countryLabel));
  }, [countryLabel, countrySlug, isEdit]);
  useEffect(() => {
    if (!isEdit && productLabel && !metaTitle) {
      setMetaTitle(
        countryLabel
          ? `${productLabel} ${countryLabel} 바이어 리스트 | 한국 수출 데이터 | TradeIt`
          : `${productLabel} 해외 바이어 리스트 | 한국 수출 데이터 | TradeIt`
      );
    }
    if (!isEdit && productLabel && !metaDesc) {
      setMetaDesc(
        countryLabel
          ? `${productLabel}을(를) ${countryLabel}으로 수출한 검증된 해외 바이어 리스트와 실제 선적 내역을 확인하세요. 2025년 한국발 수출 데이터 기반.`
          : `${productLabel}을(를) 수입한 글로벌 해외 바이어 리스트와 실제 선적 내역을 확인하세요. 2025년 한국발 수출 데이터 기반.`
      );
    }
  }, [productLabel, countryLabel, isEdit, metaTitle, metaDesc]);

  const handleFile = async (file: File) => {
    setBusy(true);
    try {
      let parsed: Record<string, unknown>[] = [];
      if (file.name.endsWith(".csv")) {
        const text = await file.text();
        const r = Papa.parse(text, { header: true, skipEmptyLines: true });
        parsed = r.data as Record<string, unknown>[];
      } else {
        const buf = await file.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        parsed = XLSX.utils.sheet_to_json(ws, { defval: "", raw: false });
      }
      console.log("[SEO] parsed rows:", parsed.length, "sample:", parsed[0]);
      const norm = parsed.map(normalizeRow).filter((r) => r.importer_name);
      console.log("[SEO] normalized rows:", norm.length, "sample:", norm[0]);
      if (norm.length === 0) {
        toast({
          title: "인식된 데이터 없음",
          description: `파싱된 ${parsed.length}개 행 중 'importer_name/회사이름' 컬럼을 찾지 못했습니다. 헤더를 확인해주세요.`,
          variant: "destructive",
        });
        return;
      }
      setRows(norm);
      toast({ title: "Dataset 업로드 완료", description: `${norm.length}개 row 처리됨` });
    } catch (e) {
      console.error("[SEO] upload error", e);
      toast({ title: "업로드 실패", description: String(e), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const handleOgUpload = async (file: File) => {
    setBusy(true);
    const path = `${slugify(productLabel || "page")}-${countrySlug || "global"}-${Date.now()}.${file.name.split(".").pop()}`;
    const { error } = await supabase.storage.from("seo-og").upload(path, file, { upsert: true });
    if (error) {
      toast({ title: "이미지 업로드 실패", description: error.message, variant: "destructive" });
      setBusy(false);
      return;
    }
    const { data } = supabase.storage.from("seo-og").getPublicUrl(path);
    setOgUrl(data.publicUrl);
    setBusy(false);
    toast({ title: "OG 이미지 업로드됨" });
  };

  const save = async () => {
    if (!productLabel || !productSlug || !metaTitle || !metaDesc) {
      toast({ title: "필수 항목 누락", description: "product, slug, meta title/description 필요", variant: "destructive" });
      return;
    }
    if (rows.length === 0) {
      toast({ title: "Dataset 필요", description: "CSV 또는 XLSX 파일을 업로드하세요.", variant: "destructive" });
      return;
    }
    setBusy(true);
    const payload = {
      page_type: countrySlug ? "country" : "product",
      product_slug: slugify(productSlug),
      product_label: productLabel,
      country_slug: countrySlug ? slugify(countrySlug) : null,
      country_label: countryLabel || null,
      meta_title: metaTitle,
      meta_description: metaDesc,
      hero_headline: hero || null,
      og_image_url: ogUrl || null,
      dataset: rows,
      summary,
      published,
    };
    const res = isEdit
      ? await supabase.from("seo_pages").update(payload).eq("id", id!)
      : await supabase.from("seo_pages").insert(payload);
    setBusy(false);
    if (res.error) {
      toast({ title: "저장 실패", description: res.error.message, variant: "destructive" });
      return;
    }
    toast({ title: isEdit ? "업데이트됨" : "페이지 생성됨", description: payload.meta_title });
    nav("/admin/seo");
  };

  const previewUrl = countrySlug
    ? `/kr/buyers/${slugify(productSlug || productLabel)}/${slugify(countrySlug)}`
    : `/kr/buyers/${slugify(productSlug || productLabel)}`;

  return (
    <div className="min-h-screen bg-[hsl(220_30%_98%)]">
      <header className="bg-background border-b border-border/60 sticky top-0 z-30">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm"><Link to="/admin/seo"><ArrowLeft className="w-4 h-4" /> 목록</Link></Button>
            <div className="text-sm font-bold text-foreground">{isEdit ? "페이지 편집" : "신규 SEO 페이지"}</div>
          </div>
          <div className="flex items-center gap-2">
            {rows.length > 0 && previewUrl && (
              <Button asChild variant="outline" size="sm"><a href={previewUrl} target="_blank" rel="noreferrer"><Eye className="w-4 h-4" /> Preview</a></Button>
            )}
            <Button variant="hero" size="sm" onClick={save} disabled={busy}>
              <Save className="w-4 h-4" /> 저장
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="제품 / 국가" subtitle="페이지 URL과 헤드라인에 사용됩니다.">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Product Label *">
                <Input value={productLabel} onChange={(e) => setProductLabel(e.target.value)} placeholder="예: 세럼" />
              </Field>
              <Field label="Product Slug *">
                <Input value={productSlug} onChange={(e) => setProductSlug(e.target.value)} placeholder="예: serum" className="font-mono" />
              </Field>
              <Field label="Country Label (optional)">
                <Input value={countryLabel} onChange={(e) => setCountryLabel(e.target.value)} placeholder="예: 베트남" />
              </Field>
              <Field label="Country Slug (optional)">
                <Input value={countrySlug} onChange={(e) => setCountrySlug(e.target.value)} placeholder="예: vietnam" className="font-mono" />
              </Field>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-[hsl(220_30%_97%)] border border-border/60">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Generated URL</div>
              <div className="text-sm font-mono text-primary">{previewUrl}</div>
            </div>
          </Card>

          <Card title="Dataset Upload" subtitle="CSV / XLSX. 한글/영문 헤더 모두 인식 — 회사이름·국가·배송·가치(US$)·무게(kg)·수량 또는 importer_name·country·shipment_count·trade_value_usd·weight_kg·quantity">
            <label className="block">
              <div className="rounded-2xl border-2 border-dashed border-border bg-[hsl(220_30%_98%)] p-10 text-center cursor-pointer hover:border-primary transition-smooth">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                <div className="text-sm font-semibold text-foreground">{rows.length > 0 ? `${rows.length} rows 로드됨 — 다른 파일 업로드` : "파일을 선택하거나 드래그"}</div>
                <div className="text-xs text-muted-foreground mt-1">.csv, .xlsx 지원</div>
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                    e.target.value = "";
                  }}
                />
              </div>
            </label>

            {rows.length > 0 && (
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat label="총 선적" value={formatNum(summary.totalShipments)} />
                <Stat label="총 바이어" value={formatNum(summary.totalBuyers)} />
                <Stat label="총 거래금액" value={formatUSD(summary.totalTradeValue)} />
                <Stat label="Top Country" value={summary.topImportCountry} />
              </div>
            )}
          </Card>

          <Card title="SEO Meta" subtitle="검색 결과 및 SNS 공유에 노출됩니다.">
            <div className="space-y-4">
              <Field label="Meta Title *">
                <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} maxLength={70} />
                <Hint v={`${metaTitle.length}/70`} />
              </Field>
              <Field label="Meta Description *">
                <Textarea value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} rows={3} maxLength={170} />
                <Hint v={`${metaDesc.length}/170`} />
              </Field>
              <Field label="Hero Headline Override (optional)">
                <Input value={hero} onChange={(e) => setHero(e.target.value)} placeholder="비워두면 자동 생성" />
              </Field>
              <Field label="Open Graph Image">
                <div className="flex items-center gap-3">
                  {ogUrl && <img src={ogUrl} alt="og" className="w-20 h-20 rounded-xl object-cover border border-border/60" />}
                  <label className="flex-1">
                    <div className="rounded-xl border border-dashed border-border bg-[hsl(220_30%_98%)] px-4 py-3 cursor-pointer hover:border-primary transition-smooth flex items-center gap-2 text-sm">
                      <ImageIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">{ogUrl ? "이미지 변경" : "OG 이미지 업로드"}</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files && e.target.files[0] && handleOgUpload(e.target.files[0])}
                    />
                  </label>
                </div>
              </Field>
            </div>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card title="Publish 설정">
            <label className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[hsl(220_30%_97%)] border border-border/60 cursor-pointer">
              <div>
                <div className="text-sm font-semibold text-foreground">{published ? "Published" : "Draft"}</div>
                <div className="text-xs text-muted-foreground">사이트맵 및 공개 페이지에 노출됩니다.</div>
              </div>
              <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} className="w-5 h-5 accent-primary" />
            </label>
          </Card>

          <Card title="치환 변수 미리보기" subtitle="Dataset 기반 자동 계산값">
            <div className="space-y-2 text-xs">
              {[
                ["{product}", productLabel || "—"],
                ["{country}", countryLabel || "—"],
                ["{top_30_total_shipments}", formatNum(summary.totalShipments)],
                ["{top_30_total_trade_value}", formatUSD(summary.totalTradeValue)],
                ["{top_import_country}", summary.topImportCountry],
                ["{top_30_buyers}", formatNum(summary.totalBuyers)],
                ["{start_period}", summary.startPeriod],
                ["{end_period}", summary.endPeriod],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-3 py-2 border-b border-border/60 last:border-0">
                  <span className="font-mono text-primary text-[11px]">{k}</span>
                  <span className="text-foreground font-semibold text-right">{v}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="rounded-2xl bg-gradient-cta text-primary-foreground p-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2"><Sparkles className="w-4 h-4" /> Auto-Generated</div>
            <div className="text-sm leading-relaxed">
              FAQ, JSON-LD schema, sitemap entry, canonical URL이 publish 시 자동 생성됩니다.
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

const Card = ({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) => (
  <section className="rounded-3xl bg-background border border-border/60 shadow-card p-6 md:p-7">
    <div className="mb-5">
      <div className="text-base font-bold text-foreground">{title}</div>
      {subtitle && <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>}
    </div>
    {children}
  </section>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="text-xs font-semibold text-foreground mb-1.5 block">{label}</label>
    {children}
  </div>
);

const Hint = ({ v }: { v: string }) => <div className="text-[11px] text-muted-foreground mt-1 text-right">{v}</div>;

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl bg-[hsl(220_30%_97%)] border border-border/60 p-3">
    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
    <div className="text-sm font-bold text-foreground mt-1 truncate">{value}</div>
  </div>
);

export default function SeoEditor() {
  return <AdminGate><Inner /></AdminGate>;
}