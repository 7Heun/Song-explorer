import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";
import { Link, useNavigate } from "react-router";

function SearchPage() {
  let navigate = useNavigate();
  return (
    <div>
      {/* <Link to="/liked">Liked</Link> */}
      <button onClick={() => navigate("/liked")}>Liked</button>
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
