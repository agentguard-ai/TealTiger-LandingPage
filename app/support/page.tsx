import Image from 'next/image';

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
          <li key={i} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SupportPage() {
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
            title="Support"
            subtitle="Support channels, disclosure process, response expectations, and how to report security issues."
          />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card
            title="Community support"
            desc="Best effort support for open-source users."
            items={[
              'GitHub issues for bug reports and feature requests',
              'GitHub discussions for questions and patterns',
              'Docs for reference deployments and integrations',
            ]}
          />
          <Card
            title="Enterprise support"
            desc="Coordination for pilots and production rollouts."
            items={['Email channel: reachout@tealtiger.ai', 'Scope-driven response targets (by agreement)', 'Architecture and deployment guidance for your environment']}
          />
          <Card
            title="Security disclosures"
            desc="Report vulnerabilities responsibly."
            items={['Follow SECURITY.md disclosure process', 'Do not open public issues for sensitive security reports', 'Provide reproduction steps and impact details']}
          />
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Response expectations</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">Response times depend on channel and severity. Public pages do not constitute a contractual SLA.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-sky-400/70" />Critical security issues are prioritized via private disclosure.</li>
              <li className="flex gap-2"><span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-sky-400/70" />Enterprise pilots can define response targets in writing.</li>
              <li className="flex gap-2"><span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-sky-400/70" />Non-critical issues are handled on a best-effort basis.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">How to report an issue</div>
            <ol className="mt-3 space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>For security vulnerabilities: follow SECURITY.md and use private channels.</li>
              <li>For bugs: open a GitHub issue with steps, expected vs actual behavior, and environment details.</li>
              <li>For enterprise evaluation help: email reachout@tealtiger.ai with your deployment constraints.</li>
            </ol>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:reachout@tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Email support →</a>
              <a href="https://github.com/agentguard-ai/tealtiger/blob/main/SECURITY.md" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900" rel="noreferrer">SECURITY.md →</a>
              <a href="https://github.com/agentguard-ai/tealtiger/issues" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900" rel="noreferrer">GitHub issues →</a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
          <div className="text-sm font-semibold text-white">Procurement note</div>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">If you require formal support terms, SLAs, or procurement artifacts, contact us and we will align on scope.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/enterprise" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Enterprise →</a>
            <a href="/trust" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Trust →</a>
          </div>
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
