import type { SolutionPage } from "./types";

export const OIL_GAS_PAGES: SolutionPage[] = [
  {
    slug: "upstream-production-management-system",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Upstream Production Management System Development | Deview",
    seoDescription:
      "Custom upstream production management system: daily reporting, well tests, allocation, deferment and surveillance on top of your SCADA and historian.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Upstream production management system",
    intro:
      "We build custom upstream production management systems: daily production reporting, well tests, allocation, deferment and loss accounting, surveillance and management dashboards. The system reads from your SCADA, historian and engineering sources through a one-way connection, so it never touches operational control. You own the code.",
    modules: [
      {
        title: "Asset and well register",
        body: "One hierarchy from field and reservoir to well, completion, facility and export point, with effective dates so history stays correct when equipment changes.",
      },
      {
        title: "Data acquisition",
        body: "Time-series from historians, OPC UA servers and gateways, manual well-test entry and field e-logs, stored at native resolution with quality flags.",
      },
      {
        title: "Daily production reporting",
        body: "Oil, gas and water volumes by well and facility, with review, approval, locking and restatement that keeps the original figures on record.",
      },
      {
        title: "Well tests and allocation",
        body: "Test validation, rate estimation and back-allocation from fiscal metering points to wells, with a reconciliation view that shows what was allocated and what was measured.",
      },
      {
        title: "Deferment and loss accounting",
        body: "Planned and unplanned deferment by category and root cause, linked to downtime events, with loss measured against potential.",
      },
      {
        title: "Surveillance and exceptions",
        body: "Rules on rates, pressures and water cut raise exceptions into a queue with an owner, comments and closure, so an issue is tracked from alarm to action.",
      },
      {
        title: "Equipment and artificial lift context",
        body: "Pumps, ESPs and compressors with run time, failures and interventions, handed to the maintenance system through an integration rather than re-keyed.",
      },
      {
        title: "Forecasting and analytics",
        body: "Decline curves, completion planning and water-breakthrough models running on the same governed data as the daily report.",
      },
      {
        title: "Management and partner reporting",
        body: "Dashboards for operations and management, and exports for partners, regulators and hydrocarbon accounting in the formats they require.",
      },
    ],
    diagram: "upstream-production",
    diagramCaption:
      "Reference architecture: field data flows one way into the production platform; reports and exports flow out to management, partners and accounting.",
    standards: [
      {
        name: "PRODML",
        note: "Energistics standard for exchanging production and measurement data between systems and partners.",
      },
      {
        name: "WITSML and RESQML",
        note: "Energistics standards for well and drilling data and for reservoir models, used where the platform exchanges those with engineering applications.",
      },
      {
        name: "OSDU Data Platform",
        note: "The Open Group's open standard for subsurface and well data. We design interfaces so production data can be published to or read from an OSDU platform.",
      },
      {
        name: "OPC UA (IEC 62541)",
        note: "The usual way to read live values from control systems and historians without writing back.",
      },
      {
        name: "API Manual of Petroleum Measurement Standards",
        note: "Measurement rules that the metering and allocation logic must follow.",
      },
      {
        name: "IEC 62443",
        note: "Zones and conduits for the boundary between operational networks and the business network.",
      },
    ],
    dataModel: [
      {
        entity: "Asset hierarchy",
        holds: "Field, reservoir, well, completion, facility and export point, each with effective dates and identifiers shared with other systems.",
      },
      {
        entity: "Measurement point",
        holds: "Meters and sensors, their type, calibration and the time-series they produce, with quality flags.",
      },
      {
        entity: "Well test",
        holds: "Test date, duration, separator conditions, measured rates and the validation result.",
      },
      {
        entity: "Daily production record",
        holds: "Allocated oil, gas and water per well and day, the allocation method, status and every restatement.",
      },
      {
        entity: "Deferment event",
        holds: "Start and end, category, root cause, deferred volume and the equipment or event it belongs to.",
      },
      {
        entity: "Exception",
        holds: "Rule that fired, asset, severity, owner, comments and closure outcome.",
      },
      {
        entity: "Report package",
        holds: "Which figures went to which recipient, in which format, on which date, by whom.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A commercial production-accounting or hydrocarbon-allocation package is the right call when you have large, complex fiscal measurement and a vendor that already covers your regulator's formats.",
      },
      {
        title: "Extend",
        body: "Extend when you already have a historian and a BI tool but allocation, deferment capture or exception tracking still happen in spreadsheets. We build the workflow and data layer that connects them and leave the historian where it is.",
      },
      {
        title: "Build",
        body: "Build when your asset base is small or mid-sized, your partner and regulator reporting is specific, or you want to prove an operating model in a pilot before committing to a platform. A pilot can start on an illustrative model before operational data is released.",
      },
    ],
    security: [
      {
        title: "One-way data flow",
        body: "Field and historian data is read into the platform. The platform has no write path back to control systems.",
      },
      {
        title: "Network boundary",
        body: "The connection from the operational network follows IEC 62443 zones and conduits: a gateway or data diode at the edge, firewalled and monitored.",
      },
      {
        title: "Access by asset",
        body: "Roles limited by field, asset and function, so a partner sees only its share and a field team sees only its wells.",
      },
      {
        title: "Audit of restatements",
        body: "Any change to a reported figure keeps the original, the new value, the reason and the approver.",
      },
      {
        title: "Hosting and residency",
        body: "On-premise, in your own cloud account or in a regional cloud, with edge buffering so remote sites keep recording when the link drops.",
      },
    ],
    phases: [
      {
        title: "Operating model and data inventory",
        body: "We map how production is reported today, which sources hold the numbers and where the figures diverge, with the production, reservoir and IT teams.",
      },
      {
        title: "Architecture and integration design",
        body: "Interfaces to the historian, engineering applications, maintenance and accounting systems are specified, along with the network boundary.",
      },
      {
        title: "Pilot on one asset or field",
        body: "Daily reporting, well tests and allocation go live for a single field so the numbers can be checked against the existing process.",
      },
      {
        title: "Roll-out and surveillance",
        body: "More assets, deferment capture and exception workflows are added field by field, with management dashboards on top.",
      },
      {
        title: "Operate and extend",
        body: "Release management, monitoring and support, plus forecasting and analytics as the data matures.",
      },
    ],
    proof: [
      { label: "EnerQuest: upstream production management pilot", href: "/case-studies/enerquest" },
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
    ],
    faqs: [
      {
        q: "Do you replace our historian or SCADA?",
        a: "No. They remain the source of live values. The production platform reads from them through OPC UA or the historian's interface and adds the reporting, allocation and workflow layers that they do not provide.",
      },
      {
        q: "Does this cover production accounting and custody transfer?",
        a: "The platform covers daily production reporting, allocation, deferment and surveillance. Fiscal hydrocarbon accounting and custody transfer normally stay in your accounting system of record, and we feed it with reconciled volumes unless that is scoped as part of the build.",
      },
      {
        q: "Can the system exchange data in PRODML, WITSML or OSDU formats?",
        a: "Yes, where your counterparties need them. We map the platform's data model to the relevant Energistics standard or to an OSDU platform, and agree the scope with the people on the other side of the interface.",
      },
      {
        q: "Cloud or on-premise?",
        a: "Either. Many operators run the platform in their own cloud account with an edge component at the site that buffers data when the connection is lost. Others keep everything on-premise.",
      },
      {
        q: "Where can I see your oil and gas background?",
        a: "The oil and gas page lists the team's project history from 2010 to 2020 in planning, control, engineering data and reporting. The EnerQuest case study shows an upstream production management pilot.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
];
