import { useState } from "react";

const images = ["O1.jpg", "O2.jpg", "O3.jpg", "O4.jpg", "O5.jpg"];
const Gallery = () => {
  const [index, setIndex] = useState(0);
  const pre = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const next = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <img src={"/images/" + images[index]} alt="" />
      <div className="icons">
        <button onClick={pre}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
};
export default Gallery;
