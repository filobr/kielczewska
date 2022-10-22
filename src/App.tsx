import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CMS_API_URL, routes } from "consts/consts";
import MainPage from "views/MainPage";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.mainPage.path}
          element={<MainPage CMS_API_URL={CMS_API_URL} routes={routes} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
