"use client";

import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeIcon,
  DocumentCheckIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ComponentType, ReactNode, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const docsUrl = "https://docs.tealtiger.ai";
const playgroundUrl = "https://playground.tealtiger.ai";
const blogsUrl = "https://blogs.tealtiger.ai";
const githubUrl = "https://github.com/agentguard-ai/tealtiger";
const githubTsUrl = "https://github.com/agentguard-ai/tealtiger-typescript-prod";
const githubPyUrl = "https://github.com/agentguard-ai/tealtiger-python-prod";
const goodFirstIssuesUrl =
  "https://github.com/agentguard-ai/tealtiger/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22";
const contributingUrl = "https://github.com/agentguard-ai/tealtiger/blob/main/CONTRIBUTING.md";
const discussionsUrl = "https://github.com/agentguard-ai/tealtiger/discussions";
const linkedinUrl = "https://www.linkedin.com/company/tealtiger";
const discordUrl = "https://discord.gg/X2ePf8QAj";
const xUrl = "https://x.com/TealtigerAI";

const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
const dockerHubDockerUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
const dockerHubPythonUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";

const npmUrl = "https://www.npmjs.com/package/tealtiger";
const pypiUrl = "https://pypi.org/project/tealtiger/";
const contactEmailText = "reachout@tealtiger.ai";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Governance", href: "#governance" },
  { label: "Install", href: "#install" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contributors", href: "#contributors" },
  { label: "Open source", href: "#contribute" },
];

const productFacts = [
  ["14+", "Framework adapters"],
  ["11", "Governance domains"],
  ["12", "LLM providers"],
  ["0", "External governance services"],
];

const bentoItems: Array<{
  icon: IconType;
  title: string;
  text: string;
  className: string;
}> = [
  {
    icon: ShieldCheckIcon,
    title: "Policy engine before execution",
    text: "FREEZE rules, PLAN_ONLY mode, hot-swap policy bundles, anti-tamper detection, and deterministic decisions without an LLM in the governance path.",
    className: "md:col-span-2 md:row-span-2 bg-slate-950 text-white border-slate-800",
  },
  {
    icon: DocumentCheckIcon,
    title: "Audit evidence by default",
    text: "Cryptographic receipts, reason codes, OpenTelemetry spans, SIEM exports, SARIF, JUnit, and JSON evidence.",
    className: "bg-white/80 border-teal-200",
  },
  {
    icon: FingerPrintIcon,
    title: "Non-human identity",
    text: "Scope-bound access, Zero Standing Privilege, workload attestation, and revoked-agent enforcement.",
    className: "bg-teal-900 text-white border-teal-700",
  },
  {
    icon: LockClosedIcon,
    title: "Data protection",
    text: "PII detection, prompt-injection checks, content policy enforcement, Unicode normalization, and encoded output detection.",
    className: "bg-white/80 border-teal-200",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Financial controls",
    text: "Budgets by request, session, agent, and day with anomaly alerts and reasoning-token ceilings.",
    className: "bg-cyan-50 border-cyan-200",
  },
  {
    icon: BoltIcon,
    title: "Provider adapter layer",
    text: "OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI, Cohere, Mistral, and platform adapters.",
    className: "bg-emerald-50 border-emerald-200",
  },
];

const governanceDomains = [
  ["Security", "SEC", "Secret leakage, PII exposure, prompt injection, content policy violations", "v1.1"],
  ["Cost", "COST", "Budget overrun, cost anomaly, reasoning-token abuse, unattributed spend", "v1.1"],
  ["Reliability", "REL", "Provider degradation, cascading failure, fallback chain failure", "v1.1"],
  ["Memory", "MEM", "Data provenance gaps, instruction injection via memory, stored-context exfiltration", "v1.2"],
  ["Registry", "REG", "Unapproved model or tool usage, MCP definition drift, supply chain compromise", "v1.2"],
  ["Evidence", "EVID", "Audit gaps, non-repudiation failure, evidence tampering", "v1.2"],
  ["Identity", "NHI", "Excessive standing privilege, missing attestation, scope creep", "v1.3"],
  ["Workflow", "FLOW", "Policy bypass, missing approvals, weakened organization controls", "v1.3"],
  ["Temporal", "TEMP", "Stale session context, off-hours execution, cooldown bypass", "v1.3"],
  ["Drift", "DRIFT", "Behavioral deviation, model output regression, tool definition mutation", "v1.3"],
  ["Observe", "OBS", "Passive monitoring gaps, visibility coverage, telemetry completeness", "v1.4"],
];

const installs = [
  {
    icon: CodeBracketIcon,
    title: "TypeScript",
    command: "npm install tealtiger",
    packageUrl: npmUrl,
    sourceUrl: githubTsUrl,
  },
  {
    icon: CommandLineIcon,
    title: "Python",
    command: "pip install tealtiger",
    packageUrl: pypiUrl,
    sourceUrl: githubPyUrl,
  },
  {
    icon: CubeIcon,
    title: "Docker",
    command: "docker pull tealtigeradmin/tealtiger-docker",
    packageUrl: dockerHubOrgUrl,
    sourceUrl: dockerHubDockerUrl,
  },
];

const integrations = [
  { name: "LangChain", pkg: "tealtiger-langchain", url: "https://python.langchain.com/docs/integrations/" },
  { name: "CrewAI", pkg: "tealtiger-crewai", url: "https://www.crewai.com/" },
  { name: "AG2 (AutoGen)", pkg: "tealtiger-ag2", url: "https://docs.ag2.ai/latest/docs/ecosystem/tealtiger/" },
  { name: "Haystack", pkg: "tealtiger-haystack", url: "https://haystack.deepset.ai/integrations/tealtiger" },
  { name: "Google ADK", pkg: "tealtiger-google-adk", url: "https://google.github.io/adk-docs/" },
  { name: "Composio", pkg: "tealtiger-composio", url: "https://composio.dev/" },
  { name: "Strands", pkg: "tealtiger-strands", url: "https://strandsagents.com/" },
  { name: "PydanticAI", pkg: "tealtiger-pydanticai", url: "https://ai.pydantic.dev/" },
  { name: "Phoenix (Arize)", pkg: "tealtiger-phoenix", url: "https://phoenix.arize.com/" },
  { name: "Langfuse", pkg: "tealtiger-langfuse", url: "https://langfuse.com/" },
  { name: "AgentOps", pkg: "tealtiger-agentops", url: "https://www.agentops.ai/" },
  { name: "Opik (Comet)", pkg: "tealtiger-opik", url: "https://www.comet.com/site/products/opik/" },
  { name: "Hindsight (Vectorize)", pkg: "tealtiger-hindsight", url: "https://hindsight.vectorize.io/integrations" },
  { name: "CopilotKit", pkg: "tealtiger-copilotkit", url: "https://www.copilotkit.ai/" },
];

const useCases = [
  [
    "Financial services",
    "Model risk management, regulatory audit trails, cost attribution, and separation of duties for agent-initiated transactions.",
  ],
  [
    "Healthcare and life sciences",
    "PHI governance in agent memory, consent-aware data handling, deterministic audit evidence, and role-scoped access.",
  ],
  [
    "Platform and infrastructure",
    "Multi-agent orchestration governance, MCP supply-chain integrity, cost runaway prevention, and policy-as-code.",
  ],
];

const trustedContributors = [
  {
    handle: "lleonardo-franco",
    name: "Leonardo Franco",
    role: "Trusted Contributor",
    avatarUrl: "https://github.com/lleonardo-franco.png",
    profileUrl: "https://github.com/lleonardo-franco",
    bio: "Recognized in TealTiger governance for sustained, high-quality work across SDK examples, guardrails, secret detection coverage, policy runtime features, tracing, SARIF export, and cross-SDK parity.",
    highlights: [
      "DeepSeek, CrewAI, MCP, Redis memory, and Python async examples",
      "SaaS secret detector coverage and provider key detection",
      "Custom guardrail support across TypeScript and Python SDKs",
      "Policy hot-reload, OpenTelemetry tracing, SARIF export, and streaming evaluator work",
    ],
  },
  {
    handle: "CleanDev-Fix",
    name: "Chad Nelson",
    role: "Trusted Contributor",
    avatarUrl: "/chad-nelson-profile.jpg",
    profileUrl: "https://github.com/CleanDev-Fix",
    bio: "Open-source contributor focused on practical AI agent tooling, repo readiness, workflow reliability, SDK examples, tests, and contributor documentation.",
    highlights: [
      "Provider quickstart examples across TealTiger SDK workflows",
      "Policy examples and contributor-facing documentation",
      "Focused SDK tests and metadata/link cleanup",
      "Narrow, review-ready changes aligned with maintainer guidance",
    ],
  },
];

const particlePoints = Array.from({ length: 150 }, (_, index) => {
  const angle = index * 2.3999632297;
  const radius = 8 + Math.sqrt(index) * 3.2;
  const x = 50 + Math.cos(angle) * radius + ((index * 17) % 11) - 5;
  const y = 50 + Math.sin(angle) * radius + ((index * 29) % 13) - 6;
  const size = 1 + (index % 4) * 0.55;
  const delay = (index % 12) * 0.14;

  return {
    x: `${x.toFixed(4)}%`,
    y: `${y.toFixed(4)}%`,
    size: `${size.toFixed(2)}px`,
    delay: `${delay.toFixed(2)}s`,
  };
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function MotionBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      {...ext}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      {...ext}
      className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      {children}
    </a>
  );
}

function LightButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      {...ext}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      {...ext}
      className={`inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-teal-800 ${className}`}
    >
      {children}
      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

function SectionTitle({
  title,
  children,
  invert = false,
}: {
  title: string;
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className={`text-4xl font-semibold leading-tight md:text-6xl ${invert ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-5 max-w-3xl text-lg leading-8 ${invert ? "text-teal-50/70" : "text-slate-600"}`}>
        {children}
      </p>
    </div>
  );
}

function ParticleField() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, -90]);
  const rotate = useTransform(scrollY, [0, 900], [0, 12]);

  return (
    <motion.div style={{ y, rotate }} className="relative h-[25rem] w-full max-w-[34rem] md:h-[34rem]" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.42)_0%,rgba(20,184,166,0.18)_12%,rgba(2,6,23,0)_48%)] blur-xl" />
      <div className="absolute inset-0">
        {particlePoints.map((point, index) => (
          <span
            key={index}
            className="tealtiger-particle absolute rounded-full bg-teal-100 shadow-[0_0_16px_rgba(94,234,212,0.75)]"
            style={{
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              animationDelay: point.delay,
            }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/25 bg-teal-300/10 shadow-[0_0_70px_rgba(45,212,191,0.45)]" />
    </motion.div>
  );
}

function ProductPanel() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1100], [60, -60]);

  return (
    <motion.div
      style={{ y }}
      className="rounded-lg border border-white/20 bg-[#061512]/80 p-4 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
        </div>
        <span className="rounded-md border border-teal-300/25 px-2.5 py-1 text-xs text-teal-100">runtime allow</span>
      </div>
      <div className="grid gap-4 pt-4 md:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold text-teal-100">Policy trace</p>
          <div className="mt-4 space-y-3">
            {[
              ["SEC", "Prompt injection check", "pass"],
              ["COST", "Daily budget ceiling", "within"],
              ["NHI", "Workload identity", "attested"],
              ["EVID", "Receipt export", "signed"],
            ].map(([id, label, state]) => (
              <div key={id} className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 border-b border-white/10 pb-3 text-sm">
                <span className="rounded-md bg-teal-300/10 px-2 py-1 font-mono text-xs text-teal-100">{id}</span>
                <span className="text-slate-100">{label}</span>
                <span className="hidden text-xs text-teal-100/70 sm:block">{state}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-4 md:pt-0">
          <p className="text-sm font-semibold text-teal-100">Receipt</p>
          <div className="mt-4 space-y-3 font-mono text-xs text-slate-300">
            <div className="flex justify-between gap-4">
              <span>hash</span>
              <span className="text-teal-100">7fa8...d91c</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>export</span>
              <span className="text-teal-100">SIEM / OTel</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>mode</span>
              <span className="text-teal-100">FREEZE</span>
            </div>
          </div>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-1/2 rounded-full bg-teal-300"
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BentoCard({
  item,
}: {
  item: {
    icon: IconType;
    title: string;
    text: string;
    className: string;
  };
}) {
  const Icon = item.icon;
  const isDark = item.className.includes("text-white");

  return (
    <MotionBlock className={`rounded-lg border p-6 shadow-sm ${item.className}`}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${isDark ? "bg-white/10 text-teal-100" : "bg-teal-100 text-teal-800"}`}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
      <p className={`mt-4 text-base leading-7 ${isDark ? "text-slate-200" : "text-slate-600"}`}>{item.text}</p>
      {item.title === "Policy engine before execution" ? (
        <div className="mt-8 grid gap-3 text-sm">
          {["evaluate", "enforce", "export evidence"].map((step, index) => (
            <div key={step} className="flex items-center gap-3 border-t border-white/10 pt-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-300 text-xs font-bold text-slate-950">
                {index + 1}
              </span>
              <span className="text-slate-100">{step}</span>
            </div>
          ))}
        </div>
      ) : null}
    </MotionBlock>
  );
}

function InstallCard({ item }: { item: (typeof installs)[number] }) {
  const Icon = item.icon;
  return (
    <div className="rounded-lg border border-teal-200 bg-white/90 p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-teal-100">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="font-semibold text-slate-950">{item.title}</h3>
      </div>
      <div className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-xs text-teal-50">
        <span className="text-teal-300">$ </span>
        {item.command}
      </div>
      <div className="mt-4 flex gap-4">
        <ExternalLink href={item.packageUrl}>Package</ExternalLink>
        <ExternalLink href={item.sourceUrl}>Source</ExternalLink>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-screen overflow-hidden bg-[#040d0b] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(4,13,11,1)_0%,rgba(4,13,11,0.98)_46%,rgba(7,47,42,0.74)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-28 border-b border-white/10 bg-[#040d0b]/80 backdrop-blur-xl" />

        <header className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-3" aria-label="TealTiger home">
              <Image src="/tealtiger-logo.png" alt="" width={42} height={42} className="rounded-lg" priority />
              <span className="text-xl font-semibold">TealTiger</span>
            </a>
            <nav className="hidden items-center gap-9 text-sm font-medium text-teal-50/70 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={docsUrl}
              {...ext}
              className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Docs
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-20 sm:px-6 md:pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <MotionBlock>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] md:text-7xl">
              Govern the future of autonomous AI.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-teal-50/70">
              TealTiger is the open-source runtime governance layer for AI agents. Enforce deterministic policy, control spend, and produce audit-ready evidence before an agent reaches a model, tool, or workflow.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href={docsUrl}>Get started</PrimaryButton>
              <SecondaryButton href={playgroundUrl}>View playground</SecondaryButton>
            </div>
          </MotionBlock>

          <div className="relative min-h-[34rem]">
            <div className="absolute inset-x-0 top-0 flex justify-center lg:justify-end">
              <ParticleField />
            </div>
            <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-3xl lg:right-auto lg:w-[42rem]">
              <ProductPanel />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-teal-900/20 bg-[#061512] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
          {productFacts.map(([value, label]) => (
            <MotionBlock key={label} className="text-center">
              <p className="text-6xl font-semibold leading-none text-white">{value}</p>
              <p className="mt-4 text-base text-teal-50/60">{label}</p>
            </MotionBlock>
          ))}
        </div>
      </section>

      <section className="border-b border-teal-900/15 bg-[#09231f] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <MotionBlock className="mx-auto flex max-w-3xl flex-col items-center">
            <Image
              src="/nvidia-inception-badge.svg"
              alt="NVIDIA Inception Program"
              width={340}
              height={147}
              className="h-auto w-72 sm:w-80"
            />
            <p className="mt-5 max-w-xl text-base leading-7 text-teal-50/70">
              Part of the NVIDIA Inception ecosystem for AI startups.
            </p>
          </MotionBlock>
        </div>
      </section>

      <section id="features" className="relative overflow-hidden bg-[#e7fff9]">
        <ParallaxWash />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionTitle title="Comprehensive controls for production AI systems.">
            Security, cost, identity, evidence, and workflow governance are treated as one runtime system instead of separate after-the-fact reviews.
          </SectionTitle>

          <div className="mt-14 grid auto-rows-[minmax(17rem,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bentoItems.map((item) => (
              <BentoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="bg-[#072f2a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <MotionBlock className="max-w-4xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Governance domains mapped to real risk.</h2>
            <p className="mt-6 text-lg leading-8 text-teal-50/70">
              Every policy decision is legible: a domain, a control ID, a risk reason, a release lineage, and evidence that can be reconstructed later.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LightButton href={docsUrl}>Read governance docs</LightButton>
              <a
                href={githubUrl}
                {...ext}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Star on GitHub
              </a>
            </div>
          </MotionBlock>

          <MotionBlock className="mt-12">
            <div className="hidden overflow-hidden rounded-lg border border-white/20 bg-[#041411]/70 shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:block">
              <table className="w-full table-fixed text-left text-sm">
                <thead className="border-b border-white/10 text-teal-100/70">
                  <tr>
                    <th className="w-[18%] px-5 py-4 font-semibold">Domain</th>
                    <th className="w-[14%] px-5 py-4 font-semibold">Control</th>
                    <th className="px-5 py-4 font-semibold">Risk coverage</th>
                    <th className="w-[12%] px-5 py-4 font-semibold">Since</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {governanceDomains.map(([domain, id, risk, since]) => (
                    <tr key={id} className="transition hover:bg-white/[0.04]">
                      <td className="px-5 py-4 font-semibold text-white">{domain}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-teal-300/10 px-2.5 py-1 font-mono text-xs font-semibold text-teal-100">
                          {id}
                        </span>
                      </td>
                      <td className="px-5 py-4 leading-6 text-teal-50/70">{risk}</td>
                      <td className="px-5 py-4 text-teal-100">{since}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-3 lg:hidden">
              {governanceDomains.map(([domain, id, risk, since]) => (
                <div key={id} className="rounded-lg border border-white/20 bg-[#041411]/70 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-white">{domain}</h3>
                      <p className="mt-2 text-sm leading-6 text-teal-50/70">{risk}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-teal-300/10 px-2.5 py-1 font-mono text-xs font-semibold text-teal-100">
                      {id}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-100/70">Since {since}</p>
                </div>
              ))}
            </div>
          </MotionBlock>
        </div>
      </section>

      <section id="install" className="bg-[#f0fdfa]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionTitle title="Ship governance where your agents already run.">
            TealTiger installs through standard developer channels. No hosted governance service is required for policy enforcement.
          </SectionTitle>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {installs.map((item) => (
              <MotionBlock key={item.title}>
                <InstallCard item={item} />
              </MotionBlock>
            ))}
          </div>

          <MotionBlock className="mt-5 rounded-lg border border-teal-200 bg-white/80 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-4">
              {["App request", "Policy engine", "Provider adapter", "Evidence export"].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </MotionBlock>
        </div>
      </section>

      <section id="integrations" className="bg-[#f0fdfa]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionTitle title="14+ framework integrations. Drop-in governance.">
            One-line adapter installs that add runtime governance to the frameworks your agents already use. No config changes to existing code.
          </SectionTitle>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {integrations.map((item) => (
              <MotionBlock key={item.name}>
                <a
                  href={item.url}
                  {...ext}
                  className="flex min-h-[7rem] flex-col items-center justify-center rounded-lg border border-teal-300/70 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-slate-950">{item.name}</span>
                  <span className="mt-2 font-mono text-[11px] text-slate-500">{item.pkg}</span>
                </a>
              </MotionBlock>
            ))}
          </div>

          <MotionBlock className="mt-8 rounded-lg border border-teal-300/70 bg-white/70 p-6 shadow-sm">
            <p className="text-center text-sm font-semibold text-slate-800">
              🏆 Listed on official integration pages:{" "}
              <a href="https://haystack.deepset.ai/integrations/tealtiger" {...ext} className="text-teal-800 underline underline-offset-2 hover:text-teal-950">Haystack</a>
              {" · "}
              <a href="https://docs.ag2.ai/latest/docs/ecosystem/tealtiger/" {...ext} className="text-teal-800 underline underline-offset-2 hover:text-teal-950">AG2</a>
              {" · "}
              <a href="https://hindsight.vectorize.io/integrations" {...ext} className="text-teal-800 underline underline-offset-2 hover:text-teal-950">Hindsight</a>
            </p>
          </MotionBlock>
        </div>
      </section>

      <section className="bg-[#d7fbef]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionTitle title="Designed for teams with real operational obligations.">
            The product story stays focused: governed AI systems for organizations that need runtime enforcement, cost accountability, and evidence.
          </SectionTitle>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {useCases.map(([title, text]) => (
              <MotionBlock key={title}>
                <div className="min-h-72 rounded-lg border border-teal-300/70 bg-white/70 p-7 shadow-sm">
                  <CircleStackIcon className="h-8 w-8 text-teal-800" aria-hidden="true" />
                  <h3 className="mt-10 text-2xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-5 text-base leading-7 text-slate-600">{text}</p>
                </div>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      <section id="contributors" className="overflow-hidden bg-[#f5fffc]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <MotionBlock>
              <div className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-teal-900 shadow-sm">
                <UserGroupIcon className="h-4 w-4" aria-hidden="true" />
                Trusted contributors
              </div>
              <h2 className="mt-7 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                Recognition for the people raising the bar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                TealTiger highlights trusted contributors directly in the product story, giving sustained community work the visibility it deserves.
              </p>
            </MotionBlock>

            <div className="grid gap-4">
              {trustedContributors.map((contributor) => (
                <MotionBlock key={contributor.handle}>
                  <article className="grid gap-8 rounded-lg border border-teal-200 bg-white p-6 shadow-sm md:grid-cols-[13rem_1fr] md:p-8">
                    <div>
                      <img
                        src={contributor.avatarUrl}
                        alt={`${contributor.name} profile photo`}
                        className="aspect-square w-full max-w-52 rounded-lg object-cover shadow-[0_20px_60px_rgba(15,118,110,0.18)]"
                        loading="lazy"
                      />
                      <a
                        href={contributor.profileUrl}
                        {...ext}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
                      >
                        @{contributor.handle}
                        <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-3xl font-semibold text-slate-950">{contributor.name}</h3>
                        <span className="rounded-md bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-900">
                          {contributor.role}
                        </span>
                      </div>
                      <p className="mt-5 text-base leading-7 text-slate-600">{contributor.bio}</p>
                      <div className="mt-7 grid gap-3">
                        {contributor.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-3 border-t border-teal-100 pt-3">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                            <p className="text-sm leading-6 text-slate-700">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </MotionBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contribute" className="bg-[#041411] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <MotionBlock>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Open-source governance for autonomous AI.</h2>
            <p className="mt-6 text-lg leading-8 text-teal-50/70">
              TealTiger is Apache 2.0. Contribute detection patterns, framework integrations, compliance mappings, and policy packs for real-world agent deployments.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href={goodFirstIssuesUrl}>Browse issues</PrimaryButton>
              <SecondaryButton href={discussionsUrl}>Start discussion</SecondaryButton>
            </div>
          </MotionBlock>
          <MotionBlock>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Detection patterns", "Secret detection, prompt injection signatures, Unicode attack vectors, and incident-informed policy checks."],
                ["Framework integrations", "Governance adapters for LangChain, CrewAI, AG2, Haystack, Google ADK, Composio, Strands, PydanticAI, and more."],
                ["Policy packs", "OWASP ASI mappings, industry templates, and control crosswalks for AI risk frameworks."],
                ["Contributor program", "The first 25 contributors with merged PRs get permanent recognition and early access."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/20 bg-white/[0.04] p-6">
                  <CheckCircleIcon className="h-7 w-7 text-teal-300" aria-hidden="true" />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-teal-50/60">{text}</p>
                </div>
              ))}
            </div>
          </MotionBlock>
        </div>
      </section>

      <footer className="bg-[#020806] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/tealtiger-logo.png" alt="" width={36} height={36} className="rounded-lg" />
                <span className="text-lg font-semibold">TealTiger</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-teal-50/60">
                Runtime governance for autonomous AI. Built for engineers, legible to security, risk, and compliance teams.
              </p>
              <a href={`mailto:${contactEmailText}`} className="mt-4 inline-flex text-sm font-semibold text-teal-100 hover:text-white">
                {contactEmailText}
              </a>
            </div>
            <FooterColumn title="Product">
              <FooterLink href={docsUrl}>Documentation</FooterLink>
              <FooterLink href={playgroundUrl}>Playground</FooterLink>
              <FooterLink href={blogsUrl}>Blog</FooterLink>
              <FooterLink href={npmUrl}>npm package</FooterLink>
              <FooterLink href={pypiUrl}>PyPI package</FooterLink>
            </FooterColumn>
            <FooterColumn title="Build">
              <FooterLink href={githubUrl}>GitHub</FooterLink>
              <FooterLink href={githubTsUrl}>TypeScript SDK</FooterLink>
              <FooterLink href={githubPyUrl}>Python SDK</FooterLink>
              <FooterLink href={contributingUrl}>Contributing</FooterLink>
              <FooterLink href={dockerHubPythonUrl}>Docker Python</FooterLink>
              <FooterLink href="https://haystack.deepset.ai/integrations/tealtiger">Haystack Integration</FooterLink>
              <FooterLink href="https://docs.ag2.ai/latest/docs/ecosystem/tealtiger/">AG2 Ecosystem</FooterLink>
            </FooterColumn>
            <FooterColumn title="Community">
              <FooterLink href={discordUrl}>Discord</FooterLink>
              <FooterLink href={linkedinUrl}>LinkedIn</FooterLink>
              <FooterLink href={xUrl}>X</FooterLink>
              <FooterLink href={discussionsUrl}>Discussions</FooterLink>
              <FooterLink href={dockerHubOrgUrl}>Docker Hub</FooterLink>
            </FooterColumn>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-teal-50/50 md:flex-row md:items-center md:justify-between">
            <p>Copyright {new Date().getFullYear()} TealTiger. Apache License 2.0.</p>
            <p>Governance before the agent acts.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ParallaxWash() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [500, 1800], [90, -120]);

  return (
    <motion.div
      style={{ y }}
      className="absolute left-0 right-0 top-10 h-[30rem] bg-[linear-gradient(115deg,rgba(20,184,166,0),rgba(20,184,166,0.22),rgba(14,116,144,0.08),rgba(20,184,166,0))]"
      aria-hidden="true"
    />
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-2.5 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} {...ext} className="text-teal-50/60 transition hover:text-white">
      {children}
    </a>
  );
}
