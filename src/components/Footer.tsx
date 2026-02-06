import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">SciEdScrumming</h3>
            <p className="mt-2 text-sm text-text-light">
              Building systems of Collaborative Learning
            </p>
            <p className="mt-4 text-sm text-text-light">
              Hanover, N.H., U.S.A.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li><Link href="/about-us" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/skills-focused-tutoring" className="hover:text-primary">Tutoring</Link></li>
              <li><Link href="/musings" className="hover:text-primary">Musings</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li>
                <a href="mailto:support@sciedscrumming.com" className="hover:text-primary">
                  support@sciedscrumming.com
                </a>
              </li>
              <li>P.O. Box 5667, Hanover, NH 03755</li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm text-text-light">
              <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-primary">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-text-light">
          &copy; {new Date().getFullYear()} SciEdScrumming. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
