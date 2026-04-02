'use client';

import Image from 'next/image';
import type { SVGProps } from 'react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';

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

function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 20v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 12H2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M22 12h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5.2 5.2l1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M17.4 17.4l1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18.8 5.2l-1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6.6 17.4l-1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 13.2A8.2 8.2 0 1110.8 3a6.6 6.6 0 0010.2 10.2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/50 px-4 py-2 text-sm text-slate-200 transition-colors duration-300">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
          <span className="font-semibold tracking-wide">{eyebrow}</span>
        </div>
      ) : null}

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed opacity-90">{subtitle}</p> : null}
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
    <svg viewBox="0 0 640 380" fill="none" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 60) rotate(90) scale(240 400)">
          <stop stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="1" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="380" rx="20" fill="url(#g1)" />

      {/* Title */}
      <rect x="20" y="14" width="600" height="36" rx="8" fill="#0f172a" />
      <text x="320" y="38" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="ui-sans-serif,system-ui">AI Governance Umbrella</text>

      {/* Runtime label */}
      <rect x="20" y="60" width="295" height="22" rx="5" fill="#1e3a5f" />
      <text x="167" y="75" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="600" fontFamily="ui-sans-serif,system-ui">RUNTIME GOVERNANCE</text>

      {/* Enterprise label */}
      <rect x="325" y="60" width="295" height="22" rx="5" fill="#1e3a5f" />
      <text x="472" y="75" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="600" fontFamily="ui-sans-serif,system-ui">ENTERPRISE GOVERNANCE</text>

      {/* Runtime shipped */}
      <rect x="20" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="66" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Security</text>
      <text x="66" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Injection · PII</text>

      <rect x="122" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="168" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Authority</text>
      <text x="168" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Tool · RBAC</text>

      <rect x="224" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="270" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Reliability</text>
      <text x="270" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Circuit breaker</text>

      {/* Runtime planned */}
      <rect x="20" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="66" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Trajectory</text>
      <text x="66" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.2</text>

      <rect x="122" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="168" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Signal</text>
      <text x="168" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.2</text>

      <rect x="224" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="270" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Memory</text>
      <text x="270" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.2</text>

      {/* Enterprise shipped */}
      <rect x="325" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="371" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Cost</text>
      <text x="371" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Budgets · Rates</text>

      <rect x="427" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="473" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Evidence</text>
      <text x="473" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Audit · Redaction</text>

      <rect x="529" y="90" width="92" height="42" rx="5" fill="#0d9488" stroke="#14b8a6" strokeWidth="1" />
      <text x="575" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif,system-ui">Compliance</text>
      <text x="575" y="122" textAnchor="middle" fill="#ccfbf1" fontSize="7" fontFamily="ui-sans-serif,system-ui">Modes · Decision</text>

      {/* Enterprise planned */}
      <rect x="325" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="371" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Model</text>
      <text x="371" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.2</text>

      <rect x="427" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="473" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Data</text>
      <text x="473" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.2</text>

      <rect x="529" y="140" width="92" height="42" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="575" y="159" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui">Risk</text>
      <text x="575" y="172" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="ui-sans-serif,system-ui">v1.3</text>

      {/* Arrows */}
      <path d="M167,186 L167,204" stroke="#475569" strokeWidth="1.5" />
      <path d="M163,200 L167,208 L171,200" fill="#475569" />
      <path d="M472,186 L472,204" stroke="#475569" strokeWidth="1.5" />
      <path d="M468,200 L472,208 L476,200" fill="#475569" />

      {/* Module layer */}
      <rect x="20" y="212" width="600" height="72" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
      <text x="320" y="232" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" fontFamily="ui-sans-serif,system-ui">MODULE LAYER</text>
      <rect x="32" y="240" width="270" height="34" rx="5" fill="#1e293b" stroke="#0d9488" strokeWidth="1" />
      <text x="167" y="260" textAnchor="middle" fill="#5eead4" fontSize="8" fontWeight="700" fontFamily="ui-sans-serif,system-ui">CORE: Event → Policy → Enforce → Evidence</text>
      <rect x="312" y="240" width="296" height="34" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
      <text x="460" y="260" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600" fontFamily="ui-sans-serif,system-ui">OPTIONAL: Trajectory · Signal · Temporal · Budget</text>

      {/* Arrow to evidence */}
      <path d="M320,288 L320,306" stroke="#475569" strokeWidth="1.5" />
      <path d="M316,302 L320,310 L324,302" fill="#475569" />

      {/* Evidence layer */}
      <rect x="20" y="314" width="600" height="44" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
      <text x="320" y="334" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" fontFamily="ui-sans-serif,system-ui">EVIDENCE &amp; ASSURANCE</text>
      <text x="320" y="348" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="ui-sans-serif,system-ui">Decision · Reason Codes · Risk Score · Correlation ID · Audit Pack</text>
    </svg>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('tt-theme');
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('tt-theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  return { theme, setTheme };
}

export default function Home() {
  const emailTo = 'reachout@tealtiger.ai';

  const legalTooltip =
    "Legal note: TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice. Full compliance depends on your organization’s risk management, documentation, oversight, and controls beyond this SDK.";

  const deterministicTooltip =
    "Deterministic enforcement = same inputs + same policy + same context → same decision (with reason codes). Policy-evaluated and reproducible — not inferred from model behavior.";

  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const styles = useMemo(() => {
    // more subtle tint: 0.05
    const tint = isDark
      ? '[background:radial-gradient(120%_60%_at_50%_0%,rgba(148,163,184,0.05),rgba(2,6,23,0))]'
      : '[background:radial-gradient(120%_60%_at_50%_0%,rgba(15,23,42,0.06),rgba(248,250,252,0))]';

    return {
      page: isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900',
      nav: isDark
        ? 'border-slate-900 bg-slate-950/70 transition-colors duration-300'
        : 'border-slate-200 bg-white/80 transition-colors duration-300',
      navLink: isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900',
      chip: isDark
        ? 'border-slate-800/70 bg-slate-900/50 text-slate-200 transition-colors duration-300'
        : 'border-slate-200 bg-white text-slate-700 transition-colors duration-300',
      heroNote: isDark ? 'text-slate-400' : 'text-slate-600',
      sectionOdd: isDark ? 'bg-slate-950' : 'bg-slate-50',
      sectionEven: isDark ? `bg-slate-950 ${tint}` : `bg-slate-50 ${tint}`,
      panel: isDark
        ? 'rounded-3xl border border-slate-800/60 bg-slate-900/20 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] p-7 sm:p-9 transition-colors duration-300'
        : 'rounded-3xl border border-slate-200 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.04)] p-7 sm:p-9 transition-colors duration-300',
      // dramatic hover lift
      card: isDark
        ? 'rounded-2xl border border-slate-800/70 bg-slate-900/25 p-7 hover:bg-slate-900/35 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300'
        : 'rounded-2xl border border-slate-200 bg-white p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300',
      cardSm: isDark
        ? 'rounded-xl border border-slate-800/70 bg-slate-900/25 p-5 transition-colors duration-300'
        : 'rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-300',
      iconBox: isDark
        ? 'rounded-xl border border-slate-800/70 bg-slate-900/25 p-2.5 text-teal-300 transition-colors duration-300'
        : 'rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-teal-700 transition-colors duration-300',
      heroArt: isDark
        ? 'rounded-3xl border border-slate-800/60 bg-slate-900/20 p-3 shadow-2xl transition-colors duration-300'
        : 'rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl transition-colors duration-300',
      footerBg: isDark ? `bg-slate-950 ${tint} transition-colors duration-300` : `bg-slate-50 ${tint} transition-colors duration-300`,
      footerCard: isDark
        ? 'rounded-3xl border border-slate-800/60 bg-slate-900/20 p-7 sm:p-9 transition-all duration-300 hover:bg-slate-900/28 hover:border-slate-700/70 hover:shadow-xl hover:shadow-teal-500/10'
        : 'rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10',
      footerLink: isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900',
      input: isDark
        ? 'rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300'
        : 'rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors duration-300',
      floatingShell: isDark
        ? 'rounded-2xl border border-slate-800/70 bg-slate-950/75 backdrop-blur px-3 py-3 shadow-xl shadow-black/20 transition-colors duration-300'
        : 'rounded-2xl border border-slate-200 bg-white/85 backdrop-blur px-3 py-3 shadow-xl shadow-slate-900/10 transition-colors duration-300',
      floatingBtn: isDark
        ? 'inline-flex items-center gap-2 rounded-xl border border-slate-800/70 bg-slate-900/40 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10'
        : 'inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10',
      floatingReset: isDark
        ? 'inline-flex items-center justify-center rounded-xl border border-slate-800/70 bg-slate-900/30 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/55 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10'
        : 'inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10',
    };
  }, [isDark]);

  const [emailValue, setEmailValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'invalid'>('idle');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('TealTiger newsletter signup');
    const body = encodeURIComponent(
      `Please add me to the TealTiger newsletter.\n\nEmail: ${emailValue}\n\nTopics: deterministic governance, runtime enforcement, guardrails, budgets, audit evidence, deployments.`
    );
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [emailValue, emailTo]);

  function onNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim());
    setStatus(ok ? 'ok' : 'invalid');
    if (ok) window.location.href = mailtoHref;
  }

  function resetPreferences() {
    try {
      window.localStorage.removeItem('tt-theme');
    } catch {
      // ignore
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  return (
    <div className={`min-h-screen ${styles.page} transition-colors duration-300`}>
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .tt-appear {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        @keyframes ttFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .tt-appear {
          opacity: 0;
          animation: ttFadeUp 720ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Nav */}
      <nav className={`sticky top-0 z-50 border-b backdrop-blur ${styles.nav}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
              <span className="text-lg font-semibold tracking-tight">TealTiger</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/capabilities" className={`${styles.navLink} transition-colors`}>Capabilities</a>
            <a href="/deployments" className={`${styles.navLink} transition-colors`}>Deployments</a>
            <a href="/enterprise" className={`${styles.navLink} transition-colors`}>Enterprise</a>
            <a href="/compliance" className={`${styles.navLink} transition-colors`}>Compliance</a>
            <a href="/case-studies" className={`${styles.navLink} transition-colors`}>Case studies</a>
            <a href="/roadmap" className={`${styles.navLink} transition-colors`}>Roadmap</a>
            <a href="/support" className={`${styles.navLink} transition-colors`}>Support</a>
            <a href="/integrations" className={`${styles.navLink} transition-colors`}>Integrations</a>
            <a href="/trust" className={`${styles.navLink} transition-colors`}>Trust</a>
            <a href="https://docs.tealtiger.ai" className={`${styles.navLink} transition-colors`} rel="noreferrer">Docs</a>
            <a href="https://playground.tealtiger.ai" className={`${styles.navLink} transition-colors`} rel="noreferrer">Playground</a>
            <a href="https://blogs.tealtiger.ai" className={`${styles.navLink} transition-colors`} rel="noreferrer">Blog</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=reachout@tealtiger.ai&su=TealTiger%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white transition-colors"
            >
              Reach out
            </a>
          </div>
        </div>
      </nav>

      {/* Floating controls (theme + reset) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        <div className={styles.floatingShell}>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={styles.floatingBtn}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="inline-flex items-center justify-center">
                {isDark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
              </span>
              <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              onClick={resetPreferences}
              className={styles.floatingReset}
              aria-label="Reset preferences"
              title="Reset preferences"
            >
              Reset
            </button>
          </div>
          <div className={isDark ? 'mt-2 text-xs text-slate-500' : 'mt-2 text-xs text-slate-500'}>
            Smooth theme transition • preference stored locally
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.22),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${styles.chip}`}>
                <span className="font-semibold">v1.1.0 launching April 2026</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>— TealEngine, 7 providers, full SDK parity</span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Runtime AI governance — <span className={isDark ? 'text-teal-300' : 'text-teal-700'}>security, cost, reliability, evidence</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-90">
                A governance framework that grows with your AI system. Deterministic enforcement across six dimensions — not just guardrails.
                <span className="relative ml-2 inline-flex group">
                  <button
                    type="button"
                    className={
                      isDark
                        ? 'inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300'
                        : 'inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors duration-300'
                    }
                    aria-describedby="deterministic-tooltip"
                    aria-label="What we mean by deterministic enforcement"
                  >
                    <IconInfo className="h-4 w-4" />
                  </button>
                  <Tooltip id="deterministic-tooltip" text={deterministicTooltip} />
                </span>
              </p>

              <p className="mt-5 text-lg sm:text-xl leading-relaxed opacity-90">
                TealTiger enforces governance at runtime decision boundaries — security, cost, authority, reliability, compliance, and evidence — across providers. One SDK, expanding dimensions.
              </p>

              <p className={`mt-3 text-sm leading-relaxed ${styles.heroNote}`}>
                Runs inside your application boundary. By default, TealTiger does not persist prompts or outputs — only structured enforcement metadata is emitted for monitoring and audit workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/capabilities"
                  className={
                    isDark
                      ? 'px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-slate-800/70 text-sm font-semibold transition-colors'
                      : 'px-4 py-2 rounded-lg bg-slate-900/5 hover:bg-slate-900/10 border border-slate-200 text-sm font-semibold transition-colors'
                  }
                >
                  Explore capabilities →
                </a>
                <a
                  href="/enterprise"
                  className={
                    isDark
                      ? 'px-4 py-2 rounded-lg border border-slate-800/70 bg-slate-950 hover:bg-slate-900 text-sm font-semibold transition-colors'
                      : 'px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold transition-colors'
                  }
                >
                  Enterprise evaluation
                </a>
                <a
                  href="#get-started"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm font-semibold text-white transition-colors"
                >
                  Get started
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className={`${styles.cardSm} tt-appear`} style={{ animationDelay: '60ms' }}>
                  <div className="text-sm font-semibold">6 Governance Dimensions</div>
                  <div className={`mt-1 text-sm ${styles.heroNote}`}>Security · Cost · Authority · Reliability · Evidence · Compliance</div>
                </div>
                <div className={`${styles.cardSm} tt-appear`} style={{ animationDelay: '120ms' }}>
                  <div className="text-sm font-semibold">Deterministic Decisions</div>
                  <div className={`mt-1 text-sm ${styles.heroNote}`}>Same input + same policy = same outcome</div>
                </div>
                <div className={`${styles.cardSm} tt-appear`} style={{ animationDelay: '180ms' }}>
                  <div className="text-sm font-semibold">Audit-Grade Evidence</div>
                  <div className={`mt-1 text-sm ${styles.heroNote}`}>Versioned events · Redaction · Correlation IDs</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-teal-400/10 blur-2xl" />
              <div className={styles.heroArt}>
                <HeroIllustration className="w-full h-auto" />
              </div>
              <p className={`mt-3 text-xs text-center ${styles.heroNote}`}>
                Illustration: request path + deterministic enforcement boundary (conceptual)
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Outcomes */}
      <section className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.sectionOdd}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className={styles.panel}>
            <SectionTitle
              title="Reduce runtime risk in AI applications"
              subtitle="Autonomous workflows fail at execution time — through uncontrolled spend, data exposure, and inconsistent controls. TealTiger enforces deterministic boundaries where model calls happen."
            />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '40ms' }}>
                <div className="flex items-center gap-3">
                  <div className={styles.iconBox}>
                    <IconWallet className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Unbounded spend</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Deterministically enforce per-request limits and budgets to prevent runaway usage and surprise bills.
                </p>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '120ms' }}>
                <div className="flex items-center gap-3">
                  <div className={styles.iconBox}>
                    <IconShield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Data exposure</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Deterministically detect and handle sensitive input/output (PII) and reduce prompt injection risk.
                </p>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3">
                  <div className={styles.iconBox}>
                    <IconActivity className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Control drift</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Prevent drift by enforcing the same policy decisions across services and environments, with structured audit events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.sectionEven}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className={styles.panel}>
            <SectionTitle
              eyebrow="Testimonials"
              title="Built for security and platform teams"
              subtitle="Early feedback from engineers evaluating deterministic runtime governance patterns. Names anonymized at request."
            />

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '60ms' }}>
                <p className="text-sm leading-relaxed opacity-95">
                  “The deterministic boundary-first approach is what we needed — decisions are explicit and the evidence is easy to route to our SOC.”
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Security Engineering</div>
                    <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>Design partner</div>
                  </div>
                  <div className={isDark ? 'text-xs text-slate-500' : 'text-xs text-slate-500'}>Anonymized</div>
                </div>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '140ms' }}>
                <p className="text-sm leading-relaxed opacity-95">
                  “Budgets as a first-class deterministic control made the discussion with FinOps much simpler. It’s a practical guardrail, not a dashboard.”
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Platform Engineering</div>
                    <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>Large enterprise</div>
                  </div>
                  <div className={isDark ? 'text-xs text-slate-500' : 'text-xs text-slate-500'}>Anonymized</div>
                </div>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '220ms' }}>
                <p className="text-sm leading-relaxed opacity-95">
                  “We liked that nothing is persisted by default. That single detail removes a lot of friction in deterministic security review.”
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">AppSec</div>
                    <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>Regulated environment</div>
                  </div>
                  <div className={isDark ? 'text-xs text-slate-500' : 'text-xs text-slate-500'}>Anonymized</div>
                </div>
              </div>
            </div>

            <div className={`${styles.card} mt-8 tt-appear`} style={{ animationDelay: '280ms' }}>
              <div className="text-sm font-semibold">Enterprise-ready navigation</div>
              <p className="mt-2 text-sm opacity-90">Use Enterprise, Compliance, Support, and Case studies pages for procurement and review conversations.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/enterprise" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition-colors">
                  Enterprise →
                </a>
                <a
                  href="/compliance"
                  className={
                    isDark
                      ? 'inline-flex items-center gap-2 rounded-lg border border-slate-800/70 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition-colors'
                      : 'inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors'
                  }
                >
                  Compliance →
                </a>
                <a
                  href="/support"
                  className={
                    isDark
                      ? 'inline-flex items-center gap-2 rounded-lg border border-slate-800/70 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition-colors'
                      : 'inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors'
                  }
                >
                  Support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU AI Act */}
      <section id="eu-ai-act" className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.sectionOdd}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className={styles.panel}>
            <SectionTitle
              eyebrow="Governance"
              title="EU AI Act: technical enablement (controls & evidence)"
              subtitle="TealTiger can be leveraged to support EU AI Act compliance efforts by providing deterministic runtime controls and audit evidence."
            />

            <div className="mt-8 max-w-5xl mx-auto flex items-center justify-center">
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${styles.chip}`}>
                <span className={isDark ? 'text-teal-300' : 'text-teal-700'}>
                  <IconFlagEU className="h-5 w-5" />
                </span>
                <span className="font-semibold">EU AI Act</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>technical enablement</span>
              </div>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '80ms' }}>
                <div className="text-sm font-semibold">What TealTiger contributes</div>
                <p className="mt-2 text-sm opacity-90">
                  TealTiger helps operationalize selected technical obligations by enforcing deterministic runtime guardrails, controlling consumption,
                  and producing audit-ready evidence (events/logs) for monitoring and incident workflows.
                </p>
                <a href="/compliance" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} mt-5 inline-flex text-sm font-semibold transition-colors`}>
                  See compliance enablement →
                </a>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '160ms' }}>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold">Compliance disclaimer</div>
                  <span className="relative group">
                    <button
                      type="button"
                      className={
                        isDark
                          ? 'inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300'
                          : 'inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors duration-300'
                      }
                      aria-describedby="eu-legal-tooltip"
                      aria-label="Legal note"
                    >
                      <IconInfo className="h-4 w-4" />
                    </button>
                    <Tooltip id="eu-legal-tooltip" text={legalTooltip} />
                  </span>
                </div>
                <p className="mt-3 text-sm opacity-90">
                  TealTiger is not a standalone EU AI Act compliance solution and does not provide legal advice. Full compliance depends on your organizational
                  processes, risk management, documentation, and controls beyond the SDK.
                </p>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '240ms' }}>
                <div className="text-sm font-semibold">Procurement hint</div>
                <p className="mt-2 text-sm opacity-90">
                  For evaluation, use the Enterprise checklist and Trust notes to align on boundary, evidence routing, and data handling assumptions.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="/enterprise" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                    Enterprise →
                  </a>
                  <a href="/trust" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                    Trust →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.sectionEven}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className={styles.panel}>
            <SectionTitle
              eyebrow="Newsletter"
              title="Updates for security and platform teams"
              subtitle="Short, technical updates on deterministic runtime governance patterns, deployments, and evidence workflows."
            />

            <div className={`${styles.card} mt-10 max-w-3xl mx-auto tt-appear`} style={{ animationDelay: '120ms' }}>
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
                  className={styles.input}
                  autoComplete="email"
                />
                <button type="submit" className="rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition-colors">
                  Subscribe
                </button>
              </form>

              {status === 'invalid' ? (
                <p className={isDark ? 'mt-3 text-sm text-rose-300' : 'mt-3 text-sm text-rose-700'}>Please enter a valid email address.</p>
              ) : status === 'ok' ? (
                <p className={isDark ? 'mt-3 text-sm text-teal-200' : 'mt-3 text-sm text-teal-700'}>Opening your email client to confirm subscription…</p>
              ) : (
                <p className={`mt-3 text-sm ${styles.heroNote}`}>
                  No backend required right now — subscription uses your email client (mailto). We will never ask for API keys or sensitive data.
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://blogs.tealtiger.ai" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`} rel="noreferrer">
                  Read the blog →
                </a>
                <a href="/support" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                  Support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="get-started" className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.sectionOdd}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className={styles.panel}>
            <SectionTitle
              eyebrow="Get started"
              title="Adopt in minutes"
              subtitle="Install the SDK, enable deterministic controls, and route events to your existing security tooling."
            />

            <div className="mt-10 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '80ms' }}>
                <div className="text-sm font-semibold">Install</div>
                <div className="mt-4 space-y-3">
                  <div className={isDark ? 'rounded-xl border border-slate-800/70 bg-slate-900/25 px-4 py-3 transition-colors duration-300' : 'rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors duration-300'}>
                    <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>npm</div>
                    <code className={isDark ? 'text-sm text-teal-300 font-semibold' : 'text-sm text-teal-700 font-semibold'}>npm install tealtiger</code>
                  </div>
                  <div className={isDark ? 'rounded-xl border border-slate-800/70 bg-slate-900/25 px-4 py-3 transition-colors duration-300' : 'rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors duration-300'}>
                    <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>pip</div>
                    <code className={isDark ? 'text-sm text-teal-300 font-semibold' : 'text-sm text-teal-700 font-semibold'}>pip install tealtiger</code>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/deployments" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                    Deployments
                  </a>
                  <a href="/integrations" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                    Integrations
                  </a>
                  <a href="/enterprise" className={`${isDark ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'} text-sm font-semibold transition-colors`}>
                    Enterprise
                  </a>
                </div>
              </div>

              <div className={`${styles.card} tt-appear`} style={{ animationDelay: '160ms' }}>
                <div className="text-sm font-semibold">Next</div>
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  <li>• Choose guardrail presets for workflows</li>
                  <li>• Set budgets per request and per time window</li>
                  <li>• Route audit events to SIEM/monitoring</li>
                  <li>• Standardize rollout using container/serverless/IaC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-slate-900' : 'border-slate-200'} ${styles.footerBg}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className={styles.footerCard}>
            <div className="grid md:grid-cols-4 gap-10 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/tealtiger-logo.png" alt="TealTiger" width={28} height={28} className="rounded" />
                  <span className="text-lg font-semibold">TealTiger</span>
                </div>
                <p className={`text-sm leading-relaxed ${styles.heroNote}`}>
                  Deterministic runtime controls for AI applications — guardrails, budgets, and audit events.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Enterprise</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/enterprise" className={`${styles.footerLink} transition-colors`}>Enterprise overview</a></li>
                  <li><a href="/compliance" className={`${styles.footerLink} transition-colors`}>Compliance enablement</a></li>
                  <li><a href="/support" className={`${styles.footerLink} transition-colors`}>Support</a></li>
                  <li><a href="/roadmap" className={`${styles.footerLink} transition-colors`}>Roadmap</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/capabilities" className={`${styles.footerLink} transition-colors`}>Capabilities</a></li>
                  <li><a href="/deployments" className={`${styles.footerLink} transition-colors`}>Deployments</a></li>
                  <li><a href="/integrations" className={`${styles.footerLink} transition-colors`}>Integrations</a></li>
                  <li><a href="/trust" className={`${styles.footerLink} transition-colors`}>Trust</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/case-studies" className={`${styles.footerLink} transition-colors`}>Case studies</a></li>
                  <li><a href="https://docs.tealtiger.ai" className={`${styles.footerLink} transition-colors`} rel="noreferrer">Docs</a></li>
                  <li><a href="https://blogs.tealtiger.ai" className={`${styles.footerLink} transition-colors`} rel="noreferrer">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t pt-8 ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <p className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>© 2026 TealTiger. MIT licensed.</p>
              <div className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-600'}>
                Contact: <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{emailTo}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
