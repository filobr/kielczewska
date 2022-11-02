import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import { flexDisplay, navbarFont } from "components/helpers/helpers";

interface NavContainerProps {
  dark?: boolean;
  fixed?: boolean;
}

export const NavContainer = styled.div<NavContainerProps>`
  ${flexDisplay("80vw", "auto", "row")}
  margin: ${({ fixed }) => (fixed ? "0" : "50px")};
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ dark }) => (dark ? "rgba(0, 0, 0, 0.7)" : "#ffffff")};
  border-radius: 30px;
  position: sticky;
  top: 0;
  ${navbarFont()}
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
        fontSize: "16px",
      }}
    >
      {label}
    </Link>
  );
};
