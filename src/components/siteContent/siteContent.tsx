import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";

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
`;

interface SiteContentProps {
  images: string[];
  description?: string;
}

const SiteContent: FC<SiteContentProps> = ({ images, description }) => {
  return (
    <Container>
      {description && <Description>{description}</Description>}
      <Gallery>
        <GalleryRow>
          <GalleryColumn>
            {images.map((image, index) => {
              if (index === 0 || (index !== 0 && index % 2 === 0))
                return <GalleryImage src={image} />;
            })}
          </GalleryColumn>
          <GalleryColumn>
            {images.map((image, index) => {
              if (index !== 0 && index % 2 !== 0)
                return <GalleryImage src={image} />;
            })}
          </GalleryColumn>
        </GalleryRow>
      </Gallery>
    </Container>
  );
};

export default SiteContent;
