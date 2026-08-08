import MovieCard from "./MovieCard";

export default function MovieList(/* TODO: props */{movies}) {
  // TODO: destructure props — movies

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* TODO: map — iterate over movies and render a <MovieCard /> for each.
          Pass the movie fields as props. Remember to include a unique `key`. */}
          {movies.map((movie) => (
        <MovieCard
          key={movie.id || movie.title}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          genre={movie.genre}
          rating={movie.rating}
          watched={movie.watched}
        />
      ))}
    </div>
  );
}
