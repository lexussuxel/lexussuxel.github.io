import styled from "@emotion/styled";


interface IFrame {
    myName: string;
}

export const MyFrame = styled.iframe<IFrame>`
    border: none;
    box-shadow: var(--box-shadow);
    min-width: 60vw;
    transition: filter 250ms ease-in-out;
    :hover{
        filter: brightness(70%);
        z-index: 1;
    }
    &::after {
        content: ${({myName}) => `"${myName}"`}
    }
    
`


export const MyWebWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 2rem;
    :nth-child(2n){
        flex-direction: row-reverse;
    }

`

export const AllWebsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const Divider = styled.div`
    background-color: var(--core-color);
    width: 1px;
`