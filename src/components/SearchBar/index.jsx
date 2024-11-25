import { useRef } from "react";
import "./index.css";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SearchBar() {
  const inputRef = useRef();
  const { setSearchText } = useSearchTextStore();

  return (
    <div className="SearchBar">
      <input ref={inputRef} className="SearchBar_input" />
      <button
        className="SearchBar_button"
        onClick={() => {
          setSearchText(inputRef.current.value);
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
