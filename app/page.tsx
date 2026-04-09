export default function HomePage() {
  const docsUrl = "https://docs.tealtiger.ai";
  const playgroundUrl = "https://playground.tealtiger.ai";
  const dockerHubUrl = "https://hub.docker.com/u/tealtigeradmin";
  const githubUrl = "https://github.com/agentguard-ai/tealtiger";
  const contactEmail = "reachout@tealtiger.ai";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-teal-600" />
            <span className="text-lg font-semibold">TealTiger</span>
          </div>

          <nav className="flex gap-6 text-sm text-slate-600">
            <a href={docsUrl} target="_blank">Docs</a>
            <a href={playgroundUrl} target="_blank">Playground</a>
            <a href={dockerHubUrl} target="_blank">Docker</a>
            <a href={githubUrl} target="_blank">GitHub</a>
            <a href={`mailto:${contactEmail}`}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-semibold tracking-tight">
          Deterministic AI Governance &amp; Security SDK
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          TealTiger enables deterministic security, cost, and governance controls
          for AI applications and agents — designed for enterprise adoption.
        </p>

        {/* Capability chips */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
          <span className="rounded-full border px-3 py-1">TypeScript</span>
          <span className="rounded-full border px-3 py-1">Java</span>
          <span className="rounded-full border px-3 py-1">Docker</span>
          <span className="rounded-full border px-3 py-1">Policy‑ready</span>
          <span className="rounded-full border px-3 py-1">Enterprise‑first</span>
        </div>

        {/* Flat links row (matches your screenshot style) */}
        <div className="mt-5 text-sm text-slate-600">
          <span className="font-medium">Docs:</span>{" "}
          <a className="underline" href={docsUrl} target="_blank">
            docs.tealtiger.ai
          </a>
          <span className="mx-2">·</span>

          <span className="font-medium">Playground:</span>{" "}
          <a className="underline" href={playgroundUrl} target="_blank">
            playground.tealtiger.ai
          </a>
          <span className="mx-2">·</span>

          <span className="font-medium">Docker:</span>{" "}
          <a className="underline" href={dockerHubUrl} target="_blank">
            tealtigeradmin
          </a>
          <span className="mx-2">·</span>

          <span className="font-medium">Contact:</span>{" "}
          <a className="underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </section>

      {/* Umbrella Diagram (clean + centered) */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border bg-gradient-to-br from-teal-50 to-white p-10">
          <svg viewBox="0 0 900 420" className="w-full h-auto">
            <defs>
              <linearGradient id="canopy" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f766e" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>

            {/* Canopy */}
            <path
              d="
                M120 200
                C200 80, 350 40, 450 40
                C550 40, 700 80, 780 200
                C700 210, 650 210, 600 200
                C550 210, 500 210, 450 200
                C400 210, 350 210, 300 200
                C250 210, 200 210, 150 200
                Z
              "
              fill="url(#canopy)"
            />

            {/* Labels */}
            <g fill="white" fontSize="18" fontWeight="600" textAnchor="middle">
              <text x="240" y="125">Security</text>
              <text x="380" y="105">Governance</text>
              <text x="520" y="105">Cost</text>
              <text x="660" y="125">Evidence</text>
            </g>

            {/* Stem */}
            <path
              d="M450 200 L450 290"
              stroke="#0f766e"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* SDK box */}
            <rect x="300" y="260" rx="18" ry="18" width="300" height="70" fill="white" />
            <text
              x="450"
              y="300"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#0f172a"
            >
              TealTiger SDK
            </text>
            <text
              x="450"
              y="322"
              textAnchor="middle"
              fontSize="12"
              fill="#475569"
            >
              deterministic enforcement • composable modules • enterprise‑ready
            </text>

            {/* Bottom strip */}
            <rect x="220" y="350" rx="16" ry="16" width="460" height="42" fill="white" />
            <text
              x="450"
              y="378"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="#0f172a"
            >
              AI Apps • Agents • Tools • Pipelines
            </text>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex justify-between">
          <span>© {new Date().getFullYear()} TealTiger</span>
          <div className="flex gap-4">
            <a href={docsUrl} target="_blank">Docs</a>
            <a href={githubUrl} target="_blank">GitHub</a>
            <a href={dockerHubUrl} target="_blank">Docker</a>
            <a href={`mailto:${contactEmail}`}>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
