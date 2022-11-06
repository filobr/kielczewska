import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "consts/consts";
import { MainPage } from "views/MainPage";
import { About } from "views/About";
import { Contact } from "views/Contact";

//images for development
import n1 from "assets/test/n1.jpg";
import n2 from "assets/test/n2.jpg";
import n3 from "assets/test/n3.jpg";
import n4 from "assets/test/n4.jpg";
import n5 from "assets/test/n5.jpg";
import n6 from "assets/test/n6.jpg";
import n7 from "assets/test/n7.jpg";
import n8 from "assets/test/n8.jpg";
import n9 from "assets/test/n9.jpg";
import SiteContent from "components/siteContent/siteContent";

const images = [n1, n2, n3, n4, n5, n6, n7, n8, n9];

const description = `

Lorem ipsum dolor sit amet. Sed officiis explicabo est fuga voluptatem qui voluptatibus fugiat sit quia quae et voluptates repellendus At odit inventore qui consequatur necessitatibus. Sit numquam repudiandae qui autem animi a eligendi mollitia qui laborum consectetur qui voluptas perferendis. Est voluptatem minus cum pariatur quia ut sapiente illo aut odio perferendis eos quam vero nam voluptas ipsa aut modi totam.

Ut ipsam rerum est quia labore et illo quasi vel sint exercitationem sed unde asperiores nam ipsam perferendis. Qui velit autem et nesciunt nostrum vel Quis explicabo.

Eum laborum dolor aut blanditiis tempora et ratione cupiditate sed dolores beatae id voluptate cupiditate? Rem illum error et repellendus ducimus et quod ipsam. Qui placeat ipsa 33 incidunt expedita et omnis adipisci eos quasi amet et impedit molestias. Et dignissimos provident qui provident asperiores sit reiciendis enim.
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.mainPage.path} element={<MainPage />} />
        <Route
          path={routes.concerts.path}
          element={<SiteContent images={images} description={description} />}
        />
        <Route path={routes.about.path} element={<About />} />
        <Route path={routes.contact.path} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
