import Image from 'next/image';
import Link from 'next/link';
import {
  Smartphone,
  Shield,
  MessageSquare,
  RefreshCw,
  Monitor,
  Lock,
  ArrowRight,
  Download,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--background)]">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[var(--color-orange-100)] opacity-50 blur-3xl dark:bg-[var(--color-orange-500)] dark:opacity-10" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[var(--color-orange-200)] opacity-30 blur-3xl dark:bg-[var(--color-orange-400)] dark:opacity-10" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Control{' '}
                <span className="text-gradient-brand">Claude Code</span>
                <br />
                from Anywhere
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Access your Claude Code sessions remotely from your mobile device. Monitor progress,
                approve permissions, send commands, and stay connected to your AI coding sessions on
                the go.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-orange-500/40"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-base font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--card-hover)]"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Mascot */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/mascot.png"
                  alt="DaudAI Mascot - An energetic character ready to help you control Claude Code"
                  width={500}
                  height={500}
                  className="h-auto w-full max-w-md drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Available on Mobile
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Download the app for iOS or Android and take control of your Claude Code sessions from
              anywhere.
            </p>
          </div>

          {/* App Screenshots */}
          <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row lg:gap-16">
            {/* Android Screenshot Placeholder */}
            <div className="flex flex-col items-center">
              <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[2.5rem] border-4 border-[var(--foreground)] bg-[var(--card)] shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-orange-100)] to-[var(--color-orange-200)] dark:from-[var(--color-brown-800)] dark:to-[var(--color-brown-700)]">
                  <div className="text-center">
                    <Smartphone className="mx-auto h-16 w-16 text-[var(--muted)]" />
                    <p className="mt-4 text-sm text-[var(--muted)]">Android Screenshot</p>
                    <p className="text-xs text-[var(--muted)]">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Download className="h-5 w-5 text-[var(--accent)]" />
                <span className="font-medium text-[var(--foreground)]">Google Play</span>
              </div>
            </div>

            {/* iOS Screenshot Placeholder */}
            <div className="flex flex-col items-center">
              <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[2.5rem] border-4 border-[var(--foreground)] bg-[var(--card)] shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-orange-100)] to-[var(--color-orange-200)] dark:from-[var(--color-brown-800)] dark:to-[var(--color-brown-700)]">
                  <div className="text-center">
                    <Smartphone className="mx-auto h-16 w-16 text-[var(--muted)]" />
                    <p className="mt-4 text-sm text-[var(--muted)]">iOS Screenshot</p>
                    <p className="text-xs text-[var(--muted)]">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Download className="h-5 w-5 text-[var(--accent)]" />
                <span className="font-medium text-[var(--foreground)]">App Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Stay connected to your Claude Code sessions with powerful features designed for
              developers on the move.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Smartphone}
              title="Mobile Access"
              description="Access your Claude Code sessions from your phone or tablet. View conversations, check progress, and stay informed wherever you are."
            />
            <FeatureCard
              icon={Shield}
              title="Permission Control"
              description="Approve or deny tool permissions remotely. Claude needs to run a bash command? Approve it from your phone in seconds."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Send Messages"
              description="Send messages and commands to your Claude sessions from anywhere. Keep the conversation going even when away from your desk."
            />
            <FeatureCard
              icon={RefreshCw}
              title="Real-time Sync"
              description="Get instant updates as Claude works. See new messages, tool usage, and session activity in real-time."
            />
            <FeatureCard
              icon={Monitor}
              title="Multi-Machine"
              description="Connect to Claude sessions running on different machines. Work PC, home laptop, or cloud server - access them all."
            />
            <FeatureCard
              icon={Lock}
              title="End-to-End Encrypted"
              description="Your data stays private. End-to-end encryption ensures only you can read your session content."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              A simple architecture that connects your devices securely
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <StepCard
              number={1}
              title="Install Desktop Agent"
              description="Install the desktop agent on your machine. It runs alongside Claude Code and securely exposes your sessions."
            />
            <StepCard
              number={2}
              title="Connect via Relay"
              description="The relay server connects your devices. It handles authentication and routes messages without reading your content."
            />
            <StepCard
              number={3}
              title="Control from Mobile"
              description="Connect from your mobile device. Browse sessions, send messages, and approve permissions from anywhere."
            />
          </div>

          {/* Architecture Diagram */}
          <div className="mt-16">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
              <pre className="overflow-x-auto text-xs text-[var(--muted)] sm:text-sm">
                {`┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Mobile     │    │    Web       │    │   Desktop    │
│   App        │    │   Dashboard  │    │   Agent      │
└──────────────┘    └──────────────┘    └──────────────┘
        │                  │                    │
        └──────────────────┼────────────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │      RELAY SERVER       │
              │                         │
              │  • Authentication       │
              │  • Message Routing      │
              │  • Zero-Knowledge       │
              │  • E2E Encrypted        │
              └─────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Desktop Agent│  │ Desktop Agent│  │ Desktop Agent│
│   Work PC    │  │  Home Laptop │  │    Server    │
│              │  │              │  │              │
│ Claude Code  │  │ Claude Code  │  │ Claude Code  │
│  Sessions    │  │  Sessions    │  │  Sessions    │
└──────────────┘  └──────────────┘  └──────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Security First
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                Built with a zero-knowledge architecture. The relay server routes your messages but
                can never read them.
              </p>

              <ul className="mt-8 space-y-4">
                <SecurityItem text="End-to-end encryption for all session data" />
                <SecurityItem text="Zero-knowledge relay - we can't read your content" />
                <SecurityItem text="Device-based key management" />
                <SecurityItem text="Revoke device access anytime" />
                <SecurityItem text="No data stored on relay servers" />
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <SecurityCard
                title="Zero-Knowledge Relay"
                description="The relay server only routes encrypted blobs. It cannot read your messages, session content, or file data."
              />
              <SecurityCard
                title="Device Authorization"
                description="Each device generates its own keypair. Public keys are exchanged through the relay, but private keys never leave your device."
              />
              <SecurityCard
                title="Transport Security"
                description="All connections use TLS/WSS for transport security, with additional E2E encryption on top."
              />
              <SecurityCard
                title="Key Storage"
                description="Private keys are stored in platform-specific secure storage: Keychain (iOS/macOS), Keystore (Android), Credential Manager (Windows)."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="bg-gradient-brand py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Take control of your Claude Code sessions from anywhere. Download the app and connect
            your devices today.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[var(--color-orange-500)] shadow-lg transition-all hover:bg-white/90"
            >
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://docs.daud.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)] hover:shadow-lg hover:shadow-orange-500/5">
      <div className="mb-4 inline-flex rounded-lg bg-[var(--color-orange-100)] p-3 dark:bg-[var(--color-orange-500)]/20">
        <Icon className="h-6 w-6 text-[var(--accent)]" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-2xl font-bold text-white shadow-lg shadow-orange-500/25">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
      <span className="text-[var(--foreground)]">{text}</span>
    </li>
  );
}

function SecurityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}
