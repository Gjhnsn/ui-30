import { styled } from "styled-components";

export const LayoutWrapper = styled.div`
    max-width: 1500px;
    height: calc(100vh - 168px);
    border: 1px solid blue;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackButton = styled.button`
    padding: 15px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    line-height: 0;
    position: absolute;
    margin-left: 5%;
    display: inline-block;

    &:hover {
        background-color: rgba(239, 238, 232, .1);
        transition: .2s ease all;
    }
`