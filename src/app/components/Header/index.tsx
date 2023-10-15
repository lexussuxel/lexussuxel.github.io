"use client"
import { HeaderWrapper, NameWrapper, NavButton, NavigationWrapper } from "./styles"

export const Header = () => {
    return (
        <HeaderWrapper>
            <NameWrapper href="./">Alexandra Danilevich</NameWrapper>
            <NavigationWrapper>
                <NavButton href="./portfolio">Portfolio</NavButton>
                <NavButton href="./contact_me">Contact me</NavButton>
            </NavigationWrapper>
        </HeaderWrapper>
    )
}