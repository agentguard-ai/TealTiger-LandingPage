'use client';

import type { SVGProps } from 'react';

/* =========================
   Icons (REAL JSX, not escaped)
   ========================= */

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.8 1.8 3.7-4.1"
        stroke="currentColor"
        strokeWidth={1.7}
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
        strokeWidth={1.7}
      />
      <path
        d="M20 9h-4.5A2.5 2.5 0 0013 11.5v1A2.5 2.5 0 0015.5 15H20"
        stroke="currentColor"
        strokeWidth={1.7}
      />
      <circle cx={16.6} cy={12} r={0.9} fill="currentColor" />
    </svg>
  );
}

function IconActivity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 13h4l2-6 4 14 2-8h4"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 18a6 6 0 100-12 6 6 0 000 12z"
        stroke="currentColor"
        strokeWidth={1.7}
      />
      <path
        d="M12 2v2"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
      <path
        d="M12 20v2"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   Page
   ========================= */

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold">TealTiger</h1>

      <p className="mt-4 text-slate-600">
        Runtime AI governance for security, cost, and evidence.
      </p>

      <div className="mt-10 flex justify-center gap-6 text-slate-700">
        <IconShield className="h-6 w-6" />
        <IconWallet className="h-6 w-6" />
        <IconActivity className="h-6 w-6" />
        <IconSun className="h-6 w-6" />
      </div>
    </main>
  );
}
