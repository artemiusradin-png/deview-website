import type { ReactNode } from "react";

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="page-kicker">{label}</p>
      <div className="page-intro-grid">
        <h1>{title}</h1>
        <div className="page-intro-copy">{children}</div>
      </div>
    </header>
  );
}
