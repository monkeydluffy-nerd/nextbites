import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <div className="state-card">
        <span className="state-code" aria-hidden="true">
          404
        </span>
        <p className="eyebrow">A little detour</p>
        <h1>That bite went missing.</h1>
        <p>
          We couldn&apos;t find that recipe. Head back to the kitchen and choose
          another one.
        </p>
        <Link className="state-action" href="/">
          Back to NextBites
        </Link>
      </div>
    </main>
  );
}
