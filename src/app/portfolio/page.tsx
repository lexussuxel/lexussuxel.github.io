"use client";
import React from "react";
import { CustomButton, MainHeader } from "../components/UI-KIT";
import {
  AllWebsWrapper,
  Divider,
  MyFrame,
  MyWebWrapper,
  SubTitle,
} from "./styles";
import Link from "next/link";

interface IWEB {
  desc: string;
  title: string;
  href: string;
}

const my_webs: IWEB[] = [
  {
    title: "Beam calculator",
    desc: "This project is an online beam deflection calculator based on the open-source library frame3dd implemented using Svelte. Initially, the design was created during development process, later a designer joined our team and we decided to make all pages match the initial design. On this project, I developed the client part of the application, and also drew several icons for technical issues indication.",
    href: "https://beamcalc.net/",
  },
  {
    title: "Game",
    desc: "This is a simple D&D-alike card game for two players. Each player takes turns, arranged in descending order of importance of each character on the field. Each character has the opportunity to defend himself or use his special ability during his turn. The game ends once player has only two characters left. The game is implemented using React, following the SOLID principles.",
    href: "https://lexussuxel.github.io/game-fight/",
  },
  {
    title: "Cryptocurrency rate tracking",
    desc: "This application is a full-fledged service for tracking the exchange rate of cryptocurrencies, as well as an approximate calculation of your portfolio. The service provides information about popular cryptocurrencies and changes in their rates over time. The application is written using React, Node.js with the PostgreSQL database. We also used an open API for development and Docker for containerization. Additional technologies: Jest, Redux, Storybook, Cypress.",
    href: "https://lexussuxel.github.io/testTaskCrypto/",
  },
  {
    title: "Notes application",
    desc: "This is a small application for creating daily notes with a clear interface. When you create a note, the application automatically tracks the tags that have been added and adds them to the list for filtering. Notes can also be edited and deleted. The application is written in React using Redux.",
    href: "https://adorable-squirrel-d16ddb.netlify.app/",
  },
  {
    title: "Form validator Vue",
    desc: "In this small project using Vue.js, I took on the challenge of designing a user registration form with a special focus on improving the user experience and data integrity. One of the standout features of this project was the implementation of a compact yet efficient form validation module. Using the flexibility of Vue, I created a form validator that seamlessly validates user input, ensuring that the submitted data is accurate and complete.",
    href: "https://log-in-page-custom-validator-vue.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <>
      <MainHeader>My portfolio</MainHeader>
      <p>
        These works were eplemented while I was working on freelance or learning
        some new tools.
      </p>
      <AllWebsWrapper>
        {my_webs.map((web, i) => (
          <MyWebWrapper key={i}>
            <Link href={web.href}>
              <MyFrame
                src={web.href}
                height="600"
                name="iframe"
                title={web.title}
                scrolling="no"
                myName={web.title}
              ></MyFrame>
            </Link>
            <Divider />
            <div>
              <SubTitle>{web.title}</SubTitle>
              <p>{web.desc}</p>
              <Link href={web.href} passHref>
                <CustomButton>Go to</CustomButton>
              </Link>
            </div>
          </MyWebWrapper>
        ))}
      </AllWebsWrapper>
    </>
  );
}
