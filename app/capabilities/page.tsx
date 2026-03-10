import Image from 'next/image';
import type { ReactNode, SVGProps } from 'react';

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.8 1.8 3.7-4.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M20 9h-4.5A2.5 2.5 0 0013 11.5v1A2.5 2.5 0 0015.5 15H20"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="16.6" cy="12.0" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconActivity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 13h4l2-6 4 14 2-8h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.8 18.5H18a4 4 0 00.3-8 5.2 5.2 0 00-10.1-1.6A3.7 3.7 0 008.8 18.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 4.5h10A2.5 2.5 0 0119 7v12.5a2 2 0 00-2-2h-10A2.5 2.5 0 014.5 15V7A2.5 2.5 0 016.5 4.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8 8h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 11h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
          <span className="font-semibold tracking-wide">{eyebrow}</span>
        </div>
      ) : null}

      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Pillar({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">{icon}</div>
        <div>
          <div className="text-white font-semibold">{title}</div>
          <div className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-teal-400/80 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
              <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/capabilities" className="text-white font-semibold">
              Capabilities
            </a>
            <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">
              Deployments
            </a>
            <a href="/architecture" className="text-slate-300 hover:text-white transition-colors">
              Architecture
            </a>
            <a href="/trust" className="text-slate-300 hover:text-white transition-colors">
              Trust
            </a>
            <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">
              Docs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://docs.tealtiger.ai"
              className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-sm font-semibold"
              rel="noreferrer"
            >
              View docs
            </a>
            <a
              href="https://github.com/agentguard-ai/tealtiger"
              className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>
        </div>
      </nav>

      <header className="relative border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.18),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Capabilities"
            title="Runtime controls for production AI systems"
            subtitle="TealTiger focuses on enforceable boundaries at execution time — guardrails, budgets, and audit-ready evidence."
          />

          <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
              <div className="text-sm font-semibold text-white">Runs in your boundary</div>
              <div className="mt-1 text-sm text-slate-300">No prompt/output persistence by default.</div>
            </div>
            <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
              <div className="text-sm font-semibold text-white">Evidence-first</div>
              <div className="mt-1 text-sm text-slate-300">Metadata-only events for SOC pipelines.</div>
            </div>
            <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
              <div className="text-sm font-semibold text-white">OTel-friendly</div>
              <div className="mt-1 text-sm text-slate-300">Structured logs/traces for observability.</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="/deployments"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-slate-800 text-sm font-semibold"
            >
              View deployment options →
            </a>
            <a
              href="https://docs.tealtiger.ai/why-tealtiger"
              className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-sm font-semibold"
              rel="noreferrer"
            >
              Product overview
            </a>
          </div>
        </div>
      </header>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Four capability pillars</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Organized for how enterprise teams evaluate security controls: runtime risk reduction, cost containment, evidence, and
              operational integration.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Pillar
              icon={<IconShield className="h-6 w-6" />}
              title="Runtime guardrails"
              desc="Apply checks at the point of model invocation and enforce outcomes consistently across services."
              bullets={[
                'PII and sensitive content detection on inputs/outputs',
                'Prompt injection / policy bypass mitigation hooks',
                'Configurable allow / deny / redact handling patterns',
              ]}
            />

            <Pillar
              icon={<IconWallet className="h-6 w-6" />}
              title="Budgets & economic controls"
              desc="Prevent runaway spend and keep AI usage within defined limits per request or time window."
              bullets={[
                'Per-request ceilings and time-window budgets',
                'Budget windows suited for services, sessions, or tenants',
                'Reason-coded denials for budget violations',
              ]}
            />

            <Pillar
              icon={<IconActivity className="h-6 w-6" />}
              title="Audit & evidence"
              desc="Emit structured decision metadata so security teams can investigate and report with confidence."
              bullets={[
                'Policy decision events with outcome + reason codes',
                'Correlation IDs for request-to-event traceability',
                'Metadata-only evidence by default (payloads configurable)',
              ]}
            />

            <Pillar
              icon={<IconCloud className="h-6 w-6" />}
              title="Deployment & operations"
              desc="Fit into existing environments: application code, containers, serverless, and infrastructure-as-code."
              bullets={[
                'SDK-first integration for services and agents',
                'Operational hooks for logging, metrics, and tracing',
                'Patterns for multi-environment rollout (dev/stage/prod)',
              ]}
            />
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 bg-slate-950">
                <div className="text-sm font-semibold text-white">Example: decision metadata</div>
                <div className="text-xs text-slate-400">JSON</div>
              </div>
              <div className="px-6 py-5">
                <pre className="text-sm text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{`{
  "policyId": "pii-default",
  "outcome": "deny",
  "reasonCodes": ["PII_DETECTED"],
  "correlationId": "req_2f8c...",
  "timestamp": "2026-03-10T07:12:00Z"
}`}</code>
                </pre>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                  <IconBook className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Learn the patterns</div>
                  <div className="text-sm text-slate-300">Documentation references for adoption and rollout.</div>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Governance overview and runtime enforcement model</li>
                <li>• Audit events and evidence routing</li>
                <li>• Cost & budget boundaries</li>
                <li>• Deployment patterns and integrations</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://docs.tealtiger.ai"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
                  rel="noreferrer"
                >
                  Docs →
                </a>
                <a
                  href="/deployments"
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Deployments →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs text-slate-400">© 2026 TealTiger. MIT licensed.</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <a href="/" className="text-slate-300 hover:text-white">Home</a>
              <a href="/deployments" className="text-slate-300 hover:text-white">Deployments</a>
              <a href="/trust" className="text-slate-300 hover:text-white">Trust</a>
              <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white" rel="noreferrer">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
