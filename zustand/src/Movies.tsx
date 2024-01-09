import { useEffect } from "react";
import { useTextStore } from "./store";

const Movies = () => {
  const movies = useTextStore((state) => state.movies);
  const searchText = useTextStore((state) => state.searchText);
  const setSearchText = useTextStore((state) => state.setSearchText);
  const searchMoviesByTitle= useTextStore((state) => state.searchMoviesByTitle);
//   const fetchMovies = useTextStore((state) => state.fetchMovies);
//   useEffect(() => {
    // fetchMovies();
//   }, [searchMoviesByTitle]);
    const handleSearch=()=>{
        searchMoviesByTitle(searchText);
    }

  return (
    <div>
        <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter a movie title..."
      />
      <button onClick={handleSearch}>Search</button>

      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.title}</div>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
