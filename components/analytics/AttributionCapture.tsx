"use client";

import { useEffect } from "react";
import { getAttributionContext } from "@/lib/analytics/events";

/**
 * Notes the page a visit started on (and its referrer / UTM tags) in sessionStorage, so an enquiry sent
 * later in the same visit can say which page brought it. Nothing leaves the browser until a form is submitted.
 */
export function AttributionCapture() {
  useEffect(() => {
    getAttributionContext();
  }, []);

  return null;
}
