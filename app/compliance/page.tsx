import Image from 'next/image';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function MapCard({
  framework,
  what,
  how,
  note,
}: {
  framework: string;
  what: string[];
  how: string[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="text-sm font-semibold text-white">{framework}</div>
      <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">What TealTiger can support</div>
      <ul className="mt-2 space-y-2 text-sm text-slate-300">
        {what.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs uppercase tracking-wide text-slate-500">How to operationalize</div>
      <ul className="mt-2 space-y-2 text-sm text-slate-300">
        {how.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-sky-400/70 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-4 text-xs text-slate-500">{note}</p> : null}
    </div>
  );
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/enterprise" className="text-slate-300 hover:text-white transition-colors">Enterprise</a>
            <a href="/compliance" className="text-slate-300 hover:text-white transition-colors">Compliance</a>
            <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">Deployments</a>
            <a href="/integrations" className="text-slate-300 hover:text-white transition-colors">Integrations</a>
            <a href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case studies</a>
            <a href="/roadmap" className="text-slate-300 hover:text-white transition-colors">Roadmap</a>
            <a href="/support" className="text-slate-300 hover:text-white transition-colors">Support</a>
            <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">Docs</a>
          </div>
          <a href="mailto:reachout@tealtiger.ai" className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white">Reach out</a>
        </div>
      </nav>


      <header className="relative border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.18),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            title="Compliance enablement (technical controls)"
            subtitle="How TealTiger can support common governance and security frameworks through runtime controls and audit evidence."
          />
          <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Disclaimer</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              This page is not legal advice and does not constitute a compliance certification. TealTiger provides technical controls
              (guardrails, budgets, evidence) that may support your compliance program. Full compliance depends on your organization’s
              risk management, documentation, oversight, and additional controls.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <MapCard
            framework="SOC 2"
            what={[
              'Evidence for change management and security monitoring (policy decisions, reason codes)',
              'Controls to reduce data exposure (PII checks) and enforce consistent runtime boundaries',
              'Operational metrics and logs for incident workflows',
            ]}
            how={[
              'Route metadata-only events to your SIEM and ticketing workflows',
              'Version policies and enforce them in CI/CD deployment gates',
              'Document control objectives and map evidence sources',
            ]}
            note="SOC 2 attestation is performed by an auditor; TealTiger can support evidence generation and control enforcement."
          />

          <MapCard
            framework="ISO/IEC 27001"
            what={[
              'Runtime controls that reduce risk of data leakage and uncontrolled model usage',
              'Audit trails aligned to monitoring and incident response processes',
              'Configurable evidence routing to enterprise tooling',
            ]}
            how={[
              'Integrate with your ISMS processes (risk treatment + monitoring)',
              'Define scope: where TealTiger runs and what it enforces',
              'Keep evidence metadata minimal and policy-driven',
            ]}
          />

          <MapCard
            framework="NIST AI RMF"
            what={[
              'Runtime enforcement to support governance and measurement practices',
              'Evidence and monitoring hooks to support ongoing evaluation',
              'Budget and usage controls to contain operational risk',
            ]}
            how={[
              'Adopt TealTiger as a technical control layer within your risk management lifecycle',
              'Use metrics and audit events as inputs to monitoring and reporting',
              'Maintain policy versioning and review cadence',
            ]}
          />

          <MapCard
            framework="EU AI Act"
            what={[
              'Technical enablement for runtime risk controls (guardrails, budgets)',
              'Audit-ready evidence for traceability and oversight workflows',
              'Monitoring hooks for incident response and reporting',
            ]}
            how={[
              'Use TealTiger alongside your compliance program (risk management, documentation, human oversight)',
              'Route evidence to SOC/monitoring and retain per policy',
              'Validate obligations based on system category and deployment context',
            ]}
            note="TealTiger does not make a system “compliant” on its own; treat this as guidance for technical control mapping."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/trust" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Trust notes →</a>
          <a href="/integrations" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Integrations →</a>
          <a href="mailto:reachout@tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Discuss your mapping →</a>
        </div>
      </section>


      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs text-slate-400">© 2026 TealTiger. MIT licensed.</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <a href="/trust" className="text-slate-300 hover:text-white">Trust</a>
              <a href="/support" className="text-slate-300 hover:text-white">Support</a>
              <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white" rel="noreferrer">Docs</a>
              <a href="mailto:reachout@tealtiger.ai" className="text-slate-300 hover:text-white">reachout@tealtiger.ai</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
