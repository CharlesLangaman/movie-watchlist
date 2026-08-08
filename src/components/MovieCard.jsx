export default function MovieCard(/* TODO: props */{ title, poster, year, genre, rating, watched }) {
  // TODO: destructure props — title, poster, year, genre, rating, watched

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={/* TODO: props */ poster}
          alt={/* TODO: props */ title}
          className="w-full h-80 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {/* TODO: props */title}
          {/* TODO: conditional — show a "Top Rated" badge (badge-warning) if rating >= 8 */}
          {rating >= 8 && <span className="badge badge-warning">Top Rated</span>}
        </h2>
        <p className="text-sm opacity-70">
          {/* TODO: props — display like "Sci-Fi • 2010" */} {genre} • {year}
        </p>
        <p className="text-sm">
          ⭐ {/* TODO: props — rating */} {rating}
        </p>
        <div className="card-actions justify-end mt-2">
          {/* TODO: conditional — if watched, show "Watched ✓" (badge badge-success);
              otherwise show "Unwatched" (badge badge-ghost) */}
              {watched ? (
            <span className="badge badge-success">Watched ✓</span>
          ) : (
            <span className="badge badge-ghost">Unwatched</span>
          )}
        </div>
      </div>
    </div>
  );
}
