import { FC } from "react";
import { flexDisplay } from "components/helpers/helpers";
import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  ${flexDisplay("100vw", "100vh", "column")};
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const LoadingPage: FC = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
);
