import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts, getPost } from "@/content/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/musings"
            className="mb-4 inline-flex items-center gap-1 text-sm text-text-light hover:text-primary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Musings
          </Link>
          <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
          <time className="mt-4 block text-text-light">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="mb-8 h-auto w-full rounded-xl"
            />
          )}
          <div
            className="prose prose-lg max-w-none text-text-light"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n\n/g, "</p><p>")
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
                .replace(/^/, "<p>")
                .replace(/$/, "</p>"),
            }}
          />
        </div>
      </article>
    </>
  );
}
