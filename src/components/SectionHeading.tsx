interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-amber-900/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-amber-900">
          {tag}
        </span>
      )}
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-text-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
