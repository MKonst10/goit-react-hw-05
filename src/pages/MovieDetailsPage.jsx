import axios from "axios";
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const navigate = useNavigate();
  const location = useLocation();

  const backUrl = location.state?.from || "/movies";
  const goBack = () => {
    navigate(backUrl);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}`;

      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJhM2Y0MzBjNmEwOTg5NGYwMDg1MGI2Zjc2NjhlOCIsIm5iZiI6MTcyOTQ1NDY2MS4wMzI2NzcsInN1YiI6IjY3MTU1N2UzYmQ5MWM4MzgyOWQ3MTFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BGo7Zq-X2rpb_7QGs5jFarG-WlTbtuJhe5pKCchRtw",
        },
      };
      try {
        const { data } = await axios.get(url, options);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {movie !== null && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User score: {Math.round(movie.vote_average)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <Link
        state={{ from: location.state.from }}
        to={`/movies/${movieId}/cast`}
      >
        Cast
      </Link>
      <Link
        state={{ from: location.state.from }}
        to={`/movies/${movieId}/reviews`}
      >
        Reviews
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
