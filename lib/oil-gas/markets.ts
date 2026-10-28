export interface BuyerProblem {
  role: string;
  problem: string;
  impact: string;
}

export interface PriorityWorkflow {
  title: string;
  description: string;
  solutionSlug: string;
}

export interface OperatingEnvironment {
  assetContext: string;
  connectivity: string;
  dataGovernance: string;
  partnerEcosystem: string;
}

export interface DeploymentAndSovereignty {
  legalMandate: string;
  buyerPreference: string;
  recommendedArchitecture: string;
}

export interface LocalContentProcurement {
  statutoryFramework: string;
  technologyTransfer: string;
  citation: string;
}

export interface MarketSolution {
  title: string;
  slug: string;
  annotation: string;
}

export interface DeliveryApproach {
  discovery: string;
  pilot: string;
  integration: string;
  rollout: string;
  ownership: string;
}

export interface ProofContext {
  relevantExperience: string;
  boundaries: string;
}

export interface BuyingTeamChecklist {
  operations: string;
  itSecurity: string;
  procurement: string;
  executiveSponsor: string;
}

export interface MarketSource {
  title: string;
  publisher: string;
  date: string;
  url: string;
  retrievedAt?: string;
}

export interface MarketFAQ {
  q: string;
  a: string;
}

export interface MarketCTAs {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

export interface MarketPageData {
  slug: string;
  assetId: string;
  keywordOwner: string;
  reviewedBy: string;
  lastReviewed: string;
  nextReviewDate: string;
  name: string;
  tier: 1 | 2 | 3;
  regionSlug: string;
  title: string;
  metaDescription: string;
  tagline: string;
  marketOpening: string;
  buyerProblems: BuyerProblem[];
  priorityWorkflows: PriorityWorkflow[];
  operatingEnvironment: OperatingEnvironment;
  deploymentAndSovereignty: DeploymentAndSovereignty;
  localContentProcurement: LocalContentProcurement;
  solutions: MarketSolution[];
  deliveryApproach: DeliveryApproach;
  proofContext: ProofContext;
  buyingTeamChecklist: BuyingTeamChecklist;
  sources: MarketSource[];
  faqs: MarketFAQ[];
  ctas: MarketCTAs;
}

import { TIER_1_MARKETS } from "./markets-tier1";
import { TIER_2_MARKETS } from "./markets-tier2";
import { TIER_3_MARKETS } from "./markets-tier3";

export const ALL_MARKETS: Record<string, MarketPageData> = {
  ...TIER_1_MARKETS,
  ...TIER_2_MARKETS,
  ...TIER_3_MARKETS,
};

export function getAllMarkets(): MarketPageData[] {
  return Object.values(ALL_MARKETS);
}

export function getMarketBySlug(slug: string): MarketPageData | undefined {
  return ALL_MARKETS[slug];
}

export function getMarketsByRegion(regionSlug: string): MarketPageData[] {
  return getAllMarkets().filter((m) => m.regionSlug === regionSlug);
}

export function getMarketsByTier(tier: 1 | 2 | 3): MarketPageData[] {
  return getAllMarkets().filter((m) => m.tier === tier);
}

