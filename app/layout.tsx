import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TealTiger - Secure your AI. Control your costs.',
  description: 'Open-source security and cost tracking for AI applications. Drop-in SDK for OpenAI, Anthropic, and more with built-in guardrails and budget management.',
  keywords: ['AI security', 'cost control', 'OpenAI', 'Anthropic', 'guardrails', 'PII detection', 'prompt injection', 'TealTiger'],
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
