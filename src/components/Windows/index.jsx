import { useState } from "react";
import { PageContainer } from "../PageContainer";

export const Windows = () => {
  const [show, setShow] = useState(false);
  return (
    <PageContainer>
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
    </PageContainer>
  );
};
