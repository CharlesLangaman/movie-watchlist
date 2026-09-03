import Layout from "./layouts/Layout";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import FilterBar from "./components/FilterBar";
import SummaryBar from "./components/SummaryBar";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import initialMovies from "./data/movies";
import { useState, useEffect } from "react";
import { searchMovies, toWatchlistMovie } from "./api/tmdb";

export default function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : initialMovies;
  });
  const [filter, setFilter] = useState("all");

  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    document.title = `Movie Watchlist (${movies.length})`;
  }, [movies.length]);

  useEffect(() => {
    if (!searchTerm) return; 

    let isCancelled = false;

    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedMovies = await searchMovies(searchTerm);
        if (!isCancelled) setResults(fetchedMovies);
      } catch (err) {
        if (!isCancelled) setError("Failed to fetch movies. Try again.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    fetchResults();

    return () => {
      isCancelled = true;
    };
  }, [searchTerm]);

  const handleClearAll = () => {
    if (confirm("Clear your entire watchlist? This cannot be undone.")) {
      setMovies([]);
    }
  };

  const handleToggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleAddFromSearch = (movie) => {
    const newWatchlistMovie = toWatchlistMovie(movie);
    if (!movies.some((m) => m.id === newWatchlistMovie.id)) {
      setMovies([...movies, newWatchlistMovie]);
    }
  };

  const visibleMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Movie Watchlist</h1>

        <SearchBar onSearch={setSearchTerm} />
        <SearchResults
          results={results}
          onAdd={handleAddFromSearch}
          isLoading={isLoading}
          error={error}
        />

        <hr className="my-6" />

        <SummaryBar movies={movies} onClearAll={handleClearAll} />
        <AddMovieForm onAddMovie={handleAddMovie} />
        <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
        <MovieList
          movies={visibleMovies}
          onToggleWatched={handleToggleWatched}
          onDelete={handleDeleteMovie}
        />
      </div>
    </Layout>
  );
}