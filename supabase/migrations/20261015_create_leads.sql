create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  interest text not null,
  message text,
  source text not null check (source in ('hero', 'contact')),
  created_at timestamptz not null default now()
);

create index leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- No public policies are intentionally created. The browser never contacts this
-- table directly; the server uses the Supabase service-role key instead.
