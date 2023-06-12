import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { PageContainer } from "../../components/PageContainer";

const url = "https://restcountries.com/v3.1/all";

export const Countries = ({}) => {
  const [countries, setCountries] = useState([]);

  function deleteCountry(name) {
    setCountries((pre) =>
      pre.filter((country) => country.name.common !== name)
    );
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(url);
      setCountries(data);
    })();
  }, []);

  useEffect(() => {
    console.log("countries state-i deyisdi");
  }, [countries]);

  return (
    <PageContainer>
      <div className={styles.countries_container}>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              <button onClick={() => deleteCountry(country.name.common)}>
                X
              </button>
              <img src={country.flags.png} alt="Bayragı" />
              <h3>Rəsmi adı: {country.name.official}</h3>
              <p>Əhalisi: {country.population}</p>
              <p>Paytaxtı: {country.capital}</p>
              <p>Region: {country.region}</p>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};
