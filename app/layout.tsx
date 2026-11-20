import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Good food, made simple",
  description: "Find your next favorite meal with fresh, feel-good recipes.",
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
            <a className="nav-link" href="#recipes">
              Explore recipes <span aria-hidden="true">↗</span>
            </a>
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
