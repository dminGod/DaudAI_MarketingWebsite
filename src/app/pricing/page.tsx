import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for DaudAI. Choose the plan that fits your needs - from free for individuals to custom enterprise solutions.',
  openGraph: {
    title: 'Pricing - DaudAI',
    description:
      'Simple, transparent pricing for DaudAI. Choose the plan that fits your needs - from free for individuals to custom enterprise solutions.',
  },
};

const plans = [
  {
    name: 'Free',
    description: 'Perfect for trying out DaudAI',
    price: '$0',
    period: 'forever',
    features: [
      '1 Desktop Agent',
      '1 Mobile Device',
      'Real-time session monitoring',
      'Permission approvals',
      'Basic message sending',
      'Community support',
    ],
    cta: 'Get Started',
    ctaLink: '#',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For power users and professionals',
    price: '$9',
    period: 'per month',
    features: [
      '5 Desktop Agents',
      'Unlimited Mobile Devices',
      'Everything in Free',
      'Multi-machine switching',
      'Session history & search',
      'Priority relay servers',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaLink: '#',
    highlighted: true,
  },
  {
    name: 'Team',
    description: 'For teams and organizations',
    price: '$29',
    period: 'per user/month',
    features: [
      'Unlimited Desktop Agents',
      'Unlimited Devices',
      'Everything in Pro',
      'Team management dashboard',
      'Shared session access',
      'Audit logs',
      'SSO integration',
      'Priority support',
    ],
    cta: 'Contact Sales',
    ctaLink: 'mailto:sales@daud.ai',
    highlighted: false,
  },
];

const enterpriseFeatures = [
  'Custom deployment options',
  'Self-hosted relay server',
  'Dedicated infrastructure',
  'SLA guarantees',
  '24/7 support',
  'Custom integrations',
  'Security review & compliance',
  'Volume discounts',
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Choose the plan that fits your needs. Start free, upgrade when you're ready.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? 'border-[var(--accent)] shadow-xl shadow-orange-500/10'
                    : 'border-[var(--border)]'
                } bg-[var(--card)]`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-brand px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[var(--foreground)]">{plan.name}</h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--foreground)]">{plan.price}</span>
                  <span className="text-[var(--muted)]"> / {plan.period}</span>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                      <span className="text-sm text-[var(--foreground)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-[var(--accent)] text-white shadow-lg shadow-orange-500/25 hover:bg-[var(--accent-hover)] hover:shadow-orange-500/40'
                      : 'border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--card-hover)]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Enterprise
                </h2>
                <p className="mt-4 text-lg text-[var(--muted)]">
                  Need a custom solution for your organization? We offer flexible enterprise plans
                  with dedicated support, custom deployments, and advanced security features.
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:enterprise@daud.ai"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-orange-500/40"
                  >
                    Contact Enterprise Sales
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {enterpriseFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                    <span className="text-sm text-[var(--foreground)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Pricing FAQ
          </h2>

          <div className="space-y-8">
            <FAQItem
              question="Can I change plans later?"
              answer="Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle."
            />
            <FAQItem
              question="Is there a free trial for paid plans?"
              answer="Yes, both Pro and Team plans come with a 14-day free trial. No credit card required to start. You'll only be charged if you decide to continue after the trial."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay via invoice with net-30 terms."
            />
            <FAQItem
              question="Can I get a refund?"
              answer="We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us within 30 days of your purchase for a full refund."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-brand py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Start for free today. No credit card required.
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-[var(--color-orange-500)] shadow-lg transition-all hover:bg-white/90"
            >
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h3 className="font-semibold text-[var(--foreground)]">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{answer}</p>
    </div>
  );
}
