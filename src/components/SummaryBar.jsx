export default function SummaryBar({ movies, onClearAll }) {
  const total = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = movies.filter((m) => !m.watched).length;

  return (
    <div className="stats shadow bg-base-100 mb-6 w-full flex flex-col sm:flex-row justify-between items-center">
      <div className="flex w-full">
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
      <div className="p-4">
        <button className="btn btn-error btn-sm" onClick={onClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}