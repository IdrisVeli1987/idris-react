import { useState } from "react";

const songs = ["Mənəm Turk", "Yaradan", "İrəli"];

const Mp3 = () => {
  const [index, setIndex] = useState(0);

  const pre = () => {
    if (index === 0) {
      setIndex(songs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if ((index = songs.length - 1)) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <div className="mp3-container">
        <div className="sound-photo">
          <img src="https://images.genius.com/3d257439b049e7f3e89beb69916c6eba.1000x1000x1.png" />
          <p>{songs[index].slice(0, mIndex - 1)}</p>
          <audio src={"/songs/" + songs[index] + ".mp3"} controls></audio>
        </div>
        <div>
          <button onClick={pre}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>
      </div>
    </>
  );
};
export default Mp3;
