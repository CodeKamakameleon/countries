export const FlagImg = ({ country }) =>
  !country?.flags ? null : (
    <img
      className="w-full rounded-t-md h-72 object-contain"
      src={country?.flags?.png}
      alt={`flag of ${country?.name?.common}`}
    />
  );
