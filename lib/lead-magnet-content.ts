/**
 * Content of the two checklist lead magnets. The loan management system checklist comes from
 * what the lending systems we built for five Hong Kong lenders cover; the AI security checklist
 * follows the OWASP Top 10 for Large Language Model Applications (2025).
 */

export type ChecklistArea = { title: string; risk?: string; checks: string[] };

export const LMS_AREAS: ChecklistArea[] = [
  {
    title: "Applications and borrower onboarding",
    checks: [
      "Online application or borrower portal, with document upload",
      "Identity and address documents captured once and checked",
      "Duplicate borrowers detected, including across group companies",
      "Consent to collect and use personal data recorded (PDPO)",
    ],
  },
  {
    title: "Credit assessment",
    checks: [
      "Income, bank statement and employment checks kept in one file",
      "Credit reference checks recorded with the file",
      "Risk flags and a standard borrower summary for the credit officer",
      "Every approval or rejection recorded with who decided and why",
    ],
  },
  {
    title: "Loan agreements and disbursement",
    checks: [
      "Agreements generated from the approved terms",
      "Interest rates checked against the statutory cap under the Money Lenders Ordinance",
      "Disbursements tracked against each loan",
    ],
  },
  {
    title: "Repayments and loan servicing",
    checks: [
      "Repayment schedules calculated automatically",
      "Partial, early and late repayments handled without manual recalculation",
      "Top-ups and refinancing linked to the original loan",
      "Reminders sent before each due date",
    ],
  },
  {
    title: "Collections",
    checks: [
      "Overdue loans grouped by days past due",
      "Collection tasks and notes on each account",
      "Write-offs and recoveries tracked separately",
    ],
  },
  {
    title: "Reporting",
    checks: [
      "A daily portfolio summary: outstanding, overdue and collected",
      "Exposure by borrower, product and company",
      "Management reports without spreadsheet work",
    ],
  },
  {
    title: "Security and audit",
    checks: [
      "Role-based access for each team and each company",
      "A full audit trail of every change",
      "Data stored in your own environment, encrypted and backed up",
    ],
  },
  {
    title: "Groups with several lending companies",
    checks: [
      "One borrower view across companies, with permissions on what each company sees",
      "Separate books, branding and reports per company",
    ],
  },
];

export const LMS_VENDOR_QUESTIONS = [
  "Where is our borrower data stored, and who can access it?",
  "Can we export all of our data at any time?",
  "How are interest recalculations, late fees and top-ups handled?",
  "Who owns the code and the configuration?",
  "How will our existing loan book be migrated?",
];

export const AI_SECURITY_AREAS: ChecklistArea[] = [
  {
    title: "LLM01 Prompt injection",
    risk: "Instructions hidden in user input or documents change what the model does.",
    checks: [
      "Treat user text and retrieved documents as untrusted data",
      "Limit what the model can do even if it is tricked",
    ],
  },
  {
    title: "LLM02 Sensitive information disclosure",
    risk: "The model reveals personal or confidential data.",
    checks: [
      "Mask personal data before it reaches the model",
      "Use enterprise endpoints that do not train on your data",
    ],
  },
  {
    title: "LLM03 Supply chain",
    risk: "Third-party models, plugins or packages carry hidden risks.",
    checks: [
      "Keep an inventory of models, datasets and libraries",
      "Pin versions and review every update",
    ],
  },
  {
    title: "LLM04 Data and model poisoning",
    risk: "Tampered training or retrieval data changes model behaviour.",
    checks: [
      "Control who can change training and retrieval data",
      "Re-test the system after every data change",
    ],
  },
  {
    title: "LLM05 Improper output handling",
    risk: "Model output flows into other systems without checks.",
    checks: [
      "Validate output before it reaches browsers, databases or code",
      "Never execute model output directly",
    ],
  },
  {
    title: "LLM06 Excessive agency",
    risk: "An AI agent has more permissions or autonomy than it needs.",
    checks: [
      "Give each agent only the tools it needs",
      "Require human approval for actions with consequences",
    ],
  },
  {
    title: "LLM07 System prompt leakage",
    risk: "Secrets or rules written into the prompt get exposed.",
    checks: [
      "Keep credentials and access rules out of prompts",
      "Enforce access control outside the model",
    ],
  },
  {
    title: "LLM08 Vector and embedding weaknesses",
    risk: "Retrieval returns documents the user should not see.",
    checks: [
      "Apply document permissions at retrieval time",
      "Keep separate indexes per client or company",
    ],
  },
  {
    title: "LLM09 Misinformation",
    risk: "Confident but wrong answers are trusted.",
    checks: [
      "Show the source of every answer",
      "Measure accuracy on your own test set before launch",
    ],
  },
  {
    title: "LLM10 Unbounded consumption",
    risk: "Uncontrolled usage drives up cost or takes the service down.",
    checks: [
      "Set rate limits and budgets per user",
      "Monitor usage and alert on spikes",
    ],
  },
];

export const AI_GOVERNANCE_CHECKS = [
  "Know where every prompt and document is processed and stored",
  "Log prompts, outputs and actions for audit",
  "Map your controls to PDPO and your regulator’s guidance, such as HKMA, MAS TRM or GDPR",
  "Name an owner for each AI system and review it on a schedule",
];
