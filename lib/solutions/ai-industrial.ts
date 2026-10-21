import type { SolutionPage } from "./types";

export const AI_INDUSTRIAL_PAGES: SolutionPage[] = [
  {
    slug: "production-forecasting-machine-learning",
    vertical: "oil-gas",
    serviceId: "ai-ml",
    seoTitle: "Production Forecasting and Decline Curve Analysis with ML | Deview",
    seoDescription:
      "Production forecasting and decline curve analysis with machine learning: automated well fits, P10 to P90 forecasts, type curves, water cut and backtesting.",
    kicker: "AI/ML engineering · Oil and gas",
    h1: "Production forecasting and decline curve analysis with machine learning",
    intro:
      "We build production forecasting and decline curve analysis with machine learning for oil and gas operators: automated decline fits across hundreds of wells, probabilistic forecasts with P10, P50 and P90 outcomes, type curves for new wells, water cut and gas-oil ratio forecasts, and backtesting that shows how accurate each method has been. Engineers review and override, and the models and code are yours.",
    modules: [
      {
        title: "Production data preparation",
        body: "Cleaning of rate data: shut-ins, choke changes, interventions and data gaps are identified and handled explicitly so fits describe the well and not the noise.",
      },
      {
        title: "Automated decline fitting",
        body: "Arps exponential, hyperbolic and harmonic fits, and modified or extended forms for unconventional wells, fitted automatically with the parameters and quality of each fit stored.",
      },
      {
        title: "Machine learning forecasts",
        body: "Gradient boosting and sequence models that use rate history, pressure, completion and operating data to forecast where simple curves struggle, compared with the decline baseline.",
      },
      {
        title: "Probabilistic forecasting",
        body: "Ranges, not single lines: P10, P50 and P90 forecasts from parameter and model uncertainty, ready for reserves and planning use.",
      },
      {
        title: "Type curves and analogues",
        body: "Type curves by area, completion or formation, and forecasts for new wells based on analogue wells, with the selection of analogues visible.",
      },
      {
        title: "Water cut and gas-oil ratio",
        body: "Forecasts of the other phases, with early warning of water breakthrough or gas coning and links to the surveillance system.",
      },
      {
        title: "Backtesting and accuracy",
        body: "Hindcast tests that forecast the past from data available at the time, giving error measures by method, well type and horizon.",
      },
      {
        title: "Engineer review and overrides",
        body: "A workspace to inspect fits, adjust parameters, choose a method and record why, with the previous forecast kept.",
      },
      {
        title: "Integration and reporting",
        body: "Forecasts delivered to the production platform, budgeting and reserves processes, and standard reports by field, asset and category.",
      },
    ],
    diagram: {
      title: "Production forecasting with machine learning: reference architecture",
      desc: "Production history, well and completion data and pressure and operating data feed a forecasting platform with data preparation, decline fitting, machine learning forecasts, probabilistic ranges, type curves, backtesting and an engineer review workspace. Forecasts go to production management, budgeting and reserves reporting.",
      leftLabel: "Data",
      platformLabel: "Forecasting platform",
      rightLabel: "Consumers",
      platformTitle: "Production forecasting platform",
      boundary: "One-way from OT",
      left: [
        ["Production history", "Rates, events, tests"],
        ["Wells and completions", "Design, formation, area"],
        ["Pressure and operations", "Chokes, interventions"],
      ],
      modules: [
        ["Data preparation", "Shut-ins, gaps, events"],
        ["Decline fitting", "Arps and extensions"],
        ["ML forecasts", "Boosting, sequence models"],
        ["Probabilistic ranges", "P10, P50, P90"],
        ["Type curves", "Analogue wells"],
        ["Backtesting", "Error by method"],
      ],
      strip: "Model registry · engineer overrides · audit trail",
      right: [
        ["Production management", "Short-term forecast"],
        ["Planning and budgets", "Scenarios"],
        ["Reserves reporting", "Categories, ranges"],
        ["Engineers", "Review workspace"],
      ],
    },
    diagramCaption:
      "Reference architecture: decline curves are the baseline, machine learning adds what they miss, and every forecast carries its accuracy and its range.",
    standards: [
      {
        name: "SPE Petroleum Resources Management System",
        note: "Classification and categorisation framework for reserves and resources, which probabilistic forecasts and reporting must align with.",
      },
      {
        name: "Arps and extended decline models",
        note: "Established empirical decline relationships and their extensions for tight and unconventional reservoirs.",
      },
      {
        name: "PRODML",
        note: "Production data exchange with source systems and partners.",
      },
      {
        name: "Model validation practice",
        note: "Hindcasting, out-of-sample testing and documented limits of use for forecasting models.",
      },
      {
        name: "OSDU data platform",
        note: "Where operators publish well and production data, the forecasting platform reads from and writes results back to it.",
      },
      {
        name: "Reserves audit expectations",
        note: "Documentation that auditors and regulators expect for the basis of a forecast.",
      },
    ],
    dataModel: [
      {
        entity: "Well and completion",
        holds: "Identifiers, formation, completion design, area and start date.",
      },
      {
        entity: "Production series",
        holds: "Daily or monthly rates by phase, with flags for shut-ins, events and data quality.",
      },
      {
        entity: "Fit",
        holds: "Method, parameters, fit window, quality measures and who or what produced it.",
      },
      {
        entity: "Forecast",
        holds: "Method and version, horizon, P10, P50 and P90 series and the data cut-off date.",
      },
      {
        entity: "Type curve",
        holds: "Population definition, curve, uncertainty and the wells included.",
      },
      {
        entity: "Backtest result",
        holds: "Method, origin date, horizon, error measures and the set of wells.",
      },
      {
        entity: "Override",
        holds: "Original forecast, adjusted forecast, reason and the engineer responsible.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial forecasting and reserves software is mature and trusted by auditors, and is the usual choice for formal reserves work.",
      },
      {
        title: "Extend",
        body: "Extend a commercial tool with automated fitting across the whole well population, machine learning for short-term forecasts and a backtesting layer, feeding results back into the tool.",
      },
      {
        title: "Build",
        body: "Build when you need forecasts embedded in your own production platform, a large automated well population or a method that commercial tools do not offer for your reservoir type.",
      },
    ],
    security: [
      {
        title: "Governed models",
        body: "Models are versioned in a registry with documented training data and limits of use, and changes are approved.",
      },
      {
        title: "Engineer accountability",
        body: "Forecasts used for reporting are reviewed by an engineer, and overrides keep the original and the reason.",
      },
      {
        title: "Data protection",
        body: "Well and production data is confidential, with access by asset and partner agreement.",
      },
      {
        title: "Reproducibility",
        body: "Each forecast can be reproduced from the data cut-off, model version and parameters stored with it.",
      },
      {
        title: "One-way data flow",
        body: "Operational data is read into the platform with no path back to control systems.",
      },
    ],
    phases: [
      {
        title: "Data and forecast review",
        body: "We review the production data, current forecasting methods and how forecasts are used, with reservoir, production and finance teams.",
      },
      {
        title: "Baseline and backtest framework",
        body: "Automated decline fits and the backtesting framework are built first, so every later method is compared with the same yardstick.",
      },
      {
        title: "Machine learning and probabilistic methods",
        body: "Machine learning models and probabilistic ranges are developed and compared with the baseline on past data.",
      },
      {
        title: "Pilot on one asset",
        body: "Engineers use the platform on one asset alongside their usual tools, and differences are reviewed.",
      },
      {
        title: "Integrate and extend",
        body: "Forecasts flow to production management and planning, and more assets and wells are added.",
      },
    ],
    proof: [
      { label: "EnerQuest: predictive completion and produced-water modules in a pilot", href: "/case-studies/enerquest" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "Do machine learning forecasts replace decline curve analysis?",
        a: "No. Decline curves remain the baseline and the accepted basis for much reserves work. Machine learning adds short-term accuracy where wells behave unusually and gives a systematic way to test which method works best.",
      },
      {
        q: "How do you show that a forecast method is accurate?",
        a: "By backtesting: each method forecasts the past using only the data available at the time, and the errors are measured by well type and horizon. The results are shown with each forecast.",
      },
      {
        q: "Can the system produce P10, P50 and P90 forecasts?",
        a: "Yes. Ranges come from parameter uncertainty and model comparison, and are delivered in the form planning and reserves processes use.",
      },
      {
        q: "What about wells with little history?",
        a: "New wells are forecast from type curves and analogue wells, with the choice of analogues visible and open to engineer judgement, and the forecast updates as production data accumulates.",
      },
      {
        q: "Who owns the models and the code?",
        a: "You do. The models, the code and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
      { label: "Hydrocarbon production allocation software", href: "/solutions/hydrocarbon-production-allocation-software" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "predictive-maintenance-for-rotating-equipment",
    vertical: "oil-gas",
    serviceId: "ai-ml",
    seoTitle: "Predictive Maintenance for Pumps, Compressors and ESPs | Deview",
    seoDescription:
      "Predictive maintenance for rotating equipment: condition indicators, anomaly detection, remaining useful life, ESP run-life analytics and CMMS integration.",
    kicker: "AI/ML engineering · Oil and gas",
    h1: "Predictive maintenance for pumps, compressors and ESPs",
    intro:
      "We build predictive maintenance for pumps, compressors and ESPs, including electric submersible pumps and other rotating equipment: condition indicators from vibration, temperature, pressure and electrical data, anomaly detection tuned to each machine, remaining useful life estimates where the data supports them, and work requests raised in your maintenance system. Reliability engineers stay in the loop, and the models and code are yours.",
    modules: [
      {
        title: "Data acquisition and quality",
        body: "Vibration, temperature, pressure, flow, motor current and process data from historians, online monitoring systems and handheld routes, with sensor health checks.",
      },
      {
        title: "Condition indicators",
        body: "Engineering features such as vibration levels by frequency band, envelope spectra, kurtosis, bearing and gear indicators, and electrical signatures for motors.",
      },
      {
        title: "Operating context",
        body: "Normalisation by speed, load and operating mode, so a change in the machine is not confused with a change in the process.",
      },
      {
        title: "Anomaly detection",
        body: "Models of normal behaviour for each machine and for peers, flagging deviations early, with the evidence shown to the reliability engineer.",
      },
      {
        title: "Failure mode recognition",
        body: "Classification of recognised patterns, such as imbalance, misalignment, bearing defects, cavitation or gas lock, using labelled history where it exists.",
      },
      {
        title: "Remaining useful life",
        body: "Degradation trending and survival analysis for components with enough history, with uncertainty shown and used only where it is credible.",
      },
      {
        title: "ESP and artificial lift analytics",
        body: "Run-life analysis, motor current, intake pressure and temperature signals, with early warning of trips, wear and operating outside the pump's envelope.",
      },
      {
        title: "Alert triage and feedback",
        body: "Alerts ranked by criticality and confidence, with the engineer's verdict feeding back into the models.",
      },
      {
        title: "Maintenance integration",
        body: "Work requests, inspections and spare parts triggered in the maintenance system, with the evidence attached and the outcome recorded.",
      },
    ],
    diagram: {
      title: "Predictive maintenance for rotating equipment: reference architecture",
      desc: "Vibration, process and electrical data from pumps, compressors and ESPs, together with maintenance history, feed an analytics platform with data quality, condition indicators, operating context, anomaly detection, failure mode recognition and remaining life. Alerts and work requests go to engineers and the maintenance system.",
      leftLabel: "Data",
      platformLabel: "Analytics platform",
      rightLabel: "Consumers",
      platformTitle: "Predictive maintenance platform",
      boundary: "One-way from OT",
      left: [
        ["Condition monitoring", "Vibration, temperature"],
        ["Process, electrical data", "Pressure, flow, current"],
        ["Maintenance history", "Failures, repairs"],
      ],
      modules: [
        ["Data quality", "Sensor health"],
        ["Condition indicators", "Spectral and statistical"],
        ["Anomaly detection", "Machine and peers"],
        ["Failure modes", "Pattern recognition"],
        ["Remaining life", "Trend and survival"],
        ["Alert triage", "Rank, verdict, learn"],
      ],
      strip: "Model registry · feedback loop · audit trail",
      right: [
        ["Reliability engineers", "Evidence, decisions"],
        ["Maintenance system", "Work requests"],
        ["Operations", "Early warnings"],
        ["Management", "Reliability KPIs"],
      ],
    },
    diagramCaption:
      "Reference architecture: signals become indicators, indicators become alerts with evidence, and engineers' verdicts improve the next alert.",
    standards: [
      {
        name: "ISO 13373 and ISO 17359",
        note: "Condition monitoring and diagnostics of machines: vibration practice and general guidelines for programme design.",
      },
      {
        name: "ISO 20816",
        note: "Evaluation of machine vibration severity, used for baseline alert limits alongside learned behaviour.",
      },
      {
        name: "ISO 13381",
        note: "Guidelines for prognostics, which frame how remaining life estimates are produced and reported.",
      },
      {
        name: "ISO 14224",
        note: "Equipment taxonomy and failure data coding, so failure labels are consistent across assets.",
      },
      {
        name: "OPC UA and historian interfaces",
        note: "Read-only access to condition and process data.",
      },
      {
        name: "Model validation practice",
        note: "Back-testing on past failures, false alarm analysis and monitoring in service.",
      },
    ],
    dataModel: [
      {
        entity: "Machine and component",
        holds: "Type, duty, speed, design limits, components and their position in the asset hierarchy.",
      },
      {
        entity: "Sensor and signal",
        holds: "Measurement type, location, sample rate, calibration and health.",
      },
      {
        entity: "Indicator",
        holds: "Name, window, value, operating state and the signals it was derived from.",
      },
      {
        entity: "Anomaly alert",
        holds: "Machine, indicator, deviation, confidence, evidence and status.",
      },
      {
        entity: "Failure event",
        holds: "Mode, component, date, repair, downtime and the data around it.",
      },
      {
        entity: "Life estimate",
        holds: "Component, method, estimate with interval, assumptions and the model version.",
      },
      {
        entity: "Verdict",
        holds: "Engineer's decision on an alert, reason and resulting work.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Condition monitoring vendors and machine makers offer analytics for their own equipment, and are strong choices for critical machines with long histories on one platform.",
      },
      {
        title: "Extend",
        body: "Extend vendor monitoring with fleet-wide analytics across makes, ESP and artificial lift data and integration with your maintenance system, where vendors see only their own machines.",
      },
      {
        title: "Build",
        body: "Build when you have large mixed fleets, unusual equipment, or want models and data to be yours across vendors, with ownership of the alert logic.",
      },
    ],
    security: [
      {
        title: "Read-only integration",
        body: "Monitoring and process data is read into the platform. The platform sends no commands to equipment.",
      },
      {
        title: "Engineer decisions",
        body: "Alerts propose action. Reliability engineers decide, and the decision and reason are recorded.",
      },
      {
        title: "Model governance",
        body: "Models are versioned and tested, with performance monitored and retraining under change control.",
      },
      {
        title: "Data protection",
        body: "Equipment and process data is restricted by asset and by vendor agreements.",
      },
      {
        title: "Network boundary",
        body: "Data crosses a controlled gateway between operational and business networks.",
      },
    ],
    phases: [
      {
        title: "Criticality and data review",
        body: "We pick the machines and failure modes that matter with reliability and operations, and review the data and failure history available.",
      },
      {
        title: "Indicators and baselines",
        body: "Condition indicators and baselines are built, checked against known failures and tuned to reduce false alarms.",
      },
      {
        title: "Anomaly detection in shadow mode",
        body: "Detection runs on live data without raising work, and its alerts are reviewed with engineers.",
      },
      {
        title: "Go live with work integration",
        body: "Alerts reach engineers and the maintenance system, and verdicts feed back.",
      },
      {
        title: "Extend to more machines and life estimates",
        body: "More machine types, ESP analytics and remaining life estimates are added as data allows.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "EnerQuest: equipment and exception views in an upstream pilot", href: "/case-studies/enerquest" },
      { label: "CMMS and maintenance management software", href: "/solutions/cmms-and-maintenance-management-software" },
    ],
    faqs: [
      {
        q: "Do we need a history of failures to start?",
        a: "Not necessarily. Anomaly detection learns each machine's normal behaviour and flags deviations without labelled failures. Failure mode recognition and remaining life improve as labelled history accumulates.",
      },
      {
        q: "How do you keep false alarms down?",
        a: "By normalising for operating conditions, comparing a machine with its peers, ranking alerts by confidence and criticality, and tuning thresholds on the engineers' verdicts.",
      },
      {
        q: "Does this work for ESPs?",
        a: "Yes. ESP analytics use motor current, intake pressure, temperature and vibration where available, to warn of trips and wear, and to track run life across the fleet.",
      },
      {
        q: "Does it connect to our maintenance system?",
        a: "Yes. Confirmed alerts create work requests with the evidence attached, and the repair outcome returns to improve future detection.",
      },
      {
        q: "Who owns the models and code?",
        a: "You do. The models, the code and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "CMMS and maintenance management software", href: "/solutions/cmms-and-maintenance-management-software" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "drilling-optimization-machine-learning",
    vertical: "oil-gas",
    serviceId: "ai-ml",
    seoTitle: "Drilling Optimization with Machine Learning (ROP, NPT) | Deview",
    seoDescription:
      "Drilling optimization with machine learning: ROP models, bit wear, vibration and stick-slip detection, kick and loss early warning and NPT prediction.",
    kicker: "AI/ML engineering · Oil and gas",
    h1: "Drilling optimization with machine learning",
    intro:
      "We build drilling optimization with machine learning for operators and drilling contractors: rate of penetration models, detection of vibration and stick-slip, bit condition tracking, early warning of kicks and losses, offset-well analysis and prediction of non-productive time. The system advises the driller and the engineer from live WITSML data and never controls the rig, and the models and code are yours.",
    modules: [
      {
        title: "Real-time data ingestion",
        body: "WITSML and other streams from rig systems and service companies, validated, depth-aligned and stored with the raw data preserved.",
      },
      {
        title: "Drilling state detection",
        body: "Automatic classification of the rig state, such as drilling, tripping, reaming and connections, so analysis uses the right intervals.",
      },
      {
        title: "Rate of penetration modelling",
        body: "Models that relate weight on bit, rotary speed, flow, formation and bit to ROP, with physics-based terms where they help, benchmarked against offset wells.",
      },
      {
        title: "Parameter advisory",
        body: "Suggested ranges for weight on bit and rotary speed given the section and current conditions, shown to the driller as advice with the reasoning.",
      },
      {
        title: "Vibration and stick-slip detection",
        body: "Recognition of torsional and lateral vibration patterns from surface and downhole data, with alerts and the parameters associated with them.",
      },
      {
        title: "Bit and BHA condition",
        body: "Tracking of bit wear and efficiency through mechanical specific energy and ROP trends, supporting the decision to pull or continue.",
      },
      {
        title: "Kick and loss early warning",
        body: "Detection of flow, pit volume and pressure patterns that indicate kicks or losses earlier than fixed alarms, with alerts for the crew.",
      },
      {
        title: "NPT prediction and lessons",
        body: "Prediction of non-productive time risk from plan, offsets and current operations, linked to the lessons learned library.",
      },
      {
        title: "Offset analysis and post-well review",
        body: "Comparison of performance with offset wells, and post-well analysis that quantifies what the advice would have changed.",
      },
    ],
    diagram: {
      title: "Drilling optimization with machine learning: reference architecture",
      desc: "Rig sensors and service company data stream through WITSML into a drilling analytics platform with state detection, ROP models, a parameter advisory, vibration detection, bit condition, kick and loss warning and NPT prediction. Advice and alerts go to the rig and the office, with no control of the rig.",
      leftLabel: "Rig data",
      platformLabel: "Drilling analytics",
      rightLabel: "Consumers",
      platformTitle: "Drilling optimization platform",
      boundary: "Advisory only",
      left: [
        ["Surface sensors", "WOB, RPM, torque, flow"],
        ["Service company data", "Downhole, mud, directional"],
        ["Plans and offsets", "Well plan, past wells"],
      ],
      modules: [
        ["State detection", "Drilling, tripping, reaming"],
        ["ROP models", "Physics plus ML"],
        ["Parameter advisory", "Ranges and reasons"],
        ["Vibration detection", "Stick-slip, whirl"],
        ["Kick and loss warning", "Flow, volume, pressure"],
        ["NPT prediction", "Risk and lessons"],
      ],
      strip: "Raw data preserved · model registry · audit trail",
      right: [
        ["Driller and crew", "Advice and alerts"],
        ["Drilling engineers", "Analysis, offsets"],
        ["Operations support", "Remote monitoring"],
        ["Well file", "Lessons, results"],
      ],
    },
    diagramCaption:
      "Reference architecture: live rig data becomes advice and warnings for people, with no connection that can change the rig's settings.",
    standards: [
      {
        name: "WITSML 2.0 and ETP",
        note: "Standards for well data and real-time streaming between the rig, service companies and operators.",
      },
      {
        name: "IADC activity coding",
        note: "Common activity codes that let analysis compare operations across wells and rigs.",
      },
      {
        name: "Mechanical specific energy",
        note: "The drilling efficiency measure used as a feature and as an indicator of bit and system performance.",
      },
      {
        name: "Well control practice",
        note: "Industry practice on kick detection and response, which alerts must support and never replace.",
      },
      {
        name: "Model validation and monitoring",
        note: "Testing on held-out wells and monitoring in operation, with documented limits of use.",
      },
      {
        name: "Cybersecurity at the rig",
        note: "Segmentation between rig control and business networks, and secure data export.",
      },
    ],
    dataModel: [
      {
        entity: "Well and run",
        holds: "Well, section, bit run, BHA, depth interval and the plan it belongs to.",
      },
      {
        entity: "Time-series channel",
        holds: "Parameter, unit, source, sample rate, depth or time index and quality.",
      },
      {
        entity: "Rig state",
        holds: "State, start and end, detected or confirmed and the rule used.",
      },
      {
        entity: "Model and prediction",
        holds: "Target, version, inputs, prediction, interval and the data window.",
      },
      {
        entity: "Alert",
        holds: "Type, depth, confidence, evidence, recipient and the response.",
      },
      {
        entity: "Offset benchmark",
        holds: "Offset wells, sections, performance measures and the match criteria.",
      },
      {
        entity: "NPT event and lesson",
        holds: "Cause, duration, links to alerts and lessons, and the planning changes made.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Service companies and drilling optimisation vendors offer real-time analytics and advisory tied to their tools, and are the quickest start for a rig that already uses them.",
      },
      {
        title: "Extend",
        body: "Extend a vendor product with your own models, offset library and the link to your well file and lessons, so that learning belongs to you and not to the service provider.",
      },
      {
        title: "Build",
        body: "Build when you run many wells in a repeatable setting, with a history of data and a team that can act on advice, and when you want models and learning to be yours.",
      },
    ],
    security: [
      {
        title: "Advisory only",
        body: "The system sends no commands to rig control. Advice is shown to people who decide.",
      },
      {
        title: "Rig network boundary",
        body: "Data leaves the rig through a controlled gateway, and no inbound access to control systems is created.",
      },
      {
        title: "Model governance",
        body: "Models are validated on held-out wells, versioned, monitored in use and retired when they drift.",
      },
      {
        title: "Data ownership",
        body: "Rights to data and models are agreed with operators and service companies, and tracked.",
      },
      {
        title: "Audit trail",
        body: "Advice, alerts and the response are recorded for post-well review and incident investigation.",
      },
    ],
    phases: [
      {
        title: "Data and objectives review",
        body: "We review the rig data, offset library and the decisions to be improved with drilling engineers and contractors.",
      },
      {
        title: "Offline models on past wells",
        body: "Models are built and tested on past wells, and their advice is compared with what was done and what resulted.",
      },
      {
        title: "Live monitoring mode",
        body: "The system runs on a live well with advice shown to engineers in the office, not yet to the driller.",
      },
      {
        title: "Advice to the rig",
        body: "Advice and alerts go to the driller's screen, with feedback from the crew shaping what is shown.",
      },
      {
        title: "Extend across the programme",
        body: "More rigs and models follow, and post-well reviews quantify the effect.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Drilling and well operations reporting", href: "/solutions/drilling-and-well-operations-reporting" },
    ],
    faqs: [
      {
        q: "Will the system control the drilling parameters?",
        a: "No. It gives advice and alerts to the driller and the engineers. Control of the rig stays with the rig's own systems and the crew.",
      },
      {
        q: "What data do we need?",
        a: "Surface drilling parameters in real time, depth, mud and pit data, and ideally downhole data and the well plan. Offset wells with history are valuable for benchmarking.",
      },
      {
        q: "Can it warn of kicks and losses earlier than the standard alarms?",
        a: "It can detect patterns in flow, volume and pressure that precede fixed alarms, and raise an early warning. It supports the crew's well control practice and does not replace it.",
      },
      {
        q: "How do you know the advice is any good?",
        a: "By testing models on past wells, running in monitoring mode before advice reaches the rig, and measuring the effect in post-well reviews.",
      },
      {
        q: "Who owns the models and the data?",
        a: "You do, subject to your agreements with service companies. The models, the code and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Drilling and well operations reporting", href: "/solutions/drilling-and-well-operations-reporting" },
      { label: "Production forecasting with machine learning", href: "/solutions/production-forecasting-machine-learning" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "ai-well-log-and-seismic-interpretation",
    vertical: "oil-gas",
    serviceId: "ai-ml",
    seoTitle: "AI for Well Log and Seismic Interpretation | Deview",
    seoDescription:
      "AI for well log and seismic interpretation: log quality control, facies and missing-log prediction, fault and horizon detection, uncertainty and geoscientist review.",
    kicker: "AI/ML engineering · Oil and gas",
    h1: "AI for well log and seismic interpretation",
    intro:
      "We build AI for well log and seismic interpretation for operators, national oil companies and regulators: automated quality control of logs, facies classification, prediction of missing curves, detection of faults and horizons in seismic volumes, and consistent interpretation across large data sets. Geoscientists review and correct the output, and the models, the training data and the code are yours.",
    modules: [
      {
        title: "Log data preparation",
        body: "Standardisation of curve names and units, depth reference checks and merging of runs into continuous logs with the history of every change.",
      },
      {
        title: "Log quality control",
        body: "Detection of spikes, flat lines, depth shifts, calibration problems and bad hole effects, with flags and suggested corrections for a petrophysicist to approve.",
      },
      {
        title: "Missing log prediction",
        body: "Estimation of missing or damaged curves, such as sonic or density, from other logs and offset wells, labelled as predicted and with uncertainty.",
      },
      {
        title: "Facies and lithology classification",
        body: "Supervised and semi-supervised classification of facies from logs and cores, with confidence and the training wells that support each result.",
      },
      {
        title: "Well correlation and tops picking",
        body: "Suggested formation tops and correlations across wells, adjustable by the geologist, with consistent definitions across a field.",
      },
      {
        title: "Seismic enhancement",
        body: "Noise attenuation and resolution enhancement models applied to seismic volumes, compared with conventional processing on test data.",
      },
      {
        title: "Fault and horizon detection",
        body: "Segmentation models for faults, horizons and salt bodies, with probability volumes interpreters can threshold and edit.",
      },
      {
        title: "Uncertainty and QC",
        body: "Confidence and disagreement measures for each prediction, and tests on blind wells and held-out areas before results are used.",
      },
      {
        title: "Interpretation integration",
        body: "Results exchanged with interpretation applications and the subsurface data platform using open formats and standard interfaces.",
      },
    ],
    diagram: {
      title: "AI for well log and seismic interpretation: reference architecture",
      desc: "Well logs, cores, seismic volumes and existing interpretations from the subsurface data platform feed an interpretation AI platform with preparation, log quality control, curve prediction, facies classification, correlation, seismic enhancement and fault and horizon detection. Results return to interpretation tools and the data platform after geoscientist review.",
      leftLabel: "Subsurface data",
      platformLabel: "Interpretation AI",
      rightLabel: "Consumers",
      platformTitle: "Interpretation AI platform",
      left: [
        ["Well logs and cores", "LAS, DLIS, lab data"],
        ["Seismic volumes", "SEG-Y, attributes"],
        ["Existing interpretations", "Tops, faults, horizons"],
      ],
      modules: [
        ["Log preparation", "Names, units, depth"],
        ["Log QC", "Flags, corrections"],
        ["Curve prediction", "Missing logs"],
        ["Facies and tops", "Classes, correlation"],
        ["Seismic models", "Denoise, faults, horizons"],
        ["Uncertainty", "Confidence, blind tests"],
      ],
      strip: "Training data lineage · geoscientist review · audit trail",
      right: [
        ["Geoscientists", "Review and edit"],
        ["Interpretation tools", "Open-format exchange"],
        ["Subsurface data platform", "Versioned results"],
        ["Asset teams", "Models, maps"],
      ],
    },
    diagramCaption:
      "Reference architecture: models propose, geoscientists decide, and every result carries its confidence and the data it was trained on.",
    standards: [
      {
        name: "OSDU Data Platform",
        note: "Schemas and services for well logs, seismic and interpretations, used for reading input and publishing results.",
      },
      {
        name: "LAS, DLIS and WITSML",
        note: "Well log and well data formats read and written by the pipeline.",
      },
      {
        name: "SEG-Y and open seismic formats",
        note: "Seismic data formats and chunked cloud formats for large volumes.",
      },
      {
        name: "RESQML",
        note: "Energistics standard for exchanging interpreted surfaces and models.",
      },
      {
        name: "Machine learning validation practice",
        note: "Spatial and well-based cross-validation, blind tests and uncertainty quantification suited to geoscience data.",
      },
      {
        name: "Data rights and licensing",
        note: "Terms on use of seismic and well data for training, which the pipeline tracks per dataset.",
      },
    ],
    dataModel: [
      {
        entity: "Well and log",
        holds: "Well, run, curve, unit, depth reference and the processing history.",
      },
      {
        entity: "QC flag",
        holds: "Curve, interval, issue, severity, suggestion and the reviewer's decision.",
      },
      {
        entity: "Prediction",
        holds: "Target, model, input data, value or class, confidence and the training set used.",
      },
      {
        entity: "Seismic volume and attribute",
        holds: "Survey, geometry, processing version, derived volumes and location in storage.",
      },
      {
        entity: "Interpretation object",
        holds: "Horizon, fault or body, source (manual or model), version and approval.",
      },
      {
        entity: "Training dataset",
        holds: "Wells or volumes included, labels, rights and the date frozen.",
      },
      {
        entity: "Model version",
        holds: "Architecture, training run, test results by blind well and area, and approval.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Interpretation software vendors and service companies now include machine learning tools, and they are the right start for teams already working in those environments.",
      },
      {
        title: "Extend",
        body: "Extend vendor tools with models trained on your own basins and interpretations, and with automated QC across the whole well population.",
      },
      {
        title: "Build",
        body: "Build when you hold a large legacy data set that you want interpreted consistently, a basin with specific geology, or a data platform into which results must be written as governed objects.",
      },
    ],
    security: [
      {
        title: "Geoscientist accountability",
        body: "Predicted curves, picks and interpretations are marked as predictions and become interpretation only when a geoscientist approves them.",
      },
      {
        title: "Data rights tracking",
        body: "Training on partner or licensed data follows the contracts, and lineage records which data trained which model.",
      },
      {
        title: "Model governance",
        body: "Models are versioned, tested on blind wells and areas and monitored, with limits of use documented.",
      },
      {
        title: "Access control",
        body: "Entitlements follow licence and partner, and results inherit the access of their inputs.",
      },
      {
        title: "Reproducibility",
        body: "A prediction can be reproduced from the model version and the input data.",
      },
    ],
    phases: [
      {
        title: "Data and objective review",
        body: "We review the data, existing interpretations and the geoscience decisions the AI should support, with geologists, petrophysicists and data managers.",
      },
      {
        title: "Data preparation and baselines",
        body: "Logs and seismic are standardised, and baseline methods and metrics are set so models can be judged.",
      },
      {
        title: "Model development and blind testing",
        body: "Models are trained on part of the data and tested on blind wells and areas, with results reviewed by geoscientists.",
      },
      {
        title: "Assisted interpretation",
        body: "Geoscientists use the outputs as suggestions in a project, and their corrections are captured.",
      },
      {
        title: "Integrate and scale",
        body: "Results flow to interpretation tools and the data platform, and the models extend to more of the data.",
      },
    ],
    proof: [
      { label: "EnerQuest: subsurface review views in an upstream pilot", href: "/case-studies/enerquest" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
    ],
    faqs: [
      {
        q: "Can AI replace the geoscientist's interpretation?",
        a: "No. It speeds up the routine parts, such as quality control, first-pass picks and consistent classification, and gives interpreters more time for judgement. Results are suggestions until a geoscientist approves them.",
      },
      {
        q: "How do you test whether a model is trustworthy?",
        a: "By training on some wells or areas and testing on others it has never seen, comparing with interpreters' work, and showing confidence with each result.",
      },
      {
        q: "Does it work for our basin?",
        a: "Models trained on generic data often need adaptation. We train and test on your own data, and show where a model should not be used.",
      },
      {
        q: "How do results get back into our interpretation tools?",
        a: "Through open formats and standard interfaces, such as OSDU and RESQML, and the interfaces the interpretation applications offer.",
      },
      {
        q: "Who owns the models and the training data?",
        a: "You do, subject to the licences on the underlying data. The models, the code and the labels stay yours.",
      },
    ],
    assetId: "subsurface-data-readiness",
    related: [
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
      { label: "Production forecasting with machine learning", href: "/solutions/production-forecasting-machine-learning" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "computer-vision-quality-inspection",
    vertical: "manufacturing",
    serviceId: "ai-ml",
    seoTitle: "Computer Vision Quality Inspection for Production Lines | Deview",
    seoDescription:
      "Computer vision quality inspection for production lines: defect detection and classification, edge inference, PLC reject signals, traceability and active learning.",
    kicker: "AI/ML engineering · Manufacturing",
    h1: "Computer vision quality inspection for production lines",
    intro:
      "We build computer vision quality inspection for production lines: defect detection and classification on images from industrial cameras, inference at the edge fast enough for line speed, reject signals to the PLC, images and results linked to the lot and serial number, and a review station where people confirm doubtful cases and teach the system. We build the software around your cameras and optics, and you own the models and code.",
    modules: [
      {
        title: "Image acquisition integration",
        body: "Connection to industrial cameras and frame grabbers, triggers from line sensors, lighting control signals and consistent capture settings.",
      },
      {
        title: "Defect detection and classification",
        body: "Models that find and classify defects such as scratches, dents, missing parts, contamination and misalignment, with a score and location for each.",
      },
      {
        title: "Anomaly detection for rare defects",
        body: "Models trained on good parts that flag anything unusual, for cases where defect examples are scarce or new defects appear.",
      },
      {
        title: "Measurement and verification",
        body: "Dimensional checks, presence and orientation checks, and reading of codes and text, as classical vision steps alongside the learned models.",
      },
      {
        title: "Edge inference",
        body: "Models optimised and run on industrial computers or accelerators close to the line, meeting the cycle time with margin.",
      },
      {
        title: "PLC and reject integration",
        body: "Pass and fail results returned to the PLC over OPC UA or digital I/O in time to divert the part, with handshakes and fail-safe behaviour.",
      },
      {
        title: "Traceability",
        body: "Every image and decision stored against the order, lot, serial number and machine, so a customer complaint can be traced to the images taken.",
      },
      {
        title: "Review station and active learning",
        body: "A screen where inspectors confirm or correct uncertain results, with those corrections feeding the next training round.",
      },
      {
        title: "Monitoring and model management",
        body: "Tracking of reject rates, score distributions and drift, controlled model releases and rollback.",
      },
    ],
    diagram: {
      title: "Computer vision quality inspection: reference architecture",
      desc: "Cameras, lighting and line triggers feed an edge inspection system with image acquisition, defect detection, anomaly detection, measurement, edge inference and PLC integration. Results go to the PLC, the MES and quality system, a review station and a training pipeline.",
      leftLabel: "On the line",
      platformLabel: "Inspection system",
      rightLabel: "Consumers",
      platformTitle: "Vision inspection system",
      boundary: "Line speed",
      left: [
        ["Industrial cameras", "GigE Vision, triggers"],
        ["Lighting and optics", "Controlled capture"],
        ["Line sensors and PLC", "Part present, position"],
      ],
      modules: [
        ["Image acquisition", "Trigger, capture, store"],
        ["Defect detection", "Classify and locate"],
        ["Anomaly detection", "Trained on good parts"],
        ["Measurement", "Dimensions, presence"],
        ["Edge inference", "Meets cycle time"],
        ["PLC integration", "Pass or fail signal"],
      ],
      strip: "Images tied to lot and serial · model versions · audit trail",
      right: [
        ["PLC and reject gate", "Divert part"],
        ["MES and quality system", "Results, NCR"],
        ["Review station", "Confirm, correct"],
        ["Training pipeline", "Labels, new models"],
      ],
    },
    diagramCaption:
      "Reference architecture: images are judged at line speed, results reach the PLC and the quality system, and doubtful cases come back as training data.",
    standards: [
      {
        name: "GigE Vision, GenICam and USB3 Vision",
        note: "Standards for connecting and configuring industrial cameras in a vendor-neutral way.",
      },
      {
        name: "OPC UA and PLC interfaces",
        note: "Result delivery and handshakes with controllers, plus digital I/O for hard real-time reject signals.",
      },
      {
        name: "ONNX and edge runtimes",
        note: "Portable model formats and optimised inference runtimes for industrial computers and accelerators.",
      },
      {
        name: "Quality system requirements",
        note: "Traceability, record retention and change control under ISO 9001 and sector standards, with validation for regulated products.",
      },
      {
        name: "Measurement system analysis",
        note: "Gauge repeatability and reproducibility practice, applied to the inspection system's agreement with human inspectors.",
      },
      {
        name: "Machine and functional safety",
        note: "Machine safety rules that govern any interaction with moving equipment, handled by the machine's safety system and not by the vision software.",
      },
    ],
    dataModel: [
      {
        entity: "Inspection station and recipe",
        holds: "Camera settings, lighting, models in use, thresholds and the product it applies to.",
      },
      {
        entity: "Image",
        holds: "File, time, station, order, lot, serial number and capture parameters.",
      },
      {
        entity: "Detection",
        holds: "Class, score, location, size and the model version that produced it.",
      },
      {
        entity: "Inspection result",
        holds: "Pass, fail or review, the rules applied and the signal sent to the PLC.",
      },
      {
        entity: "Review and label",
        holds: "Inspector's decision, corrected label and time taken.",
      },
      {
        entity: "Model version",
        holds: "Training data, evaluation by defect class, release date and rollback state.",
      },
      {
        entity: "Drift metric",
        holds: "Score distribution, reject rate and image statistics over time.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Machine vision vendors sell complete inspection systems and software for common tasks, and are the quickest route for standard measurement and presence checks.",
      },
      {
        title: "Extend",
        body: "Extend a vendor system with learned models for difficult defects, traceability to your MES and a review station that improves models over time.",
      },
      {
        title: "Build",
        body: "Build when defects are subtle and product-specific, when many lines and plants need a consistent system, or when you want the models, the images and the learning loop to be yours.",
      },
    ],
    security: [
      {
        title: "Fail-safe behaviour",
        body: "If inspection is unavailable or uncertain, the line follows a defined safe default, such as rejecting or diverting for manual inspection.",
      },
      {
        title: "Controlled model changes",
        body: "New models are tested offline, then in shadow mode, and released with approval and rollback.",
      },
      {
        title: "Image and result integrity",
        body: "Images and results are stored unaltered and linked to the part, with retention by product and customer requirement.",
      },
      {
        title: "Network separation",
        body: "The inspection system sits in the line's network zone with controlled connections to the business network.",
      },
      {
        title: "Role-based access",
        body: "Only authorised staff can change recipes, thresholds and models, and every change is logged.",
      },
    ],
    phases: [
      {
        title: "Defect and line study",
        body: "We collect samples of good and defective parts, measure cycle time and conditions and agree what must be detected and what a false reject costs.",
      },
      {
        title: "Imaging design and data collection",
        body: "Camera, optics and lighting are chosen with the supplier, and a labelled image set is collected on the real line.",
      },
      {
        title: "Model development and offline test",
        body: "Models are trained and tested against inspectors' decisions, with results by defect class.",
      },
      {
        title: "Shadow mode on the line",
        body: "The system inspects live parts without rejecting, and its results are compared with the current inspection.",
      },
      {
        title: "Go live and improve",
        body: "Reject signals are switched on, the review station is used daily, and models are retrained from its corrections.",
      },
    ],
    proof: [
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "AgroPlatforma: multimodal diagnosis from photographs", href: "/case-studies/agroplatforma" },
      { label: "Quality management system for manufacturers", href: "/solutions/quality-management-system-for-manufacturers" },
    ],
    faqs: [
      {
        q: "Do we need many defect images to start?",
        a: "Not always. Anomaly detection learns from good parts and flags anything unusual, which suits rare or new defects. Supervised classification of known defects improves as labelled examples accumulate through the review station.",
      },
      {
        q: "Is it fast enough for our line?",
        a: "Models are optimised and run at the edge to meet the cycle time with margin, and we test it on your line with the real parts and speed before it can reject anything.",
      },
      {
        q: "Do you supply cameras and lighting?",
        a: "No. We build the software and integration. Cameras, optics and lighting come from vendors and integrators you choose, and good imaging matters as much as the model, so we advise on requirements.",
      },
      {
        q: "How does it connect to the PLC?",
        a: "Over OPC UA or digital signals with a defined handshake and a fail-safe default, so the line behaves predictably if inspection is slow or down.",
      },
      {
        q: "Who owns the models and images?",
        a: "You do. The models, the code, the images and the labels stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "Quality management system for manufacturers", href: "/solutions/quality-management-system-for-manufacturers" },
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Edge gateway and embedded software", href: "/solutions/edge-gateway-and-embedded-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "demand-forecasting-for-manufacturers",
    vertical: "manufacturing",
    serviceId: "ai-ml",
    seoTitle: "Demand Forecasting and S&OP Analytics for Manufacturers | Deview",
    seoDescription:
      "Demand forecasting and S&OP analytics for manufacturers: statistical and ML forecasts, reconciliation, intermittent demand, forecast value added and ERP links.",
    kicker: "AI/ML engineering · Manufacturing",
    h1: "Demand forecasting and S&OP analytics for manufacturers",
    intro:
      "We build demand forecasting and S&OP analytics for manufacturers: statistical and machine learning forecasts by product, customer and region, reconciliation across the hierarchy, special handling of intermittent and new-product demand, and a process for planners to review and override with measured forecast value added. Forecasts flow into planning and the ERP, and the models and code are yours.",
    modules: [
      {
        title: "Demand data preparation",
        body: "History cleaned of stock-outs, returns, one-off orders and calendar effects, with the actual demand reconstructed from orders and shipments.",
      },
      {
        title: "Statistical baseline",
        body: "Exponential smoothing, ARIMA and related methods with seasonality and trend, as a transparent baseline every other method must beat.",
      },
      {
        title: "Machine learning models",
        body: "Gradient boosting and neural sequence models that use price, promotions, weather, economic indicators and customer signals as drivers.",
      },
      {
        title: "Intermittent demand",
        body: "Methods for slow-moving and lumpy items, such as Croston-type models and probabilistic approaches, that give usable forecasts for spare parts and long-tail products.",
      },
      {
        title: "New product forecasting",
        body: "Forecasts for products without history from analogues, attributes and launch plans, adjusted as early sales arrive.",
      },
      {
        title: "Hierarchical reconciliation",
        body: "Forecasts at product, family, customer and region levels reconciled so they add up and use the best information at each level.",
      },
      {
        title: "Forecast accuracy and value added",
        body: "Error and bias measures by segment and horizon, and a measure of whether each planner override improved or worsened the forecast.",
      },
      {
        title: "Consensus and S&OP workflow",
        body: "A workspace where sales, marketing, planning and finance review forecasts, propose changes with reasons and agree one number.",
      },
      {
        title: "Inventory and supply links",
        body: "Forecast distributions feeding safety stock, production planning and procurement in the ERP and planning tools.",
      },
    ],
    diagram: {
      title: "Demand forecasting and S&OP analytics: reference architecture",
      desc: "Orders, shipments, prices, promotions and external signals feed a forecasting platform with data preparation, statistical and machine learning forecasts, intermittent demand handling, new product forecasting, reconciliation, accuracy tracking and an S&OP workflow. Forecasts go to planning, inventory, procurement and finance.",
      leftLabel: "Data",
      platformLabel: "Forecasting platform",
      rightLabel: "Consumers",
      platformTitle: "Demand forecasting platform",
      left: [
        ["Orders and shipments", "ERP, history"],
        ["Prices and promotions", "Plans, events"],
        ["External signals", "Market, weather, indices"],
      ],
      modules: [
        ["Data preparation", "Clean, reconstruct demand"],
        ["Baseline and ML", "Statistical plus learned"],
        ["Intermittent and new", "Slow movers, launches"],
        ["Reconciliation", "Across the hierarchy"],
        ["Accuracy and FVA", "Error, bias, overrides"],
        ["S&OP workspace", "Review, consensus"],
      ],
      strip: "Model registry · override history · audit trail",
      right: [
        ["Production planning", "Master schedule"],
        ["Inventory and procurement", "Safety stock, orders"],
        ["Sales and finance", "Consensus forecast"],
        ["ERP", "Demand plan"],
      ],
    },
    diagramCaption:
      "Reference architecture: a transparent baseline, learned models on top, and a measured process for people to improve the number.",
    standards: [
      {
        name: "Forecast accuracy metrics",
        note: "WAPE, bias, MASE and probabilistic scores, chosen for each use, and reported by segment and horizon.",
      },
      {
        name: "Hierarchical forecast reconciliation",
        note: "Methods such as optimal reconciliation that make forecasts coherent across levels of a hierarchy.",
      },
      {
        name: "S&OP and IBP practice",
        note: "Sales and operations planning cycles, roles and decision rights that the workflow supports.",
      },
      {
        name: "ISA-95 and ERP interfaces",
        note: "Exchange of demand plans with planning, MES and ERP systems.",
      },
      {
        name: "Model validation practice",
        note: "Rolling-origin backtests and monitoring that show how a model performs on genuinely unseen periods.",
      },
      {
        name: "Data protection and confidentiality",
        note: "Controls on customer and pricing data used as drivers.",
      },
    ],
    dataModel: [
      {
        entity: "Product and customer hierarchy",
        holds: "Items, families, customers, regions and the relationships that define aggregation.",
      },
      {
        entity: "Demand series",
        holds: "History by item, customer and period, with adjustments and the reason for each.",
      },
      {
        entity: "Driver",
        holds: "Price, promotion, event or external indicator, its time series and its source.",
      },
      {
        entity: "Forecast",
        holds: "Method and version, horizon, point and probabilistic values, and the data cut-off.",
      },
      {
        entity: "Override",
        holds: "Original and adjusted value, reason, author and later accuracy.",
      },
      {
        entity: "Accuracy record",
        holds: "Forecast, actual, error measures and segment.",
      },
      {
        entity: "Consensus plan",
        holds: "Agreed numbers per cycle, approvers and changes from the previous cycle.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Demand planning products and ERP planning modules are well established, and the right start for companies with standard processes and a planning team trained in them.",
      },
      {
        title: "Extend",
        body: "Extend a planning tool with machine learning models, external drivers and accuracy tracking, publishing the better forecast into the tool that planners already use.",
      },
      {
        title: "Build",
        body: "Build when demand depends on unusual drivers, when you want to run your own models across thousands of items, or when forecasts must be embedded in your own planning and ordering systems.",
      },
    ],
    security: [
      {
        title: "Governed models",
        body: "Models are versioned and tested before they replace a baseline, with performance monitored in use.",
      },
      {
        title: "Override accountability",
        body: "Every override records the author and the reason, and its value is measured later.",
      },
      {
        title: "Confidential commercial data",
        body: "Customer, price and promotion data is restricted by role and customer.",
      },
      {
        title: "Reproducibility",
        body: "A forecast can be reproduced from its data cut-off and model version.",
      },
      {
        title: "Integration integrity",
        body: "Publication of the consensus plan to the ERP is controlled and idempotent.",
      },
    ],
    phases: [
      {
        title: "Planning process and data review",
        body: "We review how forecasts are made and used today and what history, drivers and hierarchy are available, with planning, sales and finance.",
      },
      {
        title: "Baseline and accuracy framework",
        body: "A statistical baseline and a rolling backtest are built first, so every later model is judged against the same standard.",
      },
      {
        title: "Machine learning and special cases",
        body: "Learned models, intermittent demand and new product methods are developed and compared with the baseline by segment.",
      },
      {
        title: "Run in parallel for a cycle",
        body: "Planners see the new forecast beside their own for a planning cycle, and the differences are reviewed.",
      },
      {
        title: "Integrate and run the S&OP cycle",
        body: "The consensus workflow goes live, forecasts feed the ERP and planning, and accuracy and value added are reported.",
      },
    ],
    proof: [
      { label: "Fizkultura: pipeline reconciling several sources and drafting AI commentary", href: "/case-studies/fizkultura" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Production planning and scheduling software", href: "/solutions/production-planning-and-scheduling-software" },
    ],
    faqs: [
      {
        q: "Will machine learning beat our current forecast?",
        a: "Sometimes, and not for every item. We build a transparent baseline and measure every method against it by segment, so machine learning is used where it adds accuracy and nowhere else.",
      },
      {
        q: "How do you forecast slow-moving and spare parts?",
        a: "With methods designed for intermittent demand, which forecast the probability and size of demand rather than a smooth line, and feed those distributions into inventory decisions.",
      },
      {
        q: "What about products that have just launched?",
        a: "New products are forecast from analogues and attributes, and the forecast adapts as early sales come in. The launch plan and judgement of the team are inputs, not afterthoughts.",
      },
      {
        q: "Do planners still override the forecast?",
        a: "Yes. Overrides are expected and tracked. The system measures whether they improved the forecast, so effort goes where human judgement adds value.",
      },
      {
        q: "Who owns the models and the code?",
        a: "You do. The models, the code and the data stay yours.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "Production planning and scheduling software", href: "/solutions/production-planning-and-scheduling-software" },
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "crop-disease-detection-and-yield-prediction",
    vertical: "agriculture",
    serviceId: "ai-ml",
    seoTitle: "Crop Disease Detection and Yield Prediction with AI | Deview",
    seoDescription:
      "Crop disease detection and yield prediction with AI: photo diagnosis, severity scoring, satellite and weather models, field validation and offline mobile inference.",
    kicker: "AI/ML engineering · Agriculture",
    h1: "Crop disease detection and yield prediction",
    intro:
      "We build crop disease detection and yield prediction for agricultural enterprises: diagnosis from field photographs with severity scoring, yield models that combine satellite imagery, weather, soil and management data, validation against agronomists' judgement and harvest results, and inference that runs on a phone without a signal. Advisers confirm diagnoses, and the models and code are yours.",
    modules: [
      {
        title: "Image capture and quality guidance",
        body: "In-app guidance for taking useful photographs: framing, lighting, scale and multiple views, with rejection of unusable images before analysis.",
      },
      {
        title: "Disease and pest diagnosis",
        body: "Classification of diseases, pests, nutrient deficiencies and weed pressure from photographs and context such as crop, growth stage and weather.",
      },
      {
        title: "Severity and extent scoring",
        body: "Estimates of how much of the plant or canopy is affected, to support decisions on treatment thresholds.",
      },
      {
        title: "Confidence and differential diagnosis",
        body: "Ranked possibilities with confidence, so the adviser sees alternatives and when the system is unsure.",
      },
      {
        title: "Offline inference",
        body: "Compact models that run on the phone in the field, with fuller analysis in the cloud when coverage returns.",
      },
      {
        title: "Satellite and weather features",
        body: "Vegetation indices from open satellite imagery, weather history and forecasts, and soil data, processed per field and season.",
      },
      {
        title: "Yield prediction",
        body: "Field-level yield models trained on past harvests and updated through the season, with ranges that narrow as data arrives.",
      },
      {
        title: "Field validation and feedback",
        body: "Comparison of predictions with adviser verdicts and harvest outcomes, with the corrections used for retraining.",
      },
      {
        title: "Recommendation links",
        body: "Diagnoses linked to the product catalogue and registration rules, so a confirmed diagnosis becomes a compliant recommendation and quote.",
      },
    ],
    diagram: {
      title: "Crop disease detection and yield prediction: reference architecture",
      desc: "Field photographs, adviser notes, satellite imagery, weather, soil and harvest data feed an agronomy AI platform with image quality checks, diagnosis, severity scoring, offline inference, yield prediction and a validation loop. Results go to advisers, growers, the product catalogue and farm management systems.",
      leftLabel: "Data",
      platformLabel: "Agronomy AI",
      rightLabel: "Consumers",
      platformTitle: "Agronomy AI platform",
      left: [
        ["Field photographs", "Phone, drone, camera"],
        ["Satellite and weather", "Imagery, forecast, soil"],
        ["Harvest and field records", "Yield, treatments"],
      ],
      modules: [
        ["Image quality", "Guidance, rejection"],
        ["Diagnosis", "Disease, pest, deficiency"],
        ["Severity scoring", "Extent, threshold"],
        ["Offline inference", "On-device models"],
        ["Yield prediction", "Season updates, ranges"],
        ["Validation loop", "Verdicts, outcomes"],
      ],
      strip: "Model registry · regional validation · audit trail",
      right: [
        ["Advisers", "Diagnosis to confirm"],
        ["Growers", "Advice, forecasts"],
        ["Product catalogue", "Registered treatments"],
        ["Farm management", "Field records"],
      ],
    },
    diagramCaption:
      "Reference architecture: photos and field data become suggestions that advisers confirm, and the outcomes teach the models.",
    standards: [
      {
        name: "BBCH growth stage scale",
        note: "Standard description of crop development stages, used as context for diagnosis and treatment timing.",
      },
      {
        name: "Open satellite data",
        note: "Freely available multispectral imagery such as Sentinel-2, used to derive vegetation indices for fields.",
      },
      {
        name: "Registration and label rules",
        note: "National registers that decide which treatments can be recommended for which crops and rates.",
      },
      {
        name: "Model evaluation practice",
        note: "Evaluation across regions, seasons and crop varieties, with calibration of confidence.",
      },
      {
        name: "ONNX and mobile inference runtimes",
        note: "Portable models and runtimes for on-device inference.",
      },
      {
        name: "Data protection and data ownership",
        note: "Rules for farmer data and agreements on how field data may be used and shared.",
      },
    ],
    dataModel: [
      {
        entity: "Field and crop",
        holds: "Boundary, crop, variety, sowing date, growth stage and management history.",
      },
      {
        entity: "Photograph",
        holds: "Image, location, time, capture guidance result and the observation it belongs to.",
      },
      {
        entity: "Diagnosis",
        holds: "Ranked classes with confidence, severity, model version and the adviser's verdict.",
      },
      {
        entity: "Satellite and weather series",
        holds: "Indices and weather values by field and date.",
      },
      {
        entity: "Yield prediction",
        holds: "Field, date of prediction, estimate with range and model version.",
      },
      {
        entity: "Harvest outcome",
        holds: "Actual yield by field, quality and conditions.",
      },
      {
        entity: "Validation record",
        holds: "Prediction, outcome, error and segment (region, crop, season).",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Several crop diagnosis apps and satellite yield services exist, and are a quick start for common crops and regions.",
      },
      {
        title: "Extend",
        body: "Extend a general service with your own images, regional validation and the link to your catalogue and quotes, so advice matches what you sell and what is registered.",
      },
      {
        title: "Build",
        body: "Build when your crops, regions or varieties are poorly covered by general models, when diagnosis is part of your service to growers, or when images and outcomes should stay your own asset.",
      },
    ],
    security: [
      {
        title: "Human confirmation",
        body: "A diagnosis is a suggestion. An adviser confirms or corrects it before a treatment is recommended.",
      },
      {
        title: "Regional validation",
        body: "Models are validated per region and crop, and shown only where tested, with confidence displayed.",
      },
      {
        title: "Grower data protection",
        body: "Images and field data are used as agreed, with consent recorded and withdrawal respected.",
      },
      {
        title: "Model governance",
        body: "Models are versioned and monitored for drift, and retrained under change control.",
      },
      {
        title: "Audit trail",
        body: "Diagnoses, verdicts and recommendations are stored with the images and model versions.",
      },
    ],
    phases: [
      {
        title: "Crop and decision review",
        body: "We agree the crops, problems and decisions to support, and review the images, field records and outcomes already available.",
      },
      {
        title: "Data collection and labelling",
        body: "Photographs are collected with advisers across regions and seasons and labelled by experts, with disagreement recorded.",
      },
      {
        title: "Model development and field test",
        body: "Models are trained and tested on unseen fields and regions, then trialled by advisers in the field.",
      },
      {
        title: "Integrate with advice and quotes",
        body: "Confirmed diagnoses feed recommendations from the catalogue, with registration checks.",
      },
      {
        title: "Extend crops and add yield models",
        body: "More crops and regions are added through the season cycle, with yield models validated against harvests.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: field diagnostics and quotation drafting", href: "/case-studies/agroplatforma" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Agronomist and field scouting app", href: "/solutions/agronomist-field-app" },
    ],
    faqs: [
      {
        q: "How accurate is diagnosis from a photograph?",
        a: "It depends on the crop, the problem and the photograph. We measure accuracy on your crops, regions and seasons, show confidence on each result and keep an adviser in the loop for every recommendation.",
      },
      {
        q: "Does it work without a mobile signal?",
        a: "Yes. A compact model runs on the phone in the field. A fuller analysis runs in the cloud when the phone is back in coverage.",
      },
      {
        q: "How do you predict yield?",
        a: "From satellite vegetation indices, weather, soil and management data for each field, trained on past harvests and updated through the season, with a range that narrows as the season progresses.",
      },
      {
        q: "Can a diagnosis lead directly to a product recommendation?",
        a: "Yes, through the catalogue. Recommendations are limited to registered products for the crop and rate, and an adviser approves the quote, as in the AgroPlatforma project.",
      },
      {
        q: "Who owns the models and the data?",
        a: "You do. The models, the images, the labels and the code stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Agronomist and field scouting app", href: "/solutions/agronomist-field-app" },
      { label: "Precision agriculture sensor network", href: "/solutions/precision-agriculture-sensor-network" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
];
