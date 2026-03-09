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

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/tealtiger-logo.png"
              alt="TealTiger"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#capabilities"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#how-it-works"
              className="text-slate-300 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#deployments"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Deployments
            </a>
            <a
              href="https://docs.tealtiger.ai"
              className="text-slate-300 hover:text-white transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://docs.tealtiger.ai"
              className="hidden sm:inline-flex rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              View docs
            </a>
            <a
              href="https://github.com/agentguard-ai/tealtiger"
              className="inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span className="ml-2 text-white/90">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.20),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
              <span className="font-semibold">Cloudflare-style security posture</span>
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
                className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors border border-slate-800"
                target="_blank"
                rel="noreferrer"
              >
                Product overview
              </a>
              <a
                href="#get-started"
                className="inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition-colors border border-slate-800"
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
                <li>1) Application/agent calls AI client</li>
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
