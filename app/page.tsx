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

function IconCube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12.2M20 6.5l-8 5.7-8-5.7"
        stroke="currentColor"
        strokeWidth="1.7"
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

function IconServer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v2A2.5 2.5 0 0117.5 11h-11A2.5 2.5 0 014 8.5v-2z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 15.5A2.5 2.5 0 016.5 13h11A2.5 2.5 0 0120 15.5v2A2.5 2.5 0 0117.5 20h-11A2.5 2.5 0 014 17.5v-2z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 7.5h.01M7 16.5h.01"
        stroke="currentColor"
        strokeWidth="2.4"
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
