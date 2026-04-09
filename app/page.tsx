export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-teal-600" />
            <span className="text-base font-semibold tracking-tight">
              TealTiger
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-teal-700" href="#overview">Overview</a>
            <a className="hover:text-teal-700" href="#releases">Releases</a>
            <a className="hover:text-teal-700" href="#docs">Docs</a>
            <a className="hover:text-teal-700" href="#community">Community</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-slate-50"
              href="https://github.com/agentguard-ai/TealTiger"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-700"
              href="#docs"
            >
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
              <a
                href="#docs"
                className="rounded-2xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Read Docs
              </a>
              <a
                href="#releases"
                className="rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                See Releases
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border px-3 py-1">TypeScript</span>
              <span className="rounded-full border px-3 py-1">Java</span>
              <span className="rounded-full border px-3 py-1">Docker</span>
              <span className="rounded-full border px-3 py-1">Policy-ready</span>
              <span className="rounded-full border px-3 py-1">Enterprise-first</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you get</h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                <span>
                  <span className="font-semibold">Guardrails that are deterministic</span> — predictable outcomes with versioned contracts.
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
                  <span className="font-semibold">Evidence readiness (v1.2.x)</span> — structured events and verification harness direction.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border bg-white p-4">
              <p className="text-sm font-semibold">Quick note</p>
              <p className="mt-1 text-sm text-slate-600">
                v1.2.x focuses on expanding governance + evidence primitives
                (TEEC direction), verification harness patterns, and enterprise reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="border-t bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            TealTiger is built for teams who want AI controls that behave like software
            — versioned, testable, composable. Use it to implement secure and cost-aware
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

      {/* Docs */}
      <section id="docs" className="border-t bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Docs</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Start with the docs for installation, usage patterns, and governance structure.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
              href="https://github.com/agentguard-ai/TealTiger"
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub Repo
            </a>
            <a
              className="rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-white"
              href="#community"
            >
              Community
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="community" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} TealTiger. Built for deterministic AI governance.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                className="text-slate-600 hover:text-teal-700"
                href="https://github.com/agentguard-ai/TealTiger"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="text-slate-600 hover:text-teal-700" href="#overview">
                Overview
              </a>
              <a className="text-slate-600 hover:text-teal-700" href="#releases">
                Releases
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
