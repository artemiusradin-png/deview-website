/**
 * The open part of each resource page under /resources: what search engines and visitors see
 * without signing up. The full checklist or guide stays behind the form. Facts only from the
 * site and from public rules and standards: no prices, no durations, no invented clients.
 */

export type DetailSection = {
  kicker: string;
  title: string;
  items: { title: string; body: string }[];
};

export type LeadMagnetDetails = {
  /** Path under /en, e.g. /resources/ai-security-checklist. */
  path: string;
  /** Name used in the breadcrumb and structured data. */
  name: string;
  description: string;
  sections: DetailSection[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  /** Pages worth a click next, path under /en. */
  related: { label: string; href: string }[];
};

export const LMS_CHECKLIST_DETAILS: LeadMagnetDetails = {
  path: "/resources/loan-management-system-checklist",
  name: "Loan management system checklist",
  description:
    "A free checklist for choosing or upgrading a loan management system: borrower onboarding, credit assessment, repayments, collections, reporting and audit, from the team behind five Hong Kong lending systems.",
  sections: [
    {
      kicker: "Who it is for",
      title: "For lenders choosing, replacing or building a system.",
      items: [
        {
          title: "Licensed money lenders",
          body: "Companies lending under a money lender's licence in Hong Kong that are moving off spreadsheets or replacing an older package.",
        },
        {
          title: "Lending groups",
          body: "Groups running several lending companies that need one borrower view with separate books, branding and reports for each company.",
        },
        {
          title: "SME and consumer finance teams",
          body: "Teams reviewing a vendor proposal or scoping a custom build, who want one list to check every option against.",
        },
      ],
    },
    {
      kicker: "Hong Kong rules",
      title: "What a lending system has to support.",
      items: [
        {
          title: "Money Lenders Ordinance (Cap. 163)",
          body: "Loan agreements in the required form and interest rates within the statutory limits. Since 30 December 2022 the cap is 48% a year, and a rate above 36% is presumed extortionate, so the system should check every agreed rate against both.",
        },
        {
          title: "Personal Data (Privacy) Ordinance",
          body: "Borrower data collected for a stated purpose with consent recorded, access limited to the staff who need it, and a record of who viewed or changed each file.",
        },
        {
          title: "Anti-money laundering",
          body: "Customer due diligence, record keeping and suspicious transaction reporting, as set out in the Companies Registry guideline for licensed money lenders.",
        },
      ],
    },
    {
      kicker: "How to use it",
      title: "Three ways teams use the checklist.",
      items: [
        {
          title: "Score your current system",
          body: "Mark each check as covered, partly covered or missing. Gaps in credit assessment, security and audit usually carry the most risk.",
        },
        {
          title: "Compare vendors on one list",
          body: "Send the eight areas and the five vendor questions to every vendor and compare the answers line by line.",
        },
        {
          title: "Scope a custom build",
          body: "Use the eight areas as the module list for a new system, in the order your team works a loan.",
        },
      ],
    },
  ],
  faqTitle: "Loan management systems: common questions",
  faqs: [
    {
      q: "What is a loan management system?",
      a: "Software that runs a loan from application to final repayment: borrower onboarding, credit assessment, agreements and disbursement, repayment schedules, collections, reporting and the audit trail. For a money lender it replaces the spreadsheets and email threads that usually hold this work.",
    },
    {
      q: "What should a loan management system for a Hong Kong money lender include?",
      a: "At least the eight areas in this checklist: applications and onboarding, credit assessment, agreements and disbursement, repayments and servicing, collections, reporting, security and audit, and, for groups, several companies in one system. It should also check interest rates against the limits in the Money Lenders Ordinance and record personal data consent under the PDPO.",
    },
    {
      q: "Should we buy a package or build a custom system?",
      a: "A package fits when your products and approval rules match the way it works. A custom build makes sense when you run several companies, have your own credit rules or need the data in your own environment. The checklist works for both: use it to test a package or as the scope of a build.",
    },
    {
      q: "How is an existing loan book moved to a new system?",
      a: "Borrowers, loans, schedules and payment history are exported, cleaned and mapped to the new data model, then reconciled: outstanding balances and overdue amounts must match before the old system is switched off.",
    },
    {
      q: "Who wrote this checklist?",
      a: "Deview, a custom software development company in Hong Kong. It comes from the lending systems we built for five Hong Kong lenders, including the platform behind Covenant Desk.",
    },
  ],
  related: [
    { label: "Loan management systems for Hong Kong lenders", href: "/industries/lending" },
    { label: "Covenant Desk case study", href: "/case-studies/covenant-desk" },
    { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
    { label: "Commercial loan origination system", href: "/solutions/commercial-loan-origination-system" },
    { label: "Collateral and guarantee management", href: "/solutions/collateral-and-guarantee-management-system" },
    { label: "10 AI use cases for lending companies", href: "/resources/ai-guide-lending" },
  ],
};

export const AI_SECURITY_CHECKLIST_DETAILS: LeadMagnetDetails = {
  path: "/resources/ai-security-checklist",
  name: "AI security checklist for LLM applications",
  description:
    "A free AI security checklist for LLM apps and AI agents, based on the OWASP Top 10 for LLM Applications: prompt injection, data leaks, excessive agency and more, plus governance checks for PDPO, HKMA and GDPR.",
  sections: [
    {
      kicker: "Where the risks come from",
      title: "Four places an LLM application can fail.",
      items: [
        {
          title: "What the model reads",
          body: "Chat messages, emails, web pages and documents can carry hidden instructions. This is prompt injection (LLM01), and it reaches the model through any text it is given.",
        },
        {
          title: "What the model can do",
          body: "Tools, APIs and permissions decide how much damage a tricked model can cause. Excessive agency (LLM06) and system prompt leakage (LLM07) live here.",
        },
        {
          title: "What the model knows",
          body: "Training data, retrieval indexes and third-party models decide what it can reveal or be poisoned with (LLM02, LLM03, LLM04, LLM08).",
        },
        {
          title: "What happens to the answer",
          body: "Output that flows into other systems unchecked, wrong answers that are trusted, and usage without limits (LLM05, LLM09, LLM10).",
        },
      ],
    },
    {
      kicker: "How to use it",
      title: "When to run the twenty-four checks.",
      items: [
        {
          title: "Before launch",
          body: "Run every check on a chatbot, copilot or agent before it meets customers or staff data. Each open item becomes a ticket with an owner.",
        },
        {
          title: "After every change",
          body: "Run them again when the model, prompts, tools or data sources change, because each of these changes the risks.",
        },
        {
          title: "When choosing a vendor",
          body: "Ask AI vendors to answer the same checks for their product, so options are compared on evidence rather than claims.",
        },
      ],
    },
    {
      kicker: "Regulated companies",
      title: "Rules the governance checks map to.",
      items: [
        {
          title: "Hong Kong",
          body: "The PDPO and the Privacy Commissioner's AI Model Personal Data Protection Framework (2024); for banks, HKMA guidance on the use of AI and generative AI.",
        },
        {
          title: "Singapore",
          body: "The MAS FEAT principles for AI in financial services and the MAS Technology Risk Management Guidelines.",
        },
        {
          title: "Europe",
          body: "The GDPR for personal data, and the EU AI Act for systems that fall within its scope.",
        },
      ],
    },
  ],
  faqTitle: "LLM application security: common questions",
  faqs: [
    {
      q: "What is the OWASP Top 10 for LLM Applications?",
      a: "A list of the ten most important security risks in applications built on large language models, published by the OWASP GenAI Security Project. The 2025 version covers prompt injection, sensitive information disclosure, supply chain, data and model poisoning, improper output handling, excessive agency, system prompt leakage, vector and embedding weaknesses, misinformation and unbounded consumption.",
    },
    {
      q: "Does the checklist apply to AI agents?",
      a: "Yes. Agents carry the same risks as chatbots and more, because they act through tools. Excessive agency matters most: give each agent only the tools it needs, and require human approval for actions with consequences.",
    },
    {
      q: "What is the difference between prompt injection and a jailbreak?",
      a: "A jailbreak is a form of prompt injection in which the user tries to make the model ignore its rules. Prompt injection is wider: instructions hidden in any input the model reads, including documents, emails and web pages the user may never see. Both are handled by limiting what the model can do, not only by filtering text.",
    },
    {
      q: "How do we test an LLM application for these risks?",
      a: "Build a test set of attacks and normal questions for your own use case, run it before launch and after every change, and log prompts, outputs and tool calls so failures can be traced. Add rate limits and spending alerts before the system opens to users.",
    },
    {
      q: "Who should own AI security?",
      a: "Name one owner for each AI system, usually the product or engineering lead, with security and compliance reviewing it on a schedule. The governance checks list what that review should cover.",
    },
  ],
  related: [
    { label: "AI development services", href: "/services/ai-development" },
    { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
    { label: "AI agents for back-office operations", href: "/solutions/ai-agents-for-back-office-operations" },
    { label: "AI model risk management", href: "/solutions/ai-model-risk-management" },
    { label: "Cloud and DevOps engineering", href: "/services/cloud-devops" },
    { label: "Enterprise solutions library", href: "/solutions" },
  ],
};

export const AI_GUIDE_LENDING_DETAILS: LeadMagnetDetails = {
  path: "/resources/ai-guide-lending",
  name: "10 AI use cases for lending companies",
  description:
    "Rank practical AI pilots for lending teams by risk, effort, and ROI, and learn how to protect borrower information from day one.",
  sections: [
    {
      kicker: "How the guide scores them",
      title: "Each use case is rated three ways.",
      items: [
        {
          title: "Impact",
          body: "How much manual work the use case removes, and how often that work happens in a lending team.",
        },
        {
          title: "Complexity",
          body: "How many systems and data sources it touches, and how much setup it needs before it is useful.",
        },
        {
          title: "Risk",
          body: "What happens when the AI is wrong, and how close the use case sits to a credit decision or to borrower data.",
        },
      ],
    },
    {
      kicker: "What stays with your team",
      title: "AI prepares the work. People decide.",
      items: [
        {
          title: "Credit decisions",
          body: "AI sorts documents, flags missing items and ranks enquiries. Approving or rejecting a loan stays with your credit team.",
        },
        {
          title: "Compliance sign-off",
          body: "AI pre-screens files against your checklist and records every check. Final approval stays with a qualified person.",
        },
        {
          title: "Borrower communication",
          body: "AI drafts replies from approved templates and the file status. Staff review every message before it is sent.",
        },
      ],
    },
  ],
  faqTitle: "AI for lending: common questions",
  faqs: [
    {
      q: "Where should a lending company start with AI?",
      a: "With one workflow that is frequent, manual and low risk, such as document intake, missing-document checks or an internal knowledge assistant. The guide rates ten use cases so you can choose the first pilot with your eyes open.",
    },
    {
      q: "Can AI make lending decisions?",
      a: "Not in any of the ten use cases. AI prepares files, drafts replies and flags gaps; credit decisions and final compliance approval stay with qualified people.",
    },
    {
      q: "How is borrower data protected?",
      a: "Personal data is masked before it reaches a model, processing runs on enterprise endpoints or in your own cloud, access follows each user's permissions, and every action is logged.",
    },
    {
      q: "Who is the guide for?",
      a: "Money lenders, lending groups and SME and consumer finance teams in Hong Kong and the region. Banks planning lending systems at a larger scale can start with the SME loan management system page.",
    },
  ],
  related: [
    { label: "Loan management system checklist", href: "/resources/loan-management-system-checklist" },
    { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    { label: "Loan management systems for Hong Kong lenders", href: "/industries/lending" },
    { label: "AI document processing for banks", href: "/solutions/ai-document-processing-for-banks" },
    { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
    { label: "AI development services", href: "/services/ai-development" },
  ],
};

export const AUTOMATION_PLAYBOOK_DETAILS: LeadMagnetDetails = {
  path: "/resources/automation-playbook",
  name: "The automation playbook",
  description:
    "The workflows worth automating first in lending, ventilation, agriculture, construction and oil and gas, with step-by-step examples and what stays with your people.",
  sections: [
    {
      kicker: "How to use it",
      title: "One chapter per industry.",
      items: [
        {
          title: "Find your industry",
          body: "Each chapter names the three workflows worth automating first, what a typical build includes and where your experts stay in charge.",
        },
        {
          title: "Check whether you are ready",
          body: "Three questions per industry show whether a process is ready to automate, or needs fixing first.",
        },
        {
          title: "Take it to a first call",
          body: "Each chapter works as a starting scope when you talk to us or to any other software team.",
        },
      ],
    },
  ],
  faqTitle: "Automation: common questions",
  faqs: [
    {
      q: "Which processes should be automated first?",
      a: "Frequent, rule-based work that moves between people and systems: intake of documents and requests, quoting, scheduling and reporting. The playbook names three such workflows for each of the five industries.",
    },
    {
      q: "Does automation replace our experts?",
      a: "No. In every chapter the software prepares the work and people make the decisions: credit, engineering, agronomy and safety calls stay with your team.",
    },
    {
      q: "Do we have to replace our current systems?",
      a: "Usually not. Most builds connect to the ERP, CRM and spreadsheets already in use and replace only the manual steps between them.",
    },
    {
      q: "Which industries does the playbook cover?",
      a: "Lending and finance, ventilation and HVAC, agriculture, construction, and oil and gas.",
    },
  ],
  related: [
    { label: "Custom software development", href: "/services/custom-software-development" },
    { label: "Salesforce, CRM and ERP integration", href: "/services/enterprise-platforms" },
    { label: "Enterprise solutions library", href: "/solutions" },
    { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
    { label: "Agriculture software", href: "/solutions/agriculture-software" },
    { label: "Manufacturing software", href: "/solutions/manufacturing-software" },
  ],
};
