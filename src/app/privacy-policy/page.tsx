import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SciEdScrumming privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-text-light">Last updated: February 17, 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="prose prose-lg mx-auto max-w-3xl px-6 text-text-light">
          <h2 className="text-xl font-bold text-text">What Information Do We Collect?</h2>
          <p>
            We collect personally identifiable information (PII) that you voluntarily provide
            when registering on the site, placing an order, subscribing to a newsletter,
            responding to a survey, filling out a form, or entering information on our site.
            When ordering or registering, you may be asked to provide your name, email address,
            mailing address, phone number, or other details to help you with your experience.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">How Do We Use Your Information?</h2>
          <p>
            We may use the information collected from you to personalize your experience,
            improve our website, improve customer service, process transactions, send periodic
            emails, and administer contests, promotions, surveys, or other site features.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Data Sharing</h2>
          <p>
            We are the sole owners of the information collected on this site. We do not sell,
            trade, or rent users&apos; personal identification information to others.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Your Rights</h2>
          <p>
            You can opt out of communications, view, change, or delete your data, and express
            any concerns about how your data is handled. Please contact us at{" "}
            <a href="mailto:support@sciedscrumming.com" className="text-primary hover:underline">
              support@sciedscrumming.com
            </a>.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Security</h2>
          <p>
            We implement a variety of security measures including encryption and HTTPS to
            maintain the safety of your personal information. Your information is also
            protected offline.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Children&apos;s Data</h2>
          <p>
            We take special care to protect the privacy of minors. Consent from a parent or
            guardian is required before we collect any data from individuals under 18.
          </p>
        </div>
      </section>
    </>
  );
}
