"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
  collapsible: boolean;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<string | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used inside <Accordion>");
  }
  return context;
}

function Accordion({
  className,
  defaultValue,
  collapsible = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  type?: "single";
  defaultValue?: string;
  collapsible?: boolean;
}) {
  const [openValue, setOpenValue] = React.useState<string | null>(defaultValue ?? null);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue, collapsible }}>
      <div className={cn("w-full", className)} {...props} />
    </AccordionContext.Provider>
  );
}

const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => (
    <AccordionItemContext.Provider value={value}>
      <div ref={ref} className={cn("border-b border-border", className)} {...props} />
    </AccordionItemContext.Provider>
  ),
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const itemValue = React.useContext(AccordionItemContext);
    const accordion = useAccordion();
    if (!itemValue) {
      throw new Error("AccordionTrigger must be used inside <AccordionItem>");
    }
    const open = accordion.openValue === itemValue;

    return (
      <div className="flex">
        <button
          ref={ref}
          type="button"
          aria-expanded={open}
          data-state={open ? "open" : "closed"}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className,
          )}
          onClick={() => accordion.setOpenValue(open && accordion.collapsible ? null : itemValue)}
          {...props}
        >
          {children}
          <ChevronDown className="size-4 shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true" />
        </button>
      </div>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const itemValue = React.useContext(AccordionItemContext);
    const accordion = useAccordion();
    if (!itemValue) {
      throw new Error("AccordionContent must be used inside <AccordionItem>");
    }
    const open = accordion.openValue === itemValue;

    return (
      <div
        ref={ref}
        data-state={open ? "open" : "closed"}
        hidden={!open}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    );
  },
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
