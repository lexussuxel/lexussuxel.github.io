"use client";
import {
  HeaderWrapper,
  NameWrapper,
  NavButton,
  NavigationWrapper,
} from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NameWrapper href="./"></NameWrapper>
      <NavigationWrapper>
        <NavButton href="./portfolio">Portfolio</NavButton>
        <NavButton href="./contact_me">Contact me</NavButton>
      </NavigationWrapper>
    </HeaderWrapper>
  );
};
