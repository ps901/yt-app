import React, { useState } from "react";

function SearchBar({ onTermSubmit }) {
  const [term, setterm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
    setterm("");
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setterm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
