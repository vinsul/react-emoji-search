import React from "react";

const Search = ({displayResults}) => {
  return (
    <>
      <span role="img" aria-label="Smilling face with sunglasses">
        😎 Emoji Search 😎
      </span>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        onChange={(event) => displayResults(event)}
      />
    </>
  );
};

export default Search;
