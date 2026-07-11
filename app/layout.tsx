import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script
          id="metricool-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"ad62cfd0477adcddbd920d5f72421ad3"})});`,
          }}
        />
      </body>
    </html>
  );
}
