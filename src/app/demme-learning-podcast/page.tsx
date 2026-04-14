import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Flipping the Script: How Scrum Transformed High School Instruction",
  description:
    "Get the full bibliography of books, research, and resources referenced in the Demme Learning Podcast episode on using Scrum to build executive function skills.",
  openGraph: {
    title: "Flipping the Script — Demme Learning Podcast × SciEdScrumming",
    description:
      "Get the full bibliography of resources from the episode on using Scrum in the classroom — delivered to your inbox.",
  },
};

const resources = [
  {
    icon: "📖",
    title: "Classroom Design",
    desc: "UDL guidelines and layered curriculum frameworks for student autonomy.",
  },
  {
    icon: "🧠",
    title: "Adolescent Brain Science",
    desc: "Research on how teens learn, focus, and build self-regulation skills.",
  },
  {
    icon: "📱",
    title: "Digital Wellness",
    desc: "Studies on social media, attention, and student mental health.",
  },
  {
    icon: "⚙️",
    title: "Agile in Education",
    desc: "The Scrum framework and motivation science behind student-centered learning.",
  },
];

const topics = [
  "Why traditional classroom management leaves executive function development to chance",
  "How Scrum sprints, standups, and retrospectives translate to the classroom",
  "Building student autonomy through iterative goal-setting",
  "Adapting the framework for homeschool and alternative learning environments",
  "The neuroscience behind why structure + agency works for adolescent brains",
  "Practical first steps for educators and parents",
];

export default function DemmeLearningPodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-bg-alt border-b border-border py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary">
            Demme Learning Podcast
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">
            Flipping the Script: How{" "}
            <span style={{ color: "#3d6b35" }}>Scrum</span> Transformed
            High School Instruction
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-light">
            Get the full bibliography of books, research, and frameworks
            referenced in the episode — delivered straight to your inbox as a
            free PDF.
          </p>

          {/* Kit form card */}
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-white p-8 text-left shadow-lg">
            <p className="mb-1 font-bold">Send me the resource list</p>
            <p className="mb-5 text-sm text-text-light">
              Enter your email and we&apos;ll send you the complete bibliography as a
              free PDF.
            </p>

            {/*
              ============================================================
              PASTE YOUR KIT FORM EMBED CODE BELOW (replace this comment)

              In Kit: Landing Pages & Forms → your form → Publish → Embed
              Copy the <script> tag and paste it here.

              Example:
              <Script
                async
                data-uid="YOUR_FORM_UID"
                src="https://YOUR_ACCOUNT.ck.page/YOUR_FORM_UID/index.js"
                strategy="lazyOnload"
              />
              ============================================================
            */}
          </div>
        </div>
      </section>

      {/* What's in the bibliography */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wide text-text-light">
              What You&apos;ll Receive
            </span>
            <h2 className="text-3xl font-bold">What&apos;s in the bibliography</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-border bg-bg-alt p-6"
              >
                <div className="mb-3 text-3xl">{r.icon}</div>
                <h3 className="mb-1 font-bold">{r.title}</h3>
                <p className="text-sm text-text-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the episode */}
      <section className="bg-bg-alt border-y border-border py-16">
        <div className="mx-auto max-w-2xl px-6">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wide text-text-light">
            About the Episode
          </span>
          <h2 className="mb-4 text-3xl font-bold">What we covered</h2>
          <p className="text-text-light leading-relaxed">
            In this conversation on the{" "}
            <strong>Demme Learning Podcast</strong>, Heather Cowap of
            SciEdScrumming explores how applying Agile Scrum principles inside a
            high school classroom fundamentally changed the way students
            experience learning — and built lasting executive function skills in
            the process.
          </p>
          <ul className="mt-6 space-y-3">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
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
                <span className="text-text-light">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About SciEdScrumming */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
            <div className="shrink-0">
              <Image
                src="/images/skills-for-student-success-logo.png"
                alt="Skills for Student Success — SciEdScrumming"
                width={160}
                height={160}
                className="h-auto w-36"
              />
            </div>
            <div>
              <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wide text-text-light">
                About SciEdScrumming
              </span>
              <h2 className="mb-3 text-2xl font-bold">
                Building Systems of Collaborative Learning
              </h2>
              <p className="text-text-light leading-relaxed">
                SciEdScrumming blends{" "}
                <strong>Universal Design for Learning</strong> with{" "}
                <strong>Agile Scrum</strong> to give educators and families
                practical systems for building student autonomy and executive
                function — whether in a traditional classroom, homeschool, or
                alternative setting.
              </p>
              <a
                href="https://sciedscrumming.com"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Visit SciEdScrumming.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
