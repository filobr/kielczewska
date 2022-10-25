import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import LeftArrow from "assets/left-arrow.png";
import RightArrow from "assets/right-arrow.png";

export const ModalContainer = styled.div`
  ${flexDisplay("100vw", "100vh", "row")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalSideContainer = styled.div`
  ${flexDisplay("15vw", "100%", "column")}
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalCenterContainer = styled.div`
  ${flexDisplay("70vw", "100%", "column")}
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalImage = styled.img`
  max-height: 90%;
  max-width: 90%;
`;

export const Arrow = styled.img`
  cursor: pointer;
`;

interface ModalProps {
  images: string[];
  selectedPhotoIndex: number;
  setSelectedPhotoIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({
  images,
  selectedPhotoIndex,
  setIsModalOpened,
  setSelectedPhotoIndex,
}) => {
  const prevPhoto = () =>
    setSelectedPhotoIndex(
      selectedPhotoIndex === 0
        ? images.length - 1
        : Number(selectedPhotoIndex) - 1
    );

  const nextPhoto = () =>
    setSelectedPhotoIndex(
      selectedPhotoIndex === images.length - 1
        ? 0
        : Number(selectedPhotoIndex) + 1
    );

  return (
    <ModalContainer>
      <ModalSideContainer>
        <Arrow src={LeftArrow} onClick={prevPhoto} />
      </ModalSideContainer>
      <ModalCenterContainer>
        <ModalImage src={images[selectedPhotoIndex]} />
      </ModalCenterContainer>
      <ModalSideContainer>
        <Arrow src={RightArrow} onClick={nextPhoto} />
      </ModalSideContainer>
    </ModalContainer>
  );
};
