import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";

function SearchPage() {
  const [searchText, setSearchText] = useState("");
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
      <SearchBar
        setSearchText={setSearchText}
        onSearch={(value) => setSearchText(value)}
      />
      <SongList songs={data} />
    </div>
  );
}

export default SearchPage;
