import { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({
      id: Date.now(),
      title,
      poster,
      genre,
      year: Number(year),
      rating: Number(rating),
      watched: false,
    });
    
    setTitle("");
    setPoster("");
    setGenre("");
    setYear("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 p-4 bg-base-200 rounded-lg">
      <h2 className="text-xl font-semibold">Add a New Movie</h2>
      
      <div className="form-control">
        <label className="label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie title"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">Poster URL</label>
        <input
          type="text"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          placeholder="https://example.com/poster.jpg"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="e.g. Action, Drama"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="2026"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">Rating: {rating} / 10</label>
        <input
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="range"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;