import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 4 Pillars of the Student-Centered Classroom",
  description:
    "Transforming education through innovative solutions — blending Agile in Education with UDL.",
};

export default function FourPillars() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <Image
            src="/images/hero-meeting.jpg"
            alt="Student-centered learning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="mx-auto max-w-3xl px-6 text-center text-3xl font-bold text-white md:text-4xl">
              The 4 Pillars of the Student-Centered Classroom
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold">
            Transforming Education through Innovative Solutions
          </h2>
          <p className="mt-6 text-text-light leading-relaxed">
            Agile in Education offers a possibility to transform education from
            the classroom to the district, from K-12 to higher education
            institutions. It requires both a shift in mindset around management
            and organizational systems, and some changes in how curriculum is
            offered to students.
          </p>
          <p className="mt-4 text-text-light leading-relaxed">
            Universal Design for Learning (UDL) provides the pedagogical
            framework that easily includes what teachers are doing now and
            pushes teachers to consider how to improve student independence in
            learning.
          </p>

          <hr className="my-10 border-border" />

          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <p className="mt-4 text-text-light">
            Check out our latest thinking on education, UDL, and Agile Scrum:
          </p>
          <Link
            href="/musings"
            className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Read the Blog
          </Link>

          <hr className="my-10 border-border" />

          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="mt-4 text-text-light">
            Interested in learning more? Reach out to discuss how UDL and Agile
            Scrum can transform your classroom.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
