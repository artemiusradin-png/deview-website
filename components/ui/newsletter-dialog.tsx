"use client";

import * as React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type NewsletterDialogProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  source: string;
};

export function NewsletterDialog({ trigger, title, description, source }: NewsletterDialogProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      const data = (await res.json()) as { ok: boolean };
      setStatus(data.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text)]">
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)]"
            aria-hidden="true"
          >
            <Mail size={20} strokeWidth={1.5} className="text-[var(--text-muted)]" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-[var(--white-100)] sm:text-center">{title}</DialogTitle>
            <DialogDescription className="text-[var(--text-muted)] sm:text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {status === "success" ? (
          <p className="py-4 text-center text-sm text-[var(--text-muted)]">
            You&apos;re on the list. We&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Input
                type="email"
                required
                className="peer ps-9 border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--text-muted)]"
                placeholder="you@company.com"
                aria-label="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-[var(--text-muted)] peer-disabled:opacity-50">
                <Mail size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
            {status === "error" && (
              <p className="text-xs text-red-400">Something went wrong — please try again.</p>
            )}
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[var(--white-100)] text-[var(--bg)] hover:bg-[var(--white-90)]"
            >
              {status === "loading" ? "Sending…" : "Subscribe"}
            </Button>
          </form>
        )}

        <p className="text-center text-xs text-[var(--text-muted)]">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline" href="/privacy" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
