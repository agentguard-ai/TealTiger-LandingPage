'use client';

export default function Page() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
        TealTiger
      </h1>

      <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '48rem' }}>
        Runtime AI governance for security, cost, and evidence.
      </p>

      <section style={{ marginTop: '3rem', maxWidth: '48rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
          What TealTiger provides
        </h2>

        <ul style={{ marginTop: '1rem', lineHeight: 1.8 }}>
          <li>Deterministic runtime enforcement for AI systems</li>
          <li>Cost guardrails and execution‑time attribution</li>
          <li>Evidence‑ready decision outputs for audit and compliance</li>
        </ul>
      </section>
    </main>
  );
}
