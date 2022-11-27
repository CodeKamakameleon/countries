import { useParams } from "react-router";
import { Navbar } from "../Components/Navbar";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { FlagImg } from "../Components/FlagImg";
import { Title } from "../Components/Title";
import { Link } from "react-router-dom";
import { DataRow } from "../Components/DataRow";

export const Country = ({ countries }) => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(countries.find((c) => c.cca3 === code));
  }, [code, countries]);

  console.log(country);

  const findCountry = (borderCode) =>
    countries.find((c) => c.cca3 === borderCode);

  return !country ? null : (
    <div>
      <Navbar />
      <div className="p-10 ">
        <Link
          to="/"
          className="mb-20 inline-flex gap-3 text-xl items-center justify-center py-2 px-8 rounded-md shadow-lg border border-solid border-gray-50"
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-800" />
          Back
        </Link>

        <div className="flex flex-col lg:flex-row hover:opacity-50 transition-duration-1000">
          {/* flag */}
          <FlagImg country={country} />
          {/* info */}
          <Title className="text-3xl mt-16 mb-10">
            {country?.name?.common}
          </Title>
          <div className="flex flex-col lg:flex-row mb-10">
            <div className="mb-10 lg:mb-0">
              <DataRow title="Official name:" value={country.name.official} />
              <DataRow
                title="Population:"
                isNumber
                value={country.population}
              />

              <DataRow title="Region:" value={country.region} />

              <DataRow title="Sub Region:" value={country.subregion} />

              <DataRow title="Capital:" value={country.capital} />
            </div>

            <div>
              <DataRow
                title="Top Level Domain:"
                value={country.tld.join(", ")}
              />

              <DataRow
                title="Currencies:"
                value={Object.values(country.currencies)
                  .map((val) => val.name)
                  .join(", ")}
              />

              <DataRow
                title="Languages:"
                value={Object.values(country.languages).join(", ")}
              />
            </div>
          </div>

          {/* buttons */}
          <DataRow
            title="Border Countries:"
            value={
              <span className="inline-flex flex-wrap gap-2">
                {country?.borders.map((b) => (
                  <Link
                    className="inline-flex gap-3 text-xl items-center py-2 px-8 rounded-md shadow-lg border border-solid border-gray-50"
                    key={b}
                    to={`/country/${b}`}
                  >
                    {findCountry(b)?.name?.common}
                  </Link>
                ))}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};
