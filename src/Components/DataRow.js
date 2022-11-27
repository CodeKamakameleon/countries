import NumberFormat from "react-number-format";
import clsx from "clsx";

export const DataRow = ({ isNumber = false, title, value, className }) => (
  <div className={clsx("leading-9", className)}>
    <span className="font-semibold">{title}</span>{" "}
    {isNumber ? (
      <NumberFormat value={value} displayType="text" thousandSeparator />
    ) : (
      value
    )}
  </div>
);
