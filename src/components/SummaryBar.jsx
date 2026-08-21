export default function SummaryBar({ movies }) {
  const total = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = movies.filter((m) => !m.watched).length;

  return (
    <div className="stats shadow bg-base-100 mb-6 w-full">
      <div className="stat">
        <div className="stat-title">Total</div>
        <div className="stat-value text-primary">{total}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Watched</div>
        <div className="stat-value text-success">{watchedCount}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Unwatched</div>
        <div className="stat-value text-secondary">{unwatchedCount}</div>
      </div>
    </div>
  );
}