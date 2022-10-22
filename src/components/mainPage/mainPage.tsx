import styled from "styled-components";

interface ContainerProps {
  imageUrl: string;
}

export const MainPageContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  background-image: url(${props => props.imageUrl});
`;

export const SideContainer = styled.div`
  height: 100%;
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div`
  height: 100%;
  width: 70vw;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
