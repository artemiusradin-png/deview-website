import type { SolutionAsset } from "./types";

/** Gated asset for the AI pages that need a governance and readiness checklist. */
export const AI_ASSETS: SolutionAsset[] = [
  {
    id: "enterprise-ai-readiness",
    source: "sol-enterprise-ai-readiness",
    accessKey: "deview-sol-enterprise-ai-readiness",
    title: "Enterprise AI readiness and governance checklist",
    buttonLabel: "Get the AI readiness checklist",
    kicker: "Checklist · AI readiness",
    lead: "A checklist for enterprises planning machine learning, language model or agent projects: use case, data, hosting, security, evaluation, human oversight, governance, monitoring and cost.",
    inside: [
      "Nine areas to settle before a model goes near production.",
      "The security items specific to language models and agents.",
      "Evaluation and monitoring questions that regulators and auditors ask.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Technology leaders", "Risk and compliance", "Data teams"],
    primaryPage: "private-llm-deployment",
    areas: [
      {
        title: "Use case and value",
        checks: [
          "The decision or task the AI supports, who owns it and what happens today",
          "A measure of success agreed before building, with a baseline",
          "The cost of a wrong answer and who bears it",
          "Whether a simpler method or a packaged product would do",
        ],
      },
      {
        title: "Data readiness",
        checks: [
          "Data sources identified, with owners, quality and access rules",
          "Enough history and labels for the task, or a plan to collect them",
          "Rights to use the data for training and inference, including partner data",
          "Sensitive and personal data handled by design, with masking in non-production",
        ],
      },
      {
        title: "Architecture and hosting",
        checks: [
          "Hosting option chosen against residency and security needs",
          "Model choice tested on your tasks, not only on public benchmarks",
          "A gateway or common layer for access, quotas and logging",
          "Capacity, latency and cost estimates for expected load",
        ],
      },
      {
        title: "Security for language models and agents",
        checks: [
          "Defences against prompt injection from documents, emails and web content",
          "Least-privilege tools and permissions for any agent action",
          "Outputs checked before they reach users or systems",
          "Review against the OWASP Top 10 for LLM Applications",
        ],
      },
      {
        title: "Evaluation and testing",
        checks: [
          "A test set of real cases with correct outcomes, kept separate from development",
          "Measures for accuracy, grounding, safety and fairness as relevant",
          "Regression tests run on every change to model, prompt or tool",
          "Red-team or adversarial testing before release",
        ],
      },
      {
        title: "Human oversight and process",
        checks: [
          "Approval points by value and risk, with the reviewer's evidence in view",
          "A route for users to flag wrong or harmful outputs",
          "Training for users on what the system can and cannot do",
          "A defined fallback when the system is unavailable or unsure",
        ],
      },
      {
        title: "Governance and model risk",
        checks: [
          "Entry in the model and AI use-case inventory, with a risk tier",
          "Documentation of purpose, data, method and limits",
          "Independent validation proportionate to the tier",
          "Mapping to applicable regulation and frameworks, such as the EU AI Act and NIST AI RMF",
        ],
      },
      {
        title: "Monitoring and operations",
        checks: [
          "Tracking of quality, drift, latency, usage and cost in production",
          "Alerts and a named owner for each metric",
          "Controlled release, rollback and a kill switch",
          "Logging with retention rules that respect privacy",
        ],
      },
      {
        title: "Cost, ownership and exit",
        checks: [
          "Cost per use and budget limits by team",
          "Ownership of prompts, evaluation sets, fine-tuned models and code",
          "Portability between models and providers",
          "Exit and data return terms with any vendor",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How do you evaluate quality on our real tasks, and what is the standard for going live?",
      "Where is our data processed and stored, and is any of it used to train models?",
      "How do you defend against prompt injection, and what can the system do if it is fooled?",
      "How are changes to models and prompts tested, approved and rolled back?",
      "What do we get for audit: logs, evidence, documentation and test results?",
      "Who owns the prompts, the evaluation sets, the models and the code, and what do we receive on exit?",
      "Which comparable organisations run the system in production, and what went wrong that you would now avoid?",
    ],
  },
];
