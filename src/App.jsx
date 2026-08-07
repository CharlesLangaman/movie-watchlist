import Layout from "./layouts/Layout";
import MovieList from "./components/MovieList";
import movies from "./data/movies";

export default function App() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Watchlist</h1>
        <p className="opacity-70">
          A collection of movies I've watched and want to watch.
        </p>
      </div>
      <MovieList movies={movies} />
    </Layout>
  );
}
