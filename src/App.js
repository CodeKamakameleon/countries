import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { Country } from "./pages/Country";

export const BASE_URL = "https://restcountries.com/v3.1";
const URL = `${BASE_URL}/all`;

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [endpoint, setEndpoint] = useState(URL);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [endpoint]);

  const handleRegion = (region) => {
    if (!region) return setEndpoint(URL);
    setEndpoint(`https://restcountries.com/v3.1/region/${region}`);
  };

  const handleSearch = (name) => {
    if (!name) return setEndpoint(URL);
    setEndpoint(`${BASE_URL}/name/${name}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            countries={countries}
            handleRegion={handleRegion}
            handleSearch={handleSearch}
          />
        }
      />

      <Route
        path="/country/:code"
        element={<Country countries={countries} />}
      />
    </Routes>
  );
};
