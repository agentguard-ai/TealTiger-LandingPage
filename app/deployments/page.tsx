import Image from 'next/image';
import type { SVGProps } from 'react';

function IconCloud(props: SVGProps<SVGSVGElement>) {
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

function IconCube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 22V11" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M20 6.5l-8 4.5-8-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 7a2 2 0 113.2 1.6l3.6 3.6A2 2 0 0115 15.2l1.2 1.2A2 2 0 1115 18.4l-1.2-1.2A2 2 0 0112.2 15l-3.6-3.6A2 2 0 017 7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 7a5 5 0 01-7 4.6L7.6 17a2 2 0 11-2.6-2.6L10.4 9A5 5 0 0120 7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M6.2 14.8l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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

      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Group({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: { name: string; desc: string }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-slate-900 bg-slate-950 p-2 text-teal-300">{icon}</div>
        <div>
          <div className="text-white font-semibold">{title}</div>
          <div className="mt-1 text-sm text-slate-300 leading-relaxed">{subtitle}</div>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl border border-slate-900 bg-slate-950 p-4">
            <div className="text-sm font-semibold text-white">{it.name}</div>
            <div className="mt-1 text-sm text-slate-300 leading-relaxed">{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DeploymentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/tealtiger-logo.png" alt="TealTiger" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold tracking-tight text-white">TealTiger</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/capabilities" className="text-slate-300 hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="/deployments" className="text-white font-semibold">
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
      <header className="relative border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(20,184,166,0.18),rgba(2,6,23,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Deployments"
            title="Governance that follows the workload"
            subtitle="Adopt TealTiger where AI runs — in application code, containers, serverless, Kubernetes, and infrastructure-as-code."
          />

          <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Enterprise boundary</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              TealTiger is designed to run inside your environment. By default, it does not persist prompts or outputs — it emits
              structured enforcement metadata that you can route to monitoring and SIEM pipelines.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/capabilities"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Capabilities →
              </a>
              <a
                href="https://docs.tealtiger.ai"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white"
                rel="noreferrer"
              >
                Deployment docs →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Deployment groups */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
          <Group
            icon={<IconWrench className="h-6 w-6" />}
            title="SDK-first embedding"
            subtitle="Drop-in runtime enforcement inside your services and agents."
            items={[
              { name: 'Service (API)', desc: 'Wrap model calls in your existing microservices.' },
              { name: 'Agent runtime', desc: 'Apply guardrails/budgets around agent actions and tool calls.' },
              { name: 'Batch jobs', desc: 'Apply policies during offline processing or pipelines.' },
              { name: 'RAG apps', desc: 'Enforce guardrails on inputs, retrieval context, and outputs.' },
            ]}
          />

          <Group
            icon={<IconBolt className="h-6 w-6" />}
            title="Serverless"
            subtitle="Patterns for ephemeral execution where startup time and package size matter."
            items={[
              { name: 'AWS Lambda', desc: 'Integrate via wrapper + env/secrets patterns.' },
              { name: 'Azure Functions', desc: 'Use managed identity + Key Vault patterns.' },
              { name: 'Google Cloud Functions', desc: 'Use service accounts + Secret Manager patterns.' },
              { name: 'Edge functions', desc: 'Lightweight runtimes for edge and near-user execution.' },
            ]}
          />

          <Group
            icon={<IconCube className="h-6 w-6" />}
            title="Containers & Kubernetes"
            subtitle="Standardize rollout across teams using container and cluster-native patterns."
            items={[
              { name: 'Docker / Compose', desc: 'Local and baseline production patterns.' },
              { name: 'Kubernetes / Helm', desc: 'Namespace isolation, probes, and scaling patterns.' },
              { name: 'ECS / Fargate', desc: 'Managed container scheduling for AWS environments.' },
              { name: 'Cloud Run / ACI', desc: 'Managed container execution for GCP and Azure.' },
            ]}
          />

          <Group
            icon={<IconGit className="h-6 w-6" />}
            title="Infrastructure as Code & CI/CD"
            subtitle="Provision and roll out controls with repeatable, reviewable change management."
            items={[
              { name: 'Terraform / Pulumi', desc: 'Declare infra + guardrail configuration as code.' },
              { name: 'AWS CDK / CloudFormation', desc: 'Native AWS provisioning and repeatable stacks.' },
              { name: 'GitHub Actions / GitLab CI', desc: 'Build, test, and deploy with policy validation stages.' },
              { name: 'Jenkins / Azure Pipelines', desc: 'Enterprise CI pipelines with deployment gates.' },
            ]}
          />

          <Group
            icon={<IconCloud className="h-6 w-6" />}
            title="Observability & security operations"
            subtitle="Route evidence into your existing monitoring, tracing, and SIEM workflows."
            items={[
              { name: 'OpenTelemetry', desc: 'Vendor-neutral spans and context propagation patterns.' },
              { name: 'Cloud-native metrics', desc: 'CloudWatch / App Insights / Cloud Monitoring patterns.' },
              { name: 'Prometheus / Grafana', desc: 'Scrape metrics and dashboards for runtime controls.' },
              { name: 'Splunk / ELK', desc: 'Structured enforcement events for detection and response.' },
            ]}
          />

          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6">
            <div className="text-sm font-semibold text-white">Note on availability</div>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              This page summarizes deployment options and reference patterns. For current template availability, version support, and
              implementation notes, refer to the documentation.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://docs.tealtiger.ai"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-sm font-semibold text-white"
                rel="noreferrer"
              >
                Docs →
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs text-slate-400">© 2026 TealTiger. MIT licensed.</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <a href="/" className="text-slate-300 hover:text-white">Home</a>
              <a href="/capabilities" className="text-slate-300 hover:text-white">Capabilities</a>
              <a href="https://docs.tealtiger.ai" className="text-slate-300 hover:text-white" rel="noreferrer">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
