-- Migration: Add CRM lead qualification tier, score, attribution and explicit consent
-- Applied to support PRD 20.2 lead lifecycle and attribution tracking
-- Consent is strictly optional opt-in and defaults to false; consent_timestamp defaults to null

alter table public.lead_magnet_signups
  add column if not exists qualification_tier text,
  add column if not exists qualification_score integer,
  add column if not exists attribution jsonb,
  add column if not exists consent boolean default false,
  add column if not exists consent_timestamp timestamptz default null,
  add column if not exists ip_address text;

create index if not exists lead_magnet_signups_qualification_tier_idx
  on public.lead_magnet_signups (qualification_tier);

create index if not exists lead_magnet_signups_ip_address_idx
  on public.lead_magnet_signups (ip_address);

comment on column public.lead_magnet_signups.qualification_tier is 'CRM qualification tier (sql, qualified_mql, standard_lead, subscriber)';
comment on column public.lead_magnet_signups.qualification_score is 'Readiness and qualification maturity score (0-100)';
comment on column public.lead_magnet_signups.attribution is 'First-touch, last-touch, referrer, and UTM parameters';
comment on column public.lead_magnet_signups.consent is 'Explicit marketing and communication opt-in flag (defaults to false)';
comment on column public.lead_magnet_signups.consent_timestamp is 'Timestamp of explicit opt-in; null when consent is not granted';


