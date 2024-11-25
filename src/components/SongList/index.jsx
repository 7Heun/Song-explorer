import "./index.css";
import Song from "../Song";
import { useQuery } from "@tanstack/react-query";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SongList() {
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
    <div className="SongList">
      {data.map((song) => (
        <Song
          key={song.brand + song.no}
          title={song.title}
          singer={song.singer}
          no={song.no}
        />
      ))}
    </div>
  );
}

export default SongList;
