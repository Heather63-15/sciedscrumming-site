import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import Accordion from "@/components/Accordion";
import {
  courseModules,
  courseFAQ,
  courseFeatures,
  courseTestimonials,
} from "@/content/email-course";

export const metadata: Metadata = {
  title: "Executive Function Email Course for Parents & Tweens",
  description:
    "Help your tween build essential executive function skills — organization, planning, and self-management. A 10-email course delivered every 4–5 days for just $18.",
};

export default function EmailCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-bg-alt py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-amber-900/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-amber-900">
            10-Email Course
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">
            Help Your Tween Build{" "}
            <span className="text-primary">Executive Function Skills</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-light">
            10 practical emails (plus a welcome email) delivered every 4–5 days —
            giving your tween time to practice each skill before building on the
            next. Real strategies, real results, at your family&apos;s pace.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Get Instant Access — $18
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            tag="The Challenge"
            title="Sound Familiar?"
            subtitle="These are the struggles parents tell us about most."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Constant Disorganization</h3>
              <p className="mt-3 text-text-light">
                Lost papers, forgotten supplies, messy backpacks — your tween
                can&apos;t seem to keep track of anything.
              </p>
            </div>
            <div className="rounded-xl border border-border p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Missed Deadlines</h3>
              <p className="mt-3 text-text-light">
                Assignments handed in late, projects started the night before,
                and constant &ldquo;I forgot&rdquo; moments.
              </p>
            </div>
            <div className="rounded-xl border border-border p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Parent-Child Friction</h3>
              <p className="mt-3 text-text-light">
                Nagging about homework, battles over screen time, and the
                frustration of watching potential go unrealized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            tag="The Solution"
            title="A Better Way Forward"
            subtitle="Executive function skills can be taught — and this course shows you how."
          />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-text-light leading-relaxed">
                Executive function skills — like planning, organization, and
                self-monitoring — are the foundation of academic success. But
                most schools don&apos;t teach them explicitly.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                This course gives you and your tween practical, proven tools
                drawn from 20+ years of classroom experience and the Agile Scrum
                framework used by top companies worldwide.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Practical strategies you can use immediately",
                  "Activities designed for parent and tween together",
                  "No jargon — just clear, actionable steps",
                  "Built on the Agile Scrum framework",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/student-skills-logo.png"
                alt="Skills for Student Success"
                width={300}
                height={300}
                className="h-auto w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            tag="What You'll Learn"
            title="10 Emails, One Skill at a Time"
            subtitle="Delivered every 4–5 days so your tween can practice each skill before moving on. Each email builds on the last."
          />
          <div className="space-y-4">
            {courseModules.map((mod) => (
              <div
                key={mod.number}
                className="flex gap-6 rounded-xl border border-border p-6 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {mod.number}
                </div>
                <div>
                  <h3 className="font-bold">{mod.title}</h3>
                  <p className="mt-1 text-text-light">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading tag="Your Instructor" title="Meet Heather Cowap" />
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
                With two decades of teaching experience, Heather has pioneered
                the integration of Universal Design for Learning (UDL) with
                Agile Scrum practices in the classroom.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                She holds master&apos;s degrees from Tufts Friedman School of
                Nutrition and Fitchburg State University, and is a Registered
                Scrum Master. Her methods have led to measurable improvements in
                student outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            tag="What Parents Say"
            title="Real Results"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {courseTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
          <Accordion items={courseFAQ} />
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16" id="pricing">
        <div className="mx-auto max-w-md px-6">
          <SectionHeading title="Get Started Today" />
          <PricingCard
            title="Executive Function Email Course"
            price="$18"
            priceNote="one-time payment"
            features={courseFeatures}
            ctaLabel="Get Instant Access"
            ctaHref="https://buy.stripe.com/PLACEHOLDER"
            highlighted
          />
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="font-semibold text-green-800">
              60-Day Satisfaction Guarantee
            </p>
            <p className="mt-2 text-sm text-green-700">
              If the course isn&apos;t right for your family, contact us within 60
              days and we&apos;ll work with you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
