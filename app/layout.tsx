import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TealTiger - Enterprise AI governance before agents act',
  description:
    'Open-source governance and security SDK for AI agents: deterministic policy enforcement, runtime controls, and audit-ready evidence without an LLM in the decision path.',
  keywords: ['AI governance', 'AI security', 'agent governance', 'runtime controls', 'audit evidence', 'guardrails', 'PII detection', 'prompt injection', 'TealTiger'],
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
