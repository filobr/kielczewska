import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import LeftArrow from "assets/left-arrow.png";
import RightArrow from "assets/right-arrow.png";
import CloseIcon from "assets/close-icon.png";

export const ModalContainer = styled.div`
  ${flexDisplay("100vw", "100vh", "column")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalTopContainer = styled.div`
  ${flexDisplay("100%", "5%", "row-reverse")};
`;

export const ModalMainContainer = styled.div`
  ${flexDisplay("100%", "90%", "row")};
`;

export const ModalSideContainer = styled.div`
  ${flexDisplay("15vw", "100%", "column")}
  justify-content: center;
  align-items: center;
`;

export const ModalCenterContainer = styled.div`
  ${flexDisplay("70vw", "100%", "column")}
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  max-height: 90%;
  max-width: 90%;
`;

export const ModalButton = styled.img<{ close?: boolean }>`
  cursor: pointer;
  margin-right: ${({ close }) => (close ? "6vw" : "0")};
`;

interface ModalProps {
  images: string[];
  selectedPhotoIndex: number;
  previousPhoto: () => void;
  nextPhoto: () => void;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({
  images,
  selectedPhotoIndex,
  previousPhoto,
  nextPhoto,
  closeModal,
}) => (
  <ModalContainer>
    <ModalTopContainer>
      <ModalButton src={CloseIcon} onClick={closeModal} close />
    </ModalTopContainer>
    <ModalMainContainer>
      <ModalSideContainer>
        <ModalButton src={LeftArrow} onClick={previousPhoto} />
      </ModalSideContainer>
      <ModalCenterContainer>
        <ModalImage src={images[selectedPhotoIndex]} />
      </ModalCenterContainer>
      <ModalSideContainer>
        <ModalButton src={RightArrow} onClick={nextPhoto} />
      </ModalSideContainer>
    </ModalMainContainer>
  </ModalContainer>
);
