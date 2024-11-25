import { useQuery } from "@tanstack/react-query";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SearchPage() {
  const { searchText } = useSearchTextStore();
  const { data, isLoading } = useQuery({
    queryKey: ["getSong", searchText],
    queryFn: () => {
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : "https://api.manana.kr/karaoke.json"
      ).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading) {
    return "Loading...";
  }
  if (!data) {
    return "No data";
  }

  return (
    <div>
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
