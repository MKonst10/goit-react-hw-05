import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJhM2Y0MzBjNmEwOTg5NGYwMDg1MGI2Zjc2NjhlOCIsIm5iZiI6MTcyOTQ1NDY2MS4wMzI2NzcsInN1YiI6IjY3MTU1N2UzYmQ5MWM4MzgyOWQ3MTFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BGo7Zq-X2rpb_7QGs5jFarG-WlTbtuJhe5pKCchRtw",
        },
      };
      try {
        const { data } = await axios.get(url, options);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      {reviews === null ? (
        <p>Loading...</p>
      ) : reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <b>Author: {review.author}</b>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
