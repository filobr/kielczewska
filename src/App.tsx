import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "consts/consts";
import { MainPage } from "views/MainPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.mainPage.path} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
