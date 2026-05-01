-- Run in Supabase SQL Editor, or apply via Supabase CLI: supabase db push
create table if not exists public.lead_magnet_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  industry text,
  challenge text,
  source text not null default 'ai-guide-lending'
);

create index if not exists lead_magnet_signups_created_at_idx
  on public.lead_magnet_signups (created_at desc);

create index if not exists lead_magnet_signups_email_idx
  on public.lead_magnet_signups (lower(email));

comment on table public.lead_magnet_signups is 'Lead magnet form submissions (e.g. AI guide for lending).';

alter table public.lead_magnet_signups enable row level security;
