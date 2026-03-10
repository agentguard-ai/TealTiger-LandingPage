import Image from 'next/image';
import type { SVGProps } from 'react';
import SecurityChecklist from '../_components/security-checklist';

function IconLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 10V8a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7 10h10a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 14v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconDoc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 3h7l4 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 3v5h5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 15h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

export default function TrustPage() {
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
            <a href="/trust" className="text-white font-semibold">Trust</a>
            <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">Deployments</a>
            <a href="/integrations" className="text-slate-300 hover:text-white transition-colors">Integrations</a>
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
            title="Trust & data boundary"
            subtitle="Clear operational assumptions for enterprise review: what runs where, what is emitted, and what is not persisted by default."
          />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300"><IconLock className="h-6 w-6" /></div>
              <div>
                <div className="text-sm font-semibold text-white">Runs in your environment</div>
                <div className="text-sm text-slate-300">SDK-first design intended to execute inside your boundary.</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Works with your network controls (no outbound dependency required for TealTiger itself).</li>
              <li>• Supports private environments via standard deployment patterns.</li>
              <li>• You choose where evidence is sent (SIEM/observability/log sinks).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300"><IconDoc className="h-6 w-6" /></div>
              <div>
                <div className="text-sm font-semibold text-white">Evidence, not payloads</div>
                <div className="text-sm text-slate-300">Audit output designed to be metadata-first by default.</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Policy outcomes + reason codes + correlation IDs.</li>
              <li>• No prompt/output persistence by default.</li>
              <li>• Payload logging can be explicit and scoped per policy.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Enterprise review shortcuts</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">Use these resources during security and procurement evaluation.</p>
            <div className="mt-4 space-y-2 text-sm">
              <a className="text-teal-300 hover:text-teal-200 font-semibold" href="/enterprise">Enterprise →</a>
              <a className="text-teal-300 hover:text-teal-200 font-semibold" href="/deployments">Deployment options →</a>
              <a className="text-teal-300 hover:text-teal-200 font-semibold" href="/integrations">Integrations →</a>
              <a className="text-teal-300 hover:text-teal-200 font-semibold" href="/support">Support →</a>
            </div>
          </div>
        </div>

        <SecurityChecklist mode="trust" className="mt-10" />

        <div className="mt-10 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
          <div className="text-sm font-semibold text-white">Disclosure</div>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            TealTiger is a technical control layer. Regulatory compliance depends on your organizational processes, documentation,
            oversight, and broader controls beyond this SDK.
          </p>
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
