import styled from "@emotion/styled";
import { el_mes } from "../utils";

interface IFrame {
  myName: string;
}

export const MyFrame = styled.iframe<IFrame>`
  border: none;
  box-shadow: var(--box-shadow);
  min-width: 60vw;
  transition: filter 250ms ease-in-out;
  :hover {
    z-index: 1;
  }
  &::after {
    content: ${({ myName }) => `"${myName}"`};
  }
`;

export const SubTitle = styled.h4`
  font-family: ${el_mes.style.fontFamily};
  font-size: 2rem;
  color: var(--core-color);
  line-height: 120%;
  & ~ p {
    line-height: 150%;
  }
`;

export const MyWebWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 2rem;
  :nth-child(2n) {
    flex-direction: row-reverse;
    text-align: right;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    iframe {
      width: 100%;
    }
    :nth-child(2n) {
      flex-direction: column-reverse;
      text-align: left;
    }

    button {
      margin-bottom: 1rem;
    }
  }
`;

export const AllWebsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const Divider = styled.div`
  background-color: var(--core-color);
  width: 1px;
`;
