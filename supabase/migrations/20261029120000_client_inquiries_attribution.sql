-- Migration: record where each contact-form enquiry came from (landing page, source, referrer, form page, UTM)
-- so country / solution pages can be compared by the enquiries they bring.

alter table public.client_inquiries
  add column if not exists attribution jsonb;

comment on column public.client_inquiries.attribution is 'Landing page, source, referrer, form page and UTM tags of the visit that sent the enquiry';
