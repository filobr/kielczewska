import { FC } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";

export const Container = styled.div`
  ${flexDisplay("100vw", "auto", "column")}
  align-items: center;
`;

export const Description = styled.div`
  width: 70%;
`;

interface SiteContentProps {
  images: string[];
  description?: string;
}

const SiteContent: FC<SiteContentProps> = ({ images, description }) => {
  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  );
};

export default SiteContent;
