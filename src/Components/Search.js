import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Search = ({ handleSearch }) => {
  const [timer, setTimer] = useState();

  const handleChange = (evt) => {
    if (timer) clearTimeout(timer);

    const t = setTimeout(() => {
      handleSearch(evt.target.value);
    }, 200);

    setTimer(t);
  };

  return (
    <div className="flex gap-5 p-5 rounded-md shadow-md bg-white">
      <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
      <input
        onChange={handleChange}
        className="outline-none text-md"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};
