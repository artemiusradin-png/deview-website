"use client";

import { motion } from "framer-motion";
import { SiteFooter } from "../../components/SiteFooter";
import { ArchitectureRealityPanel } from "../../components/ArchitectureRealityPanel";
import { SubpageNav } from "../../components/SubpageNav";
import { RETRO_FEATURE_CARDS_ID } from "../../components/RetroFeatureCards";

const homeWithRetroCards = `/#${RETRO_FEATURE_CARDS_ID}`;

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ArchitectureRealityCheckPage() {
  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <SubpageNav backHref={homeWithRetroCards} />
          </motion.div>

          <motion.div initial={rise.initial} animate={rise.animate} transition={{ duration: 0.55 }}>
            <ArchitectureRealityPanel />
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
