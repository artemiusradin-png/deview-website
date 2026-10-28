"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { emitAnalyticsEvent } from "@/lib/analytics/events";

interface ProofLinkProps extends LinkProps {
  sourceAssetId: string;
  proofId: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function ProofLink({
  sourceAssetId,
  proofId,
  className,
  children,
  style,
  ...props
}: ProofLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      style={style}
      onClick={() => {
        emitAnalyticsEvent("proof_open", {
          source_asset_id: sourceAssetId,
          proof_id: proofId,
        });
      }}
    >
      {children}
    </Link>
  );
}
