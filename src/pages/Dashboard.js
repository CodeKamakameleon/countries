import { Dropdown } from "../Components/Dropdown";
import { Navbar } from "../Components/Navbar";
import { Search } from "../Components/Search";
import { Card } from "../Components/Card";

export const Dashboard = ({ countries, handleRegion, handleSearch }) => (
  <>
    <Navbar />
    <div className="flex justify-between px-10 py-5 bg-gray-50">
      <Search handleSearch={handleSearch} />
      <Dropdown handleRegion={handleRegion} />
    </div>
    <div className="grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 bg-gray-50 p-10">
      {countries.map((c) => (
        <Card key={c.cca3} country={c} />
      ))}
    </div>
  </>
);
