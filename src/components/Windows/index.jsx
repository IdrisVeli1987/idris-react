import { useState } from "react";

export const Windows = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <img
        onDoubleClick={() => {
          setShow(true);
        }}
        style={{ width: 100 }}
        src="/file.jpg"
        alt=""
      />

      {show && (
        <div className="window_container">
          <button onClick={() => setShow(false)}>X</button>
          <h1>Bu yeni pəncərədir</h1>
        </div>
      )}
    </>
  );
};
