import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";

interface NavContainerProps {
  dark?: boolean;
  fixed?: boolean;
}

export const NavContainer = styled.div<NavContainerProps>`
  ${flexDisplay("80%", "10vh", "row")}
  margin: ${({ fixed }) => (fixed ? "0" : "50px")};
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ dark }) => (dark ? "rgba(0, 0, 0, 0.7)" : "#ffffff")};
  border-radius: 30px;
  position: fixed;
`;

interface NavItemProps {
  path: string;
  label: string;
  white?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ path, label, white }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: white ? "#ffffff" : "#000000",
        padding: "20px",
      }}
    >
      {label}
    </Link>
  );
};
