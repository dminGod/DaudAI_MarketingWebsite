export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg" />
            <span className="text-xl font-bold">DaudAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">How it Works</a>
            <a href="#architecture" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Architecture</a>
          </nav>
          <a
            href="#features"
            className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Control{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Claude Code
            </span>
            <br />from Anywhere
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Access your Claude Code sessions remotely from your mobile device.
            Monitor progress, approve permissions, send commands, and stay connected to your AI coding sessions on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Learn More
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to stay connected to your Claude Code sessions
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📱"
              title="Mobile Access"
              description="Access your Claude Code sessions from your phone or tablet. View conversations, check progress, and stay informed wherever you are."
            />
            <FeatureCard
              icon="🔐"
              title="Permission Control"
              description="Approve or deny tool permissions remotely. Claude needs to run a bash command? Approve it from your phone in seconds."
            />
            <FeatureCard
              icon="💬"
              title="Send Messages"
              description="Send messages and commands to your Claude sessions from anywhere. Keep the conversation going even when away from your desk."
            />
            <FeatureCard
              icon="🔄"
              title="Real-time Sync"
              description="Get instant updates as Claude works. See new messages, tool usage, and session activity in real-time."
            />
            <FeatureCard
              icon="🖥️"
              title="Multi-Machine"
              description="Connect to Claude sessions running on different machines. Work PC, home laptop, or cloud server - access them all."
            />
            <FeatureCard
              icon="🔒"
              title="End-to-End Encrypted"
              description="Your data stays private. End-to-end encryption ensures only you can read your session content."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A simple architecture that connects your devices securely
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Desktop Agent"
              description="Install the desktop agent on your machine. It runs alongside Claude Code and exposes your sessions securely."
            />
            <StepCard
              number={2}
              title="Relay Server"
              description="The relay server connects your devices. It handles authentication and routes messages without reading your content."
            />
            <StepCard
              number={3}
              title="Mobile App"
              description="Connect from your mobile device. Browse sessions, send messages, and approve permissions from anywhere."
            />
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Architecture</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Built with security and privacy in mind
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
            <pre className="text-sm text-gray-600 dark:text-gray-400 overflow-x-auto">
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
              │  • Connection Mgmt      │
              │  • Zero-Knowledge       │
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

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold mb-2">Zero-Knowledge Relay</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The relay server only routes encrypted blobs. It cannot read your messages,
                session content, or file data. All sensitive data is encrypted end-to-end.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold mb-2">Device Authorization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Each device generates its own keypair. Public keys are exchanged through the relay,
                but private keys never leave your device. Revoke access anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Take control of your Claude Code sessions from anywhere.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded" />
            <span className="font-medium">DaudAI</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Claude Code
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
