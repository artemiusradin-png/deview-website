import Image from "next/image";
import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  className?: string;
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
  className = "py-32",
}: About3Props = {}) => {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-semibold leading-tight text-[var(--white-100)]">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{description}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="relative min-h-[18rem] overflow-hidden rounded-xl lg:col-span-2 lg:min-h-[32rem]">
            <Image src={mainImage.src} alt={mainImage.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl border border-[var(--white-20)] bg-[var(--white-10)] p-7 md:w-1/2 lg:w-auto">
              <Image src={breakout.src} alt={breakout.alt} width={128} height={40} className="mr-auto h-8 max-w-32 object-contain" />
              <div>
                <p className="mb-2 text-lg font-semibold text-[var(--white-100)]">{breakout.title}</p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-[var(--white-20)] bg-transparent" asChild>
                <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
              </Button>
            </div>
            <div className="relative min-h-[14rem] grow basis-0 overflow-hidden rounded-xl md:w-1/2 lg:min-h-0 lg:w-auto">
              <Image src={secondaryImage.src} alt={secondaryImage.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="py-12 md:py-16">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">{companiesTitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 lg:gap-12">
            {companies.map((company, idx) => (
              <div className="flex min-h-12 items-center gap-3" key={company.src + idx}>
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={160}
                  height={48}
                  className="h-7 w-auto max-w-[9rem] object-contain md:h-9"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[var(--white-20)] bg-[var(--surface-elevated)] p-8 md:p-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-[clamp(1.4rem,4vw,2.25rem)] font-semibold text-[var(--white-100)]">
              {achievementsTitle}
            </h2>
            <p className="max-w-screen-sm text-sm leading-relaxed text-[var(--text-muted)]">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-8 text-center">
            {achievements.map((item, idx) => (
              <div className="flex min-w-[9rem] flex-col gap-3" key={item.label + idx}>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">{item.label}</p>
                <span className="text-4xl font-semibold text-[var(--white-100)] md:text-5xl">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,var(--text-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-muted)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
        </div>
      </div>
    </section>
  );
};
