export default function HomePage() {
  const docsUrl = "https://docs.tealtiger.ai";
  const playgroundUrl = "https://playground.tealtiger.ai";
  const githubUrl = "https://github.com/agentguard-ai/tealtiger";

  // Docker Hub publisher
  const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
  const dockerHubDockerUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
  const dockerHubPythonUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";
  const dockerHubTypescriptUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-typescript";

  // Per request: show contact as plain text (no link)
  const contactEmailText = "reachout@tealtiger.ai";

  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 shadow-sm">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 16.8c1.6 1.7 3.7 2.7 6 2.7s4.4-1 6-2.7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.2 9.6c1-2 2.8-3.4 4.8-3.4s3.8 1.4 4.8 3.4"
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

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#releases" className="hover:text-slate-900">
              Releases
            </a>
            <a href="#capabilities" className="hover:text-slate-900">
              Capabilities
            </a>
            <a href="#docker" className="hover:text-slate-900">
              Docker
            </a>
            <a href={docsUrl} {...ext} className="hover:text-slate-900">
              Docs
            </a>
            <a href={playgroundUrl} {...ext} className="hover:text-slate-900">
              Playground
            </a>
            <a href={dockerHubOrgUrl} {...ext} className="hover:text-slate-900">
              Docker Hub
            </a>
            <a href={githubUrl} {...ext} className="hover:text-slate-900">
              GitHub
            </a>
            {/* Per request: Contact as plain text in header */}
            <span className="text-slate-500">{contactEmailText}</span>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={docsUrl}
              {...ext}
              className="inline-flex items-center rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold text-slate-900">v1.1.1</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-teal-800">Released</span>
              <span className="text-slate-300">•</span>
              <span>SDK + Docker images</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Enterprise-grade AI Governance &amp; Security SDK
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Deterministic controls for AI apps and agents — built for predictable
              enforcement, modular adoption, and enterprise integration (docs, CI,
              reporting).
            </p>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Java
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Docker
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Policy-ready
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Enterprise-first
              </span>
            </div>

            {/* Links row (docker stays inline like your screenshot) */}
            <div className="mt-4 text-sm text-slate-600">
              <span>Docs:</span>{" "}
              <a href={docsUrl} {...ext} className="underline underline-offset-4">
                docs.tealtiger.ai
              </a>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>Playground:</span>{" "}
              <a
                href={playgroundUrl}
                {...ext}
                className="underline underline-offset-4"
              >
                playground.tealtiger.ai
              </a>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span className="inline-flex items-baseline gap-1">
                <span>Docker:</span>
                <a
                  href={dockerHubOrgUrl}
                  {...ext}
                  className="underline underline-offset-4"
                >
                  tealtigeradmin
                </a>
              </span>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>Contact:</span>{" "}
              <span className="font-medium text-slate-700">
                {contactEmailText}
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={docsUrl}
                {...ext}
                className="inline-flex items-center rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
              >
                Open Docs
              </a>
              <a
                href={playgroundUrl}
                {...ext}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Try Playground
              </a>
              <a
                href={githubUrl}
                {...ext}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Quick Docker Pull</h2>
            <p className="mt-2 text-sm text-slate-600">
              Pull the images directly from Docker Hub.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <pre className="overflow-x-auto text-xs leading-5 text-slate-800">
{`docker pull tealtigeradmin/tealtiger-docker
docker pull tealtigeradmin/tealtiger-python
docker pull tealtigeradmin/tealtiger-typescript`}
              </pre>
            </div>

            <div className="mt-4 grid gap-2 text-sm">
              <a href={dockerHubDockerUrl} {...ext} className="underline underline-offset-4">
                tealtigeradmin/tealtiger-docker
              </a>
              <a href={dockerHubPythonUrl} {...ext} className="underline underline-offset-4">
                tealtigeradmin/tealtiger-python
              </a>
              <a href={dockerHubTypescriptUrl} {...ext} className="underline underline-offset-4">
                tealtigeradmin/tealtiger-typescript
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a href={dockerHubOrgUrl} {...ext} className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
                Docker Hub
              </a>
              <a href={githubUrl} {...ext} className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Releases</h2>
          <p className="mt-2 text-sm text-slate-600">
            Clear status for enterprise planning.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.1.1</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-800">Released</span>
              </div>

              <h3 className="mt-3 text-base font-semibold">Security + cost foundations</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  TypeScript + Java SDK packages
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  Docker images published
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  Core deterministic enforcement patterns
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="text-slate-900">v1.2.x</span>
                <span className="text-slate-300">•</span>
                <span className="text-indigo-700">Upcoming</span>
              </div>

              <h3 className="mt-3 text-base font-semibold">
                Governance expansion + evidence direction
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />
                  TEEC direction (event &amp; evidence contract) — versioned semantics
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />
                  Verification harness patterns (test-like workflows for controls)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />
                  Enterprise reporting hooks (SARIF direction)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-700" />
                  Reliability &amp; integration hardening
                </li>
              </ul>

              {/* Per request: NO button linking to v1.2.x docs */}
              <p className="mt-4 text-xs text-slate-500">
                Documentation for v1.2.x will be published when the features ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Capabilities</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Modular building blocks for security, cost control, governance, and enterprise integration.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Security</p>
              <p className="mt-2 text-sm text-slate-600">
                Deterministic enforcement hooks for safer AI usage.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Governance</p>
              <p className="mt-2 text-sm text-slate-600">
                Dimensions &amp; controls designed for enterprise mapping.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Cost</p>
              <p className="mt-2 text-sm text-slate-600">
                Spend-aware patterns and guardrails.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Evidence (v1.2.x)</p>
              <p className="mt-2 text-sm text-slate-600">
                Structured evidence direction + reporting integration surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Docker */}
      <section id="docker" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Docker</h2>
              <p className="mt-2 text-sm text-slate-600">
                Pull official TealTiger images from Docker Hub.
              </p>
            </div>
            <a href={dockerHubOrgUrl} {...ext} className="text-sm font-semibold text-teal-800 underline underline-offset-4">
              View Docker Hub Publisher
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} TealTiger</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
            <a href={docsUrl} {...ext} className="hover:text-slate-900">Docs</a>
            <a href={playgroundUrl} {...ext} className="hover:text-slate-900">Playground</a>
            <a href={dockerHubOrgUrl} {...ext} className="hover:text-slate-900">Docker Hub</a>
            <a href={githubUrl} {...ext} className="hover:text-slate-900">GitHub</a>
            {/* Per request: plain text */}
            <span className="text-slate-500">{contactEmailText}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
