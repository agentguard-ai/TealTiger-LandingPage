export default function HomePage() {
  const docsUrl = "https://docs.tealtiger.ai";
  const playgroundUrl = "https://playground.tealtiger.ai";
  const githubUrl = "https://github.com/agentguard-ai/tealtiger";

  // Docker Hub publisher (from your screenshot)
  const dockerHubOrgUrl = "https://hub.docker.com/u/tealtigeradmin";
  const dockerHubDockerUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-docker";
  const dockerHubPythonUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-python";
  const dockerHubTypescriptUrl =
    "https://hub.docker.com/r/tealtigeradmin/tealtiger-typescript";

  // ✅ Confirmed by you
  const npmUrl = "https://www.npmjs.com/package/tealtiger";
  const pypiUrl = "https://pypi.org/project/tealtiger/";

  // Per your request: plain text contact (no link)
  const contactEmailText = "reachout@tealtiger.ai";

  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  const Chip = ({ text }: { text: string }) => (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
      {text}
    </span>
  );

  const Link = ({
    href,
    children,
    className = "",
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a
      href={href}
      {...ext}
      className={`text-slate-700 underline underline-offset-4 hover:text-slate-900 ${className}`}
    >
      {children}
    </a>
  );

  const ButtonPrimary = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      {...ext}
      className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
    >
      {children}
    </a>
  );

  const ButtonSecondary = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      {...ext}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
    >
      {children}
    </a>
  );

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <pre className="overflow-x-auto text-xs leading-5 text-slate-800">
        {code}
      </pre>
    </div>
  );

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
            <a href="#install" className="hover:text-slate-900">
              Install
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
            <a href={npmUrl} {...ext} className="hover:text-slate-900">
              npm
            </a>
            <a href={pypiUrl} {...ext} className="hover:text-slate-900">
              PyPI
            </a>
            <a href={githubUrl} {...ext} className="hover:text-slate-900">
              GitHub
            </a>

            {/* Per request: plain text contact */}
            <span className="text-slate-500">{contactEmailText}</span>
          </nav>

          <div className="flex items-center gap-2">
            <a href={docsUrl} {...ext} className="inline-flex">
              <span className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800">
                Get Started
              </span>
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
              <span>SDK + packages + containers</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Enterprise-grade AI Governance &amp; Security SDK
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Deterministic controls for AI apps and agents — built for predictable
              enforcement, modular adoption, and enterprise integration (docs, CI,
              reporting).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip text="TypeScript" />
              <Chip text="Java" />
              <Chip text="Python" />
              <Chip text="Docker" />
              <Chip text="Policy-ready" />
              <Chip text="Enterprise-first" />
            </div>

            {/* Single clean link row (Docker stays inline) */}
            <div className="mt-4 text-sm text-slate-600">
              <span>Docs:</span>{" "}
              <Link href={docsUrl}>docs.tealtiger.ai</Link>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>Playground:</span>{" "}
              <Link href={playgroundUrl}>playground.tealtiger.ai</Link>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span className="inline-flex items-baseline gap-1">
                <span>Docker:</span>{" "}
                <Link href={dockerHubOrgUrl}>tealtigeradmin</Link>
              </span>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>npm:</span> <Link href={npmUrl}>tealtiger</Link>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>PyPI:</span> <Link href={pypiUrl}>tealtiger</Link>{" "}
              <span className="mx-2 text-slate-300">•</span>
              <span>Contact:</span>{" "}
              <span className="font-medium text-slate-700">
                {contactEmailText}
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonPrimary href={docsUrl}>Open Docs</ButtonPrimary>
              <ButtonSecondary href={playgroundUrl}>
                Try Playground
              </ButtonSecondary>
              <ButtonSecondary href={githubUrl}>View GitHub</ButtonSecondary>
            </div>
          </div>

          {/* Right card: install quick paths */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Install options</h2>
            <p className="mt-2 text-sm text-slate-600">
              Choose the integration path that fits your stack: npm, pip, or Docker.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  npm (TypeScript)
                </p>
                <CodeBlock code={`npm install tealtiger`} />
                <div className="mt-3 text-sm">
                  <Link href={npmUrl}>View on npm</Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  pip (Python)
                </p>
                <CodeBlock code={`pip install tealtiger`} />
                <div className="mt-3 text-sm">
                  <Link href={pypiUrl}>View on PyPI</Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Docker</p>
                <CodeBlock
                  code={`docker pull tealtigeradmin/tealtiger-docker
docker pull tealtigeradmin/tealtiger-python
docker pull tealtigeradmin/tealtiger-typescript`}
                />
                <div className="mt-3 text-sm">
                  <Link href={dockerHubOrgUrl}>View Docker Hub publisher</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install section */}
      <section id="install" className="border-t border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Install</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Standard distribution channels for enterprise environments: npm, PyPI,
            and Docker Hub.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">npm</p>
              <p className="mt-2 text-sm text-slate-600">
                TypeScript / Node integration.
              </p>
              <CodeBlock code={`npm install tealtiger`} />
              <div className="mt-4 text-sm">
                <Link href={npmUrl}>npm package</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">PyPI</p>
              <p className="mt-2 text-sm text-slate-600">
                Python integration.
              </p>
              <CodeBlock code={`pip install tealtiger`} />
              <div className="mt-4 text-sm">
                <Link href={pypiUrl}>PyPI project</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Docker Hub</p>
              <p className="mt-2 text-sm text-slate-600">
                Containerized runtime and deployments.
              </p>
              <CodeBlock code={`docker pull tealtigeradmin/tealtiger-docker`} />
              <div className="mt-4 text-sm">
                <Link href={dockerHubOrgUrl}>Docker publisher</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="border-t border-slate-200 bg-white">
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

              <h3 className="mt-3 text-base font-semibold">
                Security + cost foundations
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  npm package (TypeScript)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  PyPI package (Python)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                  Docker images published
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Link href={npmUrl}>npm</Link>
                <Link href={pypiUrl}>PyPI</Link>
                <Link href={dockerHubOrgUrl}>Docker Hub</Link>
                <Link href={githubUrl}>GitHub</Link>
              </div>
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

              {/* Per request: no button linking to v1.2.x docs */}
              <p className="mt-4 text-xs text-slate-500">
                v1.2.x documentation will be published when features ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="border-t border-slate-200 bg-slate-50/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Capabilities</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Modular building blocks for security, cost control, governance, and
            enterprise integration.
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
      <section id="docker" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Docker</h2>
              <p className="mt-2 text-sm text-slate-600">
                Official images published under tealtigeradmin.
              </p>
            </div>
            <a
              href={dockerHubOrgUrl}
              {...ext}
              className="text-sm font-semibold text-slate-800 underline underline-offset-4 hover:text-slate-900"
            >
              View Docker Hub Publisher
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Quick pull</p>
              <CodeBlock
                code={`docker pull tealtigeradmin/tealtiger-docker
docker pull tealtigeradmin/tealtiger-python
docker pull tealtigeradmin/tealtiger-typescript`}
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Image links</p>
              <div className="mt-4 grid gap-2 text-sm">
                <Link href={dockerHubDockerUrl}>tealtiger-docker</Link>
                <Link href={dockerHubPythonUrl}>tealtiger-python</Link>
                <Link href={dockerHubTypescriptUrl}>tealtiger-typescript</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} TealTiger
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
            <a href={docsUrl} {...ext} className="hover:text-slate-900">
              Docs
            </a>
            <a href={playgroundUrl} {...ext} className="hover:text-slate-900">
              Playground
            </a>
            <a href={dockerHubOrgUrl} {...ext} className="hover:text-slate-900">
              Docker Hub
            </a>
            <a href={npmUrl} {...ext} className="hover:text-slate-900">
              npm
            </a>
            <a href={pypiUrl} {...ext} className="hover:text-slate-900">
              PyPI
            </a>
            <a href={githubUrl} {...ext} className="hover:text-slate-900">
              GitHub
            </a>
            <span className="text-slate-500">{contactEmailText}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
