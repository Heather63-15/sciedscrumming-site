import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SciEdScrumming and founder Heather Cowap — two decades of teaching experience blending UDL with Agile Scrum.",
};

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-text-light">
            A student-focused education consulting and tutoring organization
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Organization info */}
            <div>
              <Image
                src="/images/student-skills-logo.png"
                alt="Skills for Student Success"
                width={196}
                height={196}
                className="mb-6 h-auto w-48"
              />
              <h2 className="text-2xl font-bold">SciEdScrumming</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                SciEdScrumming is a student-focused education consulting and
                tutoring organization. We focus on the skills that students lack
                due to the structure of modern education.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Our <strong>Skills for Student Success</strong> program helps
                students develop essential abilities including organization,
                task tracking, scheduling, critical thinking, and notetaking
                &mdash; all using the Agile Scrum Framework.
              </p>
            </div>

            {/* Bio */}
            <div>
              <Image
                src="/images/cowap-headshot.jpeg"
                alt="Heather Cowap"
                width={300}
                height={300}
                className="mb-6 h-auto w-64 rounded-xl"
              />
              <h2 className="text-2xl font-bold">Heather Cowap, MS, MEd, RSM</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                With two decades of teaching experience, Heather has pioneered
                the integration of Universal Design for Learning (UDL) with
                Agile Scrum practices in the classroom.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Her approach includes implementing problem-based learning using
                the Tufts Great Diseases curriculum and student-led Agile Scrum
                practices, leading to measurable improvements in student
                outcomes.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Heather holds master&apos;s degrees from Tufts Friedman School of
                Nutrition and Fitchburg State University, along with
                bachelor&apos;s degrees in economics (international relations) and
                nutrition (metabolic biochemistry).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
