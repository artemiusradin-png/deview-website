-- Client portals stored directly in Supabase (previously fetched from external task manager)

create table if not exists public.client_portals (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  client_name text not null,
  project_title text not null,
  current_stage int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_portals_reference_idx
  on public.client_portals (reference);

create index if not exists client_portals_is_active_idx
  on public.client_portals (is_active, created_at desc);

comment on table public.client_portals is 'Client project portals — each row is one client engagement with a unique reference code.';
comment on column public.client_portals.reference is 'Public reference code the client uses to access their portal (e.g. CLIENT-ACME-2024).';
comment on column public.client_portals.current_stage is 'Zero-based index into milestones indicating the currently active stage.';


create table if not exists public.client_portal_milestones (
  id uuid primary key default gen_random_uuid(),
  portal_id uuid not null references public.client_portals (id) on delete cascade,
  title text not null,
  description text not null default '',
  position int not null
);

create index if not exists client_portal_milestones_portal_position_idx
  on public.client_portal_milestones (portal_id, position);

comment on table public.client_portal_milestones is 'Ordered milestones for a client portal.';
comment on column public.client_portal_milestones.position is 'Zero-based display order within the portal.';


alter table public.client_portals enable row level security;
alter table public.client_portal_milestones enable row level security;
