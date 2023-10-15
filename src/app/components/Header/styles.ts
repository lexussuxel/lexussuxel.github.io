import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderWrapper = styled.div`
    position: fixed;
    background-color: var(--background-color);
    width: 100%;
    height: var(--header-height);
    border-bottom: 1px solid var(--secondary-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 10;

`

export const NameWrapper = styled(Link)`
    color: var(--header-color);
    text-transform: uppercase;
    font-weight: 500;
    position: fixed;

`

export const NavigationWrapper = styled.nav`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    height: 100%;
    column-gap: 0.25rem;
`

export const NavButton = styled(Link)`
    max-width: 10vw;
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.25rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-bottom: none;
    position: relative;
    :hover {
        color: var(--header-color);
    }
`