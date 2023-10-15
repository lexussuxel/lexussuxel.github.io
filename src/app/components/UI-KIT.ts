import styled from "@emotion/styled";
import { el_mes } from "../utils";

export const CustomButton = styled.button`
    padding: 0.5rem;
    border: 1px solid var(--header-color);
    border-radius: var(--border-radius);
    background-color: transparent;
    color: var(--header-color);
    margin: 0 auto;
    cursor: pointer;
    transition: box-shadow 200ms ease-in-out;
    text-transform: uppercase;
    :hover{
        box-shadow: var(--box-shadow);
    }
`

export const MainHeader = styled.h1`
    font-size: 80px;
    color: var(--header-color);
    text-transform: uppercase;
    width: auto;
    font-family: ${el_mes.style.fontFamily};
    line-height: 100%;
`