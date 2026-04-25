"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
  ym?: (...args: unknown[]) => void;
  YM_COUNTER_ID?: number;
  __YM_COUNTER_ID__?: number;
};

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-analytics]");
      if (!tracked) return;

      const analyticsId = tracked.dataset.analytics;
      if (!analyticsId) return;

      const href =
        tracked instanceof HTMLAnchorElement
          ? tracked.href
          : tracked.closest("a") instanceof HTMLAnchorElement
            ? tracked.closest("a")?.href
            : undefined;

      const path = window.location.pathname + window.location.search;
      const payload = {
        analytics_id: analyticsId,
        path,
        href: href ?? null
      };

      const w = window as AnalyticsWindow;

      if (typeof w.gtag === "function") {
        w.gtag("event", "ui_click", {
          event_category: "engagement",
          event_label: analyticsId,
          page_path: path,
          link_url: href
        });
      } else {
        w.dataLayer = w.dataLayer ?? [];
        w.dataLayer.push({
          event: "ui_click",
          ...payload
        });
      }

      const ymCounterId = w.YM_COUNTER_ID ?? w.__YM_COUNTER_ID__;
      if (typeof w.ym === "function" && typeof ymCounterId === "number") {
        w.ym(ymCounterId, "reachGoal", analyticsId, payload);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
