import { styled, keyframes } from "styled-components";

const modalOpen = keyframes`
    0% {
        transform: translateY(100%) scale(.95);
    }

    70% {
        transform: translateY(-3%) scale(1);
    }

    100% {
        transform: translateY(0%)
    }

`

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 2rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.secondary};
    background-color: transparent;
    color: ${props => props.theme.secondary};
    position: relative;
    cursor: pointer;

    &::after {
        content: "";
        background-color: #4c33e1;
        border-radius: 5px;
        top: 0;
        bottom: 0;
        left: 0;
        width: 0;
        position: absolute;
        z-index: -1;
        transition: all ease .2s;
    }

    &:hover::after {
        width: 100%;
    }

    &:active::after {
        background-color:  #4c53e1;
    }
`

export const ModalContainer = styled.div`
    height: 70%;
    width: 90%;
    position: absolute;
    background-color: ${props => props.theme.body};
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;
    overflow: hidden;
    animation: ${modalOpen} .4s ease-out forwards;

    &::after {
        content: "";
        width: 150%;
        height: 100%;
        right: 0;
        background-color: #4c33e1;
        position: absolute;
        z-index: -2;
        transform: rotate(12deg) translate(10%, -70%);
    }

    &::before {
        content: "";
        width: 150%;
        height: 40%;
        border-radius: 90%;
        right: 0;
        background-color: ${props => props.theme.body};
      //  background-color: red;
        position: absolute;
        z-index: -1;
        transform: rotate(12deg) translate(10%, 25%);
    }

`