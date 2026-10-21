/**
 * One SEO landing page per service at /services/<slug>. Each page owns one keyword group
 * (see docs in .claude/seo/deview-seo-strategy.md): the main term sits in the title, the
 * description, the H1 and the first paragraph, and related terms appear in the section
 * headings and FAQs in normal sentences. Facts only from the site: no prices, no durations,
 * no invented clients.
 */

export type ServicePage = {
  /** Matches SERVICE_LINES[].id, so the drawing, offerings and industries are reused. */
  serviceId: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  /** Short reasons this service matters, each a heading plus one sentence. */
  points: { title: string; body: string }[];
  /** Technologies named on the page (all listed on /stack or in case studies). */
  stack: string[];
  /** Case studies to link, as label and path. */
  proof: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  /** Optional free guide that matches this page. */
  leadMagnet?: { label: string; line: string; href: string };
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    serviceId: "product-engineering",
    slug: "custom-software-development",
    seoTitle: "Custom Software Development Services in Hong Kong | Deview",
    seoDescription:
      "Custom software development for financial and industrial companies: custom applications, software product engineering, application modernization and API integration. Hong Kong team, you own the code.",
    kicker: "Digital product engineering",
    h1: "Custom software development",
    intro:
      "We design and build custom software around how your business runs: web platforms, client portals, internal systems, mobile apps and SaaS products. From discovery and architecture to launch and continuous engineering, and you own the code.",
    points: [
      {
        title: "Built around your process",
        body: "Bespoke software fits your workflows, so your team does not bend critical processes around off-the-shelf tools.",
      },
      {
        title: "Modernise what you already run",
        body: "Legacy applications and databases are rearchitected and migrated step by step, without stopping the business.",
      },
      {
        title: "Connected from day one",
        body: "APIs and integrations link the new software to your CRM, ERP, lending system or catalogue.",
      },
    ],
    stack: ["Next.js", "Node.js", "Flutter", "PostgreSQL", "Supabase", "Docker", "Salesforce"],
    proof: [
      { label: "AgroPlatforma: field app and Salesforce quoting", href: "/case-studies#agriculture" },
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Planning, control and reporting systems for oil & gas", href: "/industries/oil-and-gas" },
    ],
    leadMagnet: {
      label: "Free loan management system checklist",
      line: "Eight areas a lending system has to cover, from the team behind five Hong Kong lending systems.",
      href: "/resources/loan-management-system-checklist",
    },
    faqs: [
      {
        q: "Who owns the code of the custom software you build?",
        a: "You do. The code, the data and any models stay yours, and the system runs in your own cloud account.",
      },
      {
        q: "Can you modernise a legacy application instead of replacing it?",
        a: "Yes. Application modernization usually starts with the parts that limit you most, such as an old database or a module nobody can change, and moves them across step by step.",
      },
      {
        q: "Do you build mobile apps as well as web platforms?",
        a: "Yes. We build web platforms, client portals and mobile apps, for example the Flutter field app behind AgroPlatforma.",
      },
      {
        q: "Do you work with companies outside Hong Kong?",
        a: "Yes. Our team works from Hong Kong, Vancouver, Edinburgh and Stuttgart with clients across Asia-Pacific, Europe and North America.",
      },
    ],
  },
  {
    serviceId: "ai-ml",
    slug: "ai-development",
    seoTitle: "AI Development Company: Generative AI, AI Agents & Machine Learning | Deview",
    seoDescription:
      "AI and machine learning development: generative AI and LLM applications, AI agents and agentic workflows, document AI and predictive models, with AI security built in. Hong Kong based.",
    kicker: "AI/ML engineering",
    h1: "AI and machine learning development",
    intro:
      "We build AI into your software: generative AI and LLM applications, AI agents and multi-agent workflows, document processing, search over your own data and machine learning models. Every system is evaluated, monitored and secured in production.",
    points: [
      {
        title: "Generative AI that works on your data",
        body: "Copilots, summaries and search connected to your documents and systems, with the source of every answer.",
      },
      {
        title: "AI agents that finish the job",
        body: "Agentic AI development for search, classification, support and process automation, with people approving what matters.",
      },
      {
        title: "AI security from the first sprint",
        body: "Private deployment, protection against prompt injection and data leaks, evaluation and audit trails.",
      },
    ],
    stack: ["Anthropic Claude", "OpenAI", "Google Gemini", "Llama", "Mistral", "Vertex AI", "pgvector", "LangChain"],
    proof: [
      { label: "AgroPlatforma: three AI agents, field diagnosis to quote in under 30 seconds", href: "/case-studies#agriculture" },
      { label: "StorePilot: AI conversion insights for Shopify merchants", href: "/case-studies#e-commerce" },
    ],
    leadMagnet: {
      label: "Free AI security checklist",
      line: "Twenty-four checks for LLM apps and AI agents, based on the OWASP Top 10.",
      href: "/resources/ai-security-checklist",
    },
    faqs: [
      {
        q: "Which AI models do you work with?",
        a: "We work with Anthropic Claude, OpenAI, Google Gemini, Llama and Mistral, and choose per project on accuracy, cost and where your data may go.",
      },
      {
        q: "What is agentic AI development?",
        a: "It means building AI agents that carry out multi-step tasks, such as finding information, classifying a request and preparing the next action, inside your existing tools.",
      },
      {
        q: "How do you keep our data safe when using LLMs?",
        a: "Models run through private, enterprise endpoints or inside your cloud, your data is not used to train public models, and access, prompts and outputs are logged.",
      },
      {
        q: "Can AI decide things on its own?",
        a: "Only where you allow it. For credit, engineering or other decisions with consequences, the AI prepares the work and your people approve it.",
      },
    ],
  },
  {
    serviceId: "data-engineering",
    slug: "data-engineering",
    seoTitle: "Data Engineering Services: Pipelines, Data Warehouses & BI | Deview",
    seoDescription:
      "Data engineering services: data pipelines and ETL, data warehouses, Power BI, Tableau and Looker dashboards, and automated reporting for financial and industrial companies.",
    kicker: "Data engineering",
    h1: "Data engineering and analytics",
    intro:
      "We bring data from your systems and spreadsheets together in reliable data pipelines and warehouses, then turn it into business intelligence dashboards and automated reports that managers trust.",
    points: [
      {
        title: "One source of truth",
        body: "ETL pipelines and a data warehouse replace numbers copied between spreadsheets.",
      },
      {
        title: "Reports that build themselves",
        body: "Daily, weekly and monthly reports assembled automatically and checked before they are sent.",
      },
      {
        title: "Dashboards people use",
        body: "Power BI, Tableau or Looker dashboards with the exceptions highlighted first.",
      },
    ],
    stack: ["PostgreSQL", "SQL databases", "Power BI", "Tableau", "Looker", "Docker"],
    proof: [
      { label: "Planning, control and reporting systems for oil & gas, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Loan portfolio and borrower reporting for Hong Kong lenders", href: "/case-studies#finance" },
    ],
    leadMagnet: {
      label: "Free automation playbook",
      line: "The workflows worth automating first in five industries, step by step.",
      href: "/resources/automation-playbook",
    },
    faqs: [
      {
        q: "Can you work with the BI tool we already have?",
        a: "Yes. We build on Power BI, Tableau and Looker, or set up one if you have none.",
      },
      {
        q: "Do you replace our existing systems?",
        a: "No. Data pipelines read from the systems you already run, with read-only access where operations demand it.",
      },
      {
        q: "How do you make sure the numbers are right?",
        a: "Data quality checks run before anything reaches a report, and every figure can be traced back to its source.",
      },
    ],
  },
  {
    serviceId: "cloud-devops",
    slug: "cloud-devops",
    seoTitle: "Cloud, DevOps & Cloud Security Services in Hong Kong | Deview",
    seoDescription:
      "Cloud and DevOps engineering on AWS, Google Cloud and Azure: cloud architecture and migration, CI/CD and Kubernetes, monitoring, and cloud security with GDPR, PDPO, HKMA and MAS TRM compliance.",
    kicker: "Cloud & DevOps engineering",
    h1: "Cloud, DevOps and cloud security",
    intro:
      "We design, migrate and run cloud infrastructure on AWS, Google Cloud and Azure, with DevOps pipelines, monitoring and cloud security designed in from the start, including for the AI systems running in it.",
    points: [
      {
        title: "Cloud migration without surprises",
        body: "On-premise and legacy workloads moved to the cloud in planned steps.",
      },
      {
        title: "DevOps that ships safely",
        body: "CI/CD pipelines, containers and Kubernetes, so releases are routine rather than risky.",
      },
      {
        title: "Security and compliance built in",
        body: "Access control, encryption, logging and data residency aligned with GDPR, PDPO, HKMA and MAS TRM.",
      },
    ],
    stack: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Vercel", "Supabase"],
    proof: [
      { label: "Lending platforms run in each lender’s own environment", href: "/case-studies#finance" },
    ],
    leadMagnet: {
      label: "Free AI security checklist",
      line: "Check the AI systems running in your cloud against the ten LLM risks.",
      href: "/resources/ai-security-checklist",
    },
    faqs: [
      {
        q: "Which cloud providers do you work with?",
        a: "AWS, Google Cloud and Microsoft Azure, plus private and hybrid cloud for regulated companies.",
      },
      {
        q: "Whose cloud account does the system run in?",
        a: "Yours. Every system we deliver runs in the client’s own cloud environment.",
      },
      {
        q: "Do you secure AI systems as well as infrastructure?",
        a: "Yes. Cloud security covers the AI inside it too: private models, protection against prompt injection and data leaks, and audit trails.",
      },
    ],
  },
  {
    serviceId: "enterprise-platforms",
    slug: "enterprise-platforms",
    seoTitle: "Salesforce, CRM & ERP Integration Services | Deview",
    seoDescription:
      "Enterprise platform services: Salesforce development and integration, HubSpot and CRM integration, SAP and Oracle ERP integration, Microsoft 365 and API integration layers.",
    kicker: "Enterprise platforms",
    h1: "Salesforce, CRM and ERP integration",
    intro:
      "We customise and extend the enterprise platforms you already run, from Salesforce and HubSpot to SAP and Oracle ERP, and connect them to each other and to your own software through APIs and integration layers.",
    points: [
      {
        title: "Salesforce development",
        body: "Custom objects, flows and apps inside Salesforce, such as quoting built directly into the CRM.",
      },
      {
        title: "CRM and ERP integration",
        body: "HubSpot, SAP, Oracle and Microsoft 365 connected so data is entered once.",
      },
      {
        title: "An integration layer you own",
        body: "APIs between your platforms and your custom software, documented and monitored.",
      },
    ],
    stack: ["Salesforce", "HubSpot", "SAP", "Oracle", "Microsoft 365", "SharePoint", "REST APIs"],
    proof: [
      { label: "AgroPlatforma: quoting built inside Salesforce", href: "/case-studies#agriculture" },
    ],
    leadMagnet: {
      label: "Free automation playbook",
      line: "Where automation between your CRM, ERP and spreadsheets pays off first, industry by industry.",
      href: "/resources/automation-playbook",
    },
    faqs: [
      {
        q: "Can you build inside our existing Salesforce org?",
        a: "Yes. We extend the org you already have rather than starting a new one.",
      },
      {
        q: "Which ERP systems can you integrate?",
        a: "SAP and Oracle ERP, plus accounting and operational systems through their APIs or database connections.",
      },
      {
        q: "Will the integration break when a platform updates?",
        a: "Integrations are built on supported APIs, tested and monitored, so changes are caught before they reach your users.",
      },
    ],
  },
];

export const servicePagePath = (slug: string) => `/services/${slug}`;

export function servicePageFor(serviceId: string) {
  return SERVICE_PAGES.find((page) => page.serviceId === serviceId);
}
