'use client';

import Image from 'next/image';

function IconShield(props: React.SVGProps<SVGSVGElement>) {
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

function IconWallet(props: React.SVGProps<SVGSVGElement>) {
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

function IconActivity(props: React.SVGProps<SVGSVGElement>) {
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

function IconCloud(props: React.SVGProps<SVGSVGElement>) {
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

function IconFlagEU(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M6 4h11l-1.4 3L17 10H6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 6.3l.3.7.7.1-.6.5.2.7-.6-.4-.6.4.2-.7-.6-.5.7-.1.3-.7z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function IconInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22a10 10 0 110-20 10 10 0 010 20z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M12 10.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="7.6" r="1" fill="currentColor" />
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

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Tooltip({ id, text }: { id: string; text: string }) {
  return (
    <span
      id={id}
      role="tooltip"
      className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-[22rem] -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs leading-relaxed text-slate-200 shadow-xl opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
    >
      {text}
    </span>
  );
}

export default function Home() {
  const legalTooltip =
    "Legal note: TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice. Full compliance depends on your organization’s risk management, documentation, oversight, and controls beyond this SDK.";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#capabilities" className="text-slate-300 hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#eu-ai-act" className="text-slate-300 hover:text-white transition-colors">
              EU AI Act
            </a>
            <a href="#deployments" className="text-slate-300 hover:text-white transition-colors">
              Deployments
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

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.22),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
              <span className="font-semibold">Security product posture</span>
              <span className="text-slate-400">without a new platform</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Runtime governance for AI systems —
              <span className="text-teal-300"> guardrails, budgets, evidence</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
              TealTiger applies enforceable controls at the point of execution. Protect model calls,
              contain spend, and emit audit events for security workflows — across providers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://docs.tealtiger.ai/why-tealtiger"
                className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-sm font-semibold"
                rel="noreferrer"
              >
                Product overview
              </a>
              <a
                href="#get-started"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-slate-800 text-sm font-semibold"
              >
                Get started
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
                <div className="text-sm font-semibold text-white">Guardrails</div>
                <div className="mt-1 text-sm text-slate-300">PII, injection, safety checks</div>
              </div>
              <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
                <div className="text-sm font-semibold text-white">Budgets</div>
                <div className="mt-1 text-sm text-slate-300">limits across time windows</div>
              </div>
              <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-4">
                <div className="text-sm font-semibold text-white">Evidence</div>
                <div className="mt-1 text-sm text-slate-300">SIEM-ready audit events</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Outcomes */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle
            title="Reduce runtime risk in AI applications"
            subtitle="Autonomous workflows fail at execution time — through uncontrolled spend, data exposure, and inconsistent controls. TealTiger enforces boundaries where model calls happen."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                  <IconWallet className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">Unbounded spend</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Enforce per-request limits and budgets to prevent runaway usage and surprise bills.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                  <IconShield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">Data exposure</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Detect and handle sensitive input/output (PII) and reduce prompt injection risk.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                  <IconActivity className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">Control drift</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Keep enforcement consistent across services with structured audit events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="How it works"
            title="Enforcement at the point of execution"
            subtitle="Wrap model calls with guardrails and budgets, then emit evidence for audit and monitoring pipelines."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
              <div className="text-sm font-semibold text-white">Request path</div>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                <li>1) Application/agent calls the AI client</li>
                <li>2) TealTiger applies guardrails + budget checks</li>
                <li>3) Provider request executes</li>
                <li>4) Enforcement events emitted for audit/SIEM</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 bg-slate-950">
                <div className="text-sm font-semibold text-white">Drop-in wrapper</div>
                <div className="text-xs text-slate-400">TypeScript</div>
              </div>
              <div className="px-6 py-5">
                <pre className="text-sm text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{`import { TealOpenAI } from 'tealtiger';

const client = new TealOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  enableGuardrails: true,
  enableCostTracking: true
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Capabilities"
            title="Controls built for real deployments"
            subtitle="Security teams need enforceable boundaries and evidence. Developers need drop-in adoption."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Guardrails', desc: 'PII, injection, safety checks.' },
              { title: 'Budgets', desc: 'Per request and time-window limits.' },
              { title: 'Audit events', desc: 'Structured events for SIEM workflows.' },
              { title: 'Multi-provider', desc: 'Standardize controls across providers.' },
              { title: 'Low overhead', desc: 'Designed for runtime enforcement.' },
              { title: 'Open source', desc: 'Transparent by default (MIT).' },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors"
              >
                <div className="text-white font-semibold">{f.title}</div>
                <div className="mt-2 text-sm text-slate-300">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU AI Act */}
      <section id="eu-ai-act" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Governance"
            title="EU AI Act: compliance support (technical controls)"
            subtitle="TealTiger can be leveraged to support EU AI Act compliance efforts by providing runtime controls and audit evidence."
          />

          <div className="mt-8 max-w-5xl mx-auto flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
              <span className="text-teal-300">
                <IconFlagEU className="h-5 w-5" />
              </span>
              <span className="font-semibold">EU AI Act</span>
              <span className="text-slate-400">technical enablement</span>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 lg:col-span-2">
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                  <IconFlagEU className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">What TealTiger contributes</div>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    TealTiger helps operationalize selected technical obligations by enforcing runtime guardrails, controlling consumption,
                    and producing audit-ready evidence (events/logs) for monitoring and incident workflows.
                  </p>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
                      <div className="text-sm font-semibold text-white">Runtime risk controls</div>
                      <div className="mt-1 text-sm text-slate-300">Guardrails, budgets, and policy hooks at execution time.</div>
                    </div>
                    <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
                      <div className="text-sm font-semibold text-white">Audit evidence</div>
                      <div className="mt-1 text-sm text-slate-300">Structured events for traceability and oversight.</div>
                    </div>
                  </div>

                  <a
                    href="https://docs.tealtiger.ai/governance/eu-ai-act-compliance"
                    className="mt-5 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                    rel="noreferrer"
                  >
                    View EU AI Act mapping in docs →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold text-white">Compliance disclaimer</div>
                <span className="relative group">
                  <button
                    type="button"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-describedby="eu-legal-tooltip"
                    aria-label="Legal note"
                  >
                    <IconInfo className="h-4 w-4" />
                  </button>
                  <Tooltip id="eu-legal-tooltip" text={legalTooltip} />
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice.
                Full compliance depends on your organizational processes, risk management, documentation, and controls beyond the SDK.
              </p>

              <div className="mt-4 rounded-xl border border-slate-900 bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Recommended</div>
                <div className="mt-1 text-sm text-slate-300">Use TealTiger as a technical control layer alongside your compliance program.</div>
              </div>
            </div>
          </div>

          {/* EU AI Act FAQ */}
          <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                <IconShield className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">EU AI Act compliance FAQ</div>
                <div className="text-sm text-slate-300">Common questions about how TealTiger supports compliance workstreams.</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <details className="group rounded-xl border border-slate-900 bg-slate-950 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                  Does TealTiger make an application “EU AI Act compliant”?
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                  No. TealTiger provides technical controls and evidence that can support compliance efforts.
                  Compliance requires organizational processes (risk management, documentation, governance, oversight) beyond the SDK.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-900 bg-slate-950 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                  Which EU AI Act workstreams does TealTiger typically support?
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Teams commonly use TealTiger for runtime risk controls (guardrails, budgets), monitoring hooks, and audit evidence.
                  The exact mapping depends on system category, use case, configuration, and your governance program.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-900 bg-slate-950 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                  What evidence can TealTiger produce?
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                  TealTiger can emit structured enforcement events (e.g., guardrail decisions, budget checks) that support traceability and oversight.
                  Evidence formats and destinations are implementation-specific.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-900 bg-slate-950 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                  Where can I see the EU AI Act mapping?
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                  See the detailed mapping and notes in the documentation page linked above.
                  Treat mappings as guidance and validate against your specific obligations.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-900 bg-slate-950 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                  How should TealTiger be used in a compliance program?
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Use TealTiger as a technical control layer: enforce runtime boundaries, route evidence to your monitoring/SIEM, and integrate with
                  your risk assessment, documentation, and oversight processes.
                </div>
              </details>
            </div>

            <div className="mt-6">
              <a
                href="https://docs.tealtiger.ai/governance/eu-ai-act-compliance"
                className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                rel="noreferrer"
              >
                Read EU AI Act details →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deployments */}
      <section id="deployments" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Deployments"
            title="Governance that follows the workload"
            subtitle="Adopt TealTiger where AI runs — in application code, containers, serverless, and IaC."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'SDK', desc: 'Embed controls in your services.' },
              { title: 'Containers', desc: 'Standardize rollout across teams.' },
              { title: 'Serverless', desc: 'Patterns for ephemeral execution.' },
              { title: 'IaC', desc: 'Declare budgets/controls via Terraform.' },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors"
              >
                <div className="text-white font-semibold">{d.title}</div>
                <div className="mt-2 text-sm text-slate-300">{d.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">
                <IconCloud className="h-6 w-6" />
              </div>
              <div className="text-sm font-semibold text-white">SIEM workflows</div>
            </div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Emit structured enforcement events for monitoring and incident response (including Splunk pipelines).
            </p>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="get-started" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Get started"
            title="Adopt in minutes"
            subtitle="Install the SDK, enable controls, and route events to your existing security tooling."
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
              <div className="text-sm font-semibold text-white">Install</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-slate-900 bg-slate-950 px-4 py-3">
                  <div className="text-xs text-slate-400">npm</div>
                  <code className="text-sm text-teal-300 font-semibold">npm install tealtiger</code>
                </div>
                <div className="rounded-xl border border-slate-900 bg-slate-950 px-4 py-3">
                  <div className="text-xs text-slate-400">pip</div>
                  <code className="text-sm text-teal-300 font-semibold">pip install tealtiger</code>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://docs.tealtiger.ai" className="text-sm text-teal-300 hover:text-teal-200" rel="noreferrer">
                  Docs
                </a>
                <a
                  href="https://github.com/agentguard-ai/tealtiger"
                  className="text-sm text-teal-300 hover:text-teal-200"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
              <div className="text-sm font-semibold text-white">Next</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Choose guardrail presets for workflows</li>
                <li>• Set budgets per request and per time window</li>
                <li>• Route audit events to SIEM/monitoring</li>
                <li>• Standardize rollout using container/serverless/IaC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/tealtiger-logo.png" alt="TealTiger" width={28} height={28} className="rounded" />
                <span className="text-lg font-semibold text-white">TealTiger</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Open-source runtime controls for AI applications — guardrails, budgets, and audit events.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="text-slate-300 hover:text-white transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#eu-ai-act" className="text-slate-300 hover:text-white transition-colors">
                    EU AI Act
                  </a>
                </li>
                <li>
                  <a href="#deployments" className="text-slate-300 hover:text-white transition-colors">
                    Deployments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://blogs.tealtiger.ai"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/agentguard-ai/tealtiger"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Trust</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/agentguard-ai/tealtiger/blob/main/SECURITY.md"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/agentguard-ai/tealtiger/blob/main/LICENSE"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/agentguard-ai/tealtiger/blob/main/CONTRIBUTING.md"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
                    Contributing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-slate-900 pt-8">
            <p className="text-xs text-slate-400">© 2026 TealTiger. MIT licensed.</p>
            <div className="text-xs text-slate-400">
              Contact: <span className="text-slate-300">support@tealtiger.co.in</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
