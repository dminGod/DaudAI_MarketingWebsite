import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FAQAccordion } from './FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about DaudAI. Learn about features, security, pricing, and how to get started.',
  openGraph: {
    title: 'FAQ - DaudAI',
    description:
      'Frequently asked questions about DaudAI. Learn about features, security, pricing, and how to get started.',
  },
};

const faqs = {
  general: [
    {
      question: 'What is DaudAI?',
      answer:
        'DaudAI is a remote control solution for Claude Code sessions. It allows you to access, monitor, and control your Claude Code sessions from your mobile device, anywhere in the world. You can approve permissions, send messages, and stay updated on session progress without being at your computer.',
    },
    {
      question: 'How does DaudAI work?',
      answer:
        'DaudAI consists of three components: a Desktop Agent that runs on your computer alongside Claude Code, a Relay Server that securely routes messages, and a Mobile App for iOS/Android. The Desktop Agent connects to the Relay Server, which then allows your mobile app to communicate with your Claude Code sessions in real-time.',
    },
    {
      question: 'Do I need to modify Claude Code to use DaudAI?',
      answer:
        "No, DaudAI works alongside Claude Code without any modifications. The Desktop Agent monitors your Claude Code sessions and provides a secure interface for remote access. Claude Code continues to work exactly as before.",
    },
    {
      question: 'What platforms are supported?',
      answer:
        'The Desktop Agent supports Windows, macOS, and Linux. The mobile app is available for both iOS and Android. You can also access your sessions through a web dashboard.',
    },
  ],
  security: [
    {
      question: 'Is my data secure?',
      answer:
        "Yes, security is our top priority. All communication between your devices uses end-to-end encryption. The relay server can only route encrypted data - it cannot read your messages, session content, or any sensitive information. Your encryption keys are generated and stored locally on your devices.",
    },
    {
      question: 'What is zero-knowledge architecture?',
      answer:
        'Zero-knowledge means our servers never have access to your unencrypted data. The relay server only sees encrypted blobs that it routes between your devices. Even if our servers were compromised, your data would remain protected because only your devices have the keys to decrypt it.',
    },
    {
      question: 'Can I self-host the relay server?',
      answer:
        'Yes! DaudAI is open source, and you can run your own relay server for complete control over your data. This is ideal for enterprise environments or users who want maximum data sovereignty.',
    },
    {
      question: 'How do I revoke device access?',
      answer:
        'You can revoke access to any device instantly from your mobile app or web dashboard. Go to Settings > Devices, select the device you want to remove, and tap "Revoke Access". The device will immediately lose access to your sessions.',
    },
  ],
  features: [
    {
      question: 'Can I control multiple machines?',
      answer:
        'Yes! You can connect multiple Desktop Agents to your account - one for each machine where you run Claude Code. Your mobile app will show all connected machines, and you can switch between them to view and control different sessions.',
    },
    {
      question: 'How do permission approvals work?',
      answer:
        "When Claude Code requests permission to perform an action (like running a bash command), you'll receive a notification on your mobile device. You can review the request and approve or deny it directly from your phone. This happens in real-time, so Claude can continue working as soon as you respond.",
    },
    {
      question: 'Can I send messages to Claude from my phone?',
      answer:
        "Absolutely! You can send text messages and commands to your Claude Code sessions just like you would from your desktop. The messages appear in the session in real-time, and you'll see Claude's responses on your mobile device.",
    },
    {
      question: 'What happens if I lose internet connection?',
      answer:
        'If your mobile device loses connection, any pending actions will be queued and sent when you reconnect. Your Claude Code session continues running on your desktop - it only pauses if it needs permission approval. Once you reconnect, you can catch up on what happened while you were offline.',
    },
  ],
  pricing: [
    {
      question: 'Is DaudAI free?',
      answer:
        'DaudAI offers a free tier for individual developers that includes basic features. For advanced features, team collaboration, and priority support, we offer paid plans. Check our pricing page for details.',
    },
    {
      question: 'Do you offer team or enterprise plans?',
      answer:
        'Yes! We offer team plans for organizations that need to manage multiple users, and enterprise plans with advanced features like SSO, audit logs, and dedicated support. Contact us for custom pricing.',
    },
    {
      question: 'Can I try DaudAI before purchasing?',
      answer:
        "Yes, our free tier lets you experience DaudAI's core features without any commitment. You can upgrade anytime if you need more features or want to support the project.",
    },
  ],
};

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Everything you need to know about DaudAI. Can&apos;t find what you&apos;re looking for?{' '}
            <a
              href="mailto:support@daud.ai"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* General */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-[var(--foreground)]">General</h2>
            <FAQAccordion items={faqs.general} />
          </div>

          {/* Security */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-[var(--foreground)]">
              Security & Privacy
            </h2>
            <FAQAccordion items={faqs.security} />
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-[var(--foreground)]">Features</h2>
            <FAQAccordion items={faqs.features} />
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-[var(--foreground)]">Pricing & Plans</h2>
            <FAQAccordion items={faqs.pricing} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            We&apos;re here to help. Reach out to our team or check out our documentation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:support@daud.ai"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-orange-500/40"
            >
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.daud.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-base font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--card-hover)]"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              ...faqs.general,
              ...faqs.security,
              ...faqs.features,
              ...faqs.pricing,
            ].map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
