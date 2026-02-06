import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Musings",
  description: "Blog posts about UDL, Agile Scrum in education, and the journey of SciEdScrumming.",
};

export default function Musings() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Musings</h1>
          <p className="mt-4 text-lg text-text-light">
            Where I started, how I got here &mdash; a collection of blogs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/musings/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-border transition-shadow hover:shadow-lg"
              >
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-bg-alt">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-text-light">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-bold group-hover:text-primary">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
