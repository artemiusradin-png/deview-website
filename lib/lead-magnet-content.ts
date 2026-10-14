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

/**
 * The Cap. 653 readiness checklist follows the Protection of Critical Infrastructures
 * (Computer Systems) Ordinance (Cap. 653, in force 1 January 2026), the Commissioner's Code of
 * Practice (v1.0) and the HKMA's sectoral code for stored value facility licensees (12 June 2026).
 * Deadlines run from the date an operator is designated in writing.
 */
export const CAP653_AREAS: ChecklistArea[] = [
  {
    title: "1. Know whether you are in scope",
    risk: "You are bound only once the Commissioner or your sector regulator designates you in writing. The list of operators is not public.",
    checks: [
      "Check your sector: energy, information technology, banking and financial services, air, land and maritime transport, healthcare, telecommunications and broadcasting",
      "Check whether you run major venues, parks or other infrastructure the Ordinance also covers",
      "List the computer systems your core service cannot run without",
      "Name who receives a designation notice and who decides the response",
    ],
  },
  {
    title: "2. Organisation",
    risk: "A security unit and a qualified supervisor are due about a month after designation.",
    checks: [
      "An office in Hong Kong where real business is run, not only a mailing address",
      "A computer-system security management unit, in house or run by a service provider",
      "A supervising employee with professional knowledge, such as CISP, CISA, CISM or CISSP, notified to the regulator",
      "A routine to notify the regulator within a month if the operator changes",
    ],
  },
  {
    title: "3. Security management plan",
    risk: "Due within three months of designation, then it has to be carried out, not just filed.",
    checks: [
      "The plan covers every matter in Schedule 3: unit roles, critical systems, risk and incident policies, access, change control, secure development, availability, supplier contracts and training",
      "Endorsed by the Board, a Board committee or senior management",
      "Reviewed after material changes and at least every two years",
      "Any revised plan sent to the regulator within a month",
    ],
  },
  {
    title: "4. Material changes",
    risk: "Changes to critical systems must be notified within a month.",
    checks: [
      "An inventory of critical computer systems and what they depend on",
      "A change process that flags migrations, major upgrades, removals and new systems the core service relies on",
      "A named owner who files the notification",
    ],
  },
  {
    title: "5. Risk assessment",
    risk: "First assessment within 12 months of designation, then at least every 12 months.",
    checks: [
      "Vulnerability assessment: scanning, configuration review and source code review of custom and vendor-supplied applications",
      "Penetration test from an attacker’s point of view",
      "Risks ranked, with the level you can tolerate and a treatment plan",
      "Qualified assessors, and the report sent to the regulator within three months",
    ],
  },
  {
    title: "6. Security audit",
    risk: "First audit within 24 months of designation, then at least every 24 months.",
    checks: [
      "An auditor who is objective and impartial",
      "The audit checks that the plan is actually implemented",
      "Report sent to the regulator within three months",
      "Findings tracked to closure",
    ],
  },
  {
    title: "7. Suppliers and third parties",
    risk: "Your plan must cover contracts and communications with the suppliers of your critical systems.",
    checks: [
      "Security requirements written into supplier contracts",
      "Supplier due diligence before onboarding, including secure software development practices",
      "Access by supplier staff approved and monitored",
      "Supply-chain risk reviewed: open-source components, fourth parties, dependence on a single supplier",
      "Application security review and penetration test of high-risk software before it goes live",
    ],
  },
  {
    title: "8. Incident response",
    risk: "An emergency response plan is due within three months, and incidents are reported on a clock.",
    checks: [
      "A response team with roles, a trigger threshold and a recovery plan for essential services",
      "Serious incidents reported to the Commissioner within 12 hours, others within 48 hours",
      "Procedures for investigation, communication with stakeholders and post-incident measures",
      "Ready to take part in a Commissioner-run drill",
    ],
  },
];

export const CAP653_SUPPLIER_QUESTIONS = [
  "Which secure development practices do you follow, and can you show evidence?",
  "Who on your side can access our systems and data, and how is it approved and logged?",
  "How do you track and update open-source and third-party components?",
  "How soon will you tell us about an incident that touches our systems?",
  "Can you support our risk assessment and audit, including source code review?",
  "If you stop working with us, can we take over the code and infrastructure?",
];
