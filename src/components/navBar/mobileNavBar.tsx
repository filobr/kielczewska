import { FC, useState } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import { tabs, navbarFont, routes } from "consts/consts";
import { NavItem } from "components/navBar/navBar";
import { Link } from "react-router-dom";

import MenuIcon from "assets/mobileMenu/menu-icon.svg";
import CloseIcon from "assets/mobileMenu/close-menu-icon.svg";
import Logo from "assets/logo.png";

export const MobileMenuContainer = styled.div`
  ${flexDisplay("100%", "auto", "column")};
  z-index: 100;
`;

export const MobileMenuTop = styled.div`
  ${flexDisplay("100%", "50px", "row-reverse")};
  align-items: center;
  justify-content: space-between;
`;

export const mobileIconStyle = (size: number) => `
width: ${size}px;
height: ${size}px;
margin: 5px;
cursor: pointer;
`;

export const MobileIcon = styled.img`
  ${mobileIconStyle(30)}
`;

export const MobileLogo = styled.img`
  ${mobileIconStyle(50)}
`;

export const MobileTabList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${flexDisplay("100%", "auto", "column")};
  ${navbarFont};
  align-items: flex-end;
`;

export const MobileNavbar: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <MobileMenuContainer>
      <MobileMenuTop>
        <MobileIcon
          src={isMenuOpened ? CloseIcon : MenuIcon}
          alt="hamburger-menu"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        />
        <Link to={routes.mainPage.path}>
          <MobileLogo src={Logo} alt="Logo" />
        </Link>
      </MobileMenuTop>
      {isMenuOpened && (
        <MobileTabList>
          {tabs.map(tab => (
            <NavItem path={tab.path} label={tab.label} key={tab.label} />
          ))}
        </MobileTabList>
      )}
    </MobileMenuContainer>
  );
};
