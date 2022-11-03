import { FC, useEffect } from "react";
import styled from "styled-components";
import { flexDisplay } from "components/helpers/helpers";
import { navbarFont } from "consts/consts";
import { Navigation } from "components/navBar/navBar";
import { Description } from "components/siteContent/siteContent";
import Image from "assets/about-photo.jpg";

const title = `ut sem nulla pharetra diam sit`;

export const AboutContainer = styled.div`
  ${flexDisplay("100%", "auto", "column")};
  align-items: center;
`;

export const AboutTitle = styled.div`
  margin: 50px;
  ${navbarFont};
  font-size: 30px;
`;

export const AboutImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 250px;
`;

const About: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <Navigation />
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
    </AboutContainer>
  );
};
export default About;
