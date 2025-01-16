import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  to: string;
}

const LinkNav = ({ children, to }: LinkProps) => {
  const linkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? "border-b-4 border-yellow-300"
      : "border-b-4 border-transparent hover:border-yellow-300";
  };

  return (
    <NavLink to={to} className={linkClass}>
      {children}
    </NavLink>
  );
};

export default LinkNav;
