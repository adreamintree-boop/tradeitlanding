export type ShipmentRow = {
  importer_name: string;
  country: string;
  shipment_count: number;
  trade_value_usd: number;
  weight_kg: number;
  quantity: number;
  hs_code?: string;
  first_shipment?: string;
  last_shipment?: string;
};

export type CountryRank = {
  country: string;
  shipments: number;
  buyers: number;
  value: number;
};

export type SeoSummary = {
  totalShipments: number;
  totalBuyers: number;
  repeatBuyers: number;
  totalTradeValue: number;
  topImportCountry: string;
  startPeriod: string;
  endPeriod: string;
  countryRanking: CountryRank[];
  top30: ShipmentRow[];
};

export type SeoPage = {
  id: string;
  page_type: "product" | "country";
  product_slug: string;
  product_label: string;
  country_slug: string | null;
  country_label: string | null;
  meta_title: string;
  meta_description: string;
  hero_headline: string | null;
  og_image_url: string | null;
  dataset: ShipmentRow[];
  summary: SeoSummary;
  published: boolean;
  created_at: string;
  updated_at: string;
};