"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="state-page">
      <div className="state-card">
        <span className="state-code" aria-hidden="true">
          !
        </span>
        <p className="eyebrow">A small hiccup</p>
        <h1>Something went wrong.</h1>
        <p>Try again and we&apos;ll get you back to the good stuff.</p>
        <button className="state-action" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
