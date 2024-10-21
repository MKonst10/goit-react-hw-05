import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.text.value.trim();
    if (value === "") {
      return "This is an invalid request. Try again!";
    } else {
      onSearch(value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
