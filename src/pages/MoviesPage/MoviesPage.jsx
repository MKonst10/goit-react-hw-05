import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query");
  const location = useLocation();

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (searchValue === "") return;

    const fetchSearchedMovie = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}`;

      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJhM2Y0MzBjNmEwOTg5NGYwMDg1MGI2Zjc2NjhlOCIsIm5iZiI6MTcyOTQ1NDY2MS4wMzI2NzcsInN1YiI6IjY3MTU1N2UzYmQ5MWM4MzgyOWQ3MTFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BGo7Zq-X2rpb_7QGs5jFarG-WlTbtuJhe5pKCchRtw",
        },
      };

      try {
        const { data } = await axios.get(url, options);
        setMovies(data.results);

        if (data.results.length === 0) {
          alert(
            "Sorry, there are no movies matching your search query. Please try again!"
          );
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (searchValue) {
      fetchSearchedMovie();
    }
  }, [searchValue]);

  return (
    <div>
      <SearchForm onSearch={handleSubmit} />
      <MovieList data={movies} location={location} />
    </div>
  );
};

export default MoviesPage;
