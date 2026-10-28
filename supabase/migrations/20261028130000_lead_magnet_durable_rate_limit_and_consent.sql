-- Migration: Add ip_address column, index, and drop default on consent_timestamp
-- Applied to support distributed durable rate limiting across serverless workers
-- and ensure consent_timestamp defaults to null when explicit consent is not granted.

ALTER TABLE public.lead_magnet_signups
  ADD COLUMN IF NOT EXISTS ip_address text;

ALTER TABLE public.lead_magnet_signups
  ALTER COLUMN consent_timestamp DROP DEFAULT;

CREATE INDEX IF NOT EXISTS lead_magnet_signups_ip_address_idx
  ON public.lead_magnet_signups (ip_address);

COMMENT ON COLUMN public.lead_magnet_signups.ip_address IS 'Client IP address for durable distributed rate limiting and abuse prevention';
COMMENT ON COLUMN public.lead_magnet_signups.consent_timestamp IS 'Timestamp of explicit opt-in; null when marketing consent is not granted';
