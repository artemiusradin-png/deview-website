-- Supabase Lead Magnet & Attribution Schema Migration
-- Enables persistence of CRM lead qualification, attribution context, and explicit consent

CREATE TABLE IF NOT EXISTS public.lead_magnet_signups (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  industry TEXT,
  challenge TEXT,
  source TEXT NOT NULL,
  qualification_tier TEXT,
  qualification_score INTEGER,
  attribution JSONB,
  consent BOOLEAN DEFAULT true,
  consent_timestamp TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

-- If table already exists, add extended columns idempotently:
ALTER TABLE public.lead_magnet_signups 
  ADD COLUMN IF NOT EXISTS qualification_tier TEXT,
  ADD COLUMN IF NOT EXISTS qualification_score INTEGER,
  ADD COLUMN IF NOT EXISTS attribution JSONB,
  ADD COLUMN IF NOT EXISTS consent BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS consent_timestamp TIMESTAMPTZ DEFAULT timezone('utc'::text, now());

-- Index for CRM qualification querying
CREATE INDEX IF NOT EXISTS idx_lead_magnet_qualification_tier 
  ON public.lead_magnet_signups(qualification_tier);

CREATE INDEX IF NOT EXISTS idx_lead_magnet_source 
  ON public.lead_magnet_signups(source);

