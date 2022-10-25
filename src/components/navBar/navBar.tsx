import { Link } from "react-router-dom";
import { FC } from "react";

interface NavItemProps {
  path: string;
  label: string;
}

export const NavItem: FC<NavItemProps> = ({ path, label }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      {label}
    </Link>
  );
};
