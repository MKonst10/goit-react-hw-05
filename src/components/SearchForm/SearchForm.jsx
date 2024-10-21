import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.text.value.trim();
    if (value === "") {
      alert("This is an invalid request. Try again!");
      return;
    } else {
      onSearch(value);
    }
  };
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
