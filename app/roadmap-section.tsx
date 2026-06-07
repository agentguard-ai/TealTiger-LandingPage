"use client";

export function RoadmapSection() {
  const items = [
    {
      version: "v1.3",
      title: "Autonomous Agent Governance",
      status: "Released",
      date: "May 2026",
      highlights: [
        "TealEngine with FREEZE rules & automation levels",
        "Non-Human Identity (NHI) + Zero Standing Privilege",
        "Cryptographic receipts (Merkle + RFC 3161)",
        "12 LLM providers + 3 platform adapters",
        "OWASP Agentic Top 10 policy pack",
      ],
    },
    {
      version: "v1.4",
      title: "Zero-Config & MCP Governance",
      status: "In Development",
      date: "Q1 2027",
      highlights: [
        "observe(client) \u2014 1-line auto-instrumentation",
        "8 framework adapters (LangChain, CrewAI, Vercel AI SDK\u2026)",
        "MCP tool validation & poisoning defense",
        "TEEC v2.1 Execution Receipts",
        "EU AI Act & NIST AI RMF compliance mappings",
      ],
    },
    {
      version: "v1.5",
      title: "Enterprise Platform",
      status: "Planned",
      date: "Q2\u2013Q3 2027",
      highlights: [
        "Multi-tenancy & RBAC",
        "SSO (SAML/OIDC) + SCIM provisioning",
        "SIEM export (Splunk, Elastic, Sentinel)",
        "Policy staging, dry-run, canary deployments",
        "Scheduled compliance reports",
      ],
    },
    {
      version: "v2.0",
      title: "SaaS Security Platform",
      status: "Future",
      date: "2028",
      highlights: [
        "CISO executive console (health score, risk heatmap)",
        "K8s Operator + DaemonSet agent",
        "Shadow AI detection (ungoverned agent discovery)",
        "Remote kill switch from SaaS console",
        "CloudEvents, OpenTelemetry, Backstage plugin",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-50/70">
            From developer SDK to enterprise security platform. Every version
            maintains: in-process &lt;5ms evaluation, zero-config entry, no LLM
            in governance path.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.version}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.version}{" "}
                <span className="text-teal-400">\u2014 {item.title}</span>
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-teal-200">
                  {item.status}
                </span>
                <span className="text-sm text-teal-50/50">{item.date}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-teal-50/70"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
