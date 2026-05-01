-- Run in Supabase SQL Editor, or apply via Supabase CLI: supabase db push
create table if not exists public.client_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  details text not null,
  source text not null default 'contact_form',
  status text not null default 'new'
    check (status in ('new', 'responded', 'junk', 'added_to_client_portal')),
  response_notes text,
  client_portal_reference text,
  managed_at timestamptz,
  managed_by text,
  user_agent text,
  ip_address text
);

create index if not exists client_inquiries_created_at_idx
  on public.client_inquiries (created_at desc);

create index if not exists client_inquiries_status_created_at_idx
  on public.client_inquiries (status, created_at desc);

create index if not exists client_inquiries_email_idx
  on public.client_inquiries (lower(email));

comment on table public.client_inquiries is 'Contact form inquiries for the internal client-management queue.';
comment on column public.client_inquiries.status is 'Management workflow state: new, responded, junk, or added_to_client_portal.';

alter table public.client_inquiries enable row level security;
