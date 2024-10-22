import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ homePage, data, location, movies }) => {
  return (
    <div>
      {homePage && (
        <div>
          <h2>Trending today</h2>
          {movies === null ? (
            <p>Loading...</p>
          ) : (
            movies.length > 0 && (
              <ul className={styles.list}>
                {movies?.map((movie) => (
                  <li key={movie.id}>
                    <Link
                      className={styles.item}
                      state={{ from: location }}
                      to={`/movies/${movie.id}`}
                    >
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
        <ul className={styles.list}>
          {data.map((movie) => (
            <li key={movie.id}>
              <Link
                className={styles.item}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
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
