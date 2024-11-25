import "./index.css";

function Song({ song }) {
  return (
    <div className="Song">
      <div>
        <div className="Song_title">{song.title}</div>
        <div className="Song_singer">{song.singer}</div>
      </div>
      <div className="Song_no">{song.no}</div>
    </div>
  );
}

export default Song;
