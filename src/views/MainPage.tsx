import { FC, useState, useEffect } from "react";
import {
  CenterContainer,
  Icon,
  MainNavbar,
  MainPageContainer,
  SideContainer,
} from "components/mainPage/mainPage";
import { NavItem } from "components/navBar/navBar";
import { CMS_API_URL, routes } from "consts/consts";
import LeftArrow from "assets/left-arrow.png";
import RightArrow from "assets/right-arrow.png";
import { LoadingContainer, Spinner } from "components/loadingPage/loadingPage";

const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<[] | null | any>(null);
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

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isError && <p>Sorry, Something went wrong!</p>}
      {images && (
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
      )}
    </>
  );
};

export default MainPage;
