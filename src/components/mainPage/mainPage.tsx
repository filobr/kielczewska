import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";

interface ContainerProps {
  imageUrl: string;
}

type Direction = "row" | "column";

const flexDisplay = (
  width: string,
  height: string,
  direction: Direction
) => `display: flex;
flex-direction: ${direction};
width: ${width};
height: ${height};`;

export const MainPageContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  ${flexDisplay("100vw", "100vh", "row")}
`;

export const SideContainer = styled.div`
  ${flexDisplay("15vw", "100%", "column")}
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div`
  ${flexDisplay("70vw", "100%", "column")}
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const MainNavbar = styled.div`
  ${flexDisplay("100%", "10vh", "row")}
  margin: 50px;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
`;

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
