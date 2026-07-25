export default function HomePage() {
  const docsUrl = "https://docs.tealtiger.ai";
  const playgroundUrl = "https://playground.tealtiger.ai";
  const blogsUrl = "https://blogs.tealtiger.ai";
  const githubUrl = "https://github.com/agentguard-ai/tealtiger";
  const githubTsUrl = "https://github.com/agentguard-ai/tealtiger-typescript-prod";
  const githubPyUrl = "https://github.com/agentguard-ai/tealtiger-python-prod";
  const goodFirstIssuesUrl = "https://github.com/agentguard-ai/tealtiger/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22";
  const contributingUrl = "https://github.com/agentguard-ai/tealtiger/blob/main/CONTRIBUTING.md";
  const linkedinUrl = "https://www.linkedin.com/company/tealtiger";
  const discordUrl = "https://discord.gg/X2ePf8QAj";
  const xUrl = "https://x.com/TealtigerAI";

  const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
  const dockerHubDockerUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
  const dockerHubPythonUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";
  const dockerHubTypescriptUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-typescript";

  const npmUrl = "https://www.npmjs.com/package/tealtiger";
  const pypiUrl = "https://pypi.org/project/tealtiger/";

  const hindsightUrl = "https://www.vectorize.io/integrations/tealtiger";
  const haystackUrl = "https://haystack.deepset.ai/integrations/tealtiger";
  const ag2Url = "https://docs.ag2.ai/latest/docs/ecosystem/tealtiger/";
  const copilotKitUrl = "https://github.com/agentguard-ai/tealtiger/tree/main/packages/tealtiger-copilotkit";

  const contactEmailText = "reachout@tealtiger.ai";

  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  const Chip = ({ text }: { text: string }) => (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
      {text}
    </span>
  );

  const Link = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} {...ext} className={`text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 ${className}`}>
      {children}
    </a>
  );

  const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...ext} className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800">
      {children}
    </a>
  );

  const SecondaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...ext} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
      {children}
    </a>
  );

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <pre className="overflow-x-auto text-xs leading-5 text-slate-800">{code}</pre>
    </div>
  );

  const integrations = [
    { name: "LangChain", pkg: "pip install tealtiger-langchain" },
    { name: "CrewAI", pkg: "pip install tealtiger-crewai" },
    { name: "AG2 (AutoGen)", pkg: "pip install tealtiger-ag2" },
    { name: "Haystack", pkg: "pip install tealtiger-haystack" },
    { name: "Google ADK", pkg: "pip install tealtiger-google-adk" },
    { name: "Composio", pkg: "pip install tealtiger-composio" },
    { name: "Strands", pkg: "pip install tealtiger-strands" },
    { name: "PydanticAI", pkg: "pip install tealtiger-pydanticai" },
    { name: "Phoenix (Arize)", pkg: "pip install tealtiger-phoenix" },
    { name: "Langfuse", pkg: "pip install tealtiger-langfuse" },
    { name: "AgentOps", pkg: "pip install tealtiger-agentops" },
    { name: "Opik (Comet)", pkg: "pip install tealtiger-opik" },
    { name: "Hindsight (Vectorize)", pkg: "pip install tealtiger-hindsight" },
    { name: "CopilotKit", pkg: "npm install tealtiger-copilotkit" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src="/tealtiger-logo.png" alt="TealTiger" width={36} height={36} className="rounded-xl" />
            <span className="text-base font-semibold tracking-tight">TealTiger</span>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
            <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
            <a href="#observe" className="hover:text-slate-900">Observe Mode</a>
            <a href="#integrations" className="hover:text-slate-900">Integrations</a>
            <a href="#governance" className="hover:text-slate-900">Governance</a>
            <a href="#install" className="hover:text-slate-900">Install</a>
            <a href="#releases" className="hover:text-slate-900">Releases</a>
            <a href="#use-cases" className="hover:text-slate-900">Use Cases</a>
            <a href="#contribute" className="hover:text-slate-900">Contribute</a>
            <a href={docsUrl} {...ext} className="hover:text-slate-900">Docs</a>
            <a href={playgroundUrl} {...ext} className="hover:text-slate-900">Playground</a>
          </nav>

          <div className="flex items-center gap-2">
            <PrimaryButton href={docsUrl}>Get Started</PrimaryButton>
          </div>
          <div className="mt-3">
            <a href="https://www.producthunt.com/products/tealtiger/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-tealtiger" target="_blank" rel="noopener noreferrer">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1198099&theme=light" alt="TealTiger - Open source AI agent security SDK — zero infrastructure | Product Hunt" width="250" height="54" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold text-slate-900">v1.4.0</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-teal-800">Released</span>
              <span className="text-slate-300">•</span>
              <span>Observe Mode + Dashboard + 14 Adapters</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Enterprise-grade AI Governance &amp; Security SDK
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Runtime governance for AI agents and applications — deterministic policy enforcement, continuous compliance evidence, and separation of duties between development and governance teams. No LLM in the decision path.
            </p>

            {/* Hero stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700">14+</p>
                <p className="text-xs text-slate-600">Framework adapters</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700">11</p>
                <p className="text-xs text-slate-600">Governance domains</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700">12</p>
                <p className="text-xs text-slate-600">LLM providers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700">v1.4</p>
                <p className="text-xs text-slate-600">Latest release</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip text="TypeScript" />
              <Chip text="Python" />
              <Chip text="Docker" />
              <Chip text="12 LLM Providers" />
              <Chip text="14+ Adapters" />
              <Chip text="OWASP ASI Coverage" />
              <Chip text="Apache 2.0" />
            </div>

            <div className="mt-4 text-sm text-slate-600">
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                <Link href={docsUrl}>Docs</Link>
                <span className="text-slate-300">•</span>
                <Link href={playgroundUrl}>Playground</Link>
                <span className="text-slate-300">•</span>
                <Link href={blogsUrl}>Blog</Link>
                <span className="text-slate-300">•</span>
                <Link href={npmUrl}>npm</Link>
                <span className="text-slate-300">•</span>
                <Link href={pypiUrl}>PyPI</Link>
                <span className="text-slate-300">•</span>
                <Link href={dockerHubOrgUrl}>Docker</Link>
                <span className="text-slate-300">•</span>
                <Link href={githubUrl}>GitHub</Link>
                <span className="text-slate-300">•</span>
                <Link href={discordUrl}>Discord</Link>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <span className="font-medium text-slate-700">{contactEmailText}</span>
                </span>
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href={docsUrl}>Open Docs</PrimaryButton>
              <SecondaryButton href={playgroundUrl}>Try Playground</SecondaryButton>
              <SecondaryButton href={githubUrl}>⭐ Star on GitHub</SecondaryButton>
            </div>
          </div>

          {/* Right card: install */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Install in 30 seconds</h2>
            <p className="mt-2 text-sm text-slate-600">Choose your stack. No infrastructure required.</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">TypeScript</p>
                <CodeBlock code={`npm install tealtiger`} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Python</p>
                <CodeBlock code={`pip install tealtiger`} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Docker</p>
                <CodeBlock code={`docker pull tealtigeradmin/tealtiger-docker`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Core Controls</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Enforceable governance controls that evaluate policy before execution — deterministic, auditable, and reconstructable.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🛡️ Data Protection &amp; Input Validation</p>
              <p className="mt-2 text-sm text-slate-600">PII detection, prompt injection (regex + ML classifier), content policy enforcement, secret leakage prevention (500+ patterns), Unicode normalization, encoded output detection.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">💰 Financial Risk Controls</p>
              <p className="mt-2 text-sm text-slate-600">Governance-owned budget limits per request, session, agent, and day. Cost anomaly alerting, reasoning-token budgets, and ceiling enforcement that application code cannot override.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔌 12 LLM Providers</p>
              <p className="mt-2 text-sm text-slate-600">OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI, Cohere, Mistral + 5 new. Platform adapters for AWS AgentCore, Bedrock Agents, and Azure AI Agent Service.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📋 Audit &amp; Non-Repudiation</p>
              <p className="mt-2 text-sm text-slate-600">Cryptographic governance receipts (Merkle tree + RFC 3161 timestamping). SIEM-compatible export, OpenTelemetry spans, SARIF/JUnit/JSON evidence. Standalone Verification SDK for third-party audit.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🤖 Non-Human Identity (NHI)</p>
              <p className="mt-2 text-sm text-slate-600">Agent identity lifecycle management, scope-bound access, Zero Standing Privilege (JIT grants), workload attestation. Agents governed as first-class principals — not ambient credentials.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏗️ Policy Enforcement Engine</p>
              <p className="mt-2 text-sm text-slate-600">No LLM in the governance path. FREEZE rules (immutable controls), PLAN_ONLY mode, hot-swap policy bundles, anti-tamper detection. Every decision traceable to the human policy author.</p>
            </div>
          </div>
        </div>
      </section>

      {/* v1.4 — Observe Before You Enforce */}
      <section id="observe" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4">
            NEW IN v1.4
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Start with visibility. Enforce when ready.</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Zero-config passive monitoring for teams not ready to enforce. Observe Mode allows all requests through while tracking every decision, cost event, and policy evaluation — giving you complete visibility before flipping the switch.
          </p>

          {/* Three modes progression */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/30 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">1</span>
                <p className="text-sm font-semibold text-emerald-800">OBSERVE</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">Allow all requests. Track everything. Zero enforcement. See what your agents are actually doing before writing a single policy.</p>
              <p className="mt-2 text-xs text-emerald-700 font-medium">← Start here</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/30 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">2</span>
                <p className="text-sm font-semibold text-amber-800">MONITOR</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">Evaluate policies but don&apos;t block. Log violations, generate alerts, build confidence in your rule set before enforcement.</p>
            </div>
            <div className="rounded-3xl border border-red-200 bg-red-50/30 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">3</span>
                <p className="text-sm font-semibold text-red-800">ENFORCE</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">Block policy violations. Deterministic deny decisions. Full audit trail. Production-grade governance with zero ambiguity.</p>
            </div>
          </div>

          {/* Code example + Dashboard */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-semibold">Zero-config Observe Mode</p>
              <CodeBlock code={`import { TealEngine } from "tealtiger";

const engine = new TealEngine({
  mode: "OBSERVE",  // allow all, track everything
});

// All requests pass through — no enforcement
// Every decision is logged with full context
const decision = await engine.evaluate(request);
// decision.action === "ALLOW" (always)
// decision.observations → cost, PII, latency, tokens`} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📊 Governance Dashboard</p>
              <p className="mt-3 text-sm text-slate-600">Real-time governance visualization built for observe-first workflows.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Real-time decision stream</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Cost analytics per agent/session</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />PII findings timeline</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Canary alerts for anomaly detection</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Policy simulation (what-if enforcement)</li>
              </ul>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-100 p-8 text-center text-xs text-slate-400">
                Dashboard screenshot — coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4">
            NEW IN v1.4
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">14+ Framework Integrations</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Drop-in governance adapters for the most popular AI agent frameworks. One package install, zero config changes to your existing code.
          </p>

          <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-4">
            {integrations.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-2 font-mono text-xs text-slate-500 break-all">{item.pkg}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-teal-200 bg-teal-50/30 p-6 shadow-sm">
            <p className="text-sm font-semibold mb-3">🏆 Listed on official integration pages</p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">Hindsight (Vectorize)</p>
                  <p className="text-xs text-slate-500">Official observability integration</p>
                </div>
                <a href={hindsightUrl} {...ext} className="ml-auto text-xs font-semibold text-teal-700 hover:text-teal-900">View →</a>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">Haystack (deepset)</p>
                  <p className="text-xs text-slate-500">Listed in Haystack integrations</p>
                </div>
                <a href={haystackUrl} {...ext} className="ml-auto text-xs font-semibold text-teal-700 hover:text-teal-900">View →</a>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">AG2 (AutoGen)</p>
                  <p className="text-xs text-slate-500">Listed in AG2 ecosystem docs</p>
                </div>
                <a href={ag2Url} {...ext} className="ml-auto text-xs font-semibold text-teal-700 hover:text-teal-900">View →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Domains */}
      <section id="governance" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">11 Governance Domains</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Controls organized by risk domain — each maps to enforceable policies, named reason codes, and OWASP Agentic Security coverage.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-3 pr-6 font-semibold text-slate-900">Domain</th>
                  <th className="pb-3 pr-6 font-semibold text-slate-900">Control ID</th>
                  <th className="pb-3 pr-6 font-semibold text-slate-900">Risk Coverage</th>
                  <th className="pb-3 font-semibold text-slate-900">Since</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Security</td><td className="py-3 pr-6">SEC</td><td className="py-3 pr-6">Secret leakage, PII exposure, prompt injection, content policy violations, Unicode manipulation</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Cost</td><td className="py-3 pr-6">COST</td><td className="py-3 pr-6">Budget overrun, cost anomaly, reasoning-token abuse, unattributed spend</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Reliability</td><td className="py-3 pr-6">REL</td><td className="py-3 pr-6">Cascading failure, retry exhaustion, provider degradation, fallback chain failure</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Memory</td><td className="py-3 pr-6">MEM</td><td className="py-3 pr-6">Data provenance gaps, instruction injection via memory, exfiltration through stored context</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Registry</td><td className="py-3 pr-6">REG</td><td className="py-3 pr-6">Unapproved model/tool usage, MCP definition drift, supply chain compromise</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Evidence</td><td className="py-3 pr-6">EVID</td><td className="py-3 pr-6">Audit gap, non-repudiation failure, evidence tampering, verification insufficiency</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Identity</td><td className="py-3 pr-6">NHI</td><td className="py-3 pr-6">Excessive standing privilege, scope creep, revoked agent access, missing attestation</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Workflow</td><td className="py-3 pr-6">FLOW</td><td className="py-3 pr-6">Policy bypass via team override, missing approval gates, weakened org-level controls</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Temporal</td><td className="py-3 pr-6">TEMP</td><td className="py-3 pr-6">Session hijack via stale context, off-hours execution, cooldown bypass</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Drift</td><td className="py-3 pr-6">DRIFT</td><td className="py-3 pr-6">Behavioral deviation from baseline, model output regression, tool definition mutation</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr><td className="py-3 pr-6 font-medium">Observe</td><td className="py-3 pr-6">OBS</td><td className="py-3 pr-6">Passive monitoring gaps, visibility coverage, observation fidelity, telemetry completeness</td><td className="py-3"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">v1.4</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Install</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Standard distribution channels. No infrastructure required — governance enforcement runs inside your application boundary with zero external dependencies.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">npm (TypeScript)</p>
              <CodeBlock code={`npm install tealtiger`} />
              <div className="mt-4 text-sm"><Link href={npmUrl}>npm package</Link> · <Link href={githubTsUrl}>Source</Link></div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">PyPI (Python)</p>
              <CodeBlock code={`pip install tealtiger`} />
              <div className="mt-4 text-sm"><Link href={pypiUrl}>PyPI project</Link> · <Link href={githubPyUrl}>Source</Link></div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Docker</p>
              <CodeBlock code={`docker pull tealtigeradmin/tealtiger-docker`} />
              <div className="mt-4 text-sm"><Link href={dockerHubOrgUrl}>Docker Hub</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Releases</h2>
          <p className="mt-2 text-sm text-slate-600">Clear status for enterprise planning.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.1.1</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-800">Released</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Security + cost + 7 providers</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />TealEngine — deterministic policy evaluation</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />7 LLM providers</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Security guardrails (PII, prompt injection)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Cost governance (budgets, tracking, alerts)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.2.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-800">Released</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Governance Bundle</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />7 governance modules across 6 domains</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Formal evidence contract (TEEC v1.0)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Secret detection (500+ patterns)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Docker governance sidecar</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.3.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-800">Released</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Autonomous Agent Governance</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />FREEZE rules — immutable safety controls</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />NHI governance + Zero Standing Privilege</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />TealProof — cryptographic receipts</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />12 providers + platform adapters</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />OWASP Agentic Top 10 policy pack</li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/30 p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.4.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-800">Latest</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Observe + Dashboard + Adapters</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />Observe Mode — zero-config passive monitoring</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />Governance Dashboard with real-time decision stream</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />14+ framework adapters (LangChain, CrewAI, ADK, …)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />Cost analytics &amp; PII findings timeline</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />Canary alerts for anomaly detection</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link href="https://docs.tealtiger.ai/versions/v1.4.0">Release Notes</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docker */}
      <section id="docker" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Docker</h2>
              <p className="mt-2 text-sm text-slate-600">Official images published under tealtigeradmin.</p>
            </div>
            <a href={dockerHubOrgUrl} {...ext} className="text-sm font-semibold text-slate-800 hover:text-slate-900">View Docker Hub →</a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Quick pull</p>
              <CodeBlock code={`docker pull tealtigeradmin/tealtiger-docker\ndocker pull tealtigeradmin/tealtiger-python\ndocker pull tealtigeradmin/tealtiger-typescript`} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Image links</p>
              <div className="mt-4 grid gap-2 text-sm">
                <Link href={dockerHubDockerUrl}>tealtigeradmin/tealtiger-docker</Link>
                <Link href={dockerHubPythonUrl}>tealtigeradmin/tealtiger-python</Link>
                <Link href={dockerHubTypescriptUrl}>tealtigeradmin/tealtiger-typescript</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bring Your Use Case */}
      <section id="use-cases" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Bring Your Use Case</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            We build governance for real compliance gaps — not theoretical ones. If your team is deploying AI agents and needs enforceable controls, audit evidence, or risk management, we want to hear about it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏦 Financial Services</p>
              <p className="mt-2 text-sm text-slate-600">Model risk management (SR 11-7), audit trails for regulatory examination, cost attribution across business units, separation of duties for agent-initiated transactions.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏥 Healthcare &amp; Life Sciences</p>
              <p className="mt-2 text-sm text-slate-600">PHI governance in agent memory (HIPAA §164.312), consent-aware data handling, deterministic audit for compliance reviews, role-based access controls with session scoping.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔧 Platform &amp; Infrastructure</p>
              <p className="mt-2 text-sm text-slate-600">Multi-agent orchestration governance, supply chain integrity for MCP tools, cost runaway prevention, policy-as-code for platform teams managing AI workloads.</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50/30 p-6">
            <p className="text-sm font-semibold">💬 Tell us what&apos;s broken</p>
            <p className="mt-2 text-sm text-slate-600">
              Deploying agents without enforceable controls? Facing audit requirements for AI systems with no evidence trail? Need deterministic policy enforcement that your risk and compliance teams can independently verify? Open a discussion — we prioritize controls based on real regulatory and operational gaps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PrimaryButton href="https://github.com/agentguard-ai/tealtiger/discussions">Start a Discussion</PrimaryButton>
              <SecondaryButton href={`mailto:${contactEmailText}`}>Email Us</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Build With Us — Contributor Section */}
      <section id="contribute" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Build With Us</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            TealTiger is open source (Apache 2.0). We&apos;re building the governance layer for autonomous AI — and we need contributors who understand both the engineering and the compliance side.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔍 Detection Patterns</p>
              <p className="mt-2 text-sm text-slate-600">Secret detection (500+ patterns), prompt injection signatures, Unicode attack vectors. Contribute patterns from real-world incidents.</p>
              <p className="mt-3"><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-800">Beginner</span></p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔌 Framework Integrations</p>
              <p className="mt-2 text-sm text-slate-600">Governance adapters for LangChain, CrewAI, AG2, Haystack, Google ADK, Composio, Strands, PydanticAI, and more. 14+ adapters and growing.</p>
              <p className="mt-3"><span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-800">Intermediate</span></p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📋 Policy Packs &amp; Compliance Mappings</p>
              <p className="mt-2 text-sm text-slate-600">OWASP ASI mappings, industry-specific policy templates, control framework crosswalks (NIST AI RMF, ISO 42001, EU AI Act).</p>
              <p className="mt-3"><span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-800">Intermediate</span></p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold">🎖️ Founding Contributor Program</p>
            <p className="mt-2 text-sm text-slate-600">
              The first 25 contributors with merged PRs get permanent recognition in CONTRIBUTORS.md, shoutouts on our social channels, and early access to upcoming governance features.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PrimaryButton href={goodFirstIssuesUrl}>Browse Good First Issues</PrimaryButton>
              <SecondaryButton href={githubUrl}>⭐ Star on GitHub</SecondaryButton>
              <SecondaryButton href={contributingUrl}>Contributing Guide</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">TealTiger</p>
              <p className="mt-2 text-sm text-slate-600">Enterprise-grade AI governance &amp; security SDK. Open source. Apache 2.0.</p>
              <p className="mt-3 text-sm text-slate-500">{contactEmailText}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-3">Product</p>
              <div className="grid gap-2 text-sm">
                <a href={docsUrl} {...ext} className="text-slate-600 hover:text-slate-900">Documentation</a>
                <a href={playgroundUrl} {...ext} className="text-slate-600 hover:text-slate-900">Playground</a>
                <a href={blogsUrl} {...ext} className="text-slate-600 hover:text-slate-900">Blog</a>
                <a href={npmUrl} {...ext} className="text-slate-600 hover:text-slate-900">npm Package</a>
                <a href={pypiUrl} {...ext} className="text-slate-600 hover:text-slate-900">PyPI Package</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-3">Open Source</p>
              <div className="grid gap-2 text-sm">
                <a href={githubUrl} {...ext} className="text-slate-600 hover:text-slate-900">GitHub</a>
                <a href={githubTsUrl} {...ext} className="text-slate-600 hover:text-slate-900">TypeScript SDK</a>
                <a href={githubPyUrl} {...ext} className="text-slate-600 hover:text-slate-900">Python SDK</a>
                <a href={contributingUrl} {...ext} className="text-slate-600 hover:text-slate-900">Contributing</a>
                <a href={goodFirstIssuesUrl} {...ext} className="text-slate-600 hover:text-slate-900">Good First Issues</a>
                <a href={hindsightUrl} {...ext} className="text-slate-600 hover:text-slate-900">Hindsight Integration</a>
                <a href={haystackUrl} {...ext} className="text-slate-600 hover:text-slate-900">Haystack Integration</a>
                <a href={ag2Url} {...ext} className="text-slate-600 hover:text-slate-900">AG2 Ecosystem</a>
                <a href={copilotKitUrl} {...ext} className="text-slate-600 hover:text-slate-900">CopilotKit Adapter</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-3">Community</p>
              <div className="grid gap-2 text-sm">
                <a href={discordUrl} {...ext} className="text-slate-600 hover:text-slate-900">💬 Discord</a>
                <a href={linkedinUrl} {...ext} className="text-slate-600 hover:text-slate-900">💼 LinkedIn</a>
                <a href={xUrl} {...ext} className="text-slate-600 hover:text-slate-900">🐦 X (Twitter)</a>
                <a href={blogsUrl} {...ext} className="text-slate-600 hover:text-slate-900">📝 Dev.to Blog</a>
                <a href={dockerHubOrgUrl} {...ext} className="text-slate-600 hover:text-slate-900">🐳 Docker Hub</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} TealTiger. Apache License 2.0.</p>
            <p className="text-sm text-slate-500">Runtime governance for autonomous AI. Built for engineers. Trusted by compliance.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
