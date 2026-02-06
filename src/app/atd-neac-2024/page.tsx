import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "ATD NEAC 2024",
  description: "ATD North East Area Conference 2024 — sign up to receive the presentation copy with transcript.",
};

export default function ATDNEAC2024() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">ATD NEAC 2024</h1>
          <p className="mt-4 text-lg text-text-light">
            ATD North East Area Conference 2024
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-8 text-text-light leading-relaxed">
            Thank you for attending! Sign up below to receive a copy of the
            presentation along with the transcript.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
