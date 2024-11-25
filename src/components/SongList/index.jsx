/* eslint-disable react/prop-types */
import "./index.css";
import Song from "../Song";

function SongList({ songs }) {
  return (
    <div className="SongList">
      {songs.map((song) => (
        <Song key={song.brand + song.no} song={song} />
      ))}
    </div>
  );
}

export default SongList;
