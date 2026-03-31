import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase",
  description:
    "Your purchase is confirmed. Welcome to the Executive Function Email Course!",
};

export default function ThankYouPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="mt-4 text-lg text-text-light">
          Your purchase is confirmed. You&apos;ll receive a welcome email
          shortly at the address you provided during checkout.
        </p>
        <p className="mt-4 text-text-light">
          Your first lesson will arrive within 24 hours. Each of the 10
          skill-building emails will follow every 4&ndash;5 days, giving your
          tween time to practice before the next one.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-text transition-all hover:bg-bg-alt"
          >
            Questions? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
