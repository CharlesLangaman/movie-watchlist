export default function MovieCard({ id, title, poster, year, genre, rating, watched, onToggleWatched, onDelete }) {

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={poster}
          alt={title}
          className="w-full h-80 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {rating >= 8 && <span className="badge badge-warning">Top Rated</span>}
        </h2>
        <p className="text-sm opacity-70">
          {genre} • {year}
        </p>
        <p className="text-sm">
          ⭐ {rating}
        </p>
        <div className="card-actions justify-end mt-2">
          {watched ? (
            <button onClick={() => onToggleWatched(id)} className="badge badge-success cursor-pointer border-0">
              Watched ✓
            </button>
          ) : (
            <button onClick={() => onToggleWatched(id)} className="badge badge-ghost cursor-pointer border-0">
              Unwatched
            </button>
          )}
          <button onClick={() => onDelete(id)} className="btn btn-sm btn-error btn-outline ml-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}