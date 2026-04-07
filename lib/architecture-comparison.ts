export const architectureComparison = {
  public: {
    label: "PUBLIC AI SERVICE",
    points: [
      "Shared infrastructure",
      "No data control",
      "No customization",
      "Best-effort",
      "Limited compliance",
      "Pay-per-use",
    ],
  },
  enterprise: {
    label: "ENTERPRISE AI DEPLOYMENT",
    points: [
      "Dedicated/isolated infrastructure",
      "Full data sovereignty",
      "Fully customizable",
      "SLA-driven (99.9% uptime)",
      "HIPAA/SOX/GDPR certified",
      "Predictable enterprise costs",
    ],
  },
} as const;
