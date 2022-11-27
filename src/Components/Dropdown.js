export const Dropdown = ({ handleRegion }) => {
  const handleChange = (evt) => {
    handleRegion(evt.target.value);
  };

  return (
    <div className="pr-5 rounded-md shadow-md bg-white">
      <select
        onChange={handleChange}
        className="outline-none rounded-md p-5 text-gray-500"
      >
        <option>Filter by Region</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
