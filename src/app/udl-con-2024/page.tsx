import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "UDL-Con 2024",
  description: "CAST Symposium and UDL-IRN Conference 2024 — Skills for Students to Lead Their Learning.",
};

export default function UDLCon2024() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            UDL-Con: CAST Symposium &amp; UDL-IRN Conference 2024
          </h1>
          <p className="mt-4 text-lg font-semibold text-primary">
            Skills for Students to Lead Their Learning
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Image
                src="/images/jamboard-scrum-board.png"
                alt="Jamboard Scrum Board"
                width={600}
                height={400}
                className="h-auto w-full rounded-xl"
              />
            </div>
            <div>
              <p className="text-text-light leading-relaxed">
                Thank you for coming to learn about building collaborative
                classrooms using UDL and Agile Scrum! Together we can create
                learning environments where students take ownership of their
                education.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Sign up below to receive the handout from this presentation.
              </p>
            </div>
          </div>

          <hr className="my-12 border-border" />

          {/* Author section */}
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image
                src="/images/headshot-event.jpeg"
                alt="Heather Cowap"
                width={300}
                height={300}
                className="h-auto w-full rounded-xl"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">Heather Cowap, MS, MEd, RSM</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Educator, consultant, and founder of SciEdScrumming — blending
                UDL with Agile Scrum to empower student independence in the
                classroom.
              </p>
              <a
                href="/"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Visit Website
              </a>
            </div>
          </div>

          <hr className="my-12 border-border" />

          <h2 className="mb-6 text-2xl font-bold">Request the Handout</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
