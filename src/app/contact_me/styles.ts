import styled from "@emotion/styled";
import { el_mes } from "../utils";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const NetworksCV = styled.div`
  display: flex;

  embed {
    height: 600px;
    width: 800px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    embed {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-left: 20vw;
  & > div {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    svg {
      height: 2rem;
      width: 2rem;
    }
    button {
      text-transform: none;
    }
  }

  @media (max-width: 640px) {
    row-gap: 0.5rem;
    margin-left: unset;
    & > div svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
export const SubTitle = styled.h4`
  font-family: ${el_mes.style.fontFamily};
  font-size: 2rem;
  color: var(--core-color);
  line-height: 120%;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  & ~ p {
    line-height: 150%;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;
