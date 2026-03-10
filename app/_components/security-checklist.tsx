'use client';

import { useMemo, useState } from 'react';
import type { SVGProps } from 'react';

function IconBoundary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="1.7" opacity="0.55" />
      <path d="M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.7" opacity="0.55" strokeLinejoin="round" />
    </svg>
  );
}

function IconDatabaseSlash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 7c0 2.2 2.7 4 6 4s6-1.8 6-4-2.7-4-6-4-6 1.8-6 4z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M6 7v6c0 2.2 2.7 4 6 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 7v6c0 1-.6 2-1.7 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconReceipt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 8h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconRoute(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6h6v6H6V6z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 12h6v6h-6v-6z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 9h3c1.7 0 3 1.3 3 3v0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 12v3c0 1.7 1.3 3 3 3h0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconGitMerge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 6h3a5 5 0 015 5v0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 18h3a5 5 0 005-5v0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconChevron(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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

function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function Tooltip({ id, text }: { id: string; text: string }) {
  return (
    <span
      id={id}
      role="tooltip"
      className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-[20rem] -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs leading-relaxed text-slate-200 shadow-xl opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
    >
      {text}
    </span>
  );
}

export type SecurityChecklistMode = 'trust' | 'enterprise';

export default function SecurityChecklist({
  mode,
  className,
}: {
  mode: SecurityChecklistMode;
  className?: string;
}) {
  const items = useMemo(
    () =>
      [
        {
          icon: IconBoundary,
          title: 'Runs inside customer boundary',
          desc: 'Service / serverless / container / cluster. No external control plane required.',
          tip: 'Confirm runtime location and network boundary. TealTiger should execute in-process or within your infrastructure boundary.',
        },
        {
          icon: IconDatabaseSlash,
          title: 'Default: no prompt/output persistence',
          desc: 'Evidence is metadata-first unless explicitly configured by policy.',
          tip: 'Verify default data handling: prompts/outputs are not stored unless you explicitly enable payload logging via policy.',
        },
        {
          icon: IconReceipt,
          title: 'Structured enforcement evidence',
          desc: 'Policy decision events: outcome, reason codes, timestamps, correlation ID.',
          tip: 'Check event fields and traceability: policyId/outcome/reasonCodes/correlationId, suitable for SOC workflows.',
        },
        {
          icon: IconRoute,
          title: 'Customer-controlled evidence routing',
          desc: 'Route to Splunk/ELK/OTel/log sinks based on environment and retention policy.',
          tip: 'Confirm where audit events go and who controls routing/retention. Ensure log sinks match retention rules.',
        },
        {
          icon: IconGitMerge,
          title: 'Change management friendly',
          desc: 'Versioned policy/config with CI/CD promotion and rollback guidance.',
          tip: 'Validate governance change controls: policy versioning, approvals, promotion across environments, rollback strategy.',
        },
      ] as const,
    []
  );

  const copyPayload = useMemo(() => {
    const lines = items.map((i) => `• ${i.title}: ${i.desc}`);
    return [
      'TealTiger — security review checklist',
      ...lines,
      '',
      'Note: guidance for review workflows; not a compliance certification or legal advice.',
    ].join('\n');
  }, [items]);

  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');

  async function onCopy() {
    const ok = await copyText(copyPayload);
    setCopied(ok ? 'ok' : 'fail');
    window.setTimeout(() => setCopied('idle'), 1600);
  }

  const title = mode === 'trust' ? 'Security review checklist (quick)' : 'Security review checklist (copy/paste)';
  const subtitle =
    mode === 'trust'
      ? 'A lightweight checklist you can paste into an internal review ticket.'
      : 'Expand items as needed, then copy into your review ticket.';

  const ctaHref = mode === 'trust' ? '/enterprise#evaluation-checklist' : '/trust';
  const ctaLabel = mode === 'trust' ? 'Full checklist →' : 'Trust details →';

  return (
    <div className={className ?? ''}>
      <details className="group rounded-2xl border border-slate-900 bg-slate-950/60 overflow-hidden">
        <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-start justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-white">{title}</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={ctaHref}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              {ctaLabel}
            </a>
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 bg-slate-950 text-slate-300 group-open:rotate-180 transition-transform">
              <IconChevron className="h-5 w-5" />
            </span>
          </div>
        </summary>

        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <button
              type="button"
              onClick={onCopy}
              className="relative inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white"
            >
              {copied === 'ok' ? (
                <span className="inline-flex items-center gap-2">
                  <span className="relative inline-flex">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-white/25 animate-ping" />
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                  </span>
                  Copied
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Copy to clipboard
                  <span className="text-white/80">⎘</span>
                </span>
              )}
            </button>

            <div className="text-xs text-slate-400">
              {copied === 'fail'
                ? 'Copy failed — please select and copy manually.'
                : copied === 'ok'
                  ? 'Copied to clipboard.'
                  : 'Copy the checklist into your review ticket.'}
            </div>
          </div>

          <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
            <ul className="space-y-3">
              {items.map((i, idx) => {
                const Icon = i.icon;
                const tipId = `tt-check-tip-${mode}-${idx}`;
                return (
                  <li key={i.title}>
                    <details className="group/item rounded-xl border border-slate-900 bg-slate-950/40">
                      <summary className="list-none cursor-pointer select-none px-4 py-3 flex items-start justify-between gap-4">
                        <div className="flex gap-3">
                          <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-950 text-teal-300 shrink-0">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-semibold text-white">{i.title}</div>
                              <span className="relative group/tt">
                                <button
                                  type="button"
                                  className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  aria-describedby={tipId}
                                  aria-label="More info"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <IconInfo className="h-4 w-4" />
                                </button>
                                <Tooltip id={tipId} text={i.tip} />
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-slate-400">{i.desc}</div>
                          </div>
                        </div>
                        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-300 group-open/item:rotate-180 transition-transform">
                          <IconChevron className="h-5 w-5" />
                        </span>
                      </summary>
                      <div className="px-4 pb-4">
                        <div className="text-sm text-slate-300 leading-relaxed">{i.desc}</div>
                        <div className="mt-2 text-xs text-slate-500">Tip: {i.tip}</div>
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Note: This checklist is guidance for review workflows and is not a compliance certification or legal advice.
          </p>
        </div>
      </details>
    </div>
  );
}
