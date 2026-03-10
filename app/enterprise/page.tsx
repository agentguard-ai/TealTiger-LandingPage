import Image from 'next/image';
import SecurityChecklist from '../_components/security-checklist';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Card({ title, desc, items }: { title: string; desc: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80 shrink-0" />{i}</li>
        ))}
      </ul>
    </div>
  );
}

function ChecklistItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-300 leading-relaxed">{desc}</div>
    </div>
  );
}

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/enterprise" className="text-white font-semibold">Enterprise</a>
            <a href="/trust" className="text-slate-300 hover:text-white transition-colors">Trust</a>
            <a href="/compliance" className="text-slate-300 hover:text-white transition-colors">Compliance</a>
            <a href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case studies</a>
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
            title="Enterprise deployment & evaluation"
            subtitle="Procurement-friendly overview: deployment models (self-hosted, VPC/VNet, air-gapped), support posture, and an evaluation checklist."
          />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center">Deployment models</h2>
        <p className="mt-3 text-slate-300 text-center max-w-3xl mx-auto">Choose the model that fits your security boundary and procurement requirements.</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <Card
            title="Self-hosted (customer-managed)"
            desc="Run TealTiger inside your cloud or on-prem environment using standard deployment patterns."
            items={[
              'Kubernetes / Helm, containers, serverless patterns',
              'Integrates with your secrets manager and telemetry stack',
              'No prompt/output persistence by default',
            ]}
          />
          <Card
            title="Private networking (VPC/VNet)"
            desc="Deploy into isolated networks and route evidence to internal monitoring and SIEM systems."
            items={[
              'Private egress and allowlist-friendly patterns',
              'Evidence routing to Splunk/ELK/OTel pipelines',
              'Designed to reduce security review friction',
            ]}
          />
          <Card
            title="Air-gapped / restricted environments"
            desc="Patterns for environments with limited or no outbound connectivity."
            items={[
              'Offline dependency management and artifact staging',
              'Metadata-only evidence flows to on-prem log sinks',
              'Explicit configuration of any payload logging',
            ]}
          />
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Support posture</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              TealTiger is open source (MIT). Enterprise support can be delivered through documented workflows and response targets.
              If you require contractual SLAs, discuss scope and channels with our team.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">SLA note (no-guarantee)</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Public pages do not constitute a contractual SLA. Any SLA targets are only binding when explicitly agreed in writing.
            </p>
          </div>
        </div>

        <SecurityChecklist mode="enterprise" className="mt-10" />

        <div className="mt-12" id="evaluation-checklist">
          <h3 className="text-xl font-bold text-white">Evaluation checklist</h3>
          <p className="mt-2 text-slate-300">A procurement- and security-friendly checklist for enterprise review.</p>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ChecklistItem title="Deployment boundary" desc="Confirm where TealTiger runs (service, agent runtime, serverless, cluster) and validate network controls." />
            <ChecklistItem title="Data handling" desc="Verify prompts/outputs are not persisted by default; confirm what metadata is emitted and where it is routed." />
            <ChecklistItem title="Audit & evidence" desc="Validate policy outcome events (policy ID, reason codes, correlation IDs) for SOC workflows." />
            <ChecklistItem title="Access & secrets" desc="Confirm secrets handling patterns and least-privilege permissions." />
            <ChecklistItem title="Observability" desc="Confirm OpenTelemetry compatibility and integration with logs/metrics/traces." />
            <ChecklistItem title="Change management" desc="Confirm versioning, upgrade approach, and rollback strategy." />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/trust" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Trust & boundary →</a>
            <a href="/compliance" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Compliance enablement →</a>
            <a href="mailto:reachout@tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Contact for evaluation →</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 TealTiger. MIT licensed.</span>
            <a href="mailto:reachout@tealtiger.ai" className="text-slate-300 hover:text-white">reachout@tealtiger.ai</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
