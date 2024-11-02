import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";
import { useState } from "react";
import Loader from "../Loader/Loader";

const MovieList = ({ homePage, data, location, movies, loader }) => {
  return (
    <div>
      {homePage && (
        <div>
          <h2>Trending today</h2>
          {movies === null
            ? loader && <Loader />
            : movies.length > 0 && (
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
