import Link from "next/link";

type RetroCardProps = {
  href: string;
  imageUrl: string;
  eyebrow: string;
  title: string;
  className?: string;
};

function RetroCard({ href, imageUrl, eyebrow, title, className = "" }: RetroCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-[10px] ${className}`}
    >
      <div
        className="absolute inset-0 z-0 origin-center scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-0% via-transparent via-[18%] to-black/80 to-100%"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <span className="mb-1.5 block text-[15px] text-white/70">{eyebrow}</span>
        <h2 className="mb-0 max-w-[350px] whitespace-pre-line text-lg leading-snug text-white">{title}</h2>
      </div>
    </Link>
  );
}

export function RetroFeatureCards() {
  return (
    <section className="relative border-t border-[var(--white-20)] bg-[var(--surface)] py-10 md:py-14">
      <div className="section-gutter mx-auto max-w-6xl">
        <div className="flex flex-col gap-[30px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col gap-[30px] md:basis-1/3">
            <RetroCard
              href="/what-makes-it-enterprise"
              imageUrl="https://untree.co/demos/blogy/images/img_2_horizontal.jpg"
              eyebrow="WHAT MAKES IT ENTERPRISE"
              title="Architecture across business systems, data foundation, infrastructure, and AI/ML operations."
              className="h-[240px]"
            />
            <RetroCard
              href="/architecture-reality-check"
              imageUrl="https://untree.co/demos/blogy/images/img_5_horizontal.jpg"
              eyebrow="ARCHITECTURE REALITY CHECK"
              title="Infrastructure determines whether the system belongs in an enterprise at all."
              className="h-[240px]"
            />
          </div>
          <div className="md:basis-1/3">
            <RetroCard
              href="/#services"
              imageUrl="https://untree.co/demos/blogy/images/img_1_vertical.jpg"
              eyebrow="SERVICES"
              title={"End-to-end services for\nimplementing AI in business operations."}
              className="h-[240px] md:h-[510px] md:min-h-[510px]"
            />
          </div>
          <div className="md:basis-1/3">
            <RetroCard
              href="/#solutions"
              imageUrl="https://untree.co/demos/blogy/images/img_3_horizontal.jpg"
              eyebrow="USE CASES"
              title={"AI solutions built around\nconcrete operational problems."}
              className="h-[240px] md:h-[510px] md:min-h-[510px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
