import type { SolutionPage } from "./types";

export const BANKING_DIGITAL_PAGES: SolutionPage[] = [
  {
    slug: "corporate-banking-portal-development",
    vertical: "banking",
    serviceId: "product-engineering",
    seoTitle: "Corporate and SME Banking Portal Development | Deview",
    seoDescription:
      "Custom corporate and SME banking portal: payments and file upload, approvals, entitlements, statements, trade requests and ERP connectivity for business clients.",
    kicker: "Digital product engineering · Banking",
    h1: "Corporate and SME banking portal development",
    intro:
      "We develop corporate and SME banking portals for banks: a secure web and API channel where business clients initiate payments, upload payment files, approve with the right people, see statements and balances, and request trade and credit services. The portal connects to your payment hub, core and ERP systems your clients already use, and you own the code.",
    modules: [
      {
        title: "Client onboarding and set-up",
        body: "Digital onboarding of corporate clients, their users and accounts, with the bank's own checks and an approval before anything goes live.",
      },
      {
        title: "Entitlements and limits",
        body: "Roles, account access, product access and per-user limits held as a matrix, with maker-checker on every change and a full history.",
      },
      {
        title: "Payment initiation",
        body: "Single, bulk and recurring payments, templates and beneficiary books, with validation before submission and clear status afterwards.",
      },
      {
        title: "File upload and host-to-host",
        body: "Upload of payment files in standard formats and secure host-to-host exchange for clients that automate payments from their ERP.",
      },
      {
        title: "Approval workflow",
        body: "Multi-level approval by amount, account and payment type, with mobile approval and transaction signing for the approvers.",
      },
      {
        title: "Account information",
        body: "Balances, intraday transactions and end-of-day statements in screen, file and API form, with search and export.",
      },
      {
        title: "Trade and credit requests",
        body: "Requests for guarantees, letters of credit, overdraft changes and loans, with status tracking and document exchange.",
      },
      {
        title: "ERP and treasury connectivity",
        body: "Connectors to common ERP and treasury systems, with ready mappings so clients can send and reconcile payments from their own software.",
      },
      {
        title: "Notifications and service",
        body: "Alerts for approvals, rejected payments and statement availability, and a secure message channel to the client's relationship team.",
      },
    ],
    diagram: {
      title: "Corporate banking portal: reference architecture",
      desc: "Corporate users, ERP and treasury systems and relationship managers use a portal with onboarding, entitlements, payment initiation, file upload, approvals, account information and trade requests. The portal connects to the payment hub, core banking, trade and credit systems and notification services.",
      leftLabel: "Clients and staff",
      platformLabel: "Corporate portal",
      rightLabel: "Bank systems",
      platformTitle: "Corporate banking portal",
      left: [
        ["Corporate users", "Web, mobile, tokens"],
        ["Client ERP and treasury", "API, files, host-to-host"],
        ["Relationship team", "Support, onboarding"],
      ],
      modules: [
        ["Entitlements", "Roles, limits, maker-checker"],
        ["Payment initiation", "Single, bulk, templates"],
        ["File and API upload", "Formats, validation"],
        ["Approvals", "Levels, signing"],
        ["Account information", "Balances, statements"],
        ["Trade and credit", "Requests, documents"],
      ],
      strip: "Strong authentication · audit trail · notifications",
      right: [
        ["Payment hub", "Initiation, status"],
        ["Core banking", "Accounts, balances"],
        ["Trade and credit", "Back-office systems"],
        ["Notification services", "Email, SMS, push"],
      ],
    },
    diagramCaption:
      "Reference architecture: one secure channel for business clients, with payment, account and trade services behind stable APIs.",
    standards: [
      {
        name: "ISO 20022 pain and camt",
        note: "pain.001 payment files and pain.002 status reports in, camt.052, camt.053 and camt.054 statements and notices out.",
      },
      {
        name: "Strong authentication and signing",
        note: "Multi-factor authentication, hardware or app-based tokens and transaction signing, with step-up for high-risk actions.",
      },
      {
        name: "OAuth 2.0 and OpenID Connect",
        note: "Single sign-on for the bank's own staff and for client identity providers where clients prefer them.",
      },
      {
        name: "Host-to-host protocols",
        note: "SFTP and API-based exchange with signing and encryption for automated client connections.",
      },
      {
        name: "Accessibility guidelines",
        note: "WCAG 2.2 for the web channel, so every staff member of the client can use it.",
      },
      {
        name: "Supervisory expectations",
        note: "Technology risk, authentication and operational resilience guidance that shapes design and testing.",
      },
    ],
    dataModel: [
      {
        entity: "Client and company",
        holds: "Legal entity, group links, accounts in scope, products enabled and contacts.",
      },
      {
        entity: "User and role",
        holds: "Identity, authentication methods, roles, account and product access and limits.",
      },
      {
        entity: "Payment instruction",
        holds: "Payer, beneficiary, amount, date, status and the file or channel it came from.",
      },
      {
        entity: "Approval record",
        holds: "Required levels, who approved, with what signature, and when.",
      },
      {
        entity: "Beneficiary and template",
        holds: "Saved payees and templates with their validation history and approval.",
      },
      {
        entity: "Statement and notification",
        holds: "Reports delivered, formats, delivery status and acknowledgement.",
      },
      {
        entity: "Request case",
        holds: "Trade or credit request, documents, status and the bank team responsible.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Many core and payments vendors sell a corporate channel. It is the natural choice if your estate is single-vendor and your clients' needs are standard.",
      },
      {
        title: "Extend",
        body: "Extend when the vendor portal covers payments but lacks the client experience, mobile approval, ERP connectors or the trade and credit requests your relationship teams want.",
      },
      {
        title: "Build",
        body: "Build when you want to differentiate on service to business clients, when you serve a niche segment or when several back-ends sit behind one front door.",
      },
    ],
    security: [
      {
        title: "Strong authentication",
        body: "Multi-factor authentication for every user, with risk-based step-up and transaction signing for payments.",
      },
      {
        title: "Maker-checker everywhere",
        body: "Changes to users, limits, beneficiaries and payments need separate people, with approval enforced by the system.",
      },
      {
        title: "Session and device control",
        body: "Short sessions, device binding, anomaly detection and fast revocation of access.",
      },
      {
        title: "Fraud signals",
        body: "Behaviour and beneficiary checks before payments are released, with a path to hold and verify.",
      },
      {
        title: "Audit and non-repudiation",
        body: "A signed record of who did what and when, retained for the period the bank's policy requires.",
      },
    ],
    phases: [
      {
        title: "Client journey review",
        body: "We interview business clients and relationship teams and trace their top payment and reporting tasks through the current channel.",
      },
      {
        title: "Experience and architecture design",
        body: "Screens, entitlements and the interfaces to the hub and core are agreed with product, security and operations.",
      },
      {
        title: "Build the core journeys",
        body: "Entitlements, payments and approvals ship first, then files and statements, then trade and credit requests.",
      },
      {
        title: "Client pilot",
        body: "A group of clients uses the portal with real payments and limits while support and monitoring are tuned.",
      },
      {
        title: "Migrate and extend",
        body: "Clients move over in waves, with ERP connectors and new services added from the product roadmap.",
      },
    ],
    proof: [
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "Can the portal sit on top of several back-end systems?",
        a: "Yes. The portal talks to the payment hub, the core and other systems through APIs, so clients see one channel while the bank keeps its existing back-ends.",
      },
      {
        q: "Does it support payment files from client ERP systems?",
        a: "Yes. The portal accepts standard payment files and supports automated host-to-host exchange, with validation and status reports returned in the same format.",
      },
      {
        q: "How are approvals handled for large payments?",
        a: "Approval levels are set per account and payment type. Approvers can sign on mobile, and a payment is released only when every required level has signed.",
      },
      {
        q: "Is it accessible?",
        a: "The web channel is designed to WCAG 2.2 and tested with keyboard and screen readers, since many staff at a client company will use it daily.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "Mobile banking app development", href: "/solutions/mobile-banking-app-development" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "digital-sme-loan-application-portal",
    vertical: "banking",
    serviceId: "product-engineering",
    seoTitle: "Digital SME Loan Application Portal and App | Deview",
    seoDescription:
      "Digital SME loan application portal and app for banks and lenders: guided applications, consented data pull, document upload, e-signature and a live status tracker.",
    kicker: "Digital product engineering · Banking",
    h1: "Digital SME loan application portal and app",
    intro:
      "We build digital SME loan application portals and apps for banks and lenders: the borrower-facing side of SME lending, with a guided application, consented data pull in place of paper statements, document upload, e-signature and a live status tracker. It connects to your loan management system and credit workflow, and you own the code.",
    modules: [
      {
        title: "Guided application",
        body: "A short, adaptive form that asks only what the product needs, saves progress and lets the business owner finish later on any device.",
      },
      {
        title: "Business and owner verification",
        body: "Company lookup, director and beneficial owner capture and identity verification, with results passed to the lender's checks.",
      },
      {
        title: "Consented data pull",
        body: "Bank statement, accounting and tax data collected through the borrower's consent, so they do not upload statements or retype numbers.",
      },
      {
        title: "Document upload",
        body: "A checklist per product and applicant type, with preview, quality checks and automatic reading of common documents.",
      },
      {
        title: "Offer and terms",
        body: "Indicative and final offers displayed in plain language, with clear fees and repayment schedules and a record of what the applicant saw.",
      },
      {
        title: "E-signature",
        body: "Facility documents signed online by every required party, with signing order, reminders and a certificate of completion.",
      },
      {
        title: "Status tracker",
        body: "A live view of where the application is, what is needed next and who has it, so the borrower does not need to phone the lender.",
      },
      {
        title: "Borrower account",
        body: "Repayment schedule, statements, top-up requests and document requests after the loan is drawn.",
      },
      {
        title: "Staff workbench",
        body: "A view for relationship managers and credit officers to assist applications, request documents and see what the borrower sees.",
      },
    ],
    diagram: {
      title: "Digital SME loan application portal: reference architecture",
      desc: "Business owners and relationship managers use an application portal with guided application, verification, consented data pull, document upload, offers, e-signature and a status tracker. The portal connects to the loan management system, credit workflow, data providers and the borrower account.",
      leftLabel: "Users and data",
      platformLabel: "Application portal",
      rightLabel: "Lender systems",
      platformTitle: "Application portal and app",
      left: [
        ["Business owners", "Web and mobile"],
        ["Relationship managers", "Assisted applications"],
        ["Data providers", "Statements, accounting, tax"],
      ],
      modules: [
        ["Guided application", "Adaptive, saved progress"],
        ["Verification", "Company, owners, identity"],
        ["Data and documents", "Consent, upload, checks"],
        ["Offer and terms", "Plain language, fees"],
        ["E-signature", "Parties, order, evidence"],
        ["Status tracker", "Steps and next actions"],
      ],
      strip: "Consent log · audit trail · accessibility",
      right: [
        ["Loan management system", "Applications, loans"],
        ["Credit workflow", "Assessment, approval"],
        ["Document and e-sign store", "Signed documents"],
        ["Notifications", "Email, SMS, push"],
      ],
    },
    diagramCaption:
      "Reference architecture: the portal collects a complete, verified application and hands it to the credit workflow without rekeying.",
    standards: [
      {
        name: "Consent and data-sharing frameworks",
        note: "Consent-based data exchange such as the HKMA Commercial Data Interchange, open banking APIs and accounting-software APIs, used where the lender and borrower are connected.",
      },
      {
        name: "Electronic signature law",
        note: "The electronic transactions rules in the lender's market, including levels of signature for particular documents.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces to the loan management and credit workflow systems.",
      },
      {
        name: "WCAG 2.2",
        note: "Accessibility of forms and status pages, so business owners using assistive technology can apply.",
      },
      {
        name: "Data protection law",
        note: "Notice, consent, purpose and retention for personal data of owners, directors and guarantors.",
      },
      {
        name: "Fair lending and disclosure rules",
        note: "How offers, fees, interest and repayment terms must be shown to the applicant.",
      },
    ],
    dataModel: [
      {
        entity: "Applicant and business",
        holds: "Company, owners, directors, contact, verification results and consents.",
      },
      {
        entity: "Application",
        holds: "Product, amount, purpose, answers, progress, channel and submission time.",
      },
      {
        entity: "Data pull",
        holds: "Source, consent reference, scope, retrieved data and expiry.",
      },
      {
        entity: "Document",
        holds: "Type, file, quality result, extracted fields and review status.",
      },
      {
        entity: "Offer",
        holds: "Terms shown, version, validity and the applicant's response.",
      },
      {
        entity: "Signature package",
        holds: "Documents, signers, order, evidence and completion certificate.",
      },
      {
        entity: "Status event",
        holds: "Step reached, owner, message sent to the borrower and time.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Many loan origination suites include a borrower portal. It works when branding, journey and data sources are close to what the vendor offers.",
      },
      {
        title: "Extend",
        body: "Extend when the lending system is solid but the front end is a form and a PDF. We build the portal in front and leave the lending system as the engine.",
      },
      {
        title: "Build",
        body: "Build when the application journey is part of your proposition, when you sell through partners or marketplaces, or when you need your own data connections and brand across several products.",
      },
    ],
    security: [
      {
        title: "Identity and access",
        body: "Verified owner identity, multi-factor sign-in for the borrower account and controlled staff access to applications.",
      },
      {
        title: "Consent management",
        body: "A log of every consent, its scope and expiry, with revocation honoured and data deleted on schedule.",
      },
      {
        title: "Document handling",
        body: "Encrypted storage, malware scanning on upload and retention by document type.",
      },
      {
        title: "Fraud controls",
        body: "Checks on identity, device and document tampering before an application enters credit.",
      },
      {
        title: "Resilience",
        body: "Saved progress survives outages, and submissions are idempotent so a retry never duplicates an application.",
      },
    ],
    phases: [
      {
        title: "Journey and policy review",
        body: "We walk through the current application with credit and operations and note each question, document and handoff.",
      },
      {
        title: "Design and data connections",
        body: "The journey, wording and the connections to data providers and the lending system are designed and tested with real applicants.",
      },
      {
        title: "Build and integrate",
        body: "The portal is built with the lending integration first, so applications arrive in the credit workflow complete.",
      },
      {
        title: "Pilot",
        body: "A small group of applicants and one relationship team use the portal while drop-off points are watched.",
      },
      {
        title: "Open to all and extend",
        body: "The portal opens to all applicants, with new products, languages and data sources added over time.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
    ],
    faqs: [
      {
        q: "Does the portal replace our loan management system?",
        a: "No. It is the borrower-facing front end. Applications go to the loan management and credit systems, and status and documents come back to the portal.",
      },
      {
        q: "How do you reduce abandoned applications?",
        a: "By asking only what the product needs, pulling data with consent rather than asking for statements, saving progress and showing the borrower what happens next at every step.",
      },
      {
        q: "Can relationship managers help an applicant?",
        a: "Yes. The staff workbench shows the borrower's view, lets staff complete sections on their behalf and keeps a record of what was entered by whom.",
      },
      {
        q: "Is it available as a mobile app?",
        a: "Yes, as a responsive web portal, a native or cross-platform app, or both from one set of APIs.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "Loan management system checklist", href: "/resources/loan-management-system-checklist" },
      { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
      { label: "Mobile banking app development", href: "/solutions/mobile-banking-app-development" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "mobile-banking-app-development",
    vertical: "banking",
    serviceId: "product-engineering",
    seoTitle: "Mobile Banking App Development | Deview",
    seoDescription:
      "Mobile banking app development for banks and fintechs: secure accounts, payments, cards and QR, biometric login, push alerts and a release process regulators accept.",
    kicker: "Digital product engineering · Banking",
    h1: "Mobile banking app development",
    intro:
      "We develop mobile banking apps for banks and fintechs: accounts and payments, card controls, QR payments, biometric login, push alerts and support, built on your APIs and secured to the standards that mobile security reviewers use. The app ships on a controlled release process that suits a regulated bank, and you own the code.",
    modules: [
      {
        title: "Onboarding and login",
        body: "Digital onboarding where the product allows it, device binding, biometric sign-in and recovery flows that do not weaken security.",
      },
      {
        title: "Accounts and statements",
        body: "Balances, transaction history with search, statements and spending insight, from cached data when the connection is poor.",
      },
      {
        title: "Payments and transfers",
        body: "Own-account, domestic and cross-border transfers, bill payments, standing orders and instant payments, with confirmation of payee where available.",
      },
      {
        title: "QR and wallet payments",
        body: "Scan and show codes following the market's QR standard, and tokenised cards for the major mobile wallets.",
      },
      {
        title: "Card management",
        body: "Freeze and unfreeze, limits, online and overseas controls, PIN management and dispute initiation.",
      },
      {
        title: "Alerts and notifications",
        body: "Push, SMS and in-app messages for transactions, security events and service updates, with preference controls.",
      },
      {
        title: "Service and support",
        body: "In-app messaging, secure document exchange and handoff to an agent with the customer's context.",
      },
      {
        title: "Lending and savings journeys",
        body: "Applications for loans, deposits and other products inside the app, connected to the bank's origination systems.",
      },
      {
        title: "Analytics and release control",
        body: "Privacy-respecting usage analytics, feature flags and staged rollouts so changes reach customers gradually and can be withdrawn.",
      },
    ],
    diagram: {
      title: "Mobile banking app: reference architecture",
      desc: "Customers use a mobile app on iOS and Android with login, accounts, payments, QR and wallet, card management, alerts, service and product journeys. The app calls an API gateway that connects to the core, payment hub, card systems and notification services.",
      leftLabel: "Customers",
      platformLabel: "Mobile app",
      rightLabel: "Bank systems",
      platformTitle: "Mobile banking app",
      left: [
        ["iOS and Android", "Phones and tablets"],
        ["Biometrics and device", "Face, fingerprint, binding"],
        ["Wallets and QR", "Tokens, scan and show"],
      ],
      modules: [
        ["Login and security", "Biometrics, device binding"],
        ["Accounts", "Balances, history"],
        ["Payments", "Transfers, bills, instant"],
        ["Cards", "Controls, PIN, disputes"],
        ["Alerts and service", "Push, chat, documents"],
        ["Product journeys", "Loans, savings"],
      ],
      strip: "Certificate pinning · feature flags · analytics",
      right: [
        ["API gateway", "Auth, limits, routing"],
        ["Core and payments", "Ledger, hub, rails"],
        ["Card systems", "Issuing, tokens"],
        ["Notifications", "Push, SMS, email"],
      ],
    },
    diagramCaption:
      "Reference architecture: a thin, secure app on stable APIs, with security controls in the app and in the gateway.",
    standards: [
      {
        name: "OWASP MASVS and MASTG",
        note: "The Mobile Application Security Verification Standard and its testing guide, used as the checklist for design, build and penetration testing.",
      },
      {
        name: "FIDO2 and WebAuthn",
        note: "Passkey and device-bound credentials as a stronger alternative to passwords and one-time codes.",
      },
      {
        name: "EMV tokenisation and 3-D Secure 2",
        note: "Card tokens for mobile wallets and strong authentication for online card payments.",
      },
      {
        name: "QR payment standards",
        note: "The local QR specification and EMVCo's merchant-presented mode for scan-to-pay.",
      },
      {
        name: "WCAG 2.2 and platform guidelines",
        note: "Accessibility and the iOS and Android design and review guidelines, including screen reader support.",
      },
      {
        name: "Supervisory expectations",
        note: "Authentication, technology risk and customer protection guidance that governs mobile channels.",
      },
    ],
    dataModel: [
      {
        entity: "Customer and device",
        holds: "Customer identity, enrolled devices, binding keys and trust state.",
      },
      {
        entity: "Session and authentication event",
        holds: "Method used, risk score, step-up outcome and the device.",
      },
      {
        entity: "Account view",
        holds: "Cached balances and transactions with the source timestamp.",
      },
      {
        entity: "Payment and beneficiary",
        holds: "Instruction, confirmation, status and saved payees with their verification.",
      },
      {
        entity: "Card and control setting",
        holds: "Token, status, limits and channel controls.",
      },
      {
        entity: "Notification and preference",
        holds: "Messages sent, channel, delivery status and the customer's settings.",
      },
      {
        entity: "Feature flag and release",
        holds: "Feature, audience, version, rollout state and the owner.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A vendor digital banking platform with a white-label app is the quickest route to launch when your products and brand fit the template and you accept the vendor's roadmap.",
      },
      {
        title: "Extend",
        body: "Extend when the vendor app is good at the basics but you need your own journeys, such as lending, merchant services or a niche segment, built as modules inside or beside it.",
      },
      {
        title: "Build",
        body: "Build when the app is your main channel and differentiator, when you are a digital bank or fintech, or when you want to own the experience and release pace.",
      },
    ],
    security: [
      {
        title: "Hardened app",
        body: "Certificate pinning, jailbreak and root detection, obfuscation, secure storage of keys in the device's hardware-backed store and no sensitive data in logs.",
      },
      {
        title: "Strong authentication",
        body: "Biometrics bound to device keys, risk-based step-up for payments and quick revocation of lost devices.",
      },
      {
        title: "Server-side authority",
        body: "Limits, entitlements and business rules enforced in the back end, never trusted from the app.",
      },
      {
        title: "Testing and review",
        body: "Static and dynamic analysis in the pipeline, dependency scanning and independent penetration testing against MASVS.",
      },
      {
        title: "Controlled releases",
        body: "Signed builds, staged rollout, remote kill switches for features and a tested path to force an upgrade.",
      },
    ],
    phases: [
      {
        title: "Product and risk alignment",
        body: "We agree the first journeys, the authentication model and the security requirements with product, security and compliance.",
      },
      {
        title: "Design and API contracts",
        body: "The user experience is designed and tested with customers, and the API contracts are agreed with the teams that own the back ends.",
      },
      {
        title: "Build and test",
        body: "The app ships in releases to an internal group, with automated tests and security checks in every build.",
      },
      {
        title: "Staged launch",
        body: "A small customer group goes live first, with monitoring of crashes, drop-offs and fraud signals.",
      },
      {
        title: "Grow and maintain",
        body: "Journeys are added, operating system updates are tracked and the release process stays under the bank's change control.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: Flutter field app and Salesforce quoting", href: "/case-studies/agroplatforma" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
    ],
    faqs: [
      {
        q: "Should the app be native or cross-platform?",
        a: "Both work. Cross-platform frameworks such as Flutter share most of the code and suit most banking journeys. Native code is used for the parts that need deep platform features, such as device-bound keys and wallet integration.",
      },
      {
        q: "How do you make a mobile banking app secure?",
        a: "By following OWASP MASVS from design onward, keeping the real authority on the server, using device-bound keys and testing the app with automated analysis and an independent penetration test.",
      },
      {
        q: "Can the app work with a legacy core?",
        a: "Yes, through an integration layer of stable APIs and read models. The app never depends on the core's formats.",
      },
      {
        q: "How are releases managed in a regulated bank?",
        a: "Through a pipeline with approvals, signed builds, staged rollout and the ability to withdraw a feature remotely, aligned with your change management policy.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "ai-credit-scoring-for-sme-lending",
    vertical: "banking",
    serviceId: "ai-ml",
    seoTitle: "AI Credit Scoring for SME Lending | Deview",
    seoDescription:
      "AI credit scoring for SME lending: cash-flow models, explainable decisions, fairness testing, governance and monitoring inside your loan origination workflow.",
    kicker: "AI/ML engineering · Banking",
    h1: "AI credit scoring for SME lending",
    intro:
      "We build AI credit scoring for SME lending: models that use cash-flow and transaction data, produce reason codes a credit officer and a borrower can understand, and run inside your loan origination workflow with the testing, governance and monitoring a regulated lender needs. The models, the features and the code are yours.",
    modules: [
      {
        title: "Data preparation",
        body: "Bank statements, accounting and tax data, payment and e-commerce data and credit-reference information turned into consistent, point-in-time features.",
      },
      {
        title: "Cash-flow features",
        body: "Revenue stability, seasonality, customer concentration, payment behaviour and buffer measures that describe a business better than a few ratios.",
      },
      {
        title: "Scorecards and gradient-boosted models",
        body: "Interpretable scorecards and, where the data supports it, gradient-boosted trees with monotonic constraints, compared on the same hold-out data.",
      },
      {
        title: "Explanations and reason codes",
        body: "Per-decision explanations in plain language for credit officers, and clear reasons for the applicant where decisions affect individuals such as owners and guarantors.",
      },
      {
        title: "Fairness and bias testing",
        body: "Testing for unequal outcomes across protected and proxy groups, with documented mitigations and thresholds agreed with risk and compliance.",
      },
      {
        title: "Decisioning integration",
        body: "Scores delivered to the origination and approval workflow by API, combined with policy rules and referred to a person where the case is not clear-cut.",
      },
      {
        title: "Validation and documentation",
        body: "Independent-style validation, development documentation and a model inventory entry, ready for the bank's model risk function.",
      },
      {
        title: "Monitoring and drift",
        body: "Population stability, score distribution, approval rates and loss performance tracked against expectations, with alerts when a model drifts.",
      },
      {
        title: "Champion and challenger",
        body: "New models run beside the live one on real cases, so a change is evidence-based before it takes decisions.",
      },
    ],
    diagram: {
      title: "AI credit scoring: reference architecture",
      desc: "Statement, accounting, payment and credit-reference data feed a scoring platform with feature preparation, models, explanations, fairness testing, decisioning integration and monitoring. Scores and reason codes go to the origination workflow, credit officers and the model risk function.",
      leftLabel: "Data",
      platformLabel: "Scoring platform",
      rightLabel: "Consumers",
      platformTitle: "Credit scoring platform",
      left: [
        ["Bank and accounting data", "Statements, ledgers, tax"],
        ["Payment and trade data", "Receipts, e-commerce"],
        ["Credit reference", "Bureau and shared data"],
      ],
      modules: [
        ["Feature pipeline", "Point-in-time features"],
        ["Models", "Scorecard, boosted trees"],
        ["Explanations", "Reason codes"],
        ["Fairness testing", "Groups, proxies"],
        ["Decision service", "API with policy rules"],
        ["Monitoring", "Drift, performance"],
      ],
      strip: "Model registry · versioning · audit trail",
      right: [
        ["Origination workflow", "Score and reasons"],
        ["Credit officers", "Review and override"],
        ["Model risk", "Validation, inventory"],
        ["Portfolio reporting", "Performance, loss"],
      ],
    },
    diagramCaption:
      "Reference architecture: features, models and explanations sit behind one decision service, with testing and monitoring around it.",
    standards: [
      {
        name: "Model risk management guidance",
        note: "Supervisory expectations such as SR 11-7 in the United States and equivalents elsewhere: development, validation, inventory and ongoing monitoring.",
      },
      {
        name: "HKMA guidance on AI and big data analytics",
        note: "Principles for governance, fairness, transparency and customer protection when banks use big data analytics and artificial intelligence.",
      },
      {
        name: "EU AI Act",
        note: "Creditworthiness assessment of individuals is treated as high-risk, and the same governance is good practice for SME decisions that rely on data about owners and guarantors.",
      },
      {
        name: "IFRS 9",
        note: "Consistency between scoring, stage allocation and expected credit loss inputs.",
      },
      {
        name: "Explainability methods",
        note: "Scorecard points, SHAP values and partial dependence, chosen so explanations are faithful to the model.",
      },
      {
        name: "Data protection law",
        note: "Lawful basis, consent, minimisation and automated decision-making rules for personal data in features.",
      },
    ],
    dataModel: [
      {
        entity: "Application and entity",
        holds: "The business, owners, product, amount and the time the decision was made.",
      },
      {
        entity: "Feature set",
        holds: "Feature definitions, values at decision time, source and version.",
      },
      {
        entity: "Model version",
        holds: "Algorithm, training data window, parameters, validation results and approvals.",
      },
      {
        entity: "Score and reason codes",
        holds: "Score, band, top reasons, policy rules fired and the model version.",
      },
      {
        entity: "Decision and override",
        holds: "Outcome, officer, any override and the reason recorded.",
      },
      {
        entity: "Outcome",
        holds: "Repayment performance and delinquency by loan, used for validation and retraining.",
      },
      {
        entity: "Monitoring metric",
        holds: "Stability, calibration, approval rate and performance by period and segment.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A vendor scoring product or a bureau score is the right start if you have little history, want a benchmark or need a regulator-recognised score quickly.",
      },
      {
        title: "Extend",
        body: "Extend a vendor score with your own cash-flow features and an override layer, so you keep the benchmark but add what your data alone can tell you.",
      },
      {
        title: "Build",
        body: "Build your own models when you have enough loan history, your segment is poorly served by generic scores, or the models and features are a competitive advantage.",
      },
    ],
    security: [
      {
        title: "Data protection",
        body: "Personal and financial data encrypted, access limited to the modelling team and masked in non-production environments.",
      },
      {
        title: "Model governance",
        body: "Registry, version control, approvals before a model goes live and a log of who changed what.",
      },
      {
        title: "Human oversight",
        body: "Referral rules and override with a recorded reason, so a person remains accountable for the decision.",
      },
      {
        title: "Adversarial and quality checks",
        body: "Checks for manipulated documents and statements before data reaches the model.",
      },
      {
        title: "Reproducibility",
        body: "Each decision can be reproduced from stored inputs and the model version that produced it.",
      },
    ],
    phases: [
      {
        title: "Data and policy review",
        body: "We review the data available, the loan history and the credit policy with credit and risk, and agree what the score is for and what it is not for.",
      },
      {
        title: "Feature and model development",
        body: "Features and candidate models are built and compared on out-of-time data, with explainability and fairness tests alongside.",
      },
      {
        title: "Validation and approval",
        body: "Documentation and results go to model risk for validation, with findings fixed before approval.",
      },
      {
        title: "Shadow mode",
        body: "The model scores live applications without affecting decisions, so its output can be compared with credit officers' decisions.",
      },
      {
        title: "Go-live and monitoring",
        body: "The score enters the workflow with agreed policy rules, and monitoring reports start from day one.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "Do we need a lot of historical loans to build a model?",
        a: "It helps, but it is not a barrier to starting. With limited history we begin with a benchmark score and policy rules, collect outcomes, and move to your own model as the data matures.",
      },
      {
        q: "How can a model be explained to a credit officer?",
        a: "Every score comes with the top factors that raised or lowered it, in plain language. Scorecards are inherently readable, and for boosted models we use explanation methods that are faithful to the model and tested.",
      },
      {
        q: "How do you check for bias?",
        a: "We test outcomes across relevant groups and proxy variables, document what we find and the mitigation, and agree the thresholds with your risk and compliance teams.",
      },
      {
        q: "Does AI make the decision?",
        a: "The score informs the decision. Policy rules and referral to a credit officer sit around it, and a person can override with a recorded reason.",
      },
      {
        q: "Who owns the model and the code?",
        a: "You do. The models, the features, the code and the data stay yours.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
      { label: "GenAI copilot for credit memos", href: "/solutions/genai-credit-memo-copilot" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "real-time-payment-fraud-detection",
    vertical: "banking",
    serviceId: "ai-ml",
    seoTitle: "Real-Time Payment Fraud Detection | Deview",
    seoDescription:
      "Real-time payment fraud detection for banks and fintechs: risk scoring in the payment flow, mule and network detection, case management and feedback loops.",
    kicker: "AI/ML engineering · Banking",
    h1: "Real-time payment fraud detection",
    intro:
      "We build real-time payment fraud detection for banks and fintechs: risk scoring inside the payment flow, behavioural and device signals, detection of mule accounts and networks, and case management with a feedback loop so the models learn from confirmed fraud. The decision happens before money moves, and the rules, models and code are yours.",
    modules: [
      {
        title: "Event capture",
        body: "Payments, logins, device and session events, beneficiary changes and card events streamed into one real-time store.",
      },
      {
        title: "Feature computation",
        body: "Velocity, amount, time, beneficiary age, device history and session behaviour computed on the fly from recent events.",
      },
      {
        title: "Rules and models",
        body: "Rules for known patterns and machine learning models for the unknown, combined into one score with a documented decision strategy.",
      },
      {
        title: "Decision in the payment flow",
        body: "Allow, step up, hold or decline decided before release, within the time budget of the payment scheme.",
      },
      {
        title: "Step-up and customer confirmation",
        body: "Challenges and confirmation requests to the customer through the app or a call, with the result feeding the decision.",
      },
      {
        title: "Mule and network detection",
        body: "Graph analysis of accounts, devices and beneficiaries to find mule accounts and organised networks that single-payment rules miss.",
      },
      {
        title: "Authorised push payment scam signals",
        body: "Indicators of a customer being coached, such as new payees, urgency and unusual behaviour, with warnings tailored to the scam type.",
      },
      {
        title: "Case management and feedback",
        body: "Analyst queues, outcomes labelled as fraud or genuine, and automatic feeding of labels back to training data.",
      },
      {
        title: "Monitoring and tuning",
        body: "Detection rate, false-positive rate, customer friction and loss by rule and model, with controlled experiments for changes.",
      },
    ],
    diagram: {
      title: "Real-time payment fraud detection: reference architecture",
      desc: "Payment, login, device and card events stream into a fraud platform with feature computation, rules and models, a decision service, step-up, network analysis and case management. Decisions go back to the payment flow and channels, and analyst outcomes feed model training.",
      leftLabel: "Events",
      platformLabel: "Fraud platform",
      rightLabel: "Consumers",
      platformTitle: "Real-time fraud platform",
      left: [
        ["Payments", "Instant and card payments"],
        ["Login and device", "Sessions, behaviour"],
        ["Customer and payees", "Profile, beneficiary history"],
      ],
      modules: [
        ["Feature store", "Velocity, behaviour"],
        ["Rules and models", "One combined score"],
        ["Decision service", "Allow, step up, hold"],
        ["Network analysis", "Mules, linked accounts"],
        ["Case management", "Queues, outcomes"],
        ["Monitoring", "Rates, friction, loss"],
      ],
      strip: "Low latency · audit trail · label feedback",
      right: [
        ["Payment flow", "Release or hold"],
        ["Customer channels", "Warnings, step-up"],
        ["Analysts", "Cases and labels"],
        ["Model training", "Retraining data"],
      ],
    },
    diagramCaption:
      "Reference architecture: events become features, features become a score, and the decision is made before the payment leaves.",
    standards: [
      {
        name: "Payment scheme fraud requirements",
        note: "Latency budgets, response codes and risk-checking duties set by each instant and card payment scheme.",
      },
      {
        name: "Strong customer authentication",
        note: "Step-up rules and transaction risk analysis exemptions, with the evidence regulators expect.",
      },
      {
        name: "EMV 3-D Secure 2",
        note: "Risk data and challenge flows for card-not-present payments.",
      },
      {
        name: "Verification of payee",
        note: "Name-matching checks required or offered by payment schemes and regulation.",
      },
      {
        name: "Model risk management",
        note: "Validation, monitoring and change control for fraud models, as for any decision model.",
      },
      {
        name: "Data protection law",
        note: "Lawful use of behavioural and device data and limits on retention and automated decisions.",
      },
    ],
    dataModel: [
      {
        entity: "Event",
        holds: "Type, time, customer, device, channel and the attributes used for scoring.",
      },
      {
        entity: "Customer baseline",
        holds: "Typical behaviour, usual payees, devices and limits.",
      },
      {
        entity: "Score and decision",
        holds: "Score, rules fired, model versions, action and latency.",
      },
      {
        entity: "Beneficiary and account",
        holds: "Age, first seen, reports and links to other accounts and devices.",
      },
      {
        entity: "Network edge",
        holds: "Relationship between accounts, devices and payees with strength and time.",
      },
      {
        entity: "Case and label",
        holds: "Alert, analyst, outcome (fraud, genuine, unknown) and date confirmed.",
      },
      {
        entity: "Strategy version",
        holds: "Rule and model set, thresholds, owner, approval and live dates.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A fraud platform or a consortium service is the usual choice for card fraud and for firms that want shared intelligence from many institutions.",
      },
      {
        title: "Extend",
        body: "Extend a vendor engine with your own features, network analysis for mules and the scam signals that matter for your customers.",
      },
      {
        title: "Build",
        body: "Build when you run instant payments or a payment platform and need decisions inside a tight latency budget, when your data is unusual, or when you want full control of strategy and models.",
      },
    ],
    security: [
      {
        title: "Strict latency and fail-safe",
        body: "A defined fallback if the engine is slow or down: fail open with limits or fail closed, by payment type and amount.",
      },
      {
        title: "Protected data",
        body: "Behavioural and device data encrypted and limited to the fraud team, with retention rules.",
      },
      {
        title: "Strategy change control",
        body: "Rule and threshold changes are tested, approved and dated, with the ability to roll back.",
      },
      {
        title: "Adversarial resilience",
        body: "Monitoring for attackers adapting to the rules, and models trained to be robust to evasion.",
      },
      {
        title: "Audit trail",
        body: "Every decision stored with the features and versions behind it.",
      },
    ],
    phases: [
      {
        title: "Fraud landscape and data review",
        body: "We review current fraud losses, typologies and the data available in real time, with the fraud, payments and channels teams.",
      },
      {
        title: "Architecture and latency design",
        body: "The event flow, feature store and decision service are designed against the payment flow's latency budget.",
      },
      {
        title: "Rules and model development",
        body: "Rules and models are built and tested on historical data, with step-up and customer communication designed alongside.",
      },
      {
        title: "Shadow mode",
        body: "The system scores live payments without acting, so decisions can be compared with outcomes.",
      },
      {
        title: "Go-live and tuning",
        body: "Decisions are switched on by payment type, with weekly tuning of thresholds using confirmed outcomes.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
    ],
    faqs: [
      {
        q: "How fast does the decision have to be?",
        a: "It has to fit inside the payment scheme's time budget alongside everything else in the flow. We design the feature store and decision service for that budget and set a defined fallback if a component is slow.",
      },
      {
        q: "Can the system detect authorised push payment scams?",
        a: "It cannot know a customer is being coached, but it can score the signals that go with it, such as a new payee, urgency, unusual amount and session behaviour, and then show a warning or hold the payment for confirmation.",
      },
      {
        q: "How do you find mule accounts?",
        a: "By graph analysis of how accounts, devices and beneficiaries connect, together with behaviour such as rapid in-and-out movement of funds, combined with rules and reports from other institutions where available.",
      },
      {
        q: "How does the model learn?",
        a: "Analyst and customer outcomes are labelled as fraud or genuine and fed back into training data on a schedule, with validation before a new model is promoted.",
      },
      {
        q: "Who owns the code and the models?",
        a: "You do. The code, the models, the strategies and the data stay yours.",
      },
    ],
    assetId: "aml-fraud-requirements",
    related: [
      { label: "Transaction monitoring system development", href: "/solutions/transaction-monitoring-system-development" },
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "ai-document-processing-for-banks",
    vertical: "banking",
    serviceId: "ai-ml",
    seoTitle: "AI Document Processing for Banks: KYC and Spreading | Deview",
    seoDescription:
      "AI document processing for banks: extract data from KYC documents, bank statements and financial statements, with confidence scores, human review and an audit trail.",
    kicker: "AI/ML engineering · Banking",
    h1: "AI document processing for banks",
    intro:
      "We build AI document processing for banks: extraction of data from identity and corporate documents, bank statements and financial statements, with confidence scores, validation against rules and a review screen where a person confirms what the system is unsure about. It feeds onboarding, credit and compliance systems without rekeying, and you own the code and the models.",
    modules: [
      {
        title: "Document intake and classification",
        body: "Documents received by upload, email or API are classified by type and split into pages and sections, whatever the format or scan quality.",
      },
      {
        title: "Identity document reading",
        body: "Extraction from passports and identity cards, including the machine-readable zone, with checks for consistency between the zone and the visible text.",
      },
      {
        title: "Corporate document extraction",
        body: "Registration certificates, ownership charts, board resolutions and constitutional documents turned into structured company, director and owner data.",
      },
      {
        title: "Bank statement parsing",
        body: "Transactions, balances and periods extracted from statements in many layouts, reconciled so opening and closing balances add up.",
      },
      {
        title: "Financial statement spreading",
        body: "Balance sheets and income statements mapped to the bank's standard template, with notes and adjustments flagged for an analyst.",
      },
      {
        title: "Validation and cross-checks",
        body: "Arithmetic, date and cross-document checks, such as matching the name and address across documents, with failures routed to review.",
      },
      {
        title: "Tamper and fraud signals",
        body: "Detection of edited, duplicated or inconsistent documents, with signals recorded for the onboarding and fraud teams.",
      },
      {
        title: "Human review and learning",
        body: "A review screen showing the source and the extracted value, where corrections feed back into the extraction models.",
      },
      {
        title: "Integration and audit",
        body: "Structured results delivered to onboarding, credit and case systems, with the source document, the model version and every correction stored.",
      },
    ],
    diagram: {
      title: "AI document processing for banks: reference architecture",
      desc: "Documents from onboarding, credit and compliance channels flow into a processing platform with classification, identity reading, corporate extraction, statement parsing, spreading and validation. Results go to onboarding, credit and compliance systems after human review of uncertain fields.",
      leftLabel: "Documents",
      platformLabel: "Processing platform",
      rightLabel: "Systems",
      platformTitle: "Document processing platform",
      left: [
        ["Onboarding documents", "ID, registry, ownership"],
        ["Bank statements", "PDF, scans, images"],
        ["Financial statements", "Accounts, tax returns"],
      ],
      modules: [
        ["Classification", "Type, pages, sections"],
        ["Field extraction", "OCR, layout, language models"],
        ["Spreading", "Template mapping"],
        ["Validation", "Arithmetic, cross-checks"],
        ["Tamper signals", "Edits, duplicates"],
        ["Review screen", "Confidence, corrections"],
      ],
      strip: "Model versions · audit trail · feedback learning",
      right: [
        ["Onboarding and KYC", "Customer data"],
        ["Credit workflow", "Spread financials"],
        ["Compliance", "Screening inputs"],
        ["Document store", "Source and results"],
      ],
    },
    diagramCaption:
      "Reference architecture: documents are classified, read and checked, and only uncertain fields reach a person.",
    standards: [
      {
        name: "ICAO 9303",
        note: "The standard for machine-readable travel documents, used to read and verify the zone on passports and many identity cards.",
      },
      {
        name: "ISO/IEC 30107",
        note: "Presentation attack detection for liveness and document capture where selfies and live capture are part of the flow.",
      },
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "Controls for prompt injection, data leakage and unsafe output when language models read untrusted documents.",
      },
      {
        name: "Know-your-customer and due diligence rules",
        note: "What a bank must verify and keep for each customer type, which the extracted fields and evidence must support.",
      },
      {
        name: "ISO/IEC 27001 and data protection law",
        note: "Controls on storage, access and retention for identity documents and financial records.",
      },
      {
        name: "Model risk management",
        note: "Validation, monitoring and change control for extraction models used in regulated decisions.",
      },
    ],
    dataModel: [
      {
        entity: "Document",
        holds: "Source file, type, pages, received channel, hash and retention class.",
      },
      {
        entity: "Extracted field",
        holds: "Name, value, confidence, location on the page and the model that produced it.",
      },
      {
        entity: "Validation result",
        holds: "Rule applied, outcome and the fields involved.",
      },
      {
        entity: "Spread statement",
        holds: "Template lines, periods, adjustments and analyst notes.",
      },
      {
        entity: "Review task",
        holds: "Fields flagged, reviewer, corrections and time taken.",
      },
      {
        entity: "Tamper signal",
        holds: "Type of anomaly, evidence and the decision taken.",
      },
      {
        entity: "Model version",
        holds: "Models used, evaluation results and release date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Document extraction products and cloud services work well for common identity documents and standard forms, and are quick to start.",
      },
      {
        title: "Extend",
        body: "Extend a vendor service with your own spreading templates, cross-document checks and review screen so the output fits your onboarding and credit workflow.",
      },
      {
        title: "Build",
        body: "Build when your documents are unusual, you operate in several languages and jurisdictions, data cannot leave your environment, or the extraction is central to your product.",
      },
    ],
    security: [
      {
        title: "Data stays in your environment",
        body: "Documents are processed in your own cloud account or data centre, with models hosted privately where required.",
      },
      {
        title: "Safe handling of untrusted content",
        body: "Documents are treated as hostile input: malware scanning, isolation, and defences against instructions hidden in content for language models.",
      },
      {
        title: "Access and retention",
        body: "Role-based access to documents, masking in review screens where possible and automatic deletion on schedule.",
      },
      {
        title: "Human accountability",
        body: "Fields below a confidence threshold, and any identity or fraud decision, are confirmed by a person.",
      },
      {
        title: "Audit trail",
        body: "The source, the extracted value, the corrections and the model version are kept for every field.",
      },
    ],
    phases: [
      {
        title: "Document and workflow review",
        body: "We collect representative documents and trace how they are read and rekeyed today by onboarding, credit and compliance.",
      },
      {
        title: "Extraction and validation design",
        body: "Fields, templates and validation rules are specified, and candidate models are tested on your documents.",
      },
      {
        title: "Build and tune",
        body: "The pipeline and review screen are built and tuned on real documents, with accuracy reported per field and document type.",
      },
      {
        title: "Assisted mode",
        body: "Staff use the review screen on every document, so extraction can be compared with their own work.",
      },
      {
        title: "Selective automation",
        body: "Fields and document types that meet the agreed accuracy skip review, and the rest stay with people.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Senior-care documentation: notes extracted into structured records", href: "/case-studies/senior-care-documentation" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "How accurate is the extraction?",
        a: "Accuracy depends on the document type and quality, so we measure it on your own documents per field and agree thresholds before any field skips review. Uncertain fields always go to a person.",
      },
      {
        q: "Can it read documents in several languages and scripts?",
        a: "Yes. Language and script support is tested on your document set, including documents that mix languages and scripts.",
      },
      {
        q: "Does a language model send our documents to an external service?",
        a: "Not unless you choose that. Models can be hosted in your own environment, and external services are used only where policy allows and with the controls that apply.",
      },
      {
        q: "Does the system decide whether a document is genuine?",
        a: "It provides signals, such as edits and inconsistencies. A person decides on identity and fraud, and the decision and reasons are recorded.",
      },
      {
        q: "Who owns the code and the models?",
        a: "You do. The code, the models trained on your documents and the data stay yours.",
      },
    ],
    assetId: "aml-fraud-requirements",
    related: [
      { label: "Transaction monitoring system development", href: "/solutions/transaction-monitoring-system-development" },
      { label: "GenAI copilot for credit memos", href: "/solutions/genai-credit-memo-copilot" },
      { label: "Digital SME loan application portal", href: "/solutions/digital-sme-loan-application-portal" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "genai-credit-memo-copilot",
    vertical: "banking",
    serviceId: "ai-ml",
    seoTitle: "GenAI Copilot for Credit Memos and Relationship Managers | Deview",
    seoDescription:
      "GenAI copilot for credit memos and relationship managers: grounded drafting from the credit file, cited sources, analyst control, private hosting and audit logs.",
    kicker: "AI/ML engineering · Banking",
    h1: "GenAI copilot for credit memos and relationship managers",
    intro:
      "We build GenAI copilots for credit memos and relationship managers: an assistant that drafts sections of a credit memo and summarises client files from the bank's own documents, cites its sources, and leaves the judgement to the analyst. It runs in your environment with prompt-injection defences, access controls and full logs of what was asked and returned, and you own the code.",
    modules: [
      {
        title: "Grounded retrieval",
        body: "Search across the credit file, financial spreads, policy documents, news and prior memos, with each answer tied to the passages it came from.",
      },
      {
        title: "Memo section drafting",
        body: "First drafts of business description, market, management, financial performance and risk sections from the file, in the bank's own memo structure and tone.",
      },
      {
        title: "Client and meeting summaries",
        body: "Summaries of long documents, call notes and correspondence, for relationship managers preparing for a meeting or review.",
      },
      {
        title: "Financial commentary",
        body: "Plain-language commentary on spread financials and ratios, with every figure checked against the numbers in the system.",
      },
      {
        title: "Citations and traceability",
        body: "Each statement links to its source passage, so the analyst can verify it in one click.",
      },
      {
        title: "Policy and covenant questions",
        body: "Answers to questions such as which covenants apply or what the policy says about a sector, with references to the policy text.",
      },
      {
        title: "Analyst editing and sign-off",
        body: "The analyst edits and approves every section. The system records what was generated and what was changed.",
      },
      {
        title: "Evaluation and guardrails",
        body: "A test set of real tasks run against every change, with checks for unsupported claims, wrong figures and leakage of restricted information.",
      },
      {
        title: "Logging and review",
        body: "Prompts, retrieved passages and outputs stored with user and time, available to model risk and audit.",
      },
    ],
    diagram: {
      title: "GenAI credit memo copilot: reference architecture",
      desc: "The credit file, policy documents and external sources are indexed into a retrieval layer. A copilot platform with grounded retrieval, memo drafting, summaries, financial commentary, citations and guardrails serves analysts and relationship managers, with logs available to model risk and audit.",
      leftLabel: "Sources",
      platformLabel: "Copilot platform",
      rightLabel: "Users and control",
      platformTitle: "Credit copilot platform",
      left: [
        ["Credit files", "Memos, spreads, documents"],
        ["Policies and procedures", "Credit policy, covenants"],
        ["External sources", "News, filings, ratings"],
      ],
      modules: [
        ["Retrieval", "Permissioned search"],
        ["Memo drafting", "Bank template and tone"],
        ["Summaries", "Files, calls, meetings"],
        ["Financial commentary", "Figures checked"],
        ["Citations", "Every claim sourced"],
        ["Guardrails", "Injection, leakage"],
      ],
      strip: "Private hosting · access control · full logs",
      right: [
        ["Credit analysts", "Drafts to edit"],
        ["Relationship managers", "Briefings"],
        ["Model risk", "Evaluation, logs"],
        ["Internal audit", "Evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: the assistant only sees what the user may see, answers from the file with citations and never decides.",
    standards: [
      {
        name: "OWASP Top 10 for LLM Applications",
        note: "The 2025 list of risks, including prompt injection, sensitive information disclosure and excessive agency, used as the security checklist.",
      },
      {
        name: "NIST AI Risk Management Framework",
        note: "Govern, map, measure and manage functions for the assistant's life cycle.",
      },
      {
        name: "ISO/IEC 42001",
        note: "An AI management system standard some banks use to organise governance and accountability.",
      },
      {
        name: "Model risk management guidance",
        note: "Treatment of the assistant as a model or tool with defined use, validation and monitoring.",
      },
      {
        name: "HKMA guidance on generative AI",
        note: "Supervisory expectations for governance, transparency and customer protection when banks use generative AI.",
      },
      {
        name: "Data protection and confidentiality",
        note: "Controls on client data used in prompts and outputs, and on where models are hosted.",
      },
    ],
    dataModel: [
      {
        entity: "Source document",
        holds: "File, client, classification, permissions and the chunks and embeddings built from it.",
      },
      {
        entity: "Query and session",
        holds: "User, question, permitted scope, time and the retrieved passages.",
      },
      {
        entity: "Generated output",
        holds: "Text, cited passages, model and prompt version and any guardrail result.",
      },
      {
        entity: "Analyst edit",
        holds: "Changes from the draft to the approved text and the person who approved it.",
      },
      {
        entity: "Evaluation case",
        holds: "Task, reference answer, scoring and results by model and prompt version.",
      },
      {
        entity: "Guardrail event",
        holds: "Rule triggered, content and action taken.",
      },
      {
        entity: "Policy and prompt version",
        holds: "Instructions, templates, owner, approval and live dates.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A vendor copilot for banking or a general enterprise assistant is the quick start, and is often enough for summarising documents and drafting routine text.",
      },
      {
        title: "Extend",
        body: "Extend an enterprise assistant with your own retrieval over the credit file, memo templates, permissions and evaluation, so it works the way your credit process does.",
      },
      {
        title: "Build",
        body: "Build when data must stay within your environment, when the memo structure and policy are specific, or when you want to control models, evaluation and logging end to end.",
      },
    ],
    security: [
      {
        title: "Permission-aware retrieval",
        body: "The assistant retrieves only what the user is entitled to see, and restricted deals stay out of search.",
      },
      {
        title: "Prompt injection defences",
        body: "Documents are treated as untrusted input, instructions in content are not obeyed, and tools the assistant can call are limited and logged.",
      },
      {
        title: "Private hosting options",
        body: "Models hosted in your own environment or a private endpoint, with no training on your data.",
      },
      {
        title: "Logging and oversight",
        body: "Prompts, sources and outputs recorded for audit, with review of samples by model risk.",
      },
      {
        title: "Human accountability",
        body: "The analyst owns the memo. The assistant cannot approve, submit or change any record.",
      },
    ],
    phases: [
      {
        title: "Use case and risk assessment",
        body: "We choose the first tasks with credit and model risk, define what the assistant may and may not do and agree how it will be evaluated.",
      },
      {
        title: "Retrieval and evaluation set",
        body: "Documents are indexed with permissions, and a test set of real tasks and reference answers is built with analysts.",
      },
      {
        title: "Build and tune",
        body: "Drafting, summarising and citation features are built and measured against the test set.",
      },
      {
        title: "Pilot with one team",
        body: "A small analyst team uses the copilot on live files, and edits and feedback are analysed.",
      },
      {
        title: "Extend with controls",
        body: "More teams and tasks are added only as evaluation results and model risk review allow.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
    ],
    faqs: [
      {
        q: "Will the copilot make up facts?",
        a: "Language models can. We reduce it by answering only from retrieved passages, requiring citations, checking every figure against the numbers in the system, and testing against a set of real tasks with each change. The analyst still reviews and owns the memo.",
      },
      {
        q: "Does client data leave our environment?",
        a: "Not unless you decide it should. Models can be hosted in your own environment or at a private endpoint, and retrieval runs against your own indexes with your permissions.",
      },
      {
        q: "How do you protect against prompt injection?",
        a: "Retrieved documents are handled as untrusted. Instructions inside them are not followed, the assistant has no ability to act on systems, and outputs are checked before they are shown.",
      },
      {
        q: "Does it replace analysts?",
        a: "No. It speeds up first drafts and summaries. Judgement, sign-off and accountability stay with the analyst and the credit committee.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the prompts, the evaluation sets and the data stay yours.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "AI credit scoring for SME lending", href: "/solutions/ai-credit-scoring-for-sme-lending" },
      { label: "Commercial loan origination system", href: "/solutions/commercial-loan-origination-system" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
];
