import Image from 'next/image';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-xl border border-slate-900 bg-slate-950 text-teal-300 flex items-center justify-center font-semibold">
          {n}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function ArchitecturePage() {
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
            <a href="/architecture" className="text-white font-semibold">Architecture</a>
            <a href="/trust" className="text-slate-300 hover:text-white transition-colors">Trust</a>
            <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">Docs</a>
          </div>
          <a href="/deployments" className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white">Deployments →</a>
        </div>
      </nav>

      <header className="relative border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.18),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            title="Architecture"
            subtitle="A simple runtime boundary: enforce guardrails and budgets at the point of execution, then emit evidence for monitoring and SOC workflows."
          />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <Step
            n="1"
            title="Wrap the model call"
            desc="Your service/agent invokes TealTiger in-process, just before the provider request is sent."
          />
          <Step
            n="2"
            title="Evaluate guardrails & budgets"
            desc="TealTiger evaluates configured controls (PII checks, injection signals, cost ceilings) and returns a decision outcome."
          />
          <Step
            n="3"
            title="Execute or block"
            desc="If allowed, the request proceeds to the provider; otherwise, TealTiger denies or applies a handling action (e.g., redact)."
          />
          <Step
            n="4"
            title="Emit evidence metadata"
            desc="Structured events are emitted (policy ID, outcome, reason codes, correlation ID) for observability and SIEM pipelines."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
          <div className="text-sm font-semibold text-white">Data boundary</div>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            TealTiger is designed to avoid persisting prompts/outputs by default. Evidence is metadata-first and can be routed to your
            existing tooling.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/trust" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Trust notes →</a>
            <a href="/integrations" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Integrations →</a>
            <a href="https://docs.tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900" rel="noreferrer">Docs →</a>
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
