import { FC, useState } from "react";
import styled from "styled-components";
import {
  flexDisplay,
  selectPreviousIndex,
  selectNextIndex,
} from "components/helpers/helpers";
import { Modal } from "./modal";

export const Container = styled.div`
  ${flexDisplay("100vw", "auto", "column")}
  align-items: center;
`;

export const Description = styled.div`
  width: 70%;
  margin: 50px 0;
`;

export const Gallery = styled.div`
  width: 70%;
`;

export const GalleryRow = styled.div`
  ${flexDisplay("100%", "auto", "row")};
  padding: 0 10px;
`;

export const GalleryColumn = styled.div`
  flex: 50%;
  padding: 0 10px;
`;

export const GalleryImage = styled.img`
  margin-top: 20px;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
`;

interface SiteContentProps {
  images: string[];
  description?: string;
}

const SiteContent: FC<SiteContentProps> = ({ images, description }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const onImageClick = ({
    currentTarget,
  }: {
    currentTarget: HTMLImageElement;
  }) => {
    setSelectedPhotoIndex(images.indexOf(currentTarget.alt));
    setIsModalOpened(true);
  };

  const previousPhoto = () =>
    setSelectedPhotoIndex(
      selectPreviousIndex(selectedPhotoIndex, images.length)
    );

  const nextPhoto = () =>
    setSelectedPhotoIndex(selectNextIndex(selectedPhotoIndex, images.length));

  const leftColumnImages = images.filter((val, index) => !(index % 2));
  const rightColumnImages = images.filter((val, index) => index % 2);

  return (
    <Container>
      {description && <Description>{description}</Description>}
      <Gallery>
        <GalleryRow>
          <GalleryColumn>
            {leftColumnImages.map((image, index) => (
              <GalleryImage
                src={image}
                data-index={index}
                alt={image}
                key={image}
                onClick={onImageClick}
              />
            ))}
          </GalleryColumn>
          <GalleryColumn>
            {rightColumnImages.map((image, index) => (
              <GalleryImage
                src={image}
                data-index={index}
                alt={image}
                key={image}
                onClick={onImageClick}
              />
            ))}
          </GalleryColumn>
        </GalleryRow>
      </Gallery>
      {isModalOpened && (
        <Modal
          images={images}
          selectedPhotoIndex={selectedPhotoIndex}
          previousPhoto={previousPhoto}
          nextPhoto={nextPhoto}
          closeModal={() => setIsModalOpened(false)}
        />
      )}
    </Container>
  );
};

export default SiteContent;
