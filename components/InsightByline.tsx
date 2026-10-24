import { LocaleLink } from "@/components/LocaleLink";

export function InsightByline() {
  return (
    <p className="mt-4 text-sm text-[var(--text-muted)]">
      By <LocaleLink href="/about" className="underline underline-offset-4">Deview</LocaleLink>
    </p>
  );
}
