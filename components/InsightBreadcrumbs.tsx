import { LocaleLink } from "@/components/LocaleLink";

export function InsightBreadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
      <LocaleLink href="/" className="hover:underline">Home</LocaleLink>
      <span aria-hidden="true">/</span>
      <LocaleLink href="/insights" className="hover:underline">Insights</LocaleLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="max-w-full truncate">{title}</span>
    </nav>
  );
}
