import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SciEdScrumming for education consulting and tutoring inquiries.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4 text-lg text-text-light">Get in touch with us</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <div className="mt-6 space-y-4 text-text-light">
                <div>
                  <h3 className="font-semibold text-text">Mailing Address</h3>
                  <p>P.O. Box 5667<br />Hanover, NH 03755</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text">Email</h3>
                  <a
                    href="mailto:support@sciedscrumming.com"
                    className="text-primary hover:underline"
                  >
                    support@sciedscrumming.com
                  </a>
                </div>
              </div>

              <hr className="my-8 border-border" />

              <h2 className="text-2xl font-bold">Refund Policy</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                We offer a 60-day satisfaction guarantee. If you are not
                satisfied within 60 days, adjustments will be made on a
                case-by-case basis. Please contact us at{" "}
                <a
                  href="mailto:support@sciedscrumming.com"
                  className="text-primary hover:underline"
                >
                  support@sciedscrumming.com
                </a>{" "}
                to discuss your situation.
              </p>
            </div>

            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
