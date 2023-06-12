import { useState, useEffect } from "react";
import { PageContainer } from "../../components/PageContainer";
const colors = ["red", "yellow", "green"];
let randomIndex;

export const About = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    randomIndex = Math.floor(Math.random() * colors.length);
    console.log(colors[randomIndex]);
  }, [name]);
  return (
    <PageContainer>
      <div style={{ backgroundColor: colors[randomIndex], height: "100vh" }}>
        <h1>{name} Welcome to About page</h1>
        <button
          onClick={() => {
            setName(prompt("Adinizi daxil edin "));
          }}
        >
          Adinizi daxil edin
        </button>
      </div>
    </PageContainer>
  );
};
