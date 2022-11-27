import { MoonIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 shadow-md">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <button className="flex gap-2 items-center">
        <MoonIcon className="h-6 w-6 " /> Dark Mode
      </button>
    </nav>
  );
};
