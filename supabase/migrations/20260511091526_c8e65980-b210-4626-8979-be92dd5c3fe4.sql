
-- SEO pages table for programmatic SEO generator
CREATE TABLE public.seo_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_type TEXT NOT NULL CHECK (page_type IN ('product', 'country')),
  product_slug TEXT NOT NULL,
  product_label TEXT NOT NULL,
  country_slug TEXT,
  country_label TEXT,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  hero_headline TEXT,
  og_image_url TEXT,
  dataset JSONB NOT NULL DEFAULT '[]'::jsonb,
  summary JSONB NOT NULL DEFAULT '{}'::jsonb,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(page_type, product_slug, country_slug)
);

CREATE INDEX idx_seo_pages_published ON public.seo_pages(published);
CREATE INDEX idx_seo_pages_lookup ON public.seo_pages(product_slug, country_slug);

ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;

-- Public can read published pages (these are public SEO landing pages)
CREATE POLICY "Public can read published seo pages"
  ON public.seo_pages FOR SELECT
  USING (published = true);

-- Anyone can manage (admin gate is done client-side via password gate per user request - temporary)
-- We allow inserts/updates/deletes from anon for now since admin uses a password gate.
CREATE POLICY "Anon can insert seo pages"
  ON public.seo_pages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anon can update seo pages"
  ON public.seo_pages FOR UPDATE
  USING (true);

CREATE POLICY "Anon can delete seo pages"
  ON public.seo_pages FOR DELETE
  USING (true);

CREATE POLICY "Anon can read all seo pages"
  ON public.seo_pages FOR SELECT
  USING (true);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER seo_pages_touch_updated_at
BEFORE UPDATE ON public.seo_pages
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Storage bucket for OG images
INSERT INTO storage.buckets (id, name, public) VALUES ('seo-og', 'seo-og', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can read seo-og"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'seo-og');

CREATE POLICY "Anon can upload seo-og"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'seo-og');

CREATE POLICY "Anon can update seo-og"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'seo-og');

CREATE POLICY "Anon can delete seo-og"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'seo-og');
