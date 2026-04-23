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
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 16.8c1.6 1.7 3.7 2.7 6 2.7s4.4-1 6-2.7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7.2 9.6c1-2 2.8-3.4 4.8-3.4s3.8 1.4 4.8 3.4" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-base font-semibold tracking-tight">TealTiger</span>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
            <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
            <a href="#governance" className="hover:text-slate-900">Governance</a>
            <a href="#install" className="hover:text-slate-900">Install</a>
            <a href="#releases" className="hover:text-slate-900">Releases</a>
            <a href="#contribute" className="hover:text-slate-900">Contribute</a>
            <a href={docsUrl} {...ext} className="hover:text-slate-900">Docs</a>
            <a href={playgroundUrl} {...ext} className="hover:text-slate-900">Playground</a>
            <a href={blogsUrl} {...ext} className="hover:text-slate-900">Blog</a>
          </nav>

          <div className="flex items-center gap-2">
            <PrimaryButton href={docsUrl}>Get Started</PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold text-slate-900">v1.1.1</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-teal-800">Released</span>
              <span className="text-slate-300">•</span>
              <span>SDK + packages + containers</span>
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
              <Chip text="7 LLM Providers" />
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
              <p className="mt-2 text-sm text-slate-600">PII detection, prompt injection prevention, content moderation, secret detection (500+ patterns). Deterministic enforcement — not probabilistic filtering.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">💰 Cost Governance</p>
              <p className="mt-2 text-sm text-slate-600">Budget enforcement per request, session, and day. Circuit breakers prevent runaway loops. Cost velocity anomaly detection across all 7 providers.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔌 7 LLM Providers</p>
              <p className="mt-2 text-sm text-slate-600">OpenAI, Anthropic, Google Gemini, AWS Bedrock, Azure OpenAI, Cohere, Mistral AI. 95%+ market coverage. Drop-in client wrappers.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📋 Audit Evidence</p>
              <p className="mt-2 text-sm text-slate-600">Every decision produces a structured record with correlation IDs, policy version, and named reason codes. SARIF, JUnit XML, and JSON export.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">⚡ Reliability Controls</p>
              <p className="mt-2 text-sm text-slate-600">Bounded retry with budget, fallback chains, deterministic degradation, circuit breaker (CLOSED → OPEN → HALF_OPEN → CLOSED).</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🏗️ Deterministic Engine</p>
              <p className="mt-2 text-sm text-slate-600">No LLM in the governance path. Policy evaluation is deterministic and reconstructable. Every verdict traceable to the human policy author.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Dimensions */}
      <section id="governance" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">6 Governance Dimensions</h2>
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
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Security</td><td className="py-3 pr-6">SEC</td><td className="py-3 pr-6">Secret detection, PII, prompt injection, content moderation</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Cost</td><td className="py-3 pr-6">COST</td><td className="py-3 pr-6">Budget enforcement, cost tracking, velocity anomaly detection</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Reliability</td><td className="py-3 pr-6">REL</td><td className="py-3 pr-6">Retry budgets, fallback chains, circuit breakers, degradation</td><td className="py-3"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">v1.1</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Memory</td><td className="py-3 pr-6">MEM</td><td className="py-3 pr-6">Agentic memory governance — scopes, classifications, TTL, redaction</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 pr-6 font-medium">Registry</td><td className="py-3 pr-6">REG</td><td className="py-3 pr-6">Model/tool allowlisting, provenance verification, supply chain scoring</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
                <tr><td className="py-3 pr-6 font-medium">Evidence</td><td className="py-3 pr-6">EVID</td><td className="py-3 pr-6">SARIF export, golden tests, red-team harness, formal evidence contract</td><td className="py-3"><span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800">v1.2</span></td></tr>
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
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
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link href={npmUrl}>npm</Link>
                <Link href={pypiUrl}>PyPI</Link>
                <Link href={dockerHubOrgUrl}>Docker</Link>
                <Link href={githubUrl}>GitHub</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.2.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-indigo-700">Coming Soon</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Governance Bundle</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />7 governance modules across 6 dimensions</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />Formal evidence contract — named reason codes, decision actions</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />Secret detection (500+ patterns, confidence scoring)</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />Memory governance, registry allowlisting, provenance verification</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />SARIF export, golden tests, red-team harness</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">Documentation will be published when v1.2 ships.</p>
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

      {/* Build With Us — Contributor Section */}
      <section id="contribute" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Build With Us</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            TealTiger is open source (Apache 2.0) and we&apos;re looking for early contributors to shape the future of AI agent governance.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔍 Secret Detection Patterns</p>
              <p className="mt-2 text-sm text-slate-600">Add new detection patterns for API keys, tokens, and credentials. 500+ patterns and growing.</p>
              <p className="mt-3"><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-800">Beginner</span></p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">🔌 Framework Integrations</p>
              <p className="mt-2 text-sm text-slate-600">Build governance middleware for LangChain, CrewAI, AutoGen, and LlamaIndex.</p>
              <p className="mt-3"><span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-800">Intermediate</span></p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">📝 Documentation &amp; Examples</p>
              <p className="mt-2 text-sm text-slate-600">Write guides, code examples, and API docs. Both TypeScript and Python.</p>
              <p className="mt-3"><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-800">Beginner</span></p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/40 p-6">
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
            <p className="text-sm text-slate-500">AI agents need governance, not just guardrails.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
