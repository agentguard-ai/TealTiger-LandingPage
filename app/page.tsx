'use client';

import Image from 'next/image';
import type { SVGProps } from 'react';
import { useMemo, useState, type FormEvent } from 'react';

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

function IconFlagEU(props: SVGProps<SVGSVGElement>) {
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

function IconInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22a10 10 0 110-20 10 10 0 010 20z" stroke="currentColor" strokeWidth="1.7" />
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

function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 640 420" fill="none" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 80) rotate(90) scale(280 420)">
          <stop stopColor="#14b8a6" stopOpacity="0.28" />
          <stop offset="1" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="g2" x1="120" y1="60" x2="520" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" stopOpacity="0.25" />
          <stop offset="1" stopColor="#14b8a6" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="420" rx="24" fill="url(#g1)" />
      <rect x="0" y="0" width="640" height="420" rx="24" fill="url(#g2)" />

      <rect x="60" y="70" width="220" height="110" rx="18" stroke="#1f2937" fill="#020617" fillOpacity="0.55" />
      <rect x="360" y="70" width="220" height="110" rx="18" stroke="#1f2937" fill="#020617" fillOpacity="0.55" />
      <rect x="60" y="240" width="520" height="120" rx="18" stroke="#1f2937" fill="#020617" fillOpacity="0.55" />

      <text x="84" y="108" fontSize="14" fill="#e2e8f0" fontFamily="ui-sans-serif, system-ui">Application / Agent</text>
      <text x="384" y="108" fontSize="14" fill="#e2e8f0" fontFamily="ui-sans-serif, system-ui">AI Provider</text>
      <text x="84" y="276" fontSize="14" fill="#e2e8f0" fontFamily="ui-sans-serif, system-ui">TealTiger runtime boundary</text>

      <path d="M280 125H350" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="2" />
      <path d="M350 125l-10-6v12l10-6z" fill="#38bdf8" fillOpacity="0.55" />

      <circle cx="130" cy="315" r="10" fill="#14b8a6" fillOpacity="0.9" />
      <circle cx="260" cy="315" r="10" fill="#14b8a6" fillOpacity="0.9" />
      <circle cx="390" cy="315" r="10" fill="#14b8a6" fillOpacity="0.9" />
      <circle cx="520" cy="315" r="10" fill="#14b8a6" fillOpacity="0.9" />

      <text x="150" y="320" fontSize="13" fill="#cbd5e1" fontFamily="ui-sans-serif, system-ui">Guardrails</text>
      <text x="280" y="320" fontSize="13" fill="#cbd5e1" fontFamily="ui-sans-serif, system-ui">Budgets</text>
      <text x="410" y="320" fontSize="13" fill="#cbd5e1" fontFamily="ui-sans-serif, system-ui">Evidence</text>
      <text x="540" y="320" fontSize="13" fill="#cbd5e1" fontFamily="ui-sans-serif, system-ui">OTel</text>

      <path d="M140 315H250" stroke="#14b8a6" strokeOpacity="0.55" strokeWidth="2" />
      <path d="M270 315H380" stroke="#14b8a6" strokeOpacity="0.55" strokeWidth="2" />
      <path d="M400 315H510" stroke="#14b8a6" strokeOpacity="0.55" strokeWidth="2" />

      <text x="84" y="352" fontSize="12" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui">
        Enforce controls at execution time • Emit metadata-only audit events
      </text>
    </svg>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
  note,
}: {
  quote: string;
  name: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 hover:bg-slate-950/80 transition-colors">
      <p className="text-sm leading-relaxed text-slate-200">“{quote}”</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-slate-400">{title}</div>
        </div>
        {note ? <div className="text-xs text-slate-500">{note}</div> : null}
      </div>
    </div>
  );
}

export default function Home() {
  const legalTooltip =
    "Legal note: TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice. Full compliance depends on your organization’s risk management, documentation, oversight, and controls beyond this SDK.";

  const [emailValue, setEmailValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'invalid'>('idle');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('TealTiger newsletter signup');
    const body = encodeURIComponent(
      `Please add me to the TealTiger newsletter.

Email: ${emailValue}

Topics: runtime governance, guardrails, budgets, audit evidence, deployments.`
    );
    return `mailto:reachout@tealtiger.ai?subject=${subject}&body=${body}`;
  }, [emailValue]);

  function onNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim());
    setStatus(ok ? 'ok' : 'invalid');
    if (ok) window.location.href = mailtoHref;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
              <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/capabilities" className="text-slate-300 hover:text-white transition-colors">Capabilities</a>
            <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">Deployments</a>
            <a href="/enterprise" className="text-slate-300 hover:text-white transition-colors">Enterprise</a>
            <a href="/compliance" className="text-slate-300 hover:text-white transition-colors">Compliance</a>
            <a href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case studies</a>
            <a href="/roadmap" className="text-slate-300 hover:text-white transition-colors">Roadmap</a>
            <a href="/support" className="text-slate-300 hover:text-white transition-colors">Support</a>
            <a href="/integrations" className="text-slate-300 hover:text-white transition-colors">Integrations</a>
            <a href="/trust" className="text-slate-300 hover:text-white transition-colors">Trust</a>
            <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white transition-colors" rel="noreferrer">Docs</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:reachout@tealtiger.ai"
              className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white"
            >
              Reach out
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.22),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
                <span className="font-semibold">Security product posture</span>
                <span className="text-slate-400">without a new platform</span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Runtime governance for AI systems — <span className="text-teal-300">guardrails, budgets, evidence</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
                TealTiger applies enforceable controls at the point of execution. Protect model calls, contain spend, and emit audit
                events for security workflows — across providers.
              </p>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Runs inside your application boundary. By default, TealTiger does not persist prompts or outputs — only structured
                enforcement metadata is emitted for monitoring and audit workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/capabilities"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-slate-800 text-sm font-semibold"
                >
                  Explore capabilities →
                </a>
                <a
                  href="/enterprise"
                  className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-sm font-semibold"
                >
                  Enterprise evaluation
                </a>
                <a
                  href="#get-started"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white"
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

            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-teal-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-900 bg-slate-950/60 p-3 shadow-2xl">
                <HeroIllustration className="w-full h-auto" />
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">Illustration: request path + enforcement boundary (conceptual)</p>
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

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Testimonials"
            title="Built for security and platform teams"
            subtitle="Early feedback from engineers evaluating runtime governance patterns. Names anonymized at request."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The boundary-first approach is what we needed — decisions are explicit and the evidence is easy to route to our SOC."
              name="Security Engineering"
              title="Design partner"
              note="Anonymized"
            />
            <TestimonialCard
              quote="Budgets as a first-class control made the discussion with FinOps much simpler. It’s a practical guardrail, not a dashboard."
              name="Platform Engineering"
              title="Large enterprise"
              note="Anonymized"
            />
            <TestimonialCard
              quote="We liked that nothing is persisted by default. That single detail removes a lot of friction in security review."
              name="AppSec"
              title="Regulated environment"
              note="Anonymized"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Enterprise-ready navigation</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Use Enterprise, Compliance, Support, and Case studies pages for procurement and review conversations.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/enterprise"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Enterprise →
              </a>
              <a
                href="/compliance"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Compliance →
              </a>
              <a
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EU AI Act */}
      <section id="eu-ai-act" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Governance"
            title="EU AI Act: technical enablement (controls & evidence)"
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
              <div className="text-sm font-semibold text-white">What TealTiger contributes</div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                TealTiger helps operationalize selected technical obligations by enforcing runtime guardrails, controlling consumption,
                and producing audit-ready evidence (events/logs) for monitoring and incident workflows.
              </p>
              <a
                href="/compliance"
                className="mt-5 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                See compliance enablement →
              </a>
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
                TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice. Full compliance depends
                on your organizational processes, risk management, documentation, and controls beyond the SDK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Newsletter"
            title="Updates for security and platform teams"
            subtitle="Short, technical updates on runtime governance patterns, deployments, and evidence workflows."
          />

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <form onSubmit={onNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="email"
              />
              <button
                type="submit"
                className="rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Subscribe
              </button>
            </form>

            {status === 'invalid' ? (
              <p className="mt-3 text-sm text-rose-300">Please enter a valid email address.</p>
            ) : status === 'ok' ? (
              <p className="mt-3 text-sm text-teal-200">Opening your email client to confirm subscription…</p>
            ) : (
              <p className="mt-3 text-sm text-slate-400">
                No backend required right now — subscription uses your email client (mailto). We will never ask for API keys or
                sensitive data.
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://blogs.tealtiger.ai"
                className="text-sm font-semibold text-teal-300 hover:text-teal-200"
                rel="noreferrer"
              >
                Read the blog →
              </a>
              <a href="/support" className="text-sm font-semibold text-teal-300 hover:text-teal-200">
                Support →
              </a>
            </div>
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
                <a href="/deployments" className="text-sm text-teal-300 hover:text-teal-200">
                  Deployments
                </a>
                <a href="/integrations" className="text-sm text-teal-300 hover:text-teal-200">
                  Integrations
                </a>
                <a href="/enterprise" className="text-sm text-teal-300 hover:text-teal-200">
                  Enterprise
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
              <h4 className="text-sm font-semibold text-white mb-3">Enterprise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/enterprise" className="text-slate-300 hover:text-white transition-colors">
                    Enterprise overview
                  </a>
                </li>
                <li>
                  <a href="/compliance" className="text-slate-300 hover:text-white transition-colors">
                    Compliance enablement
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-slate-300 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/roadmap" className="text-slate-300 hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/capabilities" className="text-slate-300 hover:text-white transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="/deployments" className="text-slate-300 hover:text-white transition-colors">
                    Deployments
                  </a>
                </li>
                <li>
                  <a href="/integrations" className="text-slate-300 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="/trust" className="text-slate-300 hover:text-white transition-colors">
                    Trust
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
                    Case studies
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.tealtiger.ai"
                    className="text-slate-300 hover:text-white transition-colors"
                    rel="noreferrer"
                  >
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
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-slate-900 pt-8">
            <p className="text-xs text-slate-400">© 2026 TealTiger. MIT licensed.</p>
            <div className="text-xs text-slate-400">
              Contact: <span className="text-slate-300">reachout@tealtiger.ai</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
