import clsx from "clsx";

export const Title = ({ children, className }) => (
  <h2 className={clsx("font-bold text-lg mb-4", className)}>{children}</h2>
);
