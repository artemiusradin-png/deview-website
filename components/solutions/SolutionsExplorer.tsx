"use client";

import { useMemo, useState } from "react";
import type { SolutionPage, SolutionVertical } from "@/lib/solutions";
import { assetById } from "@/lib/solutions";
import { SolutionCard } from "./SolutionCard";
import { getSolutionCategory, VERTICAL_LABELS } from "./categories";
import styles from "./solutions.module.css";

interface SolutionsExplorerProps {
  pages: SolutionPage[];
  showVerticalTabs?: boolean;
  searchPlaceholder?: string;
}

export function SolutionsExplorer({
  pages,
  showVerticalTabs = false,
  searchPlaceholder = "Search systems by keyword, protocol, or standard...",
}: SolutionsExplorerProps) {
  const [activeVertical, setActiveVertical] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  // Build categories for the current vertical (if in single-vertical mode)
  const categoryTabs = useMemo(() => {
    if (showVerticalTabs) return [];
    const counts: Record<string, number> = {};
    pages.forEach((p) => {
      const cat = getSolutionCategory(p.slug, p.vertical);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return [
      { id: "all", label: "All Systems", count: pages.length },
      ...Object.entries(counts).map(([cat, count]) => ({
        id: cat,
        label: cat,
        count,
      })),
    ];
  }, [pages, showVerticalTabs]);

  // Build vertical tabs (if in library master mode)
  const verticalTabs = useMemo(() => {
    if (!showVerticalTabs) return [];
    const counts: Record<string, number> = {};
    pages.forEach((p) => {
      counts[p.vertical] = (counts[p.vertical] || 0) + 1;
    });
    const order: SolutionVertical[] = [
      "banking",
      "oil-gas",
      "manufacturing",
      "agriculture",
      "cross-industry",
    ];
    return [
      { id: "all", label: "All Verticals", count: pages.length },
      ...order
        .filter((v) => counts[v])
        .map((v) => ({
          id: v,
          label: VERTICAL_LABELS[v],
          count: counts[v] || 0,
        })),
    ];
  }, [pages, showVerticalTabs]);

  // Filtered pages
  const filteredPages = useMemo(() => {
    const q = search.trim().toLowerCase();
    return pages.filter((p) => {
      // Filter by vertical tab
      if (showVerticalTabs && activeVertical !== "all" && p.vertical !== activeVertical) {
        return false;
      }

      // Filter by category tab
      const cat = getSolutionCategory(p.slug, p.vertical);
      if (!showVerticalTabs && activeCategory !== "all" && cat !== activeCategory) {
        return false;
      }

      // Filter by search query
      if (!q) return true;
      const asset = assetById(p.assetId);
      const haystack = [
        p.h1,
        p.seoDescription,
        p.kicker,
        cat,
        asset?.title ?? "",
        asset?.lead ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [pages, showVerticalTabs, activeVertical, activeCategory, search]);

  const handleReset = () => {
    setActiveVertical("all");
    setActiveCategory("all");
    setSearch("");
  };

  return (
    <div className={styles.explorerWrapper}>
      <div className={styles.explorerToolbar}>
        {/* Navigation Tabs (Verticals or Categories) */}
        {showVerticalTabs ? (
          <div className={styles.tabsRow} role="tablist" aria-label="Filter by industry">
            {verticalTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeVertical === tab.id}
                onClick={() => {
                  setActiveVertical(tab.id);
                  setActiveCategory("all");
                }}
                className={`${styles.tabButton} ${
                  activeVertical === tab.id ? styles.tabButtonActive : ""
                }`}
              >
                <span>{tab.label}</span>
                <span className={styles.tabCount}>{tab.count}</span>
              </button>
            ))}
          </div>
        ) : categoryTabs.length > 1 ? (
          <div className={styles.tabsRow} role="tablist" aria-label="Filter by functional area">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`${styles.tabButton} ${
                  activeCategory === tab.id ? styles.tabButtonActive : ""
                }`}
              >
                <span>{tab.label}</span>
                <span className={styles.tabCount}>{tab.count}</span>
              </button>
            ))}
          </div>
        ) : null}

        {/* Search Input Bar */}
        <div className={styles.searchBar}>
          <div className={styles.searchFieldWrapper}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="5.5" strokeWidth="1.5" />
              <path d="M13 13l4 4" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className={styles.searchInput}
              aria-label="Filter software solutions"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className={styles.searchClearButton}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div className={styles.searchResultCount}>
            <span>
              Showing <strong>{filteredPages.length}</strong> of {pages.length} verified systems
            </span>
          </div>
        </div>
      </div>

      {/* Solutions Cards Grid */}
      {filteredPages.length > 0 ? (
        <div className={styles.cardGrid}>
          {filteredPages.map((p, index) => (
            <SolutionCard key={p.slug} page={p} priority={index < 4} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>No systems matching your query</p>
            <p className={styles.emptyStateText}>
              We have 91 enterprise architectures across banking, energy, manufacturing, agriculture
              and IoT. Try adjusting your search or clearing the filters.
            </p>
            <button type="button" onClick={handleReset} className={styles.buttonGhost}>
              Reset all filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
