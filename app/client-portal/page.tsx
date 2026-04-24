"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";

const STORAGE_KEY = "deview-portal-ref";

type Milestone = {
  id: string;
  title: string;
  description: string;
  position: number;
};

type Document = {
  id: string;
  name: string;
  url: string;
  fileType: "pdf" | "docx" | "image" | "other";
  uploadedAt: string;
};

type Portal = {
  reference: string;
  clientName: string;
  projectTitle: string;
  currentStage: number;
  createdAt: string;
  updatedAt: string;
  milestones: Milestone[];
  documents: Document[];
};

function milestoneStatus(index: number, currentStage: number) {
  if (index < currentStage) return "done";
  if (index === currentStage) return "active";
  return "upcoming";
}

function fileTypeIcon(fileType: Document["fileType"]) {
  if (fileType === "pdf") return "PDF";
  if (fileType === "docx") return "DOC";
  if (fileType === "image") return "IMG";
  return "FILE";
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(iso),
  );
}

function PortalView({ portal, onLogout }: { portal: Portal; onLogout: () => void }) {
  const progress = portal.milestones.length > 0
    ? Math.round(((portal.currentStage) / portal.milestones.length) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-2 border-b border-[var(--white-10)] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label mb-1">PROJECT PORTAL</p>
          <h1 className="hero-heading text-[clamp(1.4rem,4vw,2rem)]">{portal.projectTitle}</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{portal.clientName}</p>
        </div>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            Reference
          </span>
          <span className="font-mono text-xs text-[var(--white-60)]">{portal.reference}</span>
          <button
            type="button"
            onClick={onLogout}
            className="mt-1 text-[0.6rem] uppercase tracking-[0.15em] text-[var(--white-40)] underline-offset-2 hover:text-[var(--white-60)] hover:underline"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="mb-2 flex justify-between text-[0.6rem] uppercase tracking-[0.15em] text-[var(--white-40)]">
          <span>Overall progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-px w-full bg-[var(--white-10)]">
          <div
            className="h-px bg-[var(--white-80)] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Milestone timeline */}
      <section className="mb-12">
        <p className="section-label mb-6">PROJECT MILESTONES</p>
        <div className="flex flex-col gap-0">
          {portal.milestones.map((m, i) => {
            const status = milestoneStatus(i, portal.currentStage);
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-5"
              >
                {/* Left rail */}
                <div className="flex flex-col items-center">
                  <div
                    className={[
                      "mt-1 h-3 w-3 flex-shrink-0 rounded-full border transition-all duration-300",
                      status === "done"
                        ? "border-[var(--white-80)] bg-[var(--white-80)]"
                        : status === "active"
                          ? "border-[var(--white-90)] bg-transparent shadow-[0_0_0_4px_rgba(240,240,250,0.12)]"
                          : "border-[var(--white-20)] bg-transparent",
                    ].join(" ")}
                  />
                  {i < portal.milestones.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-[var(--white-10)]" style={{ minHeight: "2rem" }} />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${i === portal.milestones.length - 1 ? "pb-2" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={[
                        "text-sm font-medium",
                        status === "done"
                          ? "text-[var(--white-60)] line-through decoration-[var(--white-20)]"
                          : status === "active"
                            ? "text-[var(--white-90)]"
                            : "text-[var(--white-40)]",
                      ].join(" ")}
                    >
                      {m.title}
                    </span>
                    <span
                      className={[
                        "text-[0.55rem] uppercase tracking-[0.14em] px-1.5 py-0.5",
                        status === "done"
                          ? "text-[var(--white-40)] bg-[rgba(240,240,250,0.04)]"
                          : status === "active"
                            ? "text-[var(--white-90)] border border-[var(--white-20)]"
                            : "text-[var(--white-20)]",
                      ].join(" ")}
                    >
                      {status === "done" ? "Complete" : status === "active" ? "In progress" : "Upcoming"}
                    </span>
                  </div>
                  {m.description && (
                    <p
                      className={[
                        "mt-1 max-w-xl text-sm leading-relaxed",
                        status === "upcoming" ? "text-[var(--white-20)]" : "text-[var(--text-muted)]",
                      ].join(" ")}
                    >
                      {m.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Documents */}
      {portal.documents.length > 0 && (
        <section className="mb-10">
          <p className="section-label mb-4">PROJECT DOCUMENTS</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {portal.documents.map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-[var(--white-10)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--white-30)] hover:bg-[var(--surface-elevated)]"
              >
                <span className="flex-shrink-0 text-[0.55rem] font-bold uppercase tracking-wider text-[var(--white-40)] group-hover:text-[var(--white-60)]">
                  {fileTypeIcon(doc.fileType)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs text-[var(--white-80)] group-hover:text-[var(--white-100)]">
                    {doc.name}
                  </p>
                  <p className="text-[0.6rem] text-[var(--white-30)]">
                    {formatDate(doc.uploadedAt)}
                  </p>
                </div>
                <span className="flex-shrink-0 text-[var(--white-30)] group-hover:text-[var(--white-60)]">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--white-20)]">
        Last updated {formatDate(portal.updatedAt)}
      </p>
    </motion.div>
  );
}

function LoginView({ onSuccess }: { onSuccess: (portal: Portal, reference: string) => void }) {
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ref = reference.trim().toUpperCase();
    if (!ref) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`/api/client-portal/${encodeURIComponent(ref)}`);
      if (res.status === 404) {
        setStatus("error");
        setErrorMsg("Agreement reference not found. Please check your reference and try again.");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        setErrorMsg("Portal unavailable. Please try again later.");
        return;
      }
      const portal: Portal = await res.json();
      onSuccess(portal, ref);
    } catch {
      setStatus("error");
      setErrorMsg("Could not connect to portal service. Please try again.");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-md"
    >
      <p className="section-label mb-3">CLIENT PORTAL</p>
      <div className="rule mb-6" />
      <h1 className="hero-heading mb-2 text-[clamp(1.5rem,5vw,2rem)]">
        Access your project portal
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-[var(--text-muted)]">
        Enter the Agreement Reference provided in your engagement documents to view your project
        timeline and files.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
          Agreement Reference
          <input
            ref={inputRef}
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value.toUpperCase())}
            required
            autoComplete="off"
            spellCheck={false}
            placeholder="e.g. CLIENT-ACME-2024"
            className="min-h-14 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-5 py-4 font-mono text-base uppercase tracking-[0.2em] text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:normal-case placeholder:tracking-normal placeholder:text-[var(--white-30)] focus:border-[var(--white-80)]"
          />
        </label>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-400"
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full border border-[var(--white-40)] bg-transparent px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--white-90)] transition-colors hover:border-[var(--white-90)] hover:text-[var(--white-100)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Verifying…" : "Open Portal →"}
        </button>
      </form>

      <p className="mt-8 text-[0.65rem] leading-relaxed text-[var(--white-30)]">
        Your reference is included in your signed engagement agreement from DeView. If you need
        help, contact us at{" "}
        <a href="mailto:hello@deview.ai" className="text-[var(--white-50)] hover:text-[var(--white-80)]">
          hello@deview.ai
        </a>
        .
      </p>
    </motion.div>
  );
}

export default function ClientPortalPage() {
  const [portal, setPortal] = useState<Portal | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const tryAutoLoad = useCallback(async () => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setHydrated(true);
      return;
    }
    try {
      const res = await fetch(`/api/client-portal/${encodeURIComponent(saved)}`);
      if (res.ok) {
        setPortal(await res.json());
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    tryAutoLoad();
  }, [tryAutoLoad]);

  function handleSuccess(p: Portal, reference: string) {
    sessionStorage.setItem(STORAGE_KEY, reference);
    setPortal(p);
  }

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_KEY);
    setPortal(null);
  }

  if (!hydrated) {
    return (
      <div className="section-gutter min-h-screen bg-[var(--background)] pt-[calc(5.5rem+env(safe-area-inset-top))]">
        <div className="mx-auto max-w-6xl">
          <SubpageNav backHref="/" />
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-4xl">
          <SubpageNav backHref="/" />

          <div className="panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-10">
            <AnimatePresence mode="wait">
              {portal ? (
                <PortalView key="portal" portal={portal} onLogout={handleLogout} />
              ) : (
                <LoginView key="login" onSuccess={handleSuccess} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
