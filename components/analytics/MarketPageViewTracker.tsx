"use client";

import { useEffect } from "react";
import { emitAnalyticsEvent } from "@/lib/analytics/events";

interface MarketPageViewTrackerProps {
  assetId: string;
  country: string;
  region: string;
  locale: string;
}

export function MarketPageViewTracker({
  assetId,
  country,
  region,
  locale,
}: MarketPageViewTrackerProps) {
  useEffect(() => {
    emitAnalyticsEvent("seo_market_page_view", {
      asset_id: assetId,
      country,
      region,
      locale,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
    });
  }, [assetId, country, region, locale]);

  return null;
}
