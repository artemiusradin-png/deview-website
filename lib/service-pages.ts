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
    seoTitle: "Custom Enterprise Software Development in Hong Kong | Deview",
    seoDescription:
      "Custom enterprise software development for financial and industrial companies: platforms, customer portals, modernization and API integration. Hong Kong team; you own the code.",
    kicker: "Digital product engineering",
    h1: "Custom enterprise software development",
    intro:
      "Our custom enterprise software development is built around how your business runs: web platforms, customer portals, internal systems, mobile apps and SaaS products. We work from discovery and architecture through launch and continuous engineering, and you own the code.",
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
        title: "Customer portal development",
        body: "Secure portals give customers and partners the right self-service workflows while APIs connect the experience to your CRM, ERP, lending system or catalogue.",
      },
    ],
    stack: ["Next.js", "Node.js", "Flutter", "PostgreSQL", "Supabase", "Docker", "Salesforce"],
    proof: [
      { label: "AgroPlatforma: field app and Salesforce quoting", href: "/case-studies/agroplatforma" },
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies/covenant-desk" },
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
    seoTitle: "Enterprise LLM Development & Private AI Services | Deview",
    seoDescription:
      "Enterprise LLM development and private AI services: official Minima AI (mnma.ai) distributor, secure assistants, RAG, AI agents, document AI and production-evaluated models.",
    kicker: "AI/ML engineering",
    h1: "Enterprise LLM development",
    intro:
      "Our enterprise LLM development work turns private company data and workflows into secure assistants, search, document processing and AI agents. As an official technology distribution partner of Minima AI (mnma.ai), we deliver proprietary model compression and optimized inference runtimes—allowing enterprises to run frontier models on up to 4× fewer GPUs in dedicated VPCs or private air-gapped on-premise infrastructure.",
    points: [
      {
        title: "Official Minima AI (mnma.ai) distributor",
        body: "Through our official distribution partnership with Minima AI (mnma.ai), we license, deploy and integrate proprietary model compression and the mnma runtime. Run frontier open-weight models on up to 4× fewer GPUs with zero cloud leakage.",
      },
      {
        title: "Private & sovereign LLM deployment",
        body: "Assistants, summaries and search connected to your documents and internal systems, with permissions, citations and strict deployment boundaries defined for your organisation.",
      },
      {
        title: "Domain-specific AI agents & workflows",
        body: "We connect models to approved tools and business databases, protect against prompt injection and data leaks, and keep consequential enterprise actions under human review.",
      },
    ],
    stack: ["Minima AI (mnma.ai)", "Anthropic Claude", "OpenAI", "Google Gemini", "Llama", "Mistral", "Vertex AI", "pgvector", "LangChain"],
    proof: [
      { label: "Minima AI (mnma.ai) partnership: up to 4× GPU efficiency for private enterprise LLM deployments", href: "https://mnma.ai" },
      { label: "AgroPlatforma: three AI agents, field diagnosis to quote in under 30 seconds", href: "/case-studies/agroplatforma" },
      { label: "StorePilot: AI conversion insights for Shopify merchants", href: "/case-studies/storepilot" },
    ],
    leadMagnet: {
      label: "Free AI security checklist",
      line: "Twenty-four checks for LLM apps and AI agents, based on the OWASP Top 10.",
      href: "/resources/ai-security-checklist",
    },
    faqs: [
      {
        q: "What is your partnership with Minima AI (mnma.ai)?",
        a: "Deview is an official enterprise distributor and implementation partner for Minima AI (mnma.ai). We deliver Minima's state-of-the-art model weight compression, KV-cache optimization, and specialized mnma runtime to enterprise clients. This enables organizations to deploy large language models on private on-premise clusters or dedicated VPCs with up to 4× fewer GPUs (such as running Qwen3.8 on a single B200 node instead of four), dramatically reducing hardware expenditure and power consumption without compromising accuracy or leaking private data.",
      },
      {
        q: "What should a custom LLM development company deliver?",
        a: "A production application needs more than a model call. We define the task and evaluation set, connect approved data and systems, design security and human review, and provide the application, operational controls and code.",
      },
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
      { label: "Loan portfolio and borrower reporting for Hong Kong lenders", href: "/case-studies/covenant-desk" },
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
      { label: "Lending platforms run in each lender’s own environment", href: "/case-studies/covenant-desk" },
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
    seoTitle: "Enterprise Platform Development & CRM/ERP Integration | Deview",
    seoDescription:
      "Enterprise platform development and CRM/ERP integration services across Salesforce, HubSpot, SAP, Oracle, Microsoft 365 and custom API integration layers.",
    kicker: "Enterprise platforms",
    h1: "Enterprise platform development",
    intro:
      "Our enterprise platform development extends the systems you already run, from Salesforce and HubSpot to SAP and Oracle ERP, and connects them to each other and to your own software through governed APIs and integration layers.",
    points: [
      {
        title: "Salesforce development",
        body: "Custom objects, flows and apps inside Salesforce, such as quoting built directly into the CRM.",
      },
      {
        title: "CRM/ERP integration services",
        body: "HubSpot, SAP, Oracle and Microsoft 365 are connected through supported interfaces so data is entered once and ownership stays clear.",
      },
      {
        title: "An integration layer you own",
        body: "APIs between your platforms and your custom software, documented and monitored.",
      },
    ],
    stack: ["Salesforce", "HubSpot", "SAP", "Oracle", "Microsoft 365", "SharePoint", "REST APIs"],
    proof: [
      { label: "AgroPlatforma: quoting built inside Salesforce", href: "/case-studies/agroplatforma" },
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
