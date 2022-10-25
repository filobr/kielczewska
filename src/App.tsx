import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "consts/consts";
import { MainPage } from "views/MainPage";

//images for development
import n1 from "assets/test/n1.jpg";
import n2 from "assets/test/n2.jpg";
import n3 from "assets/test/n3.jpg";
import n4 from "assets/test/n4.jpg";
import n5 from "assets/test/n5.jpg";
import SiteContent from "components/siteContent/siteContent";

const images = [n1, n2, n3, n4, n5];

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.mainPage.path} element={<MainPage />} />
        <Route
          path={routes.concerts.path}
          element={<SiteContent images={images} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
