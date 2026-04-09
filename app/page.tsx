export default function HomePage() {
  const docsUrl = "https://docs.tealtiger.ai";
  const playgroundUrl = "https://playground.tealtiger.ai";
  const contactEmail = "reachout@tealtiger.ai";

  // ✅ Updated links (as requested)
  const githubUrl = "https://github.com/agentguard-ai/tealtiger";

  // ✅ Docker Hub (better than search)
  const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
  const dockerHubPythonUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";
  const dockerHubDockerUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
  const dockerHubTypescriptUrl = "https://hub.docker.com/r/tealtigeradmin/tealtiger-typescript";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          #
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600 shadow-sm">
              {/* Simple TealTiger Mark (inline SVG) */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.5 16.5c1.4 1.9 3.7 3.2 6.5 3.2 2.8 0 5.1-1.3 6.5-3.2"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 9.5c.9-2 2.7-3.6 5-3.6s4.1 1.6 5 3.6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 12.4c.5-.9 1.5-1.6 3-1.6s2.5.7 3 1.6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-base font-semibold tracking-tight">
              TealTiger
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            #overview
              Overview
            </a>
            #umbrella
              Umbrella
            </a>
            #releases
              Releases
            </a>
            {docsUrl}
              Docs
            </a>
            {playgroundUrl}
              Playground
            </a>
            {dockerHubOrgUrl}
              Docker Hub
            </a>
            {`mailto:${contactEmail}`}
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {githubUrl}
              GitHub
            </a>
            {docsUrl}
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <span className="font-semibold">v1.1.1</span>
              <span className="text-slate-600">launched</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">SDK + Docker images</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Deterministic AI Governance &amp; Security SDK
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TealTiger helps teams enforce security, cost controls, and governance
              for modern AI apps and agents — with versioned specifications,
              predictable behavior, and evidence-ready outputs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {docsUrl}
                Open Docs
              </a>
              {playgroundUrl}
                Try Playground
              </a>
              {dockerHubOrgUrl}
                Docker Hub
              </a>
              {`mailto:${contactEmail}`}
                Contact
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border px-3 py-1">TypeScript</span>
              <span className="rounded-full border px-3 py-1">Java</span>
              <span className="rounded-full border px-3 py-1">Docker</span>
              <span className="rounded-full border px-3 py-1">Policy-ready</span>
              <span className="rounded-full border px-3 py-1">Enterprise-first</span>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Docs:</span>{" "}
              {docsUrl}
                docs.tealtiger.ai
              </a>
              <span className="mx-2 text-slate-300">•</span>
              <span className="font-medium text-slate-600">Playground:</span>{" "}
              {playgroundUrl}
                playground.tealtiger.ai
              </a>
              <span className="mx-2 text-slate-300">•</span>
              <span className="font-medium text-slate-600">Docker:</span>{" "}
              {dockerHubOrgUrl}
                hub.docker.com/u/tealtigeradmin
              </a>
              <span className="mx-2 text-slate-300">•</span>
              <span className="font-medium text-slate-600">Contact:</span>{" "}
              {`mailto:${contactEmail}`}
                {contactEmail}
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you get</h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                <span>
                  <span className="font-semibold">Deterministic guardrails</span> — predictable outcomes with versioned contracts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                <span>
                  <span className="font-semibold">Governance dimensions</span> — modular controls you can adopt incrementally.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                <span>
                  <span className="font-semibold">Evidence direction (v1.2.x)</span> — TEEC direction + verification patterns.
                </span>
              </li>
            </ul>

            {/* ✅ Docker block + pull snippets */}
            <div className="mt-6 rounded-2xl border bg-white p-4">
              <p className="text-sm font-semibold">Docker Images</p>
              <p className="mt-1 text-xs text-slate-600">
                Direct links and quick pull commands.
              </p>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                {dockerHubDockerUrl}
                  tealtigeradmin/tealtiger-docker
                </a>
                {dockerHubPythonUrl}
                  tealtigeradmin/tealtiger-python
                </a>
                {dockerHubTypescriptUrl}
                  tealtigeradmin/tealtiger-typescript
                </a>
              </div>

              {/* ✅ Docker pull snippet */}
              <div className="mt-4 rounded-xl border bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-700">
                  Quick pull
                </p>
                <pre className="mt-2 overflow-x-auto text-xs leading-5 text-slate-800">
{`docker pull tealtigeradmin/tealtiger-docker
docker pull tealtigeradmin/tealtiger-python
docker pull tealtigeradmin/tealtiger-typescript`}
                </pre>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {dockerHubOrgUrl}
                  Docker Hub Org
                </a>
                {githubUrl}
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Umbrella Diagram */}
      <section id="umbrella" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                The TealTiger Umbrella
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                TealTiger provides an umbrella of deterministic controls across security, cost, governance,
                and evidence — designed to be composable and verifiable.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {docsUrl}
                Read the Specs
              </a>
              {dockerHubOrgUrl}
                Docker Hub
              </a>
              {githubUrl}
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
            <svg
              viewBox="0 0 960 420"
              role="img"
              aria-label="TealTiger umbrella diagram showing security, cost, governance, and evidence covering apps and agents"
              className="h-auto w-full"
            >
              <defs>
                <linearGradient id="tealGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0f766e" stopOpacity="1" />
                  <stop offset="1" stopColor="#14b8a6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="tealSoft" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#0f766e" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#14b8a6" stopOpacity="0.10" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.12" />
                </filter>
              </defs>

              <rect x="12" y="12" width="936" height="396" rx="28" fill="white" />
              <rect x="12" y="12" width="936" height="396" rx="28" fill="url(#tealSoft)" />

              <path
                d="M160 200 C 240 90, 360 45, 480 45 C 600 45, 720 90, 800 200
                   C 760 220, 720 220, 680 200
                   C 640 220, 600 220, 560 200
                   C 520 220, 480 220, 440 200
                   C 400 220, 360 220, 320 200
                   C 280 220, 240 220, 200 200
                   C 188 206, 176 206, 160 200 Z"
                fill="url(#tealGrad)"
                filter="url(#shadow)"
              />

              <path
                d="M480 52 L480 198"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <g fontFamily="ui-sans-serif, system-ui" fontWeight="700" fill="white" fontSize="18">
                <text x="235" y="130">Security</text>
                <text x="400" y="110">Governance</text>
                <text x="545" y="110">Cost</text>
                <text x="690" y="130">Evidence</text>
              </g>

              <g fontFamily="ui-sans-serif, system-ui" fontWeight="500" fill="rgba(255,255,255,0.9)" fontSize="12">
                <text x="210" y="152">Prompt / Tool / Runtime controls</text>
                <text x="378" y="132">Dimensions &amp; controls</text>
                <text x="535" y="132">Budgets &amp; spend safety</text>
                <text x="655" y="152">TEEC direction + verification</text>
              </g>

              <path
                d="M480 200 C480 230, 480 260, 480 290 C480 330, 505 350, 530 350"
                stroke="#0f766e"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M530 350 C540 350, 548 360, 548 370 C548 390, 520 402, 500 388"
                stroke="#0f766e"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />

              <g filter="url(#shadow)">
                <rect x="355" y="250" width="250" height="70" rx="18" fill="white" />
                <rect x="355" y="250" width="250" height="70" rx="18" fill="rgba(20,184,166,0.10)" />
              </g>
              <g fontFamily="ui-sans-serif, system-ui" fill="#0f172a">
                <text x="480" y="280" textAnchor="middle" fontSize="18" fontWeight="800">
                  TealTiger SDK
                </text>
                <text x="480" y="302" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="600">
                  deterministic enforcement • composable modules • enterprise-ready
                </text>
              </g>

              <g>
                <rect x="170" y="340" width="620" height="52" rx="16" fill="white" stroke="rgba(15,23,42,0.12)" />
                <g fontFamily="ui-sans-serif, system-ui" fill="#0f172a" fontWeight="700">
                  <text x="480" y="372" textAnchor="middle" fontSize="14">
                    AI Apps • Agents • Tools • Pipelines
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="border-t bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            TealTiger is built for teams who want AI controls that behave like software —
            versioned, testable, composable. Use it to implement secure and cost-aware
            execution across prompts, tools, policies, and runtime pathways.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">Security</h3>
              <p className="mt-2 text-sm text-slate-600">
                Policy hooks for safer AI usage patterns with consistent enforcement.
              </p>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">Cost Controls</h3>
              <p className="mt-2 text-sm text-slate-600">
                Budget and usage-aware patterns to prevent runaway spend.
              </p>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">Governance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dimensions + controls that map cleanly to enterprise needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Releases</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Current status and what’s next — kept high-level on purpose, with detailed
            specs living in docs and PRDs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs">
                <span className="font-semibold">v1.1.1</span>
                <span className="text-slate-500">launched</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Security + Cost foundations</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>SDK packages (TypeScript + Java)</li>
                <li>Docker images published</li>
                <li>Core patterns for deterministic enforcement</li>
              </ul>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="font-semibold">v1.2.x</span>
                <span className="text-slate-500">upcoming</span>
              </div>
              <h3 className="mt-3 text-base font-semibold">Evidence + Verification direction</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>High-level TEEC direction (event/evidence contract)</li>
                <li>Verification harness module patterns (ex: JUnit style)</li>
                <li>Enterprise reporting hooks (ex: SARIF direction)</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Note: TEEC is not fully built yet — this section intentionally describes direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} TealTiger. Built for deterministic AI governance.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              {docsUrl}Docs</a>
              {playgroundUrl}Playground</a>
              {dockerHubOrgUrl}Docker Hub</a>
              {`mailto:${contactEmail}`}Contact</a>
              {githubUrl}GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
