import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Feel-good recipes for every craving",
  description:
    "Discover easy, feel-good recipes. Search by recipe or cuisine, then explore ingredients and step-by-step cooking instructions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav-bar" aria-label="Main navigation">
            <Link className="brand" href="/" aria-label="NextBites home">
              <span className="brand-mark" aria-hidden="true">
                n
              </span>
              <span>nextbites</span>
            </Link>
            <Link className="nav-link" href="/#recipes">
              Explore recipes <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>Made for good food days.</p>
          <span>© 2026 NextBites</span>
        </footer>
      </body>
    </html>
  );
}
