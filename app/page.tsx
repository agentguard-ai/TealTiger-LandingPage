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

  const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
  const dockerHubDockerUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
  const dockerHubPythonUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";
  const dockerHubTypescriptUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-typescript";

  const npmUrl = "https://www.npmjs.com/package/tealtiger";
  const pypiUrl = "https://pypi.org/project/tealtiger/";

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
              <span className="font-semibold text-slate-900">v1.2.0</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-teal-800">Released</span>
              <span className="text-slate-300">•</span>
              <span>v1.3 in development</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Enterprise-grade AI Governance &amp; Security SDK
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Deterministic controls for AI apps and agents — built for predictable enforcement, modular adoption, and enterprise integration. No LLM in the governance path. Same input + same policy = same decision, every time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip text="TypeScript" />
              <Chip text="Python" />
              <Chip text="Docker" />
              <Chip text="12 LLM Providers" />
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
          <h2 className="text-2xl font-semibold tracking-tight">What TealTiger Does</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Modular governance controls that enforce policy at runtime — not after the fact.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🛡️ Security Guardrails</p>
              <p className="mt-2 text-sm text-slate-600">PII detection, prompt injection (regex + ML classifier), content moderation, secret detection (500+ patterns), Unicode attack detection, encoded output detection.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">💰 Cost Governance</p>
              <p className="mt-2 text-sm text-slate-600">Budget enforcement per request, session, agent, and day. Cost anomaly detection, reasoning-token budgets, and governance-owned limits that application code cannot override.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔌 12 LLM Providers</p>
              <p className="mt-2 text-sm text-slate-600">OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI, Cohere, Mistral, plus 5 new providers. Platform adapters for AWS AgentCore, Bedrock Agents, and Azure AI Agent Service.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📋 Cryptographic Evidence</p>
              <p className="mt-2 text-sm text-slate-600">Merkle-tree governance receipts with RFC 3161 timestamping. SIEM export, OpenTelemetry spans, SARIF/JUnit/JSON export. Standalone Verification SDK.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🤖 Agent Identity (NHI)</p>
              <p className="mt-2 text-sm text-slate-600">Non-human identity governance with lifecycle management, scope enforcement, Zero Standing Privilege, and agent attestation. Agents as first-class principals.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏗️ Deterministic Engine</p>
              <p className="mt-2 text-sm text-slate-600">No LLM in the governance path. FREEZE rules, PLAN_ONLY mode, hot-swap policy bundles, anti-tamper controls. Every verdict traceable to the human policy author.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Dimensions */}
      <section id="governance" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">10 Governance Dimensions</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Governance organized by concern — not by tool. Each dimension maps to specific controls, modules, and OWASP ASI coverage.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-3 pr-6 font-semibold text-slate-900">Dimension</th>
                  <th className="pb-3 pr-6 font-semibold text-slate-900">Code</th>
                  <th className="pb-3 pr-6 font-semibold text-slate-900">What It Governs</th>
                  <th className="pb-3 font-semibold text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Security</td><td className="py-3 pr-6">SEC</td><td className="py-3 pr-6">Secret detection, PII, prompt injection (regex + ML), content moderation, Unicode attacks</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Cost</td><td className="py-3 pr-6">COST</td><td className="py-3 pr-6">Budget enforcement, cost tracking, anomaly detection, reasoning-token budgets</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Reliability</td><td className="py-3 pr-6">REL</td><td className="py-3 pr-6">Retry budgets, fallback chains, circuit breakers, degradation</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Memory</td><td className="py-3 pr-6">MEM</td><td className="py-3 pr-6">Provenance tagging, injection detection, exfiltration prevention, 5-tier trust</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Registry</td><td className="py-3 pr-6">REG</td><td className="py-3 pr-6">Model/tool allowlisting, MCP drift detection, adapter composition governance</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Evidence</td><td className="py-3 pr-6">EVID</td><td className="py-3 pr-6">Cryptographic receipts, Merkle proofs, RFC 3161 anchoring, Verification SDK</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Identity</td><td className="py-3 pr-6">NHI</td><td className="py-3 pr-6">Non-human identity lifecycle, scope enforcement, Zero Standing Privilege, attestation</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Workflow</td><td className="py-3 pr-6">FLOW</td><td className="py-3 pr-6">Declarative YAML governance pipelines, org-level inheritance, floor enforcement</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Temporal</td><td className="py-3 pr-6">TEMP</td><td className="py-3 pr-6">Session TTL, cooldown periods, time-of-day restrictions, context size governance</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
                <tr><td className="py-3 pr-6 font-medium">Drift</td><td className="py-3 pr-6">DRIFT</td><td className="py-3 pr-6">Behavioral drift detection, statistical baselines, MCP definition-drift monitoring</td><td className="py-3"><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800">v1.3</span></td></tr>
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
            Standard distribution channels. No infrastructure required — governance runs inside your application boundary.
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

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.1.1</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-800">Released</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Security + cost + 7 providers</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />TealEngine — deterministic policy evaluation</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />7 LLM providers (OpenAI, Anthropic, Gemini, Bedrock, Azure, Cohere, Mistral)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Security guardrails (PII, prompt injection, content moderation)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Cost governance (budgets, tracking, alerts)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />npm + PyPI + Docker images published</li>
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
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />7 governance modules across 6 dimensions</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Formal evidence contract (TEEC v1.0)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Secret detection (500+ patterns, confidence scoring)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Memory governance, registry allowlisting</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />Docker governance sidecar (language-agnostic HTTP API)</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link href="https://docs.tealtiger.ai/versions/v1.2.0">Release Notes</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-200 bg-violet-50/30 p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.3.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-violet-700">Coming Soon</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Autonomous Agent Governance</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />FREEZE rules — immutable, non-overridable safety controls</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />Non-human identity (NHI) governance with Zero Standing Privilege</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />TealProof — cryptographic governance receipts (Merkle + RFC 3161)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />TealFlow — declarative YAML governance workflows</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />TealClassifier — local ML inference (ONNX, ≤20ms)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />12 providers + platform adapters (AgentCore, Bedrock, Azure AI)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />OWASP Agentic Top 10 policy pack (zero-config)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-700" />SOC/IR pipeline — SIEM export, OTel spans, response hooks</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">TypeScript + Python parity. Full bundle manifest on release.</p>
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
            We build governance for real problems — not theoretical ones. If your team is deploying AI agents and hitting governance gaps, we want to hear about it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏦 Financial Services</p>
              <p className="mt-2 text-sm text-slate-600">Model risk management, audit trails for regulatory review, cost attribution across trading desks, separation of duties for agent actions.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏥 Healthcare &amp; Life Sciences</p>
              <p className="mt-2 text-sm text-slate-600">PHI governance in agent memory, consent-aware data handling, deterministic audit for compliance reviews, session-scoped access controls.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔧 Platform Engineering</p>
              <p className="mt-2 text-sm text-slate-600">Multi-agent orchestration governance, MCP tool drift detection, cost runaway prevention, policy-as-code for AI infrastructure teams.</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50/30 p-6">
            <p className="text-sm font-semibold">💬 Tell us what&apos;s broken</p>
            <p className="mt-2 text-sm text-slate-600">
              Deploying agents without governance controls? Struggling with audit requirements for AI systems? Need deterministic enforcement that your compliance team can verify? Open a discussion — we prioritize features based on real deployment problems.
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
              <p className="mt-2 text-sm text-slate-600">Governance middleware for LangChain, CrewAI, AutoGen, LlamaIndex. Platform adapters for enterprise agent frameworks.</p>
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
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-3">Community</p>
              <div className="grid gap-2 text-sm">
                <a href={linkedinUrl} {...ext} className="text-slate-600 hover:text-slate-900">LinkedIn</a>
                <a href={blogsUrl} {...ext} className="text-slate-600 hover:text-slate-900">Dev.to Blog</a>
                <a href={dockerHubOrgUrl} {...ext} className="text-slate-600 hover:text-slate-900">Docker Hub</a>
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
