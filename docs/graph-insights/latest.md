# SEO implementation context

Source: /Users/artem/Developer/deview-seo-remediation at origin/main 88fbd2f.

GitNexus was unavailable; this is file-level evidence only, not a call graph. Managed installation was already attempted and requires Node >=22; current tool runtime is Node 20.

Root metadata is app/layout.tsx. Individual static metadata lives in route page/layout modules; dynamic generators exist for services, solutions, markets and cases. Nested Open Graph metadata replaces parent values in Next 16.2, so a root default alone does not reliably provide per-page previews. Homepage links live in app/[locale]/home-content.tsx; service proof links in lib/service-pages.ts. Insights have server page metadata, client content modules and article dates/covers in lib/insights.ts. WWW DNS currently points at registrar forwarding and TLS fails before Next.js can handle redirects.

