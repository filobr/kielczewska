import { FC, useState, TouchEvent } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import { centerContent, width } from "consts/consts";
import LeftArrow from "assets/left-arrow.png";
import RightArrow from "assets/right-arrow.png";
import CloseIcon from "assets/close-icon.png";

export const ModalContainer = styled.div`
  ${flexDisplay("100vw", "100vh", "column")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalTopContainer = styled.div`
  ${flexDisplay("100%", "5%", "row-reverse")};
`;

export const ModalMainContainer = styled.div`
  ${flexDisplay("100%", "90%", "row")};
`;

export const ModalSideContainer = styled.div`
  ${flexDisplay("15vw", "100%", "column")};
  ${centerContent};
  ${width.mobile} {
    display: none;
  }
`;

export const ModalCenterContainer = styled.div`
  ${flexDisplay("70vw", "100%", "column")};
  ${centerContent};
  ${width.mobile} {
    width: 100vw;
  }
`;

export const ModalImage = styled.img`
  max-height: 100%;
  max-width: 100%;
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
}) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = ({ targetTouches }: TouchEvent) => {
    setTouchStart(targetTouches[0].clientX);
  };

  const handleTouchMove = ({ targetTouches }: TouchEvent) => {
    setTouchEnd(targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextPhoto();
    }

    if (touchStart - touchEnd < -50) {
      previousPhoto();
    }
  };

  return (
    <ModalContainer>
      <ModalTopContainer>
        <ModalButton src={CloseIcon} onClick={closeModal} close />
      </ModalTopContainer>
      <ModalMainContainer>
        <ModalSideContainer>
          <ModalButton src={LeftArrow} onClick={previousPhoto} />
        </ModalSideContainer>
        <ModalCenterContainer>
          <ModalImage
            src={images[selectedPhotoIndex]}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </ModalCenterContainer>
        <ModalSideContainer>
          <ModalButton src={RightArrow} onClick={nextPhoto} />
        </ModalSideContainer>
      </ModalMainContainer>
    </ModalContainer>
  );
};
