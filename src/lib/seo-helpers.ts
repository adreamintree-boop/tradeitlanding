import type { ShipmentRow, SeoSummary } from "./seo-types";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const blurName = (name: string) => {
  if (!name) return "";
  const trimmed = name.trim();
  if (trimmed.length <= 4) return trimmed[0] + "***";
  const parts = trimmed.split(/\s+/);
  return parts
    .map((p) => {
      if (p.length <= 3) return p;
      const visible = Math.max(2, Math.floor(p.length / 3));
      return p.slice(0, visible) + "*".repeat(Math.min(6, p.length - visible));
    })
    .join(" ");
};

export const formatUSD = (n: number) => {
  if (!n || isNaN(n)) return "$0";
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};

export const formatNum = (n: number) => {
  if (!n || isNaN(n)) return "0";
  return Math.round(n).toLocaleString();
};

export const toNumber = (v: unknown): number => {
  if (typeof v === "number") return isFinite(v) ? v : 0;
  if (typeof v === "string") {
    const cleaned = v.replace(/[^0-9.\-]/g, "");
    const n = parseFloat(cleaned);
    return isFinite(n) ? n : 0;
  }
  return 0;
};

export const normalizeRow = (raw: Record<string, unknown>): ShipmentRow => {
  const get = (keys: string[]) => {
    for (const k of keys) {
      const found = Object.keys(raw).find(
        (rk) => rk.toLowerCase().replace(/[\s_-]/g, "") === k.toLowerCase().replace(/[\s_-]/g, "")
      );
      if (found && raw[found] !== undefined && raw[found] !== null && raw[found] !== "") return raw[found];
    }
    return undefined;
  };
  return {
    importer_name: String(
      get(["importer_name", "importer", "buyer", "company", "회사이름", "회사명", "수입자", "바이어", "업체명"]) ?? ""
    ).trim(),
    country: String(
      get(["country", "country_name", "destination", "국가", "수입국", "도착국"]) ?? ""
    ).trim(),
    shipment_count: toNumber(
      get(["shipment_count", "shipments", "count", "배송", "선적", "선적건수", "건수"])
    ),
    trade_value_usd: toNumber(
      get(["trade_value_usd", "trade_value", "value", "amount", "가치", "가치(US$)", "거래금액", "금액"])
    ),
    weight_kg: toNumber(get(["weight_kg", "weight", "무게", "무게(kg)", "중량"])),
    quantity: toNumber(get(["quantity", "qty", "수량"])),
    hs_code: get(["hs_code", "hs", "HS코드", "HS"]) ? String(get(["hs_code", "hs", "HS코드", "HS"])) : undefined,
    first_shipment: get(["first_shipment", "first_shipment_date", "first_date"]) ? String(get(["first_shipment", "first_shipment_date"])) : undefined,
    last_shipment: get(["last_shipment", "last_shipment_date", "last_date"]) ? String(get(["last_shipment", "last_shipment_date"])) : undefined,
  };
};

export const computeSummary = (rows: ShipmentRow[]): SeoSummary => {
  const top30 = [...rows]
    .sort((a, b) => (b.trade_value_usd || 0) - (a.trade_value_usd || 0))
    .slice(0, 30);

  const totalShipments = top30.reduce((s, r) => s + (r.shipment_count || 0), 0);
  const totalTradeValue = top30.reduce((s, r) => s + (r.trade_value_usd || 0), 0);
  const totalBuyers = new Set(top30.map((r) => r.importer_name)).size;
  const repeatBuyers = top30.filter((r) => (r.shipment_count || 0) >= 2).length;

  const countryCounts = new Map<string, { shipments: number; buyers: Set<string>; value: number }>();
  for (const r of top30) {
    if (!r.country) continue;
    const c = countryCounts.get(r.country) ?? { shipments: 0, buyers: new Set(), value: 0 };
    c.shipments += r.shipment_count || 0;
    c.value += r.trade_value_usd || 0;
    c.buyers.add(r.importer_name);
    countryCounts.set(r.country, c);
  }
  const countryRanking = Array.from(countryCounts.entries())
    .map(([country, v]) => ({ country, shipments: v.shipments, buyers: v.buyers.size, value: v.value }))
    .sort((a, b) => b.shipments - a.shipments);

  const topImportCountry = countryRanking[0]?.country ?? "—";

  const dates = rows
    .flatMap((r) => [r.first_shipment, r.last_shipment])
    .filter((d): d is string => !!d)
    .map((d) => new Date(d))
    .filter((d) => !isNaN(d.getTime()))
    .sort((a, b) => a.getTime() - b.getTime());
  const startPeriod = dates[0] ? formatPeriod(dates[0]) : "2025년 1월";
  const endPeriod = dates[dates.length - 1] ? formatPeriod(dates[dates.length - 1]) : "2025년 12월";

  return {
    totalShipments,
    totalBuyers,
    repeatBuyers,
    totalTradeValue,
    topImportCountry,
    startPeriod,
    endPeriod,
    countryRanking,
    top30,
  };
};

const formatPeriod = (d: Date) => `${d.getFullYear()}년 ${d.getMonth() + 1}월`;

export const PRODUCT_LABELS: Record<string, string> = {
  serum: "세럼",
  ramen: "라면",
  "industrial-hose": "산업용 호스",
};

export const COUNTRY_LABELS: Record<string, string> = {
  usa: "미국",
  vietnam: "베트남",
  india: "인도",
  japan: "일본",
  china: "중국",
  thailand: "태국",
  indonesia: "인도네시아",
  uae: "아랍에미리트",
};