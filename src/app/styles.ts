import styled from "@emotion/styled";
import { el_mes } from "./utils";
import Image from "next/image";

export const GreetingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 60%;
  p {
    line-height: 150%;
    color: var(--text-color);
  }

  @media (max-width: 640px) {
    max-width: unset;
  }
`;

export const GreetingHeaderTag = styled.span`
  background-color: var(--secondary-color);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius);
  color: var(--header-color);
`;

export const MyImg = styled(Image)`
  background-color: var(--secondary-color);
  /* border-radius: var(--border-radius); */
  height: 60vh;
  max-width: 40%;
  object-fit: cover;
  transition: filter 250ms ease-in-out;
  :hover {
    filter: brightness(80%);
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const HomeHead = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: space-between;
`;
