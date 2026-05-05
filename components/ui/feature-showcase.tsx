"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type TabMedia = {
  value: string;
  label: string;
  src: string;
  alt?: string;
};

export type ShowcaseStep = {
  id: string;
  title: string;
  text: string;
};

export type FeatureShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  stats?: string[];
  steps?: ShowcaseStep[];
  tabs: TabMedia[];
  defaultTab?: string;
  panelMinHeight?: number;
  className?: string;
};

export function FeatureShowcase({
  eyebrow = "Discover",
  title,
  description,
  stats = ["1 reference", "30s setup", "Share-ready"],
  steps = [
    {
      id: "step-1",
      title: "Drop a reference",
      text: "Upload a single image. We read it like a brief and extract palette, texture and cues.",
    },
    {
      id: "step-2",
      title: "Pick the vibe",
      text: "Switch between mockup, screen, or abstract views and tune the mood instantly.",
    },
    {
      id: "step-3",
      title: "Export & share",
      text: "Get a moodboard ready for your team with consistent visuals and notes.",
    },
  ],
  tabs,
  defaultTab,
  panelMinHeight = 720,
  className,
}: FeatureShowcaseProps) {
  const initial = defaultTab ?? (tabs[0]?.value ?? "tab-0");

  return (
    <section className={cn("w-full bg-background text-foreground", className)}>
      <div className="section-gutter grid w-full grid-cols-1 gap-12 py-20 md:grid-cols-12 md:py-32 lg:gap-20">
        <div className="md:col-span-6">
          <Badge variant="outline" className="mb-8">
            {eyebrow}
          </Badge>

          <h2 className="text-balance font-semibold leading-[0.98] tracking-tight text-[clamp(2rem,5vw,4rem)]">{title}</h2>

          {description ? <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">{description}</p> : null}

          {stats.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {stats.map((s, i) => (
                <Badge key={i} variant="secondary" className="bg-muted text-foreground">
                  {s}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-12 max-w-xl">
            <Accordion type="single" collapsible className="w-full">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id}>
                  <AccordionTrigger className="text-left text-base font-medium md:text-lg">{step.title}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground md:text-base">{step.text}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Get started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border border-border bg-transparent">
                <Link href="/contact">Discuss a project</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <Card
            className="feature-showcase__media relative overflow-hidden rounded-lg border border-border bg-card/40 p-0 shadow-sm"
            style={{ "--feature-showcase-panel-height": `${panelMinHeight}px` } as React.CSSProperties}
          >
            <Tabs defaultValue={initial} className="relative h-full w-full">
              <div className="relative h-full w-full">
                {tabs.map((t, idx) => (
                  <TabsContent
                    key={t.value}
                    value={t.value}
                    className={cn("absolute inset-0 m-0 h-full w-full", "data-[state=inactive]:hidden")}
                  >
                    <img
                      src={t.src}
                      alt={t.alt ?? t.label}
                      className="h-full w-full object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </TabsContent>
                ))}
              </div>

              <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 flex w-full justify-center">
                <TabsList className="flex gap-2 rounded-xl border border-border bg-background/80 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/70">
                  {tabs.map((t) => (
                    <TabsTrigger
                      key={t.value}
                      value={t.value}
                      className="rounded-lg px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
                    >
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}
