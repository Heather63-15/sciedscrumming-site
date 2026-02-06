"use client";

import { useState } from "react";
import Image from "next/image";

const modules = [
  {
    title: "Scrum Planning Poker",
    image: "/images/scrum-planning-poker.png",
    videoId: "6wU3NrDsn74",
    transcript: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
    pdf: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
  },
  {
    title: "Burn-Down Charts",
    image: "/images/burn-down-charts.png",
    videoId: "SbM6iNhilDk",
    transcript: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
    pdf: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
  },
  {
    title: "Tracking Boards",
    image: "/images/tracking-boards.png",
    videoId: "qU1kn6qyZGI",
    transcript: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
    pdf: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
  },
  {
    title: "Daily Stand-Ups",
    image: "/images/daily-stand-ups.png",
    videoId: "nYtyWSycyoM",
    transcript: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
    pdf: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
  },
  {
    title: "Retrospectives",
    image: "/images/retrospectives.png",
    videoId: "EJwxPFgfxpA",
    transcript: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
    pdf: "https://drive.google.com/file/d/1vQVLHLZp9LXz/view",
  },
];

export default function MiniCourse() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (password === "CAST2023") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!unlocked) {
    return (
      <>
        <section className="bg-bg-alt py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">
              Agile Scrum Practices in Education: Mini-Course
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-md px-6 text-center">
            <Image
              src="/images/cast-2023-cover.png"
              alt="CAST 2023"
              width={300}
              height={300}
              className="mx-auto mb-8 h-auto w-64 rounded-xl"
            />
            <p className="mb-6 text-text-light">
              This course is password-protected. Please enter the password to access the content.
            </p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-center text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {error && <p className="text-sm text-red-600">Incorrect password. Please try again.</p>}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Access Course
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Agile Scrum Practices in Education: Mini-Course
          </h1>
          <p className="mt-4 text-lg text-text-light">
            5 modules covering key Agile Scrum practices for the classroom
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border"
            >
              <div className="grid md:grid-cols-3">
                <div className="bg-bg-alt p-6">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    width={300}
                    height={200}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h2 className="mb-4 text-xl font-bold">
                    Module {i + 1}: {mod.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://www.youtube.com/watch?v=${mod.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                      Watch Video
                    </a>
                    <a
                      href={mod.transcript}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-bg-alt"
                    >
                      Transcript
                    </a>
                    <a
                      href={mod.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-bg-alt"
                    >
                      Presentation PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
