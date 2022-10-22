import { Route } from "consts/consts";
import { FC, useState, useEffect } from "react";

interface MainPageProps {
  CMS_API_URL: string;
  routes: Record<string, Route>;
}

const MainPage: FC<MainPageProps> = ({ CMS_API_URL, routes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        CMS_API_URL + "/api/main-page-photo?populate=photos"
      );
      if (!response.ok) {
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

  return <div>{routes.mainPage.label}</div>;
};

export default MainPage;
