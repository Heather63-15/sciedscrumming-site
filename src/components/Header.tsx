"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
];

const productLinks = [
  {
    href: "/executive-function-email-course",
    label: "Email Course",
    description: "Executive function skills for parents & tweens",
  },
  {
    href: "/executive-function-workbook",
    label: "Workbook",
    description: "Pre-order the hands-on workbook",
  },
  {
    href: "/skills-focused-tutoring",
    label: "Tutoring",
    description: "Skills-focused 1-on-1 tutoring",
  },
];

const rightLinks = [
  { href: "/musings", label: "Musings" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/ses-logo.png"
            alt="SciEdScrumming"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-primary">SciEdScrumming</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-light transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-text-light transition-colors hover:text-primary"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full mt-2 min-w-[280px] -translate-x-1/2 rounded-xl border border-border bg-white p-2 shadow-lg">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 transition-colors hover:bg-bg-alt"
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className="block text-sm font-semibold">{link.label}</span>
                    <span className="block text-xs text-text-light">{link.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-light transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://calendly.com/heather_cowap/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light transition-colors hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Products section */}
            <button
              className="flex items-center justify-between text-sm font-medium text-text-light"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-3 border-l-2 border-primary/20 pl-4">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-light transition-colors hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light transition-colors hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://calendly.com/heather_cowap/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Book a Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
