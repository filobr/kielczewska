import React, { FC, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { flexDisplay } from "components/helpers/helpers";
import { Container } from "components/siteContent/siteContent";
import { Navigation } from "components/navBar/navBar";
import {
  EMAIL_ADRESS,
  INSTAGRAM_URL,
  navbarFont,
  PHONE_NUMBER,
} from "consts/consts";
import PhoneIcon from "assets/phone-icon.svg";
import EmailIcon from "assets/email-icon.svg";
import InstagramIcon from "assets/instagram-icon.svg";

export const ContactContainer = styled.div`
  ${flexDisplay("80%", "auto", "row")}
`;

export const Column = styled.div`
  ${flexDisplay("50%", "auto", "column")};
  padding: 50px;
  align-items: center;
`;

export const Form = styled.form`
  ${flexDisplay("100%", "auto", "column")};
  gap: 5px;
`;

export const inputStyle = (height: number) => `
width: 100%;
height: ${height}px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 10px;
background-color: #f8f8f8;
font-size: 12px;
letter-spacing: 1.5px;
resize: none;
margin-bottom: 20px;
`;

export const FormInput = styled.input`
  ${inputStyle(30)}
`;

export const FormTextArea = styled.textarea`
  ${inputStyle(150)}
`;

export const FormLabel = styled.label`
  ${navbarFont};
`;

export const FormButton = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #fda2a2;
  font-size: 16px;
  cursor: pointer;
  ${navbarFont};
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  ${flexDisplay("auto", "auto", "column")};
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 10px;
  ${navbarFont};
  cursor: default;
`;

const ContactIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-top: 40px;
  cursor: pointer;
`;

const ContactData = styled.span`
  ${navbarFont};
  font-size: 20px;
`;

export const Contact: FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (isPopupVisible) {
      const popupTimeout = setTimeout(() => setIsPopupVisible(false), 3000);
      return () => clearTimeout(popupTimeout);
    }
  }, [isPopupVisible]);

  const onFormSubmit = (
    event: React.ChangeEvent<HTMLFormElement>
  ): React.FormEventHandler<HTMLFormElement> | void => {
    event.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    if (form.current && SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          setPopupMessage("Wiadomość została wysłana");
          setIsPopupVisible(true);
          form.current?.reset();
        },
        () => {
          setPopupMessage("Przepraszamy, coś poszło nie tak");
          setIsPopupVisible(true);
        }
      );
    }
  };
  return (
    <Container>
      <Navigation />
      <ContactContainer>
        <Column>
          <Form ref={form} onSubmit={onFormSubmit}>
            <FormLabel>Imię i nazwisko:</FormLabel>
            <FormInput type="text" name="user_name" required />
            <FormLabel>Adres e-mail:</FormLabel>
            <FormInput type="em ail" name="user_email" required />
            <FormLabel>Wiadomość:</FormLabel>
            <FormTextArea name="message" required />
            <FormButton type="submit" value="Wyślij" />
          </Form>
        </Column>
        <Column>
          <a href={`tel:${PHONE_NUMBER}`}>
            <ContactIcon src={PhoneIcon} alt="phone-icon" />
          </a>
          <ContactData>{PHONE_NUMBER}</ContactData>
          <a href={`mailto:${EMAIL_ADRESS}`}>
            <ContactIcon src={EmailIcon} alt="email-icon" />
          </a>
          <ContactData>{EMAIL_ADRESS}</ContactData>
          <ContactIcon
            src={InstagramIcon}
            alt="instagram-icon"
            onClick={() => window.open(INSTAGRAM_URL)}
          />
        </Column>
      </ContactContainer>
      {isPopupVisible && <PopupContainer>{popupMessage}</PopupContainer>}
    </Container>
  );
};
