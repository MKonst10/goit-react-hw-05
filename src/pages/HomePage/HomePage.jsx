import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const homePage = true;
  return (
    <div>
      <MovieList homePage={homePage} />
    </div>
  );
};

export default HomePage;
