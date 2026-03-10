import Image from 'next/image';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Badge({ status }: { status: 'Now' | 'Next' | 'Later' }) {
  let cls = 'bg-slate-800/40 text-slate-200 border-slate-700';
  if (status === 'Now') cls = 'bg-teal-500/20 text-teal-200 border-teal-900/40';
  if (status === 'Next') cls = 'bg-sky-500/15 text-sky-200 border-sky-900/40';
  return <span className={"shrink-0 rounded-full border px-3 py-1 text-xs font-semibold " + cls}>{status}</span>;
}

function Item({
  title,
  desc,
  status,
}: {
  title: string;
  desc: string;
  status: 'Now' | 'Next' | 'Later';
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</div>
        </div>
        <Badge status={status} />
      </div>
    </div>
  );
}

export default function RoadmapPage() {
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
            title="Roadmap"
            subtitle="What we are exploring next — shared for planning transparency. This is not a commitment or guarantee."
          />
          <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Non-guarantee notice</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Roadmap items may change based on user feedback, technical feasibility, and security review. Timelines and scope are not
              contractual unless explicitly agreed in writing.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Now</h2>
            <p className="mt-2 text-sm text-slate-300">Hardened patterns for enterprise deployment and evidence workflows.</p>
            <div className="mt-4 space-y-4">
              <Item status="Now" title="Deployment accelerators" desc="More templates and reference patterns for Kubernetes, serverless, and CI/CD with policy validation." />
              <Item status="Now" title="Evidence routing" desc="Structured event schemas, better correlation, and guidance for SIEM/OTel pipelines." />
              <Item status="Now" title="Enterprise documentation" desc="Procurement-friendly pages for trust, compliance enablement, and evaluation checklists." />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Next</h2>
            <p className="mt-2 text-sm text-slate-300">Improvements driven by platform teams and security reviews.</p>
            <div className="mt-4 space-y-4">
              <Item status="Next" title="Policy packs" desc="Curated policy templates for common workflows (PII, injection mitigation, cost boundaries, multi-tenancy)." />
              <Item status="Next" title="Integration depth" desc="More guided setups for Splunk/ELK, OpenTelemetry, and secrets managers across clouds." />
              <Item status="Next" title="Evaluation harness" desc="Reproducible scripts and golden corpora for pre-prod validation and regression gating." />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Later</h2>
            <p className="mt-2 text-sm text-slate-300">Longer-horizon areas under consideration.</p>
            <div className="mt-4 space-y-4">
              <Item status="Later" title="Expanded governance stack" desc="Additional layers for risk/assurance and industry packs aligned to emerging standards." />
              <Item status="Later" title="Marketplace distribution" desc="Exploring distribution options that simplify enterprise procurement." />
              <Item status="Later" title="Managed offerings" desc="Potential hosted convenience layers while preserving customer boundary controls." />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
          <div className="text-sm font-semibold text-white">Want to influence the roadmap?</div>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">Share your deployment constraints and SOC requirements — we prioritize based on enterprise adoption friction.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:reachout@tealtiger.ai" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white">Reach out →</a>
            <a href="/enterprise" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Enterprise →</a>
            <a href="/support" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900">Support →</a>
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
