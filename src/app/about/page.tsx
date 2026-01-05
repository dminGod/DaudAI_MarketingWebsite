import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about DaudAI - the remote control solution for Claude Code sessions. Our mission, vision, and the problem we solve.',
  openGraph: {
    title: 'About DaudAI',
    description:
      'Learn about DaudAI - the remote control solution for Claude Code sessions. Our mission, vision, and the problem we solve.',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            About <span className="text-gradient-brand">DaudAI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Empowering developers to stay connected to their AI coding sessions from anywhere in the
            world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Claude Code is an incredible tool that transforms how developers work. But what
                happens when you need to step away from your desk? What if Claude needs permission
                to run a command while you're grabbing coffee?
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                DaudAI bridges this gap. We believe you should never have to choose between staying
                productive and being mobile. Our mission is to give developers complete control over
                their Claude Code sessions, no matter where they are.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/mascot.png"
                alt="DaudAI Mascot"
                width={400}
                height={400}
                className="h-auto w-full max-w-sm drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              The Problem We Solve
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* The Problem */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Before DaudAI</h3>
              <ul className="mt-6 space-y-4">
                <ProblemItem text="Claude Code sessions are tied to your desktop" />
                <ProblemItem text="Can't approve permissions when away from your desk" />
                <ProblemItem text="No visibility into session progress while mobile" />
                <ProblemItem text="Long-running tasks require you to stay at your computer" />
                <ProblemItem text="Managing sessions across multiple machines is difficult" />
              </ul>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl border border-[var(--accent)] bg-[var(--card)] p-8">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">With DaudAI</h3>
              <ul className="mt-6 space-y-4">
                <SolutionItem text="Access your sessions from any mobile device" />
                <SolutionItem text="Approve or deny permissions instantly from your phone" />
                <SolutionItem text="Real-time updates on session activity" />
                <SolutionItem text="Let Claude work while you're in meetings or commuting" />
                <SolutionItem text="Seamlessly switch between machines" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Built Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Built for Security
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Privacy and security are at the core of everything we build
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Zero-Knowledge Architecture"
              description="Our relay servers route your messages but can never read them. All session data is end-to-end encrypted."
            />
            <ValueCard
              title="Open Source"
              description="Transparency builds trust. Our core components are open source so you can verify our security claims."
            />
            <ValueCard
              title="Your Keys, Your Data"
              description="Encryption keys are generated and stored on your devices. We never have access to your private keys."
            />
            <ValueCard
              title="Device Control"
              description="You decide which devices can access your sessions. Revoke access instantly from any connected device."
            />
            <ValueCard
              title="No Data Mining"
              description="We don't analyze, sell, or monetize your data. Your coding sessions are yours alone."
            />
            <ValueCard
              title="Self-Host Option"
              description="For maximum control, you can run your own relay server. Complete data sovereignty."
            />
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Open Source
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            DaudAI is built in the open. Explore our code, contribute, or run your own instance.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/daudai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-6 py-3 text-base font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
            >
              <Github className="h-5 w-5" />
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://docs.daud.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-base font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--card-hover)]"
            >
              Read the Docs
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Take control of your Claude Code sessions from anywhere.
          </p>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-orange-500/40"
            >
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xs text-red-600 dark:bg-red-900/30 dark:text-red-400">
        ✕
      </span>
      <span className="text-[var(--muted)]">{text}</span>
    </li>
  );
}

function SolutionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600 dark:bg-green-900/30 dark:text-green-400">
        ✓
      </span>
      <span className="text-[var(--foreground)]">{text}</span>
    </li>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}
