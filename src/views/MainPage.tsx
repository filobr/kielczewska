import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import LeftArrow from "assets/left-arrow.png";
import RightArrow from "assets/right-arrow.png";
import { flexDisplay } from "components/helpers/helpers";
import { NavItem } from "components/navBar/navBar";
import { CMS_API_URL, routes } from "consts/consts";
import { LoadingPage } from "components/loadingPage/loadingPage";

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

export const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<[] | null | any>(null); //TODO: add images type
  const [isError, setIsError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        CMS_API_URL + "/api/main-page-photo?populate=photos"
      );
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const data = await response.json();
      setImages(data.data.attributes.photos.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const mainImageTimeout = setTimeout(nextPhoto, 5000);
    return () => clearTimeout(mainImageTimeout);
  }, [imageIndex, images]);

  const nextPhoto = () => {
    if (images && imageIndex === images.length - 1) {
      return setImageIndex(0);
    } else {
      return setImageIndex(imageIndex + 1);
    }
  };

  const prevPhoto = () => {
    if (images && imageIndex === 0) {
      return setImageIndex(images.length - 1);
    } else {
      return setImageIndex(imageIndex - 1);
    }
  };

  const tabs = [
    routes.mainPage,
    routes.concerts,
    routes.couples,
    routes.single,
    routes.projects,
    routes.about,
    routes.contact,
  ];

  if (isLoading) return <LoadingPage />;
  if (isError) return <p>Sorry, Something went wrong!</p>;
  return (
    <MainPageContainer
      imageUrl={`${CMS_API_URL}${images[imageIndex].attributes.url}`}
    >
      <SideContainer>
        <Icon src={LeftArrow} onClick={prevPhoto} />
      </SideContainer>
      <CenterContainer>
        <MainNavbar>
          {tabs.map(tab => (
            <NavItem path={tab.path} label={tab.label} key={tab.label} />
          ))}
        </MainNavbar>
      </CenterContainer>
      <SideContainer>
        <Icon src={RightArrow} onClick={nextPhoto} />
      </SideContainer>
    </MainPageContainer>
  );
};
