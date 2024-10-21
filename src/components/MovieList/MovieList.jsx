import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const MovieList = ({ homePage, data, searchValue, location }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day";

      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJhM2Y0MzBjNmEwOTg5NGYwMDg1MGI2Zjc2NjhlOCIsIm5iZiI6MTcyOTQ1NDY2MS4wMzI2NzcsInN1YiI6IjY3MTU1N2UzYmQ5MWM4MzgyOWQ3MTFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BGo7Zq-X2rpb_7QGs5jFarG-WlTbtuJhe5pKCchRtw",
        },
      };
      try {
        const { data } = await axios.get(url, options);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {homePage && (
        <div>
          <h2>Trending today</h2>
          {movies === null ? (
            <p>Loading...</p>
          ) : (
            movies.length > 0 && (
              <ul>
                {movies?.map((movie) => (
                  <li key={movie.id}>
                    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                      {movie.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      )}
      {data && (
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
