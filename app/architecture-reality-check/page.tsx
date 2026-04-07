"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { ArchitectureRealityPanel } from "../../components/ArchitectureRealityPanel";

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ArchitectureRealityCheckPage() {
  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex flex-col gap-4 border-b border-[var(--white-20)] pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <Link href="/" className="text-xs uppercase tracking-[0.24em] text-[var(--white-80)]">
              DEVIEW
            </Link>
            <Link href="/" className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
              BACK TO HOME
            </Link>
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
