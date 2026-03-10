import Image from 'next/image';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/capabilities" className="text-slate-300 hover:text-white transition-colors">Capabilities</a>
            <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">Deployments</a>
            <a href="/integrations" className="text-white font-semibold">Integrations</a>
            <a href="/trust" className="text-slate-300 hover:text-white transition-colors">Trust</a>
            <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">Docs</a>
          </div>
          <a
            href="https://docs.tealtiger.ai"
            className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-sm font-semibold"
            rel="noreferrer"
          >
            View docs
          </a>
        </div>
      </nav>

      <header className="relative border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.18),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            title="Integrations"
            subtitle="Operationalize governance through the tools enterprises already use: telemetry, SIEM, secrets, and CI/CD."
          />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card
            title="Observability"
            items={[
              'OpenTelemetry traces/spans for policy and provider calls',
              'Metrics: request count, latency, errors, guardrail outcomes',
              'Logs: structured JSON for ingestion pipelines',
            ]}
          />
          <Card
            title="SIEM / security operations"
            items={[
              'Splunk: structured enforcement events',
              'Elastic/ELK: metadata-first audit logs',
              'Correlation IDs for investigations and case linking',
            ]}
          />
          <Card
            title="Secrets & identity"
            items={[
              'Environment variables for local development',
              'Secrets manager patterns (cloud-native + Vault)',
              'Least-privilege guidance for deployment templates',
            ]}
          />
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <Card
            title="CI/CD"
            items={[
              'Pipeline stages for policy validation before deploy',
              'Environment promotion: dev → staging → prod',
              'Rollbacks aligned to change management',
            ]}
          />
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Where to start</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Use deployments for runtime patterns, trust notes for review assumptions, and docs for implementation.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/deployments" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">
                Deployments →
              </a>
              <a href="/trust" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">
                Trust →
              </a>
              <a href="https://docs.tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900" rel="noreferrer">
                Docs →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 TealTiger. MIT licensed.</span>
            <a href="/" className="text-slate-300 hover:text-white">Home</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
