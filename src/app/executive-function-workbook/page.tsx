import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import ContactForm from "@/components/ContactForm";
import {
  workbookFeatures,
  workbookForParents,
  workbookForTweens,
  workbookPricingFeatures,
} from "@/content/workbook";

export const metadata: Metadata = {
  title: "Executive Function Workbook for Parents & Tweens",
  description:
    "A hands-on workbook to help parents and tweens build executive function skills together. Pre-order now.",
};

export default function WorkbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-bg-alt py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                Pre-Order
              </span>
              <h1 className="text-4xl font-bold md:text-5xl">
                The Executive Function{" "}
                <span className="text-primary">Workbook</span>
              </h1>
              <p className="mt-6 text-lg text-text-light">
                A hands-on workbook designed for parents and tweens to build
                essential executive function skills together — organization,
                planning, goal-setting, and self-reflection.
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                Pre-Order Now
              </a>
            </div>
            <div className="flex justify-center">
              <div className="flex h-80 w-64 items-center justify-center rounded-xl border-2 border-dashed border-border bg-white p-8 text-center">
                <div>
                  <svg
                    className="mx-auto h-16 w-16 text-text-light/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <p className="mt-4 text-sm font-medium text-text-light">
                    Book Cover Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            tag="Inside the Workbook"
            title="Everything You Need"
            subtitle="Practical tools and exercises designed to build lasting skills."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {workbookFeatures.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-border p-6 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            tag="Is This For You?"
            title="Built for Parents & Tweens"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="mb-6 text-xl font-bold">
                Perfect for parents who...
              </h3>
              <ul className="space-y-3">
                {workbookForParents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="mb-6 text-xl font-bold">
                Great for tweens who...
              </h3>
              <ul className="space-y-3">
                {workbookForTweens.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading tag="The Author" title="Meet Heather Cowap" />
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="flex justify-center">
              <Image
                src="/images/cowap-headshot.jpeg"
                alt="Heather Cowap"
                width={300}
                height={300}
                className="h-auto w-56 rounded-xl"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">Heather Cowap, MS, MEd, RSM</h3>
              <p className="mt-4 text-text-light leading-relaxed">
                Heather brings two decades of classroom experience to this
                workbook, combining Universal Design for Learning (UDL) with
                Agile Scrum practices to create practical tools that actually
                work for families.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                As a Registered Scrum Master with master&apos;s degrees in nutrition
                science and education, Heather brings a unique, evidence-based
                perspective to helping students succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order CTA */}
      <section className="bg-bg-alt py-16" id="pricing">
        <div className="mx-auto max-w-md px-6">
          <SectionHeading title="Pre-Order the Workbook" />
          <PricingCard
            title="Executive Function Workbook"
            price="$TBD"
            priceNote="pre-order pricing"
            features={workbookPricingFeatures}
            ctaLabel="Pre-Order Now"
            ctaHref="https://buy.stripe.com/PLACEHOLDER"
            highlighted
            badge="Pre-Order"
          />
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="py-16">
        <div className="mx-auto max-w-lg px-6">
          <SectionHeading
            title="Get Launch Updates"
            subtitle="Be the first to know when the workbook is available."
          />
          <ContactForm
            variant="subscribe"
            submitLabel="Join the Waitlist"
            successMessage="You're on the list! We'll email you when the workbook launches."
          />
        </div>
      </section>
    </>
  );
}
