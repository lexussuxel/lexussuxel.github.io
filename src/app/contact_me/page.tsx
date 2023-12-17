"use client";
import React from "react";
import { CustomButton, MainHeader } from "../components/UI-KIT";
import { ContactWrapper, Networks, NetworksCV, SubTitle } from "./styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "next/link";

export default function ContactMe() {
  return (
    <ContactWrapper>
      <MainHeader>Contact me</MainHeader>
      <p>Here you can find my CV and social networks.</p>
      <NetworksCV>
        <embed type="application/pdf" src="/Alex-Danilevich-CV.pdf" />
        <Networks>
          <div>
            <SubTitle>
              <AlternateEmailIcon />
              <p>Email:</p>
            </SubTitle>
            <Link href="mailto: lexussuxelsa@gmail.com">
              <CustomButton>lexussuxelsa@gmail.com</CustomButton>
            </Link>
          </div>
          <div>
            <SubTitle>
              <PhoneIcon />
              <p>Phone number:</p>
            </SubTitle>
            <Link href="tel:+375292839055">
              <CustomButton>+375292839055</CustomButton>
            </Link>
          </div>
          <div>
            <SubTitle>
              <TelegramIcon />
              <p>Telegram:</p>
            </SubTitle>
            <Link href="https://t.me/depressedbutwelldressed">
              <CustomButton>Me via Telegram</CustomButton>
            </Link>
          </div>
          <div>
            <SubTitle>
              <LinkedInIcon />
              <p>LinkedIn:</p>
            </SubTitle>
            <Link href="https://www.linkedin.com/in/alexandra-danilevich-a70579231/">
              <CustomButton>Me via LinkedIn</CustomButton>
            </Link>
          </div>
        </Networks>
      </NetworksCV>
    </ContactWrapper>
  );
}
