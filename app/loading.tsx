export default function Loading() {
  return (
    <main className="loading-page" aria-busy="true">
      <span className="loading-spinner" aria-hidden="true" />
      <p className="loading-message" role="status">
        Loading something delicious...
      </p>
    </main>
  );
}
