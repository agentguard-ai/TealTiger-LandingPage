'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'typescript' | 'python'>('typescript');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/tealtiger-logo.png" 
              alt="TealTiger Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              TealTiger
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium">Features</a>
            <a href="#quickstart" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium">Quick Start</a>
            <a href="https://github.com/agentguard-ai/tealtiger" className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold">
              GitHub →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-900 dark:text-teal-100">
              TypeScript v1.1.0 Live • Python v1.1.0 Coming Q2 2026
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Secure AI Apps.
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">
              Control Costs.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Drop-in SDK for OpenAI, Anthropic, Gemini & more. Add security guardrails and cost tracking in one line of code.
          </p>

          {/* Install Commands */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-slate-900 dark:bg-slate-800 rounded-xl px-6 py-4 flex items-center gap-3 shadow-xl border border-slate-700">
              <span className="text-slate-400 font-mono text-sm">npm</span>
              <code className="text-teal-400 font-mono font-semibold">npm install tealtiger</code>
            </div>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-xl px-6 py-4 flex items-center gap-3 shadow-xl border border-slate-700">
              <span className="text-slate-400 font-mono text-sm">pip</span>
              <code className="text-teal-400 font-mono font-semibold">pip install tealtiger</code>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/agentguard-ai/tealtiger#readme"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              📖 Documentation
            </a>
            <a
              href="https://github.com/agentguard-ai/tealtiger"
              className="px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white border-2 border-slate-700 rounded-xl hover:border-teal-500 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start Code */}
      <section id="quickstart" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get Started in 30 Seconds
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Replace your AI client. That's it. Zero config needed.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            onClick={() => setActiveTab('typescript')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'typescript'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            TypeScript
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'python'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Python
          </button>
        </div>

        {/* Code Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Before */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-red-200 dark:border-red-900/30">
            <div className="bg-red-50 dark:bg-red-900/20 px-6 py-3 border-b border-red-200 dark:border-red-900/30">
              <span className="text-red-700 dark:text-red-400 font-semibold flex items-center gap-2">
                <span className="text-xl">❌</span> Before (Vulnerable)
              </span>
            </div>
            <div className="bg-slate-950 p-6">
              {activeTab === 'typescript' ? (
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ⚠️ No security
// ⚠️ No cost tracking
// ⚠️ No monitoring

const response = await client.chat
  .completions.create({
    model: 'gpt-4',
    messages: [{ 
      role: 'user', 
      content: userInput 
    }]
  });`}</code>
                </pre>
              ) : (
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# ⚠️ No security
# ⚠️ No cost tracking
# ⚠️ No monitoring

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": user_input
    }]
)`}</code>
                </pre>
              )}
            </div>
          </div>

          {/* After */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-teal-200 dark:border-teal-900/30">
            <div className="bg-teal-50 dark:bg-teal-900/20 px-6 py-3 border-b border-teal-200 dark:border-teal-900/30">
              <span className="text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-2">
                <span className="text-xl">✅</span> After (Protected)
              </span>
            </div>
            <div className="bg-slate-950 p-6">
              {activeTab === 'typescript' ? (
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`import { TealOpenAI } from 'tealtiger';

const client = new TealOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  enableGuardrails: true,
  enableCostTracking: true
});

// ✅ PII detection
// ✅ Cost tracking & budgets
// ✅ Real-time monitoring

const response = await client.chat
  .completions.create({
    model: 'gpt-4',
    messages: [{ 
      role: 'user', 
      content: userInput 
    }]
  });`}</code>
                </pre>
              ) : (
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`from tealtiger import TealOpenAI

client = TealOpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    enable_guardrails=True,
    enable_cost_tracking=True
)

# ✅ PII detection
# ✅ Cost tracking & budgets
# ✅ Real-time monitoring

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": user_input
    }]
)`}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">The $50,000 Problem</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A developer woke up to a $50,000 AWS bill. Their AI agent ran wild overnight. 
              <span className="text-teal-400 font-semibold"> This shouldn't happen to you.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-3 text-red-400">Cost Disasters</h3>
              <p className="text-slate-300 leading-relaxed">
                No budget limits. No cost tracking. One infinite loop = bankruptcy.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-400">Security Risks</h3>
              <p className="text-slate-300 leading-relaxed">
                PII leaks. Prompt injection. Jailbreaks. Your AI is vulnerable.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">Manual Work</h3>
              <p className="text-slate-300 leading-relaxed">
                Building guardrails takes weeks. You have better things to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              One SDK. Complete Protection.
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            TealTiger wraps your AI calls with enterprise-grade security, cost control, and monitoring.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Built-in Guardrails</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              PII detection, prompt injection protection, content moderation - all automatic.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Detect SSN, credit cards, emails
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Block jailbreak attempts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Filter toxic content
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Cost Tracking</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Monitor AI costs in real-time. Set budgets. Get alerts before disaster strikes.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Track costs per request
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Set daily/monthly budgets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Automatic cost alerts
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Drop-in SDK</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              100% API compatible. Replace your client in one line. Zero migration needed.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Zero code changes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Works with existing code
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 5 minute setup
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">7 Providers</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              OpenAI, Anthropic, Gemini, Bedrock, Azure, Cohere, Mistral - unified API.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 95%+ market coverage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Easy provider switching
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Consistent interface
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Monitoring</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Detect anomalies, track patterns, prevent abuse - all automatic.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Anomaly detection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Usage analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Audit logging
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <span className="text-3xl">🔓</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Open Source</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              MIT licensed. No vendor lock-in. Full transparency. Community-driven.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> MIT License
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Self-hostable
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> No telemetry
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SDK Versions & Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">SDK Status & Roadmap</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            TypeScript SDK is production-ready with v1.1.0. Python SDK coming soon with full feature parity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* TypeScript SDK */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-8 rounded-2xl border-2 border-teal-500 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">TS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">TypeScript SDK</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">v1.1.0</span>
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">✓ STABLE</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Production-ready with TealEngine, 7 providers, and full OWASP coverage.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">TealEngine Core</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Policy engine, validation, caching</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">7 AI Providers</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">OpenAI, Anthropic, Gemini, Bedrock, Azure, Cohere, Mistral</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">All Components</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">TealGuard, TealMonitor, TealCircuit, TealAudit</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.npmjs.com/package/tealtiger"
              className="block w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-center"
            >
              npm install tealtiger
            </a>
          </div>

          {/* Python SDK */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">Py</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Python SDK</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-3 py-1 bg-slate-600 text-white text-xs font-bold rounded-full">v0.2.2</span>
                    <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">⚡ UPGRADING</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Currently v0.2.2 with basic features. v1.1.0 in development for full parity.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">⏳</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">TealEngine Core</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Coming in v1.1.0 (Q2 2026)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">⏳</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">7 AI Providers</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Full multi-provider support planned</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Basic Features</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">OpenAI/Anthropic clients, cost tracking available now</div>
                </div>
              </div>
            </div>

            <a
              href="https://pypi.org/project/tealtiger/"
              className="block w-full px-6 py-3 bg-slate-700 dark:bg-slate-600 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-slate-500 transition-all font-semibold text-center"
            >
              pip install tealtiger
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <span className="text-2xl">📅</span>
            <div className="text-left">
              <div className="font-semibold text-blue-900 dark:text-blue-100">Python v1.1.0 Timeline</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">15 weeks development • Q2-Q3 2026 release</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10" style={{
          backgroundImage: 'linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Protecting Your AI Apps Today
            </h2>
            <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join developers building secure, cost-effective AI applications. Open source, MIT licensed, ready in 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://www.npmjs.com/package/tealtiger"
                className="px-10 py-5 bg-white text-teal-600 rounded-xl hover:bg-teal-50 transition-all font-bold text-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-normal">npm</div>
                    <div>npm install tealtiger</div>
                  </div>
                </div>
              </a>
              <a
                href="https://pypi.org/project/tealtiger/"
                className="px-10 py-5 bg-white text-teal-600 rounded-xl hover:bg-teal-50 transition-all font-bold text-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐍</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-normal">pip</div>
                    <div>pip install tealtiger</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex gap-8 justify-center items-center text-teal-50 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold">5 Min Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔓</span>
                <span className="font-semibold">MIT License</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/tealtiger-logo.png" 
                  alt="TealTiger Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-white">TealTiger</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Open-source AI security and cost control for modern applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-400 hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#quickstart" className="text-slate-400 hover:text-teal-400 transition-colors">Quick Start</a></li>
                <li><a href="https://github.com/agentguard-ai/tealtiger#readme" className="text-slate-400 hover:text-teal-400 transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li><a href="https://github.com/agentguard-ai/tealtiger" className="text-slate-400 hover:text-teal-400 transition-colors">GitHub</a></li>
                <li><a href="https://www.npmjs.com/package/tealtiger" className="text-slate-400 hover:text-teal-400 transition-colors">npm Package</a></li>
                <li><a href="https://pypi.org/project/tealtiger/" className="text-slate-400 hover:text-teal-400 transition-colors">PyPI Package</a></li>
                <li><a href="https://dev.to/nagasatish_chilakamarti_2/introducing-tealtiger-ai-security-cost-control-made-simple-4lma" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Connect</h4>
              <ul className="space-y-3">
                <li><a href="https://github.com/agentguard-ai" className="text-slate-400 hover:text-teal-400 transition-colors">GitHub Org</a></li>
                <li><a href="https://www.linkedin.com/company/tealtiger" className="text-slate-400 hover:text-teal-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com/tealtiger" className="text-slate-400 hover:text-teal-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2026 TealTiger. MIT Licensed. Built with ❤️ for the AI community.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/agentguard-ai/tealtiger/blob/main/LICENSE" className="text-slate-400 hover:text-teal-400 transition-colors">License</a>
              <a href="https://github.com/agentguard-ai/tealtiger/blob/main/SECURITY.md" className="text-slate-400 hover:text-teal-400 transition-colors">Security</a>
              <a href="https://github.com/agentguard-ai/tealtiger/blob/main/CONTRIBUTING.md" className="text-slate-400 hover:text-teal-400 transition-colors">Contributing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
