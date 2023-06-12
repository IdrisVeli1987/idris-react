import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://catfact.ninja/breeds";

export function CatFact() {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
        console.log(data)
      setCatData(data.data);
    });
  }, []);
  return (
    <div>
      {catData.map((data, id) => {
        return (
          <div key={data.breeds}>
            <p>{data.breed}</p>
          </div>
        );
      })}
    </div>
  );
}
