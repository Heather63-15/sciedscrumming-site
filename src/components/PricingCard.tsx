interface PricingCardProps {
  title: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  priceNote,
  features,
  ctaLabel,
  ctaHref,
  badge,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl border-2 p-8 text-center ${
        highlighted ? "border-primary shadow-lg" : "border-border"
      }`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold">{price}</span>
        {priceNote && (
          <span className="ml-2 text-sm text-text-light">{priceNote}</span>
        )}
      </div>
      <ul className="mt-6 space-y-3 text-left">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
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
            <span className="text-text-light">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
