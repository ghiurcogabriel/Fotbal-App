import React, {useState } from "react";
import './Search.css';

const Search = ({ setTeamName }) => {

  const [text, setText] = useState("");

  return (
    <div className="box">
      <input
        type="text"
        onChange={(e) => setText(e.target.value.toLocaleLowerCase())}
        value={text}
        className="search-input"
        placeholder="Search for a fotball team..."
      />

      <button
        className="search-btn"
        onClick={() => {
          setTeamName(text);
          setText("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
