# WWW redirect setup

Updated 23 October 2026.

The Vercel project `deview-website` now has `www.deviewai.com` configured as a verified project domain with a **308 permanent redirect** to `deviewai.com`. A request routed to Vercel using the WWW Host header returned the correct redirect and preserved the path and query string.

The public WWW hostname still points to the registrar's forwarding service. Namecheap manages the authoritative DNS, and this session has no Namecheap connection. Public HTTPS cannot be verified until the DNS change is made.

In **Namecheap → Domain List → deviewai.com → Advanced DNS → Host Records**, replace the existing `www` URL Redirect/forwarding record with:

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME Record | www | 46f19a6ab4cb6a3a.vercel-dns-017.com | Automatic |

This is the preferred target returned by Vercel for the actual project, after attaching the domain. Remove only a conflicting record for the exact `www` host. Keep the apex, MX, TXT and other host records unchanged. Do not change nameservers.

After DNS propagation, verify HTTPS for both the root and a deep path with a query string. Expected: valid certificate, 308 to the same path/query on `https://deviewai.com`, then the site's normal English-locale behavior. Check the apex and mail-related records remain unchanged.

Evidence is saved locally under `output/seo-remediation/www-domain-create.json` and `www-dns-required.json`. The Vercel host-routing test is not a substitute for public WWW DNS/TLS verification.
