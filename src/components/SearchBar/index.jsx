/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./index.css";

function SearchBar({ onSearch }) {
  const inputRef = useRef();

  return (
    <div className="SearchBar">
      <input ref={inputRef} className="SearchBar_input" />
      <button
        className="SearchBar_button"
        onClick={() => {
          onSearch(inputRef.current.value);
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
