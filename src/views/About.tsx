import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { navbarFont, width } from "consts/consts";
import { Navigation } from "components/navBar/navBar";
import { Container, Description } from "components/siteContent/siteContent";
import Image from "assets/about-photo.jpg";
import { MobileNavbar } from "components/navBar/mobileNavBar";

const title = `ut sem nulla pharetra diam sit`;

export const AboutTitle = styled.div`
  margin: 20px;
  ${navbarFont};
  font-size: 30px;
  ${width.mobile} {
    font-size: 24px;
  }
`;

export const AboutImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 250px;
  ${width.mobile} {
    width: 80vw;
    height: 80vw;
    border-radius: 40vw;
  }
`;

export const About: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  return (
    <Container>
      {isMobile ? <MobileNavbar /> : <Navigation />}
      <AboutTitle>{title}</AboutTitle>
      <AboutImage src={Image} alt="Karolinka" />
      <Description>
        Lorem ipsum dolor sit amet. Sed officiis explicabo est fuga voluptatem
        qui voluptatibus fugiat sit quia quae et voluptates repellendus At odit
        inventore qui consequatur necessitatibus. Sit numquam repudiandae qui
        autem animi a eligendi mollitia qui laborum consectetur qui voluptas
        perferendis. Est voluptatem minus cum pariatur quia ut sapiente illo aut
        odio perferendis eos quam vero nam voluptas ipsa aut modi totam. Ut
        ipsam rerum est quia labore et illo quasi vel sint exercitationem sed
        unde asperiores nam ipsam perferendis. Qui velit autem et nesciunt
        nostrum vel Quis explicabo. Eum laborum dolor aut blanditiis tempora et
        ratione cupiditate sed dolores beatae id voluptate cupiditate? Rem illum
        error et repellendus ducimus et quod ipsam. Qui placeat ipsa 33 incidunt
        expedita et omnis adipisci eos quasi amet et impedit molestias. Et
        dignissimos provident qui provident asperiores sit reiciendis enim.
      </Description>
    </Container>
  );
};
