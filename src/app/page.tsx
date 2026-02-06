import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-alt py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Image
            src="/images/ses-logo.png"
            alt="SciEdScrumming Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 h-28 w-auto"
            priority
          />
          <h1 className="text-4xl font-bold md:text-5xl">
            Welcome to <span className="text-primary">SciEdScrumming</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Blending Universal Design for Learning with Agile Scrum for greater
            student autonomy
          </p>
        </div>
      </section>

      {/* Three columns */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {/* Column 1 — Consulting */}
          <div className="rounded-xl border border-border p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">UDL &amp; Agile Scrum</h2>
            <p className="mt-3 text-text-light">
              Blending UDL with Agile Scrum for greater student autonomy in the
              classroom.
            </p>
            <a
              href="https://calendly.com/heather_cowap/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Book a Call
            </a>
          </div>

          {/* Column 2 — Blog */}
          <div className="rounded-xl border border-border p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Musings</h2>
            <p className="mt-3 text-text-light">
              Where I started, how I got here &mdash; a collection of blogs
              about the journey.
            </p>
            <Link
              href="/musings"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Go to Blogs
            </Link>
          </div>

          {/* Column 3 — Courses */}
          <div className="rounded-xl border border-border p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Skills for Success</h2>
            <p className="mt-3 text-text-light">
              Next steps and offerings &mdash; explore our courses and tutoring
              services.
            </p>
            <Link
              href="/skills-focused-tutoring"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
