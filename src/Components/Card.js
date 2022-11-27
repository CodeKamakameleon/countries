import { Link } from "react-router-dom";
import { FlagImg } from "./FlagImg";
import { Title } from "./Title";
import { DataRow } from "./DataRow";

export const Card = ({ country }) => (
  <Link
    to={`/country/${country.cca3}`}
    key={country.cca3}
    className="bg-white rounded-md drop-shadow-md"
  >
    <FlagImg country={country} />

    <div className="p-7 ">
      <Title>{country.name.common}</Title>

      <DataRow isNumber title="Population:" value={country.population} />

      <DataRow title="Region:" value={country.region} />

      <DataRow title="Capital:" value={country.capital} />
    </div>
  </Link>
);
