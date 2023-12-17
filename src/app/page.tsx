"use client";
import {
  GreetingHeaderTag,
  GreetingHeaderWrapper,
  HomeHead,
  MyImg,
} from "./styles";
import myPic from "../assets/me.jpg";
import { CustomButton, MainHeader } from "./components/UI-KIT";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHead>
        <GreetingHeaderWrapper>
          <MainHeader>Hey, I&apos;m Alexandra Danilevich</MainHeader>
          <p>
            An experienced{" "}
            <GreetingHeaderTag>FullStack Developer</GreetingHeaderTag> with
            proficiency in both independent and team settings.
          </p>
          <p>
            <GreetingHeaderTag>Clear communication</GreetingHeaderTag> is of
            utmost importance to me, and I am always willing to collaborate with
            clients to ensure satisfactory project outcomes. My knowledge of
            industry-specific terminology allows for precise communication, and
            I am dedicated to selecting accurate phrasing.
          </p>
          <p>
            Currently based in{" "}
            <GreetingHeaderTag>Minsk, Belarus</GreetingHeaderTag>.
          </p>
          <Link href="./portfolio">
            <CustomButton>See portfolio</CustomButton>
          </Link>
        </GreetingHeaderWrapper>

        <MyImg alt="it's me!!!" src={myPic} />
      </HomeHead>
    </>
  );
}
