import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Skills Focused Tutoring",
  description:
    "Preparing your teen for their most confident year with skills-focused tutoring in organization, self-management, and note-taking.",
};

const skillAreas = [
  {
    title: "Skills around taking notes and gathering information",
    content:
      "Standardized test prep has reduced the time schools spend teaching note-taking skills. We help students develop effective strategies for capturing and organizing information from lectures, readings, and research — skills that are critical for academic success.",
  },
  {
    title: "Skills around self-managing work",
    content:
      "Students learn to break larger projects into manageable tasks, create schedules, track their own progress, and meet deadlines. These are the same Agile Scrum practices used by top companies, adapted for student learning.",
  },
  {
    title: "Skills around organizing materials",
    content:
      "We cover both paper and digital organization systems so students can keep track of assignments, notes, and resources across all their classes. A well-organized student is a confident student.",
  },
];

export default function SkillsFocusedTutoring() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Skills Focused Tutoring
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Preparing your teen for their most confident year
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/student-skills-logo.png"
              alt="Student Skills for Success"
              width={196}
              height={196}
              className="h-auto w-48"
            />
          </div>

          <Accordion items={skillAreas} />

          <div className="mt-12 rounded-xl border border-border bg-bg-alt p-8">
            <p className="text-text-light leading-relaxed">
              Over the past 20 years, Heather has developed and refined these
              systems through direct classroom experience. The Skills for
              Student Success program is designed to give your student the tools
              they need to manage their own learning independently and
              confidently.
            </p>
          </div>

          <hr className="my-12 border-border" />

          <h2 className="mb-6 text-2xl font-bold">Interested? Get in touch.</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
