"use client";

import { motion } from "framer-motion";
import { ServicesVoyageSlider } from "@/components/ServicesVoyageSlider";
import { FeatureShowcase, type TabMedia } from "@/components/ui/feature-showcase";
import { homeSectionReveal } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

const projectHighlights = [
  {
    id: "novartis",
    title: "AI-Assisted Medical Information Workflows",
    description:
      "Deployed a retrieval-augmented system to surface compliant responses to medical queries — reducing manual triage time while maintaining audit trails required in regulated markets.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "evdev",
    title: "Internal Knowledge Base Copilot",
    description:
      "Built a semantic search layer over fragmented engineering documentation, letting development teams get precise answers from thousands of internal specs and changelogs.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "fact",
    title: "Operational Reporting Automation",
    description:
      "Replaced manual data pulls and Excel assembly with an AI pipeline that generates weekly performance summaries, flags anomalies, and routes exceptions to the right teams.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "fizkultura",
    title: "Member Engagement and Support Automation",
    description:
      "Implemented an AI assistant that handles class scheduling queries, membership FAQs, and cancellation flows — freeing staff to focus on in-person coaching.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "jetfans",
    title: "Fan Experience Personalisation Layer",
    description:
      "Designed a recommendation engine that surfaces relevant content, merchandise, and event offers to fans based on engagement signals — driving repeat visits and conversions.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "nextair",
    title: "Ground Operations Decision Support",
    description:
      "Integrated AI-assisted triage into ground operations workflows, helping teams prioritise exceptions, log handoff notes faster, and reduce dwell time per aircraft turn.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1080&q=80",
  },
];

const selectedProjectTabs: TabMedia[] = projectHighlights.slice(0, 3).map((project) => ({
  value: project.id,
  label: project.id === "novartis" ? "Healthcare" : project.id === "evdev" ? "Knowledge" : "Reporting",
  src: project.image,
  alt: project.title,
}));

export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
  const { dict } = useLocaleContext();
  const s = dict.services;

  return (
    <>
    <section
      id={variant === "home" ? "services" : undefined}
      className="relative overflow-hidden bg-[var(--background)] section-gutter"
    >
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 py-4 md:gap-10 md:py-10"
      >
        <div className="flex w-full flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
          <div className="max-w-2xl">
            <p className="section-label mb-3">{s.sectionLabel}</p>
            <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
              {s.titleL1}
              <br />
              {s.titleL2}
            </h2>
          </div>
          <p className="max-w-md text-[0.8rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
            {s.intro}
          </p>
        </div>

        <div className="w-full" aria-live="polite">
          <ServicesVoyageSlider services={s} />
        </div>
      </motion.div>
    </section>

    <section className="relative overflow-hidden bg-[var(--background)]">
      <FeatureShowcase
        className="bg-[var(--background)]"
        eyebrow="SELECTED PROJECTS"
        title="Systems shaped around real operational constraints"
        description="A closer look at the projects behind the logos: compliant medical information workflows, internal knowledge retrieval, and operational reporting automation."
        stats={["Healthcare", "Internal knowledge", "Reporting automation"]}
        steps={[
          {
            id: "step-1",
            title: "Start with the workflow",
            text: "Each engagement begins with the operating process, handoffs, data sources, and compliance boundaries that define what the AI system is allowed to do.",
          },
          {
            id: "step-2",
            title: "Build the AI layer around existing systems",
            text: "We integrate retrieval, automation, and reporting with the tools already used by the team instead of forcing a separate demo environment.",
          },
          {
            id: "step-3",
            title: "Ship with measurement and handoff",
            text: "Every delivery includes the operational checks, documentation, and adoption path needed for teams to run the system after launch.",
          },
        ]}
        tabs={selectedProjectTabs}
        defaultTab="evdev"
        panelMinHeight={560}
      />
    </section>
    </>
  );
}
