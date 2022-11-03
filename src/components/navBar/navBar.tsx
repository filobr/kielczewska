import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import { navbarFont, routes, tabs } from "consts/consts";
import Logo from "assets/logo.png";

interface NavContainerProps {
  dark?: boolean;
  sticky?: boolean;
}

export const NavContainer = styled.div<NavContainerProps>`
  ${flexDisplay("80vw", "auto", "row")}
  margin: ${({ sticky }) => (sticky ? "0" : "50px")};
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ dark }) => (dark ? "rgba(0, 0, 0, 0.7)" : "#ffffff")};
  border-radius: 30px;
  position: sticky;
  top: 0;
  ${navbarFont};
  text-transform: uppercase;
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

export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const Navigation: FC = () => (
  <>
    <Link to={routes.mainPage.path}>
      <LogoImage src={Logo} alt="logo" />
    </Link>
    <NavContainer sticky>
      {tabs.map(tab => (
        <NavItem path={tab.path} label={tab.label} key={tab.label} />
      ))}
    </NavContainer>
  </>
);
