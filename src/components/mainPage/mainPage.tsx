import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";

interface ContainerProps {
  imageUrl: string;
}

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
