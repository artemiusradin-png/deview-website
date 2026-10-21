import type { SolutionPage } from "./types";

export const IOT_PAGES: SolutionPage[] = [
  {
    slug: "iot-platform-development",
    vertical: "cross-industry",
    serviceId: "product-engineering",
    seoTitle: "IoT Platform Development: Device Management and Telemetry | Deview",
    seoDescription:
      "IoT platform development: device registry and provisioning, secure connectivity, telemetry, device twins, rules and alerts, OTA updates and enterprise integration.",
    kicker: "Digital product engineering · IoT",
    h1: "IoT platform development",
    intro:
      "We develop IoT platforms for companies that need to manage fleets of connected devices and use their data: a device registry and secure provisioning, connectivity over MQTT and other protocols, telemetry storage, device twins, rules and alerts, orchestration of over-the-air updates and APIs into your enterprise systems. We build the software and integration around your devices, and you own the code.",
    modules: [
      {
        title: "Device registry",
        body: "Every device with its identity, type, firmware version, owner, location, tags and lifecycle state, searchable and linked to customers and assets.",
      },
      {
        title: "Secure provisioning",
        body: "Onboarding of devices with certificates or pre-shared keys, bulk and zero-touch enrolment, and revocation when a device is lost or retired.",
      },
      {
        title: "Connectivity and protocols",
        body: "Brokers and gateways for MQTT, HTTP, CoAP and LwM2M, with authentication per device, topic-level permissions and support for constrained and intermittent links.",
      },
      {
        title: "Telemetry ingestion and storage",
        body: "Validation and decoding of messages, time-series storage at the right resolution and retention, and replay of data after an outage.",
      },
      {
        title: "Device twins",
        body: "A synchronised representation of each device's reported and desired state, so applications can read and set configuration whether or not the device is online.",
      },
      {
        title: "Rules, alerts and automation",
        body: "Conditions on streams and states that raise alerts, open tickets or trigger actions in other systems, with throttling and escalation.",
      },
      {
        title: "Commands and configuration",
        body: "Remote commands and configuration changes with delivery tracking, timeouts, approval for risky actions and an audit record.",
      },
      {
        title: "Over-the-air updates",
        body: "Orchestration of firmware and software updates in staged rollouts, with health checks, automatic pause and rollback, using the device's own update mechanism.",
      },
      {
        title: "Applications, APIs and multi-tenancy",
        body: "Dashboards, public APIs and webhooks, and tenant separation for platforms serving several customers or business units.",
      },
    ],
    diagram: {
      title: "IoT platform: reference architecture",
      desc: "Devices and gateways connect securely through a connectivity layer to an IoT platform with a device registry, provisioning, telemetry ingestion, device twins, rules and alerts, commands and update orchestration. Applications, enterprise systems and analytics consume the data through APIs.",
      leftLabel: "Devices",
      platformLabel: "IoT platform",
      rightLabel: "Consumers",
      platformTitle: "IoT platform",
      boundary: "Secure device link",
      left: [
        ["Sensors and machines", "Telemetry, events"],
        ["Gateways and edge", "Protocol translation"],
        ["Mobile and field tools", "Provisioning, service"],
      ],
      modules: [
        ["Device registry", "Identity, state, tags"],
        ["Provisioning", "Keys, certificates"],
        ["Telemetry store", "Time series, replay"],
        ["Device twins", "Reported and desired"],
        ["Rules and alerts", "Conditions, actions"],
        ["Update orchestration", "Staged OTA, rollback"],
      ],
      strip: "Per-device authentication · multi-tenancy · audit trail",
      right: [
        ["Apps and dashboards", "Operations, customers"],
        ["Enterprise systems", "ERP, CMMS, CRM"],
        ["Analytics and AI", "Models, history"],
        ["Support and service", "Tickets, diagnostics"],
      ],
    },
    diagramCaption:
      "Reference architecture: devices are identified, authenticated and observed, and their data reaches applications through stable APIs.",
    standards: [
      {
        name: "MQTT 5 and Sparkplug B",
        note: "Publish and subscribe messaging for devices, with Sparkplug defining topic structure and state handling for industrial data.",
      },
      {
        name: "LwM2M and CoAP",
        note: "Device management and constrained-device protocols for cellular and low-power devices.",
      },
      {
        name: "OPC UA",
        note: "Industrial interoperability standard used where devices are controllers and machines.",
      },
      {
        name: "W3C Web of Things",
        note: "Thing descriptions that define a device's properties, actions and events in a machine-readable way.",
      },
      {
        name: "ETSI EN 303 645 and IEC 62443",
        note: "Security baselines for consumer and industrial connected devices, used as the checklist for identity, updates and data protection.",
      },
      {
        name: "X.509 and device identity",
        note: "Certificate-based device identities, with secure elements or trusted platform modules where the hardware supports them.",
      },
    ],
    dataModel: [
      {
        entity: "Device",
        holds: "Identity, type, firmware, location, owner, tags, state and the credentials it uses.",
      },
      {
        entity: "Device twin",
        holds: "Reported and desired properties, versions and last-seen time.",
      },
      {
        entity: "Telemetry point",
        holds: "Device, metric, value, unit, time and quality, stored by retention policy.",
      },
      {
        entity: "Event and alert",
        holds: "Rule, device, severity, state, acknowledgement and resolution.",
      },
      {
        entity: "Command",
        holds: "Target, payload, status, timeouts and the user who issued it.",
      },
      {
        entity: "Update campaign",
        holds: "Target group, version, stages, success measures and any rollback.",
      },
      {
        entity: "Tenant and entitlement",
        holds: "Customer or unit, devices, users and the data they may access.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Cloud IoT services and device management platforms are strong, quick starts for connectivity, ingestion and twins, and the default for most fleets.",
      },
      {
        title: "Extend",
        body: "Extend a cloud platform with your own device model, rules, customer-facing applications and enterprise integrations. This is the most common pattern.",
      },
      {
        title: "Build",
        body: "Build when you must run in your own environment, when cost per device at scale demands it, when you operate in regulated or air-gapped settings, or when the platform is itself a product.",
      },
    ],
    security: [
      {
        title: "Strong device identity",
        body: "A unique credential per device, protected in hardware where possible, with revocation and rotation.",
      },
      {
        title: "Least-privilege messaging",
        body: "Each device can publish and subscribe only to its own topics, and platform components use scoped service accounts.",
      },
      {
        title: "Secure updates",
        body: "Signed images, staged rollout, health checks and automatic rollback so a bad update cannot brick a fleet.",
      },
      {
        title: "Data protection",
        body: "Encryption in transit and at rest, tenant isolation and retention rules for personal or commercially sensitive data.",
      },
      {
        title: "Fleet monitoring",
        body: "Anomaly detection for devices behaving unusually, such as unexpected connections or message volumes.",
      },
    ],
    phases: [
      {
        title: "Fleet and use case review",
        body: "We list the devices, the data they produce, the decisions that data supports and the systems that need it.",
      },
      {
        title: "Architecture and security design",
        body: "Connectivity, identity, device model, storage and integration are agreed with the device, security and application teams.",
      },
      {
        title: "Build the core and connect a pilot fleet",
        body: "Registry, provisioning, ingestion and twins go first, connected to a small fleet in real conditions.",
      },
      {
        title: "Add rules, updates and applications",
        body: "Alerts, commands, update orchestration and applications are added and tested at pilot scale.",
      },
      {
        title: "Scale the fleet",
        body: "The fleet grows in stages, with load tests, monitoring and support processes proven at each step.",
      },
    ],
    proof: [
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
    ],
    faqs: [
      {
        q: "Do you design the devices?",
        a: "No. We build the platform software and the integration around devices: connectivity, identity, data, twins, updates and applications. Electronics and firmware design stay with your hardware team or vendors, and we agree the interfaces with them.",
      },
      {
        q: "Should we use a cloud IoT service or build our own platform?",
        a: "Start with a cloud service unless a requirement rules it out. Building makes sense for air-gapped or regulated environments, very large fleets where unit cost matters, or when the platform is your product.",
      },
      {
        q: "How do you handle devices that are offline most of the time?",
        a: "Twins hold the desired state until the device connects, commands have timeouts and retries, and devices buffer data and send it with its original timestamp.",
      },
      {
        q: "How are firmware updates made safe?",
        a: "Updates are signed, rolled out in stages to a small group first, monitored with health checks and paused or rolled back automatically if the group misbehaves.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Edge gateway and embedded software development", href: "/solutions/edge-gateway-and-embedded-software" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "industrial-iot-and-scada-integration",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Industrial IoT and SCADA Integration (OPC UA, Modbus, MQTT) | Deview",
    seoDescription:
      "Industrial IoT and SCADA integration: connect PLCs, SCADA and historians over OPC UA, Modbus and MQTT to a unified namespace and enterprise systems.",
    kicker: "Enterprise platforms · Industrial IoT",
    h1: "Industrial IoT and SCADA integration (OPC UA, Modbus, MQTT)",
    intro:
      "We build industrial IoT and SCADA integration for manufacturers and process industries: connections to PLCs, SCADA and historians over OPC UA, Modbus and MQTT, a unified namespace that gives every system the same view of plant data, and secure, mostly one-way flows to enterprise and cloud systems. We build the software and integration around your control systems, and you own the code.",
    modules: [
      {
        title: "Protocol connectivity",
        body: "Adapters for OPC UA, Modbus RTU and TCP, MQTT and other industrial protocols, with gateways for legacy fieldbuses and bridges for vendor-specific interfaces.",
      },
      {
        title: "Tag and signal inventory",
        body: "A governed list of every signal with its address, type, unit, scaling, owner and meaning, as the basis of all mapping.",
      },
      {
        title: "Unified namespace",
        body: "A single, hierarchical model of enterprise, site, area, line and equipment through which data is published and discovered by every consumer.",
      },
      {
        title: "Edge collection and buffering",
        body: "Collection near the machine with store-and-forward, so data survives network outages and arrives with its original timestamps.",
      },
      {
        title: "Historian integration",
        body: "Reading from and writing to process historians, with backfill, aggregation and the retention policies engineers expect.",
      },
      {
        title: "Data contextualisation",
        body: "Raw tags enriched with equipment, product, batch and shift context, so a number on a screen means something to an analyst.",
      },
      {
        title: "Events and alarm integration",
        body: "Alarms and events from control systems passed to maintenance, quality and operations systems with the context needed to act.",
      },
      {
        title: "Enterprise and cloud pipelines",
        body: "Flows to the MES, ERP, data platform and cloud analytics, with one-way gateways where policy requires.",
      },
      {
        title: "Monitoring and diagnostics",
        body: "Health of connections, tag quality, latency and gaps, with alerts when data stops or looks wrong.",
      },
    ],
    diagram: {
      title: "Industrial IoT and SCADA integration: reference architecture",
      desc: "PLCs, machines and SCADA connect over industrial protocols to edge collectors with buffering. Behind a network boundary, an integration platform with a unified namespace, historian integration, contextualisation, events and monitoring serves the MES, maintenance, analytics and cloud systems.",
      leftLabel: "Plant floor (OT)",
      platformLabel: "Integration platform",
      rightLabel: "Consumers (IT)",
      platformTitle: "Industrial integration platform",
      boundary: "IT and OT boundary · IEC 62443",
      left: [
        ["PLCs and machines", "OPC UA, Modbus, fieldbus"],
        ["SCADA and HMI", "Tags, alarms, recipes"],
        ["Historians", "Time series, events"],
      ],
      modules: [
        ["Protocol adapters", "OPC UA, Modbus, MQTT"],
        ["Unified namespace", "Site, area, line, asset"],
        ["Edge buffering", "Store and forward"],
        ["Contextualisation", "Asset, product, batch"],
        ["Events and alarms", "To maintenance, quality"],
        ["Monitoring", "Quality, latency, gaps"],
      ],
      strip: "Tag inventory · read-only by default · audit trail",
      right: [
        ["MES and ERP", "Production data"],
        ["Maintenance system", "Triggers"],
        ["Data platform", "History, analytics"],
        ["Cloud services", "Dashboards, AI"],
      ],
    },
    diagramCaption:
      "Reference architecture: machine data is collected at the edge, given a common model and context, and delivered across a controlled boundary.",
    standards: [
      {
        name: "OPC UA (IEC 62541)",
        note: "The vendor-neutral interface to controllers and servers, including information models and publish-subscribe, preferred wherever the equipment supports it.",
      },
      {
        name: "Modbus",
        note: "A widely used serial and TCP protocol for older devices, mapped through well-defined register lists.",
      },
      {
        name: "MQTT and Sparkplug B",
        note: "Lightweight messaging and a topic and payload convention that makes a unified namespace practical and stateful.",
      },
      {
        name: "ISA-95",
        note: "The hierarchy of enterprise, site, area and line, and the exchange between business and operations systems, used to structure the namespace.",
      },
      {
        name: "IEC 62443",
        note: "Zones and conduits, secure development and component requirements for industrial automation and control systems.",
      },
      {
        name: "Purdue model and network segmentation",
        note: "The reference for separating control, supervisory and business networks and for placing the gateways between them.",
      },
    ],
    dataModel: [
      {
        entity: "Signal (tag)",
        holds: "Address, data type, unit, scaling, owner, description and the equipment it belongs to.",
      },
      {
        entity: "Equipment and hierarchy node",
        holds: "Enterprise, site, area, line, machine and the relationships between them.",
      },
      {
        entity: "Measurement",
        holds: "Value, quality code, source timestamp, receive timestamp and signal.",
      },
      {
        entity: "Event and alarm",
        holds: "Type, severity, source, time, acknowledgement and context.",
      },
      {
        entity: "Context record",
        holds: "Product, batch, shift or order active on an asset over a period.",
      },
      {
        entity: "Connection",
        holds: "Endpoint, protocol, security mode, status and last good read.",
      },
      {
        entity: "Mapping",
        holds: "Source signal, target topic or tag, transformation and version.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Industrial connectivity software, historians and IoT gateways from established vendors cover the common protocols and are the first choice for standard equipment.",
      },
      {
        title: "Extend",
        body: "Extend vendor connectivity with your own namespace, contextualisation and integration into the MES, maintenance and data platform, where products stop at the edge of the plant.",
      },
      {
        title: "Build",
        body: "Build when you have many equipment types and sites, unusual protocols, strict data-flow rules or you want one integration layer that every plant and system can rely on.",
      },
    ],
    security: [
      {
        title: "Read-only by default",
        body: "Integrations read from control systems. Any write path is explicit, approved, limited and logged.",
      },
      {
        title: "Segmented networks",
        body: "Gateways sit in a controlled zone between control and business networks, with firewall rules and monitoring on the conduit.",
      },
      {
        title: "Encrypted and authenticated links",
        body: "OPC UA security modes and TLS on messaging, with certificates managed and rotated.",
      },
      {
        title: "Patch and change discipline",
        body: "Integration components follow the plant's change management, with tested rollbacks and no unmanaged remote access.",
      },
      {
        title: "Visibility",
        body: "Inventory of connections and flows, and monitoring for new or unusual connections.",
      },
    ],
    phases: [
      {
        title: "Plant and data survey",
        body: "We list the equipment, protocols, historians and signals with operations and automation engineers, and agree the first use cases.",
      },
      {
        title: "Architecture and security design",
        body: "The namespace, the edge components, the network boundary and the delivery paths are designed and approved by IT and OT security.",
      },
      {
        title: "Connect one line",
        body: "One line is connected, with a signal inventory, buffering and monitoring, and the data checked against the operators' own readings.",
      },
      {
        title: "Add context and consumers",
        body: "Contextualisation and the first consumers, such as the MES, maintenance and analytics, are connected.",
      },
      {
        title: "Scale by line and plant",
        body: "More lines and plants follow, with the same model and monitoring.",
      },
    ],
    proof: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "EnerQuest: field data flowing one way into an analytics layer", href: "/case-studies/enerquest" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "Can you connect older equipment that only speaks Modbus or a fieldbus?",
        a: "Yes, through gateways and protocol adapters. Signals are mapped from register lists or the fieldbus, scaled, given units and published into the same namespace as modern equipment.",
      },
      {
        q: "Will this write to our control systems?",
        a: "Not by default. Integration is read-only. If a write path is needed, such as sending a recipe or a setpoint, it is designed explicitly with approval, limits and logging, and agreed with the automation owner.",
      },
      {
        q: "What is a unified namespace?",
        a: "A single, structured place where plant data is published by site, area, line and equipment, so every consumer finds and uses the same data in the same form instead of building point-to-point connections.",
      },
      {
        q: "How do you keep OT secure?",
        a: "By segmenting networks, using authenticated and encrypted protocols, minimising inbound access to the plant, keeping integrations read-only and following IEC 62443 practice for components and development.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the mappings and the data stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "CMMS and maintenance management software", href: "/solutions/cmms-and-maintenance-management-software" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "edge-gateway-and-embedded-software",
    vertical: "cross-industry",
    serviceId: "product-engineering",
    seoTitle: "Edge Gateway and Embedded Software Development | Deview",
    seoDescription:
      "Edge gateway and embedded software development: Linux gateways, protocol adapters, store-and-forward, edge apps, local ML inference and secure OTA updates.",
    kicker: "Digital product engineering · IoT",
    h1: "Edge gateway and embedded software development",
    intro:
      "We develop edge gateway and embedded software: the software that runs on Linux gateways and edge computers beside machines and sensors, with protocol adapters, store-and-forward buffering, containerised applications, local analytics and secure over-the-air updates. We write the software on the gateway and its integration with your devices and cloud, not the electronics, and you own the code.",
    modules: [
      {
        title: "Gateway runtime and base system",
        body: "A hardened Linux image with a container runtime, service supervision, watchdogs and a defined boot and recovery process.",
      },
      {
        title: "Protocol adapters",
        body: "Drivers for OPC UA, Modbus, CAN, serial, BACnet and vendor interfaces, converting device data to a common message model.",
      },
      {
        title: "Local buffering and store-and-forward",
        body: "Durable local queues that keep data through outages and forward it in order with original timestamps and back-pressure control.",
      },
      {
        title: "Edge applications",
        body: "Containerised applications for filtering, aggregation, local rules and control-adjacent logic, deployed and versioned from the cloud.",
      },
      {
        title: "Edge analytics and inference",
        body: "Models for anomaly detection, vision or prediction run locally, with model packaging, versioning and performance monitoring.",
      },
      {
        title: "Device and gateway identity",
        body: "Unique identity anchored in a trusted platform module or secure element, used to authenticate to the cloud and to local devices.",
      },
      {
        title: "Remote management",
        body: "Configuration, logs, metrics and diagnostics from a central console, with secure remote access that is time-limited and audited.",
      },
      {
        title: "Over-the-air updates",
        body: "Signed, atomic updates of the system image and applications, with A and B partitions, health checks and rollback.",
      },
      {
        title: "Cloud and enterprise integration",
        body: "Delivery to IoT platforms and data platforms over MQTT or HTTPS, with schema versioning and compatibility with older gateways.",
      },
    ],
    diagram: {
      title: "Edge gateway and embedded software: reference architecture",
      desc: "Sensors, machines and fieldbuses connect to an edge gateway running protocol adapters, local buffering, containerised edge applications, local inference, device identity, remote management and update agents. The gateway connects over secure links to an IoT platform, a data platform and a management console.",
      leftLabel: "Local devices",
      platformLabel: "Edge gateway",
      rightLabel: "Cloud and enterprise",
      platformTitle: "Edge gateway software",
      boundary: "Secure uplink",
      left: [
        ["Machines and PLCs", "OPC UA, Modbus, CAN"],
        ["Sensors and meters", "Serial, wireless"],
        ["Cameras and scanners", "Images, codes"],
      ],
      modules: [
        ["Protocol adapters", "Drivers, message model"],
        ["Store and forward", "Durable queues"],
        ["Edge applications", "Containers, rules"],
        ["Local inference", "Models, monitoring"],
        ["Identity and security", "TPM, keys"],
        ["Update agent", "Signed, A and B"],
      ],
      strip: "Watchdogs · remote management · audit trail",
      right: [
        ["IoT platform", "Telemetry, twins"],
        ["Data platform", "History, analytics"],
        ["Management console", "Config, logs, access"],
        ["Enterprise systems", "ERP, MES"],
      ],
    },
    diagramCaption:
      "Reference architecture: the gateway turns many device protocols into one secure, managed and updatable data path to the cloud.",
    standards: [
      {
        name: "OPC UA, Modbus, CAN and BACnet",
        note: "The device and building protocols the adapters implement, with defined data types and error handling.",
      },
      {
        name: "MQTT and Sparkplug B",
        note: "Uplink messaging with defined topic structure and session state.",
      },
      {
        name: "Container and orchestration standards",
        note: "OCI containers and lightweight orchestration for deploying and updating edge applications.",
      },
      {
        name: "Secure boot, TPM and update frameworks",
        note: "Hardware-rooted trust and atomic update mechanisms such as RAUC, SWUpdate and Mender.",
      },
      {
        name: "IEC 62443-4-1 and EU Cyber Resilience Act",
        note: "Secure development lifecycle practices, vulnerability handling and reporting expectations for products with digital elements.",
      },
      {
        name: "ONNX and common model formats",
        note: "Portable formats for deploying machine learning models to edge runtimes.",
      },
    ],
    dataModel: [
      {
        entity: "Gateway",
        holds: "Identity, hardware profile, image version, applications, health and site.",
      },
      {
        entity: "Adapter configuration",
        holds: "Protocol, endpoints, signals, polling and mapping, with version and rollout state.",
      },
      {
        entity: "Message and queue entry",
        holds: "Payload, source timestamp, sequence, delivery state and retry count.",
      },
      {
        entity: "Edge application",
        holds: "Image, version, configuration, resource limits and status.",
      },
      {
        entity: "Model package",
        holds: "Model, version, runtime, input schema and evaluation results.",
      },
      {
        entity: "Update",
        holds: "Target group, artefact, signature, stages and result.",
      },
      {
        entity: "Diagnostic bundle",
        holds: "Logs, metrics, configuration snapshot and the request that produced it.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Industrial gateway vendors and cloud edge runtimes provide ready software for common protocols and are the best start for a standard installation.",
      },
      {
        title: "Extend",
        body: "Extend a vendor gateway with your own adapters, edge applications and update process where the product stops at generic connectivity.",
      },
      {
        title: "Build",
        body: "Build when you ship gateways as part of your product, when you have unusual devices, or when you need full control of the image, security and update behaviour.",
      },
    ],
    security: [
      {
        title: "Hardware-rooted trust",
        body: "Secure boot and keys held in a TPM or secure element, so a gateway can prove what it is running.",
      },
      {
        title: "Signed, atomic updates",
        body: "Only signed images are installed, in a way that always leaves a bootable system, with rollback on failure.",
      },
      {
        title: "Minimal attack surface",
        body: "Stripped system image, no default credentials, closed inbound ports and unprivileged containers.",
      },
      {
        title: "Secure remote access",
        body: "Outbound-initiated, time-limited and audited sessions instead of open management ports.",
      },
      {
        title: "Vulnerability handling",
        body: "A process to track components, assess advisories and ship fixes, following IEC 62443-4-1 practice.",
      },
    ],
    phases: [
      {
        title: "Requirements and device survey",
        body: "We list the devices, protocols, data rates, environment and constraints on the gateway hardware, with your hardware and operations teams.",
      },
      {
        title: "Architecture and security design",
        body: "The image, runtime, adapter model, update approach and identity design are agreed.",
      },
      {
        title: "Build on a reference gateway",
        body: "Adapters, buffering and the update agent are built and tested on the target hardware with real devices.",
      },
      {
        title: "Field pilot",
        body: "A small number of gateways run on site, with remote management and monitoring exercised.",
      },
      {
        title: "Production release and fleet rollout",
        body: "The image and applications are released through a controlled pipeline and rolled out to the fleet in stages.",
      },
    ],
    proof: [
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "IoT platform development", href: "/solutions/iot-platform-development" },
    ],
    faqs: [
      {
        q: "Do you design the gateway hardware or write low-level firmware?",
        a: "No. Our scope is the software on Linux-based gateways and edge computers, and the integration with devices and the cloud. Electronics design and microcontroller firmware stay with your hardware supplier, and we agree the interfaces with them.",
      },
      {
        q: "Can the gateway keep working if the cloud is unreachable?",
        a: "Yes. Local rules and applications continue, data is stored in durable queues and forwarded in order when the link returns.",
      },
      {
        q: "Can you run machine learning at the edge?",
        a: "Yes, for models such as anomaly detection or vision that fit the gateway's resources. Models are packaged, versioned, monitored and updated like any other application.",
      },
      {
        q: "How are updates made safe on remote gateways?",
        a: "Updates are signed and atomic with two system partitions, health checks after boot and automatic rollback to the previous version if the new one fails.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the images and the configuration stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "IoT platform development", href: "/solutions/iot-platform-development" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "rfid-and-barcode-tracking-system",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "RFID and Barcode Asset and Inventory Tracking System | Deview",
    seoDescription:
      "RFID and barcode asset and inventory tracking system: reader integration, tag encoding, zones and gates, EPCIS events and ERP, warehouse and maintenance links.",
    kicker: "Enterprise platforms · Tracking",
    h1: "RFID and barcode asset and inventory tracking system",
    intro:
      "We build RFID and barcode asset and inventory tracking systems for manufacturers, warehouses and asset-heavy operations: integration with fixed and handheld readers and scanners, tag encoding and identification, capture and filtering of read events, location logic by zone and gate, and integration with the ERP, warehouse and maintenance systems. We build the software and integration around your readers and tags, and you own the code.",
    modules: [
      {
        title: "Identification scheme",
        body: "A numbering scheme for items, cases, pallets, returnable containers and fixed assets, aligned with GS1 identifiers where partners need them.",
      },
      {
        title: "Tag and label encoding",
        body: "Encoding and printing of RFID tags and barcode labels from the system, with verification and a record of every tag issued.",
      },
      {
        title: "Reader and scanner integration",
        body: "Drivers and middleware for fixed readers, portals, handheld readers and scanners, using standard reader protocols and vendor interfaces.",
      },
      {
        title: "Read event capture and filtering",
        body: "Removal of duplicate and stray reads, smoothing, and rules that turn raw reads into events such as arrival, departure or movement.",
      },
      {
        title: "Zones, gates and location logic",
        body: "A model of read points, zones and gates that places an item or asset in a location and direction of travel.",
      },
      {
        title: "Asset check-in, check-out and custody",
        body: "Transactions for borrowing, returning and transferring assets, with the person, time, location and condition recorded.",
      },
      {
        title: "Inventory and bulk counts",
        body: "Fast inventory by scanning shelves or rooms, with comparison to expected stock and a list of missing and unexpected items.",
      },
      {
        title: "Event sharing with partners",
        body: "Publication and receipt of standard traceability events with suppliers and customers.",
      },
      {
        title: "Integration and reporting",
        body: "Updates to the ERP, warehouse and maintenance systems, and reports on location, utilisation, losses and dwell time.",
      },
    ],
    diagram: {
      title: "RFID and barcode tracking: reference architecture",
      desc: "Fixed readers, handheld readers and scanners read tags and labels on items, containers and assets. A tracking platform with identification, tag encoding, read capture and filtering, zone logic, custody transactions and event sharing updates the ERP, warehouse and maintenance systems.",
      leftLabel: "Readers and tags",
      platformLabel: "Tracking platform",
      rightLabel: "Systems",
      platformTitle: "Tracking platform",
      left: [
        ["Fixed readers and portals", "Gates, zones, conveyors"],
        ["Handhelds and scanners", "RFID, 1D and 2D codes"],
        ["Tags and labels", "Items, cases, assets"],
      ],
      modules: [
        ["Identification", "Numbering, GS1"],
        ["Tag encoding", "Print, write, verify"],
        ["Read capture", "Filter, de-duplicate"],
        ["Zone logic", "Place and direction"],
        ["Custody", "Check-in, check-out"],
        ["Inventory counts", "Expected versus found"],
      ],
      strip: "Event history · standards-based events · audit trail",
      right: [
        ["ERP", "Stock and assets"],
        ["Warehouse system", "Moves, counts"],
        ["Maintenance system", "Asset location"],
        ["Partners", "Traceability events"],
      ],
    },
    diagramCaption:
      "Reference architecture: noisy reads become clean events, and clean events update the systems that need to know where things are.",
    standards: [
      {
        name: "GS1 EPC Tag Data Standard",
        note: "Encodings for items, cases, pallets, returnable assets and individual assets in RFID tags and barcodes.",
      },
      {
        name: "ISO/IEC 18000-63 (EPC Gen2)",
        note: "The UHF air interface for most supply chain RFID, which determines what readers and tags can do.",
      },
      {
        name: "EPCIS and CBV",
        note: "The event standard for sharing what happened to an object, where and why, and the vocabulary that keeps events consistent.",
      },
      {
        name: "LLRP",
        note: "A standard protocol for controlling readers and receiving read reports across vendors.",
      },
      {
        name: "GS1 barcodes and DataMatrix",
        note: "1D and 2D symbologies, application identifiers and print quality for labels.",
      },
      {
        name: "Radio regulation",
        note: "Frequency and power rules for RFID in each country of operation.",
      },
    ],
    dataModel: [
      {
        entity: "Tagged object",
        holds: "Identifier, type, description, owner, current location and status.",
      },
      {
        entity: "Tag and label",
        holds: "Tag identifier, encoding, issue date, state and the object it is attached to.",
      },
      {
        entity: "Reader and read point",
        holds: "Device, location, antenna configuration, direction and zone served.",
      },
      {
        entity: "Read event",
        holds: "Tag, reader, time, signal strength and the rule that accepted or discarded it.",
      },
      {
        entity: "Movement and location",
        holds: "Object, from, to, time and the source event.",
      },
      {
        entity: "Custody transaction",
        holds: "Object, person, action, time, condition and approval.",
      },
      {
        entity: "Count session",
        holds: "Area, expected objects, found objects, differences and resolution.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "RFID middleware and asset-tracking products from reader and software vendors are quick for standard cases such as pallet portals or tool cribs.",
      },
      {
        title: "Extend",
        body: "Extend a vendor product with the integration to your ERP, warehouse and maintenance systems, and with event logic specific to your site.",
      },
      {
        title: "Build",
        body: "Build when tracking is part of your own process or product, when you mix several reader types and tag technologies, or when you need standard events shared across partners.",
      },
    ],
    security: [
      {
        title: "Authenticated readers",
        body: "Readers connect over secured, authenticated links and are managed devices on a segmented network.",
      },
      {
        title: "Tag integrity",
        body: "Tag identifiers are registered and validated, and unknown or duplicated tags raise exceptions.",
      },
      {
        title: "Custody control",
        body: "Transfers of valuable assets need identified users and, where policy requires, approval.",
      },
      {
        title: "Data minimisation",
        body: "Tracking of people is avoided or limited, with access to location history restricted by role.",
      },
      {
        title: "Audit trail",
        body: "Events and transactions are retained as a time-ordered record.",
      },
    ],
    phases: [
      {
        title: "Use case and environment survey",
        body: "We agree what must be tracked and the accuracy needed, and survey the site and materials with the operations team and the reader vendor.",
      },
      {
        title: "Identification and event design",
        body: "The numbering scheme, tag choice, read points and event rules are designed and tested with sample tags and readers.",
      },
      {
        title: "Build and pilot at one process",
        body: "One process, such as receiving or tool tracking, is built and run, with read accuracy measured.",
      },
      {
        title: "Integrate with ERP, warehouse and maintenance",
        body: "Movements and locations are shared with the systems of record.",
      },
      {
        title: "Extend to further processes and partners",
        body: "More processes and sites follow, with event sharing added where partners need it.",
      },
    ],
    proof: [
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
    ],
    faqs: [
      {
        q: "Do you supply readers and tags?",
        a: "No. We build the software and integration. Readers, antennas and tags come from the vendors you choose, and we connect to them through standard protocols and their interfaces.",
      },
      {
        q: "RFID or barcodes?",
        a: "Barcodes are cheap and reliable where items can be scanned line of sight. RFID suits bulk reads, hard-to-reach items and gates. Many sites use both, and the system treats them as two ways to identify the same object.",
      },
      {
        q: "How do you deal with stray and duplicate reads?",
        a: "Reads are filtered and smoothed by rules: dwell time, signal strength, direction logic and de-duplication. The rules are tuned on the site's own data.",
      },
      {
        q: "Can we share tracking events with suppliers and customers?",
        a: "Yes. The system can publish and receive standard traceability events using EPCIS, with GS1 identifiers where partners use them.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "CMMS and maintenance management software", href: "/solutions/cmms-and-maintenance-management-software" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "digital-twin-development",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Digital Twin Development for Plants and Oil Fields | Deview",
    seoDescription:
      "Digital twin development for plants and oil fields: asset model, live data, engineering documents, 3D and schematic views, anomaly detection and what-if analysis.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Digital twin development for plants and oil fields",
    intro:
      "We provide digital twin development for plants and oil fields: a connected model of the asset that joins its engineering data, live operating data and documents, shows them on schematic, map and three-dimensional views, detects anomalies and supports what-if analysis with the models your engineers already use. The twin reads from your operational systems and never controls them, and you own the code.",
    modules: [
      {
        title: "Asset and system model",
        body: "A structured model of facilities, systems, equipment and instruments with relationships, built from the engineering register and kept in step with it.",
      },
      {
        title: "Live data connection",
        body: "Operating values and events from historians and SCADA, attached to the right equipment in the model with unit and quality handling.",
      },
      {
        title: "Engineering documents and data",
        body: "Datasheets, drawings, procedures and inspection records linked to each element, so what the equipment is and what it is doing are in one place.",
      },
      {
        title: "Schematic and map views",
        body: "Interactive P&ID-style schematics and geographic maps showing status, values and alarms on the equipment they belong to.",
      },
      {
        title: "Three-dimensional views",
        body: "Lightweight 3D models of facilities in the browser, with equipment selectable and linked to the same data as the schematic.",
      },
      {
        title: "Anomaly detection",
        body: "Statistical and machine learning detection of unusual behaviour against each asset's own history and its peers, with the evidence shown to the user.",
      },
      {
        title: "Model-based what-if analysis",
        body: "Connection to process, network or reservoir simulators so users can test changes on a copy of the current state before acting.",
      },
      {
        title: "Workflows and handoffs",
        body: "Raising maintenance requests, inspections or investigations from the twin, with the context attached.",
      },
      {
        title: "Versioning and trust",
        body: "Tracking of when the model and data were last verified against the plant, with flags where the model may be out of date.",
      },
    ],
    diagram: {
      title: "Digital twin: reference architecture",
      desc: "Engineering data, operating data and documents feed a digital twin platform with an asset model, live data connection, linked documents, schematic and 3D views, anomaly detection and simulation links. Operations, engineering, maintenance and management use the twin, which writes back to no control system.",
      leftLabel: "Sources",
      platformLabel: "Twin platform",
      rightLabel: "Users and systems",
      platformTitle: "Digital twin platform",
      boundary: "One-way from OT",
      left: [
        ["Engineering data", "Registers, P&IDs, 3D"],
        ["Operating data", "Historian, SCADA, events"],
        ["Documents and inspections", "Datasheets, reports"],
      ],
      modules: [
        ["Asset model", "Systems, equipment"],
        ["Live data", "Values mapped to assets"],
        ["Linked documents", "Per asset"],
        ["Schematic and 3D", "Status on the picture"],
        ["Anomaly detection", "History and peers"],
        ["Simulation links", "What-if on a copy"],
      ],
      strip: "Model verification dates · access control · audit trail",
      right: [
        ["Operations", "Status, alarms"],
        ["Engineering", "Analysis, scenarios"],
        ["Maintenance and integrity", "Requests, inspections"],
        ["Management", "Asset overview"],
      ],
    },
    diagramCaption:
      "Reference architecture: one model joins what the asset is, what it is doing and what is known about it, without controlling it.",
    standards: [
      {
        name: "ISO 23247",
        note: "A framework for digital twins in manufacturing, used as a reference for the architecture and the roles of the parts.",
      },
      {
        name: "Digital twin description languages",
        note: "Languages such as DTDL and the Asset Administration Shell that describe assets, their properties and relationships in a machine-readable way.",
      },
      {
        name: "FMI",
        note: "The Functional Mock-up Interface for exchanging and running simulation models in a standard way.",
      },
      {
        name: "CFIHOS and ISO 15926",
        note: "Engineering information standards that structure the equipment data a twin is built from.",
      },
      {
        name: "OPC UA",
        note: "Read-only interface to live values and events from control systems and historians.",
      },
      {
        name: "glTF and open 3D formats",
        note: "Lightweight formats for delivering 3D models in a browser.",
      },
    ],
    dataModel: [
      {
        entity: "Asset node",
        holds: "Type, tag, attributes, parent and children, and the source of each attribute.",
      },
      {
        entity: "Relationship",
        holds: "Connection between assets, such as flow, containment or control, with direction.",
      },
      {
        entity: "Data binding",
        holds: "Signal mapped to an asset property, with unit, scaling and quality rules.",
      },
      {
        entity: "Document link",
        holds: "Asset, document, revision and the date the link was verified.",
      },
      {
        entity: "Anomaly",
        holds: "Asset, signal, detection method, evidence, severity and disposition.",
      },
      {
        entity: "Scenario",
        holds: "Starting state, changes applied, simulator and results.",
      },
      {
        entity: "Model verification",
        holds: "Date and method by which the model was checked against the plant.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial digital twin platforms and the offerings of engineering and automation vendors are good for large facilities with a vendor already holding the engineering and operating data.",
      },
      {
        title: "Extend",
        body: "Extend a platform or the engineering information system you already have with live data, anomaly detection or workflows that fit how your teams work.",
      },
      {
        title: "Build",
        body: "Build when your estate is mixed, when data sits across several vendors' systems, or when you want a pilot that proves value on one facility before committing to a platform.",
      },
    ],
    security: [
      {
        title: "No write-back",
        body: "The twin reads from operational systems and has no path to change setpoints or control logic.",
      },
      {
        title: "Network boundary",
        body: "Live data crosses a controlled gateway between operational and business networks, designed to IEC 62443 zones and conduits.",
      },
      {
        title: "Access by role and asset",
        body: "Users see the assets and data their role allows, with sensitive engineering and security data restricted.",
      },
      {
        title: "Integrity of the model",
        body: "Changes to the asset model are approved and recorded, and the verification status is always visible.",
      },
      {
        title: "Audit trail",
        body: "Views of sensitive models and exports are logged.",
      },
    ],
    phases: [
      {
        title: "Use case and data review",
        body: "We agree the decisions the twin must support, and review the engineering data, live data and documents available for one facility.",
      },
      {
        title: "Model and integration design",
        body: "The asset model, data bindings and the boundary to operational systems are designed with engineering, operations and security.",
      },
      {
        title: "Build a thin slice",
        body: "One system or area is modelled end to end, with live data, documents and a schematic view.",
      },
      {
        title: "Add detection and simulation links",
        body: "Anomaly detection and connection to a simulator are added and checked against known events.",
      },
      {
        title: "Extend across the facility",
        body: "More systems and the three-dimensional view follow, with ownership of the model's upkeep agreed.",
      },
    ],
    proof: [
      { label: "EnerQuest: one operating picture from wellhead to boardroom", href: "/case-studies/enerquest" },
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "What is a digital twin, in practical terms?",
        a: "A connected model of an asset that joins its engineering data, its live operating data and its documents, and presents them together so people can understand it, monitor it and test changes. It is useful when it answers specific questions better than the separate systems did.",
      },
      {
        q: "Does the twin control the plant?",
        a: "No. The twin reads data and supports decisions. Any action on the plant goes through the normal operations and control processes.",
      },
      {
        q: "How accurate does the model need to be?",
        a: "As accurate as the decisions require. We record when each part was last verified against the plant and show it, so users know how far to trust what they see.",
      },
      {
        q: "Can you build one for an oil field?",
        a: "Yes. A field twin links wells, facilities and the production network with live data and models, as in the EnerQuest pilot, which showed one operating picture on an illustrative model before any operational data was released.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the model and the data stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
    ],
    updated: "2026-10-15",
  },
];
