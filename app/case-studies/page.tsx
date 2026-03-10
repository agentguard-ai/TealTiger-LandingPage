import Image from 'next/image';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Study({
  title,
  context,
  before,
  after,
  notes,
}: {
  title: string;
  context: string;
  before: string[];
  after: string[];
  notes: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{context}</p>
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500">Before</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            {before.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-rose-400/70" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500">After</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            {after.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xs uppercase tracking-wide text-slate-500">Notes</div>
        <ul className="mt-2 space-y-2 text-sm text-slate-300">
          {notes.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-sky-400/70" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
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
            title="Case studies (anonymized)"
            subtitle="Three short before/after examples showing how runtime governance reduces friction and improves auditability."
          />
          <p className="mt-6 text-sm text-slate-400 text-center">These are representative patterns; details anonymized.</p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-1 gap-6">
          <Study
            title="Faster security review"
            context="A platform team needed to clear an LLM feature through AppSec and privacy review."
            before={[
              'Unclear data boundary (what is logged, what is stored)',
              'Inconsistent controls across services and environments',
              'No uniform evidence for SOC workflows',
            ]}
            after={[
              'Default: no prompt/output persistence; explicit policy-controlled logging',
              'Deterministic decisions with reason codes and correlation IDs',
              'Metadata-only audit events routed into existing monitoring/SIEM',
            ]}
            notes={['Trust page + evidence semantics reduced review ambiguity.', 'Deployment templates helped standardize rollout.']}
          />

          <Study
            title="Reduced spend incidents"
            context="A team experienced sudden usage spikes from autonomous workflows and retries."
            before={[
              'No enforceable budgets at runtime',
              'Spend alarms triggered after the fact',
              'Hard to attribute cost by service and environment',
            ]}
            after={[
              'Per-request ceilings and budget windows enforced at execution time',
              'Budget violations emitted as structured events for alerting',
              'Consistent policy-driven attribution across services',
            ]}
            notes={['Budgets treated as security boundaries, not only FinOps metrics.', 'Alerting wired via existing observability/incident workflows.']}
          />

          <Study
            title="Audit evidence readiness"
            context="A compliance-driven program needed traceable records of runtime decisions and changes."
            before={[
              'Logs were unstructured and hard to correlate across services',
              'Controls existed but were not consistently enforced',
              'Evidence required manual assembly during audits',
            ]}
            after={[
              'Structured policy decision events with consistent fields',
              'Trace context and correlation IDs for investigations',
              'Repeatable evidence routing to SIEM and log storage',
            ]}
            notes={['Use compliance page as technical enablement mapping guidance.', 'Keep payload logging explicitly scoped and justified.']}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/enterprise" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Enterprise →</a>
          <a href="/deployments" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Deployments →</a>
          <a href="mailto:reachout@tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Request a pilot →</a>
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
