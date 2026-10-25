import type { SolutionPage } from "./types";

export const AI_ENTERPRISE_PAGES: SolutionPage[] = [
  {
    slug: "ai-agents-for-back-office-operations",
    vertical: "cross-industry",
    serviceId: "ai-ml",
    seoTitle: "Enterprise AI Agent Development for Back-Office Work | Deview",
    seoDescription:
      "Enterprise AI agent development and AI workflow automation services for document work, reconciliation and reporting, with permissions, approval and audit logs.",
    kicker: "AI/ML engineering · Operations",
    h1: "Enterprise AI agent development",
    intro:
      "Our enterprise AI agent development focuses on back-office work: software that carries out multi-step tasks such as invoice processing, reconciliation, report assembly and customer file refresh. These AI workflow automation services use your systems through narrowly permissioned tools, with human approval where it matters. Each agent has a defined job, tested behaviour and a full log, and you own the agents, prompts and code.",
    modules: [
      {
        title: "Process selection and design",
        body: "Choice of workflows that are frequent, rule-heavy and tolerant of review, with the steps, decisions and exceptions written down before anything is automated.",
      },
      {
        title: "Agent workflows",
        body: "State-machine workflows in which model calls handle the judgement steps, and ordinary code handles control flow, so behaviour is predictable and testable.",
      },
      {
        title: "Tools and system access",
        body: "Narrow, typed tools for reading and writing in the ERP, ticketing, document and finance systems, each with its own permissions and limits.",
      },
      {
        title: "Document and email understanding",
        body: "Reading of invoices, statements, contracts and emails into structured data, with confidence and validation against master data.",
      },
      {
        title: "Human approval and escalation",
        body: "Defined approval points by value and risk, a review queue with the agent's reasoning and evidence, and escalation when the agent is unsure.",
      },
      {
        title: "Memory and context",
        body: "Access to the right data for each case, such as policies, past decisions and customer history, retrieved with permissions and not copied into prompts wholesale.",
      },
      {
        title: "Evaluation and regression tests",
        body: "A test set of real cases with expected outcomes, run on every change to the prompt, model or tool, with results tracked over time.",
      },
      {
        title: "Guardrails and safety",
        body: "Checks on inputs and outputs, limits on actions, protection against instructions hidden in documents and a kill switch.",
      },
      {
        title: "Observability and cost control",
        body: "Traces of every run, outcome and exception rates, time and cost per case, and alerts when behaviour changes.",
      },
    ],
    diagram: {
      title: "AI agents for back-office operations: reference architecture",
      desc: "Documents, emails, tickets and system events trigger agent workflows with tool access to ERP, finance, document and ticketing systems. A workflow engine with guardrails, approvals, evaluation and observability routes uncertain cases to people. Results and logs go to operations, finance and audit.",
      leftLabel: "Triggers",
      platformLabel: "Agent platform",
      rightLabel: "Systems and people",
      platformTitle: "Back-office agent platform",
      left: [
        ["Documents and emails", "Invoices, statements"],
        ["Tickets and requests", "Queues, forms"],
        ["System events", "Schedules, alerts"],
      ],
      modules: [
        ["Agent workflows", "State machine, model steps"],
        ["Tools", "Typed, least privilege"],
        ["Approvals", "By value and risk"],
        ["Guardrails", "Limits, injection defence"],
        ["Evaluation", "Test set, regressions"],
        ["Observability", "Traces, cost, outcomes"],
      ],
      strip: "Permissions per tool · kill switch · full audit log",
      right: [
        ["ERP and finance", "Postings, matches"],
        ["Document, ticket systems", "Cases, records"],
        ["Reviewers", "Approve, correct"],
        ["Audit and management", "Logs, results"],
      ],
    },
    diagramCaption:
      "Reference architecture: ordinary code controls the flow, models handle judgement, and people approve what carries risk.",
    standards: [
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Risks including prompt injection, sensitive information disclosure and excessive agency, used as the security checklist for every agent.",
      },
      {
        name: "Model Context Protocol and tool interfaces",
        note: "Standard ways to expose systems to agents as tools, with schemas, permissions and logging.",
      },
      {
        name: "NIST AI Risk Management Framework",
        note: "Govern, map, measure and manage functions for the agent life cycle.",
      },
      {
        name: "ISO/IEC 42001",
        note: "An AI management system standard for governance and accountability, used where an organisation wants a formal framework.",
      },
      {
        name: "Segregation of duties and internal control",
        note: "Financial control principles applied to agents as they are to staff.",
      },
      {
        name: "Data protection law",
        note: "Lawful use, minimisation and retention of personal data processed by agents and stored in logs.",
      },
    ],
    dataModel: [
      {
        entity: "Case",
        holds: "The unit of work, its source, data, status, owner and outcome.",
      },
      {
        entity: "Run and step",
        holds: "Each workflow step, model call, tool call, input, output, time and cost.",
      },
      {
        entity: "Tool and permission",
        holds: "Tool definition, allowed actions, limits, system account and approval requirements.",
      },
      {
        entity: "Approval",
        holds: "Reason for review, reviewer, decision, correction and time.",
      },
      {
        entity: "Evaluation case",
        holds: "Input, expected outcome, scoring and results by agent version.",
      },
      {
        entity: "Agent version",
        holds: "Model, prompts, tools, test results, approval and release date.",
      },
      {
        entity: "Incident",
        holds: "Unexpected behaviour, impact, cause, fix and the review that closed it.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Vendors of finance, procurement and service software increasingly include automation and agent features. They are the right first look when the process lives inside one product.",
      },
      {
        title: "Extend",
        body: "Extend a product's automation with agents that span several systems, apply your policies and report in the way your controls require.",
      },
      {
        title: "Build",
        body: "Build when the process crosses many systems, when it is specific to your business, or when you need your own evaluation, controls and logs. The AgroPlatforma project used three agents on one shared, auditable backend.",
      },
    ],
    security: [
      {
        title: "Least privilege",
        body: "Each tool has its own account with the minimum rights, limits on value and volume, and an owner.",
      },
      {
        title: "Human approval for risk",
        body: "Actions above defined value or risk wait for a person, who sees the reasoning and the evidence.",
      },
      {
        title: "Injection defences",
        body: "Content from documents and emails is treated as untrusted, and cannot change the agent's instructions or permissions.",
      },
      {
        title: "Complete logging",
        body: "Every model call, tool call and decision is recorded with inputs and outputs, with personal data protected.",
      },
      {
        title: "Containment",
        body: "Rate limits, spending limits and a kill switch for each agent, tested regularly.",
      },
    ],
    phases: [
      {
        title: "Process and risk assessment",
        body: "We choose a first process with the business owner, write down its steps and exceptions, and agree what the agent may and may not do.",
      },
      {
        title: "Evaluation set and design",
        body: "A set of real past cases is assembled with correct outcomes, and the workflow, tools and approval points are designed against it.",
      },
      {
        title: "Build and test offline",
        body: "The agent is built and tested on the evaluation set until it meets the agreed standard on each type of case.",
      },
      {
        title: "Shadow and assisted mode",
        body: "The agent processes live cases without acting, then proposes actions for people to approve, with measurement of agreement.",
      },
      {
        title: "Selective autonomy",
        body: "Case types that meet the standard run without approval within limits, and the rest stay with people, reviewed regularly.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: three AI agents on one shared backend", href: "/case-studies/agroplatforma" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "What is an AI agent, as opposed to automation?",
        a: "Traditional automation follows fixed rules. An agent uses a model to interpret messy inputs and decide among steps, while ordinary code controls the workflow and limits. The combination handles documents and exceptions that rules alone cannot.",
      },
      {
        q: "How do you make sure an agent does not do harm?",
        a: "By limiting what it can do, not what it says: narrow permissions, value limits, human approval for risk, defences against injected instructions, full logs and a kill switch. Behaviour is tested against real cases on every change.",
      },
      {
        q: "Which processes are good first candidates?",
        a: "Frequent, rule-heavy processes with clear outcomes and a review step, such as invoice matching, statement reconciliation, report assembly and file refreshes.",
      },
      {
        q: "How do we measure the result?",
        a: "By comparing the agent's outcomes with the correct ones on the evaluation set, then in production by agreement with reviewers, exception rate, time per case and cost.",
      },
      {
        q: "Who owns the agents and code?",
        a: "You do. The agents, the prompts, the tools, the evaluation sets and the code stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "Enterprise RAG development", href: "/solutions/enterprise-rag-development" },
      { label: "AI model risk management", href: "/solutions/ai-model-risk-management" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "private-llm-deployment",
    vertical: "cross-industry",
    serviceId: "ai-ml",
    seoTitle: "Private LLM Deployment: On-Premise or Private Cloud | Deview",
    seoDescription:
      "Private LLM deployment on-premise or in your cloud: model hosting, network isolation, gateway, access control, logging, retrieval, evaluation and capacity planning.",
    kicker: "AI/ML engineering · Infrastructure",
    h1: "Private LLM deployment",
    intro:
      "We carry out private LLM deployment for enterprises that cannot send data to a public service. On-premise LLM deployment and private cloud LLM deployment both combine controlled model access, network isolation, permission-aware retrieval, evaluation and capacity planning. Staff get the benefit of generative AI while data stays within the boundary you set, and you own the platform and code.",
    modules: [
      {
        title: "Self-hosted LLM for business",
        body: "Assessment of models in your cloud tenancy or data centre, including private endpoints of managed services and self-hosted open-weight models on infrastructure you control.",
      },
      {
        title: "Model selection and evaluation",
        body: "Comparison of candidate models on your own tasks and languages, measuring quality, latency and cost, not just public benchmarks.",
      },
      {
        title: "Network isolation",
        body: "Private networking, no public endpoints, egress controls and separation of environments, so prompts and documents never leave the boundary.",
      },
      {
        title: "Model gateway",
        body: "One entry point for applications that handles authentication, routing between models, rate limits, quotas, caching and cost attribution by team.",
      },
      {
        title: "Retrieval over private data",
        body: "Indexing of internal documents and databases with permissions carried through to search results, so a user only retrieves what they may see.",
      },
      {
        title: "Guardrails and data protection",
        body: "Redaction of sensitive data, input and output checks, defences against prompt injection and policies for what may be sent to which model.",
      },
      {
        title: "Enterprise LLM hosting architecture",
        body: "Inference servers, batching, quantisation and autoscaling are sized to actual load. We design and implement the hosting boundary in your environment rather than reselling an opaque shared hosting product.",
      },
      {
        title: "Logging, audit and monitoring",
        body: "Records of who asked what, with controls on retention and access, and metrics on quality, latency, usage and cost.",
      },
      {
        title: "Application enablement",
        body: "SDKs, templates and a catalogue of approved patterns so teams can build assistants and agents on the platform without repeating security work.",
      },
    ],
    diagram: {
      title: "Private LLM deployment: reference architecture",
      desc: "Applications, assistants and agents call a model gateway inside your boundary. The platform provides authentication, routing, guardrails, retrieval over private data, hosted models served on your infrastructure, logging and monitoring. Internal data stores and identity systems connect through private networking.",
      leftLabel: "Applications",
      platformLabel: "Private LLM platform",
      rightLabel: "Inside your boundary",
      platformTitle: "Private LLM platform",
      boundary: "Your network boundary",
      left: [
        ["Assistants and chat", "Staff-facing tools"],
        ["Applications and agents", "Product and back-office"],
        ["Developers", "SDKs, templates"],
      ],
      modules: [
        ["Model gateway", "Auth, routing, quotas"],
        ["Guardrails", "Redaction, checks"],
        ["Retrieval", "Permissioned search"],
        ["Model serving", "Hosted models, GPUs"],
        ["Evaluation", "Your tasks, regression"],
        ["Logging and cost", "Audit, usage, budget"],
      ],
      strip: "Private networking · identity integration · no public egress",
      right: [
        ["Models", "Hosted and open-weight"],
        ["Internal data", "Documents, databases"],
        ["Identity and access", "SSO, groups"],
        ["Security operations", "Logs, alerts"],
      ],
    },
    diagramCaption:
      "Reference architecture: every request passes through one gateway inside your boundary, with identity, permissions, guardrails and logging.",
    standards: [
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Security risks for LLM applications, used as the review checklist for the platform and for each application built on it.",
      },
      {
        name: "NIST AI RMF and ISO/IEC 42001",
        note: "Frameworks for AI governance, risk management and accountability, mapped to platform controls.",
      },
      {
        name: "ISO/IEC 27001 and SOC 2",
        note: "Information security management controls that the platform's operation must satisfy.",
      },
      {
        name: "Data residency and sovereignty rules",
        note: "Requirements on where data and models may be hosted and processed, by country and sector.",
      },
      {
        name: "OpenAI-compatible and standard APIs",
        note: "A stable interface so applications can switch models without code changes.",
      },
      {
        name: "OpenTelemetry",
        note: "Tracing and metrics standard for observing requests across gateway, retrieval and serving.",
      },
    ],
    dataModel: [
      {
        entity: "Model and deployment",
        holds: "Model, version, host, region, capacity, status and approved uses.",
      },
      {
        entity: "Application and client",
        holds: "Calling application, owner, permissions, quotas and cost centre.",
      },
      {
        entity: "Request log",
        holds: "Caller, model, time, size, latency, guardrail results and, where permitted, content.",
      },
      {
        entity: "Index and document",
        holds: "Source, access control list, chunks, embeddings and update time.",
      },
      {
        entity: "Policy",
        holds: "Rules on data classes, models and uses, with version and owner.",
      },
      {
        entity: "Evaluation suite",
        holds: "Tasks, reference answers, scores by model and prompt version.",
      },
      {
        entity: "Usage and cost",
        holds: "Tokens or GPU time by team, model and period, with budgets and alerts.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Managed model services offered inside your own cloud tenancy and region, with private networking, meet many enterprise needs and need the least operational effort.",
      },
      {
        title: "Extend",
        body: "Extend a managed service with your own gateway, permissions-aware retrieval, evaluation and logging, so applications share one governed platform.",
      },
      {
        title: "Build",
        body: "Self-host open-weight models when data must not leave your own infrastructure, when you operate in air-gapped or restricted environments or when cost at scale justifies running GPUs.",
      },
    ],
    security: [
      {
        title: "Boundary and egress control",
        body: "Private endpoints and denied-by-default outbound access, so data cannot leave except through approved paths.",
      },
      {
        title: "Identity and permissions",
        body: "Single sign-on, group-based access to models and indexes, and retrieval filtered by the user's own rights.",
      },
      {
        title: "Content protection",
        body: "Redaction of sensitive fields, classification-based routing and controls on logging content.",
      },
      {
        title: "Prompt injection defence",
        body: "Untrusted content cannot override policy, and tools available to models are restricted and logged.",
      },
      {
        title: "Supply chain controls",
        body: "Provenance, scanning and approval of model weights and serving software before use.",
      },
    ],
    phases: [
      {
        title: "Requirements and constraints",
        body: "We agree the use cases, data classes, residency and security constraints, and the load expected, with security, legal and the business.",
      },
      {
        title: "Model evaluation and architecture",
        body: "Candidate models are evaluated on your tasks, and the hosting, network and gateway architecture are designed and reviewed.",
      },
      {
        title: "Build the platform core",
        body: "Gateway, identity integration, serving and logging go live in a pilot environment with one application.",
      },
      {
        title: "Add retrieval and guardrails",
        body: "Permissioned retrieval, redaction and evaluation are added, and the first assistants and agents are built on the platform.",
      },
      {
        title: "Scale and govern",
        body: "More applications and teams join, with capacity, cost and policy reviews on a regular cycle.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "Is a private LLM as good as the public services?",
        a: "Hosted models inside your own cloud tenancy are the same models, with your boundary around them. Self-hosted open-weight models are strong for many tasks and weaker on others. We measure quality on your tasks before you commit.",
      },
      {
        q: "Do we need our own GPUs?",
        a: "Not necessarily. Managed model services with private endpoints in your region avoid operating GPUs. Self-hosting needs GPUs and operational skill, and makes sense for strict data boundaries or large, steady volumes.",
      },
      {
        q: "How do you stop staff retrieving documents they should not see?",
        a: "Document permissions are indexed alongside content, and every search is filtered by the signed-in user's rights, so the assistant can only quote what the user could open themselves.",
      },
      {
        q: "How do you control cost?",
        a: "Through a gateway that attributes usage to teams, applies quotas, caches repeated requests and routes simple tasks to smaller models, with reports and alerts on spend.",
      },
      {
        q: "Who owns the platform?",
        a: "You do. The platform, the configuration, the evaluation sets and the code stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "AI agents for back-office operations", href: "/solutions/ai-agents-for-back-office-operations" },
      { label: "Enterprise RAG development", href: "/solutions/enterprise-rag-development" },
      { label: "RAG assistant for engineering documents", href: "/solutions/rag-assistant-for-engineering-documents" },
      { label: "AI model risk management", href: "/solutions/ai-model-risk-management" },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "enterprise-rag-development",
    vertical: "cross-industry",
    serviceId: "ai-ml",
    seoTitle: "Enterprise RAG Development & Private AI Search | Deview",
    seoDescription:
      "Enterprise RAG development for permission-aware knowledge assistants and AI search, with citations, evaluation, private deployment and business-system integration.",
    kicker: "AI/ML engineering · Enterprise knowledge",
    h1: "Enterprise RAG development",
    intro:
      "Enterprise RAG development connects language models to the documents, records and knowledge your teams already rely on. We build private AI knowledge assistants and enterprise search that retrieve only material each user may access, cite the source behind every answer and say when the evidence is insufficient. Ingestion, identity, retrieval, evaluation and workflow integration are engineered as one governed system, deployed within the boundary you choose, and you own the application and code.",
    modules: [
      {
        title: "Source discovery and ingestion",
        body: "Connectors bring approved content from document stores, SharePoint, knowledge bases, databases and line-of-business systems into controlled ingestion pipelines. Each source keeps its owner, classification, revision and access metadata, while failed or incomplete documents enter a review queue instead of silently disappearing from the index.",
      },
      {
        title: "Document structure and enrichment",
        body: "PDFs, scans, Office files, tables and structured records are parsed according to their layout and meaning. Sections, clauses, product identifiers, dates and relationships become retrieval metadata, so a result includes the context needed to interpret it rather than an isolated fragment of text.",
      },
      {
        title: "Permission-aware retrieval",
        body: "Identity groups and document access lists are carried into every search. Filtering happens before evidence reaches the model, which means a private knowledge assistant cannot reveal a passage that the signed-in user could not open in the source system themselves.",
      },
      {
        title: "Hybrid search and ranking",
        body: "Keyword search, semantic retrieval, metadata filters and reranking are combined for the material and questions in scope. Retrieval quality is tested separately from answer quality, making it possible to see whether a failure came from missing evidence, poor ranking or the model's interpretation.",
      },
      {
        title: "Answers with verifiable citations",
        body: "Responses link to the supporting document, section, page or record and preserve the relevant revision. Users can inspect the source immediately, while unsupported questions produce an explicit no-answer response or a route to the responsible person instead of a plausible invention.",
      },
      {
        title: "Conversation and task context",
        body: "The assistant can use the current case, customer, asset or project as scoped context without creating an uncontrolled memory store. Conversation history is retained only where needed, separated by user and purpose, and governed by the same retention and access rules as the underlying work.",
      },
      {
        title: "Application and workflow integration",
        body: "Search and answers can appear inside portals, CRM screens, service desks and operational tools through documented APIs. Where the assistant prepares a record or next action, typed integrations and approval steps keep retrieval separate from authority to change a business system.",
      },
      {
        title: "Evaluation and continuous improvement",
        body: "A representative set of real questions records the expected sources, acceptable answer and refusal behaviour. It runs whenever documents, chunking, embeddings, ranking, prompts or models change, while production feedback is reviewed before it becomes new evaluation material.",
      },
      {
        title: "Operations, monitoring and governance",
        body: "Teams can see index freshness, failed ingestion, retrieval quality, unanswered questions, latency, usage and model changes. Versioned configuration and audit logs make each response traceable to the sources, retrieval settings and application release that produced it.",
      },
    ],
    diagram: {
      title: "Enterprise RAG development: reference architecture",
      desc: "Employees and business applications call a permission-aware knowledge layer. Inside the governed platform, source connectors ingest documents and records, identity filters retrieval, hybrid search and reranking select evidence, and a model produces cited answers. Evaluation, monitoring and audit controls cover the complete path before results return to users and workflows.",
      leftLabel: "Company knowledge",
      platformLabel: "Enterprise RAG platform",
      rightLabel: "Users and workflows",
      platformTitle: "Permission-aware knowledge layer",
      boundary: "Your chosen data boundary",
      left: [
        ["Documents", "Policies, contracts, reports"],
        ["Knowledge systems", "SharePoint, wikis, files"],
        ["Business records", "CRM, ERP, service data"],
        ["Identity", "Users, groups, access lists"],
      ],
      modules: [
        ["Ingestion", "Parse, classify, refresh"],
        ["Access filtering", "Identity, document rights"],
        ["Retrieval", "Hybrid search, reranking"],
        ["Answer generation", "Citations, refusal"],
        ["Evaluation", "Sources, answers, regression"],
        ["Operations", "Freshness, traces, feedback"],
      ],
      strip: "Private deployment · source citations · versioned configuration · audit trail",
      right: [
        ["Knowledge assistant", "Search and cited answers"],
        ["Internal AI chatbot", "Role-aware conversations"],
        ["Enterprise search", "Documents and records"],
        ["Business workflows", "Draft, review, approve"],
      ],
    },
    diagramCaption:
      "Reference architecture: identity and source permissions constrain retrieval before the model receives evidence, while evaluation and audit cover the complete answer path.",
    standards: [
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Prompt injection, sensitive information disclosure and excessive agency are treated as application risks across ingestion, retrieval, generation and any connected tools.",
      },
      {
        name: "NIST AI Risk Management Framework",
        note: "Govern, map, measure and manage activities provide a practical structure for ownership, evaluation, monitoring and review of the knowledge assistant.",
      },
      {
        name: "ISO/IEC 42001",
        note: "AI management-system concepts inform documented responsibilities, risk treatment and change control where an organisation adopts that governance framework.",
      },
      {
        name: "OpenID Connect, SAML and enterprise identity",
        note: "The application uses the organisation's established identity and group membership rather than maintaining a separate permission model that can drift from source systems.",
      },
      {
        name: "Data protection and retention policy",
        note: "Personal and confidential data is minimised, processed for an agreed purpose and retained in prompts, traces and feedback only according to the organisation's rules.",
      },
      {
        name: "OpenTelemetry and structured audit logs",
        note: "Trace context links application requests, retrieval results, model calls and responses without making sensitive content broadly visible to operators.",
      },
    ],
    dataModel: [
      {
        entity: "Source and collection",
        holds: "System owner, connector, approved scope, classification, refresh policy and operational status.",
      },
      {
        entity: "Document and revision",
        holds: "Source identifier, title, version, status, access list, extracted structure and last successful ingestion.",
      },
      {
        entity: "Passage and evidence",
        holds: "Document location, text or structured value, metadata, embedding reference and the revision from which it was derived.",
      },
      {
        entity: "Identity and entitlement",
        holds: "User, group, role and source-system rights used to filter every retrieval request.",
      },
      {
        entity: "Question and answer trace",
        holds: "Application, user, query, retrieved evidence, answer, citations, model and configuration version, subject to retention policy.",
      },
      {
        entity: "Evaluation case",
        holds: "Representative question, expected sources, acceptable answer criteria, refusal expectation and results by system version.",
      },
      {
        entity: "Feedback and review",
        holds: "User signal, issue category, reviewer decision, correction and whether the case should join the evaluation set.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Use a knowledge assistant included in an existing productivity or document platform when the content is concentrated there, its permission model is sufficient and teams do not need specialised retrieval, evaluation or workflow integration.",
      },
      {
        title: "Extend",
        body: "Add governed ingestion, permission filters, evaluation and application integration around a managed search or model service. This keeps infrastructure responsibility smaller while making the experience specific to your sources and controls.",
      },
      {
        title: "Build",
        body: "Build a dedicated enterprise RAG application when knowledge spans several systems, access rules must be preserved end to end, domain retrieval needs careful evaluation or the assistant must work inside a custom business workflow.",
      },
    ],
    security: [
      {
        title: "Permissions before generation",
        body: "Access checks filter candidate evidence before any passage is placed in model context. The answer cannot cite or summarise content that was removed for the signed-in user.",
      },
      {
        title: "Untrusted-content isolation",
        body: "Instructions found inside documents, web pages or retrieved records are treated as data, not authority. They cannot modify system policy, reveal hidden prompts or expand available tools.",
      },
      {
        title: "Private data flow",
        body: "Network paths, model endpoints, logs and retention are designed around the agreed boundary. Sensitive prompts and retrieved passages are not copied into unrelated analytics or training datasets.",
      },
      {
        title: "Controlled workflow actions",
        body: "Retrieval and answer generation do not automatically grant permission to change a source system. Typed tools, separate service identities, limits and human approval govern any downstream action.",
      },
      {
        title: "Traceable change control",
        body: "Connector, index, ranking, prompt and model changes are versioned and evaluated before release, with rollback to a previously accepted configuration when quality or safety regresses.",
      },
    ],
    phases: [
      {
        title: "Knowledge and access discovery",
        body: "We identify the users, questions, source owners, document classes, identity systems and access rules. A small, representative content scope is selected with explicit exclusions and accountable owners.",
      },
      {
        title: "Evaluation set and retrieval design",
        body: "Real questions are paired with expected sources and refusal cases. We design ingestion, document structure, filtering, search and ranking against this set before choosing prompts or polishing a chat interface.",
      },
      {
        title: "Working assistant in a controlled environment",
        body: "Connectors, index, identity integration, cited answers and operational traces are implemented for the first scope. Reviewers test quality, permissions and no-answer behaviour with representative accounts.",
      },
      {
        title: "Workflow integration and assisted use",
        body: "The assistant is placed in the portal, service desk or internal application where the work happens. Early use keeps clear review paths, captures failure categories and separates answer quality from user-interface feedback.",
      },
      {
        title: "Governed expansion",
        body: "Additional sources and teams join only after ownership, access mapping, evaluation coverage and operational capacity are ready. Quality, freshness, unanswered questions and configuration changes are reviewed as an ongoing product practice.",
      },
    ],
    proof: [
      { label: "Private LLM deployment architecture and controls", href: "/solutions/private-llm-deployment" },
      { label: "RAG assistant for engineering standards and procedures", href: "/solutions/rag-assistant-for-engineering-documents" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Senior-care documentation: unstructured notes into governed records", href: "/case-studies/senior-care-documentation" },
    ],
    faqs: [
      {
        q: "What is enterprise RAG development?",
        a: "It is the engineering of a retrieval-augmented generation application around company knowledge, identity and workflows. The work includes ingestion, access filtering, search and ranking, cited answer generation, evaluation, monitoring and the application in which people use the result.",
      },
      {
        q: "How is internal AI chatbot development different from a private AI knowledge assistant?",
        a: "A chatbot describes the interface. A private AI knowledge assistant also defines which sources are authoritative, who may retrieve each document, how citations work, how unsupported questions are refused and how quality is evaluated as content changes.",
      },
      {
        q: "Can Enterprise RAG respect SharePoint and document permissions?",
        a: "Yes, when source identities and access lists are mapped into the index and checked on every query. The design must also handle permission changes and document removal so stale access does not survive in search results or caches.",
      },
      {
        q: "How do you evaluate RAG development services?",
        a: "We separate retrieval from answer generation. Evaluation checks whether the right authorised evidence was found, whether citations support the answer, whether the system refused unsupported questions and whether changes improve one group of questions while harming another.",
      },
      {
        q: "Can the same platform support AI enterprise search development and workflow assistance?",
        a: "Yes. A governed retrieval layer can support search, cited answers and drafting inside business workflows. Actions that change records remain separate, using explicit tools, permissions and approval rather than inheriting authority from the ability to retrieve information.",
      },
      {
        q: "Does Enterprise RAG require fine-tuning a model?",
        a: "Usually not at the start. Retrieval supplies current company knowledge at request time, while evaluation reveals whether remaining failures come from missing content, search quality, instructions or the model. Fine-tuning is considered only when a defined task and evidence show it is the appropriate intervention.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "AI agents for back-office operations", href: "/solutions/ai-agents-for-back-office-operations" },
      { label: "RAG assistant for engineering documents", href: "/solutions/rag-assistant-for-engineering-documents" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "rag-assistant-for-engineering-documents",
    vertical: "oil-gas",
    serviceId: "ai-ml",
    seoTitle: "RAG Assistant for Engineering Standards and Procedures | Deview",
    seoDescription:
      "RAG assistant for engineering documents: answers from standards, procedures, datasheets and drawings with citations, revision control, permissions and evaluation.",
    kicker: "AI/ML engineering · Engineering",
    h1: "RAG assistant for engineering documents",
    intro:
      "We build RAG assistants for engineering documents: assistants that answer questions from standards, procedures, datasheets, drawings and reports with citations to the exact page, respecting revisions and document permissions, and saying so when the documents do not contain the answer. Engineers find the right requirement faster, and the assistant runs inside your boundary. You own the system and the code.",
    modules: [
      {
        title: "Document ingestion",
        body: "Pipelines for PDFs, scans, Office files, drawings and datasheets, with OCR, layout analysis and extraction of tables, units and revision information.",
      },
      {
        title: "Structure-aware chunking",
        body: "Splitting by section, clause and table rather than by character count, so an answer keeps its context, such as the clause number and the conditions that apply.",
      },
      {
        title: "Hybrid search and reranking",
        body: "Keyword and semantic search combined, with reranking and filters by discipline, asset, standard and revision, to find the right passage and not just a similar one.",
      },
      {
        title: "Answers with citations",
        body: "Answers that quote the source and link to the page, document and revision, so the engineer can verify in one click.",
      },
      {
        title: "Revision and applicability control",
        body: "Only current approved revisions are used by default, with the ability to ask about an earlier revision, and notices when a source has been superseded.",
      },
      {
        title: "Tag and equipment awareness",
        body: "Recognition of tags and equipment classes in questions, with retrieval of the datasheets, procedures and inspection records linked to them.",
      },
      {
        title: "Permissions and confidentiality",
        body: "Document-level and project-level access carried into search, so users, contractors and partners see only what they are entitled to.",
      },
      {
        title: "No-answer behaviour",
        body: "Clear refusal when the documents do not support an answer, with a pointer to related material or the responsible engineer.",
      },
      {
        title: "Evaluation and feedback",
        body: "A test set of real engineering questions with correct sources, run on every change, and user feedback that flags wrong answers for review.",
      },
    ],
    diagram: {
      title: "RAG assistant for engineering documents: reference architecture",
      desc: "Standards, procedures, datasheets, drawings and reports from document management and engineering systems are ingested with OCR, structure-aware chunking and revision metadata. A retrieval and answering platform with hybrid search, permissions, citations and evaluation serves engineers through chat and inside engineering tools.",
      leftLabel: "Sources",
      platformLabel: "Assistant platform",
      rightLabel: "Users and systems",
      platformTitle: "Engineering RAG platform",
      left: [
        ["Standards and procedures", "Company and external"],
        ["Datasheets and drawings", "Equipment, P&IDs"],
        ["Reports and records", "Inspection, projects"],
      ],
      modules: [
        ["Ingestion", "OCR, layout, tables"],
        ["Chunking", "By clause and table"],
        ["Hybrid search", "Keyword and semantic"],
        ["Answers and citations", "Page and revision"],
        ["Permissions", "From source systems"],
        ["Evaluation", "Real question set"],
      ],
      strip: "Revision control · private hosting · full logs",
      right: [
        ["Engineers", "Chat, search"],
        ["Engineering tools", "In-context help"],
        ["Document management", "Links, updates"],
        ["Content owners", "Feedback, fixes"],
      ],
    },
    diagramCaption:
      "Reference architecture: answers come from retrieved passages with citations, limited to what the user may see and to current revisions.",
    standards: [
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Controls for prompt injection, information disclosure and unsafe output when models read documents.",
      },
      {
        name: "CFIHOS and document numbering conventions",
        note: "Equipment classes and document types used to filter and link retrieved content.",
      },
      {
        name: "PDF/A and document structure formats",
        note: "Archive formats, and structured sources such as XML standards where available, which give better extraction than scans.",
      },
      {
        name: "Evaluation practice for retrieval and generation",
        note: "Measures of retrieval accuracy, answer faithfulness and citation correctness, tracked per release.",
      },
      {
        name: "Information security and licensing",
        note: "Controls on proprietary standards and licensed content, which may limit what can be indexed and who can see it.",
      },
      {
        name: "ISO/IEC 42001 and NIST AI RMF",
        note: "Governance frameworks for use of AI in engineering decisions.",
      },
    ],
    dataModel: [
      {
        entity: "Document and revision",
        holds: "Identifier, title, type, discipline, revision, status, owner, validity and access rules.",
      },
      {
        entity: "Chunk",
        holds: "Text, section path, page, table or figure reference, embedding and the document revision.",
      },
      {
        entity: "Tag and link",
        holds: "Tag mentioned or linked, equipment class and the documents associated with it.",
      },
      {
        entity: "Question and session",
        holds: "User, question, filters, retrieved passages and the answer given.",
      },
      {
        entity: "Citation",
        holds: "Source passage, page, revision and the claim in the answer it supports.",
      },
      {
        entity: "Feedback",
        holds: "User verdict, correction, reviewer and the fix made to content or settings.",
      },
      {
        entity: "Evaluation case",
        holds: "Question, correct source, expected answer points and scores by release.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Enterprise search and AI assistants from document management and productivity vendors cover general documents, and are the quickest start for office-style content.",
      },
      {
        title: "Extend",
        body: "Extend an enterprise assistant with engineering-specific ingestion for tables, units and drawings, revision control, tag awareness and a proper evaluation set.",
      },
      {
        title: "Build",
        body: "Build when documents are technical and rule-heavy, when data must stay in your own environment, or when answers feed engineering workflows where wrong answers carry real cost.",
      },
    ],
    security: [
      {
        title: "Permission-aware retrieval",
        body: "The assistant only retrieves passages the user could open directly, and removal of access takes effect immediately.",
      },
      {
        title: "Verifiable answers",
        body: "Every claim is cited, and engineers are trained and prompted to verify before using an answer in a design or a procedure.",
      },
      {
        title: "Private hosting",
        body: "Models and indexes run inside your environment, and documents are not used to train external models.",
      },
      {
        title: "Injection defences",
        body: "Text inside documents cannot change the assistant's behaviour, and the assistant cannot take actions.",
      },
      {
        title: "Logging",
        body: "Questions, sources and answers are logged for quality review and audit, with retention rules.",
      },
    ],
    phases: [
      {
        title: "Use case and document survey",
        body: "We choose the first questions and document sets with engineers, and survey formats, quality, revisions and permissions.",
      },
      {
        title: "Evaluation set and ingestion design",
        body: "Real questions with correct sources are collected, and the ingestion and chunking are designed for the documents that matter.",
      },
      {
        title: "Build and tune",
        body: "Retrieval and answering are built and tuned against the evaluation set until they meet the agreed standard.",
      },
      {
        title: "Pilot with engineers",
        body: "A group of engineers uses the assistant on real work, flagging wrong or missing answers.",
      },
      {
        title: "Extend content and integrations",
        body: "More document sets, tag links and engineering tool integrations are added, with owners responsible for content quality.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Senior-care documentation: notes extracted into structured records", href: "/case-studies/senior-care-documentation" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
    ],
    faqs: [
      {
        q: "How do you stop the assistant inventing requirements?",
        a: "Answers are generated only from retrieved passages, and each one cites its source. If the documents do not support an answer, the assistant says so. We test with real questions on every change and track unsupported claims.",
      },
      {
        q: "Does it handle tables and drawings?",
        a: "Tables and units are extracted with structure, so values keep their meaning. Drawings and P&IDs are indexed through their title blocks, tags and text, and linked to the equipment they show.",
      },
      {
        q: "How does it deal with superseded standards?",
        a: "Each document carries its revision and status. By default only current approved revisions are used, and the assistant warns when a question touches a superseded document.",
      },
      {
        q: "Can contractors use it?",
        a: "Yes, with their own permissions. They see only the documents released to them, and the assistant cannot reveal anything else.",
      },
      {
        q: "Who owns the system and the code?",
        a: "You do. The code, the indexes and the evaluation sets stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "Enterprise RAG development", href: "/solutions/enterprise-rag-development" },
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "ai-model-risk-management",
    vertical: "banking",
    serviceId: "ai-ml",
    seoTitle: "AI Model Risk Management, Validation and Monitoring | Deview",
    seoDescription:
      "AI model risk management for banks and regulated firms: model inventory, validation, monitoring, drift, fairness testing, GenAI evaluation and governance workflow.",
    kicker: "AI/ML engineering · Governance",
    h1: "AI model risk management, validation and monitoring",
    intro:
      "We build AI model risk management, validation and monitoring for banks and regulated firms: a model inventory with tiering, validation workflows and evidence, ongoing monitoring of performance, drift and fairness, evaluation for generative AI and a governance workflow that produces what supervisors and auditors ask for. It turns policy on paper into controls in the systems that run the models, and you own the platform and the code.",
    modules: [
      {
        title: "Model and AI use-case inventory",
        body: "A register of every model, tool and generative AI use case, with owner, purpose, data, vendor, status and the decisions it influences.",
      },
      {
        title: "Risk tiering",
        body: "Classification by materiality and risk, such as impact on customers, capital or compliance, which sets the depth of validation and monitoring.",
      },
      {
        title: "Development documentation",
        body: "Templates and capture of model purpose, data, methodology, assumptions, limitations and testing, produced as part of development and not after it.",
      },
      {
        title: "Independent validation workflow",
        body: "Assignment, scope, tests, findings and remediation, with conceptual soundness, outcomes analysis and benchmarking evidence stored and linked to the model version.",
      },
      {
        title: "Performance and drift monitoring",
        body: "Automated tracking of accuracy, calibration, stability of inputs and outputs and business outcomes, with thresholds and alerts by tier.",
      },
      {
        title: "Fairness and conduct testing",
        body: "Tests for unequal outcomes and proxy effects, with documented thresholds and mitigations, repeated on a schedule.",
      },
      {
        title: "Generative AI evaluation",
        body: "Test sets, red-teaming results, grounding and hallucination measures, safety checks and monitoring of prompts and outputs in use.",
      },
      {
        title: "Change management and approvals",
        body: "Gates for releasing a new model or version, with approvals by tier, and a record of what changed, why and who signed.",
      },
      {
        title: "Findings, issues and reporting",
        body: "Tracking of validation findings and incidents to closure, and reports to the model risk committee, internal audit and supervisors.",
      },
    ],
    diagram: {
      title: "AI model risk management: reference architecture",
      desc: "Model development, production monitoring data and generative AI applications feed a model governance platform with an inventory, tiering, documentation, validation workflow, monitoring, fairness testing, generative AI evaluation and change approvals. Outputs go to model owners, validators, the risk committee and audit.",
      leftLabel: "Model landscape",
      platformLabel: "Governance platform",
      rightLabel: "Consumers",
      platformTitle: "Model risk platform",
      left: [
        ["Models in development", "Code, data, results"],
        ["Models in production", "Predictions, outcomes"],
        ["GenAI applications", "Prompts, outputs, logs"],
      ],
      modules: [
        ["Inventory and tiering", "Owner, use, risk"],
        ["Documentation", "Purpose, data, limits"],
        ["Validation workflow", "Scope, tests, findings"],
        ["Monitoring and drift", "Performance, stability"],
        ["Fairness and GenAI tests", "Bias, grounding, safety"],
        ["Change approvals", "Gates by tier"],
      ],
      strip: "Evidence linked to versions · findings tracking · audit trail",
      right: [
        ["Model owners", "Actions, alerts"],
        ["Validators", "Evidence, findings"],
        ["Risk committee", "Reports, decisions"],
        ["Audit and supervisors", "Evidence on request"],
      ],
    },
    diagramCaption:
      "Reference architecture: governance is built into the way models are developed, released and monitored, and the evidence is kept as a by-product.",
    standards: [
      {
        name: "SR 11-7 and OCC 2011-12",
        note: "US supervisory guidance on model risk management covering development, validation, governance and use, widely used as a reference outside the United States.",
      },
      {
        name: "PRA SS1/23",
        note: "The UK Prudential Regulation Authority's model risk management principles for banks, including AI and machine learning models.",
      },
      {
        name: "EU AI Act",
        note: "Risk-based obligations for AI systems, including high-risk uses in credit and employment, covering documentation, human oversight and monitoring.",
      },
      {
        name: "NIST AI RMF and ISO/IEC 42001",
        note: "Frameworks and a management system standard for AI governance, mapped to the platform's controls.",
      },
      {
        name: "HKMA and other supervisory guidance on AI",
        note: "Local expectations on governance, fairness, transparency and customer protection in the use of AI.",
      },
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Security risks for generative AI applications, included in evaluation and monitoring.",
      },
    ],
    dataModel: [
      {
        entity: "Model and use case",
        holds: "Identifier, owner, purpose, tier, data sources, vendor, status and decisions affected.",
      },
      {
        entity: "Model version",
        holds: "Code, data and parameters snapshot, documentation, approval and release date.",
      },
      {
        entity: "Validation",
        holds: "Scope, validator, tests, evidence, findings, rating and sign-off.",
      },
      {
        entity: "Monitoring metric",
        holds: "Metric, window, value, threshold, status and the model version observed.",
      },
      {
        entity: "Fairness or evaluation result",
        holds: "Test, group or task, result, threshold and mitigation.",
      },
      {
        entity: "Finding and action",
        holds: "Description, severity, owner, due date, status and closure evidence.",
      },
      {
        entity: "Approval and change",
        holds: "Change description, gate, approvers, decision and effective date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Model risk and governance, risk and compliance products provide registers, workflows and reporting, and are the standard choice for large banks with an established model risk function.",
      },
      {
        title: "Extend",
        body: "Extend a governance tool with automated monitoring, evidence capture from the modelling environment and generative AI evaluation, which are the parts that registers do not do.",
      },
      {
        title: "Build",
        body: "Build when you run many models in a particular platform, when you need the controls to be part of the delivery pipeline, or when you are a smaller regulated firm that needs a lighter, integrated approach.",
      },
    ],
    security: [
      {
        title: "Independence",
        body: "Validators and developers are separate roles, and the system prevents self-approval of a model or a finding.",
      },
      {
        title: "Tamper-evident evidence",
        body: "Validation evidence and approvals are stored with the version they relate to and cannot be altered.",
      },
      {
        title: "Access by role",
        body: "Model data, including sensitive customer data used in testing, is restricted to those who need it.",
      },
      {
        title: "Controlled release",
        body: "A model cannot be promoted to production without the approvals its tier requires.",
      },
      {
        title: "Retention and audit trail",
        body: "Records are retained for the period supervisors expect, and every action is logged.",
      },
    ],
    phases: [
      {
        title: "Policy and landscape review",
        body: "We review the model risk policy, the models and AI uses in place and the evidence supervisors have asked for, with risk, validation and model owners.",
      },
      {
        title: "Inventory and tiering",
        body: "The inventory is built and models are tiered, which shows where validation and monitoring effort should go.",
      },
      {
        title: "Workflow and evidence capture",
        body: "Documentation, validation and approval workflows are built, and evidence capture is connected to the modelling environment.",
      },
      {
        title: "Monitoring and evaluation",
        body: "Automated monitoring and evaluation are added for the highest-tier models and generative AI uses first.",
      },
      {
        title: "Reporting and continuous improvement",
        body: "Committee and supervisory reporting is generated from the platform, and the policy is refined from experience.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "Does model risk management apply to generative AI?",
        a: "Yes. Supervisors and standards bodies expect generative AI uses to be in the inventory, tiered and tested. The tests differ, with evaluation sets, red-teaming and monitoring of outputs in use, but the governance logic is the same.",
      },
      {
        q: "How much monitoring is enough?",
        a: "It depends on the tier. High-tier models need regular performance, stability and fairness checks with alerts. Lower tiers need lighter periodic review. The platform applies the policy by tier so effort follows risk.",
      },
      {
        q: "Can the platform work with the tools our data scientists use?",
        a: "Yes. Evidence such as parameters, data snapshots and test results is captured from the modelling and deployment tools through their interfaces, so developers do not retype it.",
      },
      {
        q: "Does it replace our model risk function?",
        a: "No. It gives the function an inventory, workflows, evidence and monitoring so that its time goes to judgement and challenge rather than chasing documents.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the workflows and the data stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
      { label: "GenAI copilot for credit memos", href: "/solutions/genai-credit-memo-copilot" },
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
    ],
    updated: "2026-10-15",
  },
];
