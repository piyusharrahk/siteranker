
-- Supabase schema for your app
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  author text,
  date date default now(),
  image text,
  category text,
  published boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  logo text,
  rating numeric,
  price text,
  affiliateLink text,
  overview text,
  bestFor text,
  verdict text,
  freeVersion boolean,
  templates integer,
  ecommerce boolean,
  color text,
  features jsonb default '[]'::jsonb,
  pros jsonb default '[]'::jsonb,
  cons jsonb default '[]'::jsonb,
  pricing jsonb default '[]'::jsonb,
  created_at timestamp with time zone default now()
);

create table if not exists email_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now()
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text,
  read boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists email_campaigns (
  id uuid primary key default gen_random_uuid(),
  name text,
  subject text,
  content text,
  status text default 'draft',
  scheduledDate text,
  recipients jsonb default '[]'::jsonb,
  created_at timestamp with time zone default now()
);
