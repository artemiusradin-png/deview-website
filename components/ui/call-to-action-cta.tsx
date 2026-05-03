// components/ui/call-to-action-cta.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  inputPlaceholder?: string;
  buttonText: string;
  onButtonClick?: (email: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 14 },
  },
};

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      title,
      description,
      inputPlaceholder = "Email address",
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onButtonClick) onButtonClick(email);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-[var(--surface-elevated)]",
          className
        )}
        {...props}
      >
        {/* Subtle globe-palette gradient — reads on both themes */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(26,51,128,0.18)_0%,rgba(128,184,255,0.06)_45%,transparent_70%)]" />
        {/* Hairline top border for visual separation */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--white-20)]" />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16 lg:px-20 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col items-start text-left">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-[var(--white-100)] md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="flex w-full max-w-md flex-col items-start justify-center md:ml-auto"
            variants={itemVariants}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-grow border-[var(--white-20)] bg-[var(--white-10)] text-[var(--white-100)] placeholder:text-[var(--white-40)] focus-visible:ring-[var(--white-40)]"
                aria-label={inputPlaceholder}
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 bg-[var(--white-100)] text-[var(--background)] hover:opacity-85 active:opacity-75"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
