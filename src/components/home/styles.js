import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;

    &::after {
    content: '';
    height: 95%;
    width: 95%;
    z-index: -1;
    border-right: 3px solid ${props => props.theme.secondary};
    border-bottom: 3px solid ${props => props.theme.secondary};
    border-radius: 2px;
    position: absolute;
    bottom: -10px;
    right: -10px;
  }
`

export const InnerCard = styled.div`
    height: 100%;
    width: 70%;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }
`

export const HoverDiv = styled.div`
    position: absolute;
    transform: translateY(100%);
    bottom: 0;
    width: 100%;
    height: 25%;
    background-color: ${props => props.theme.body};
    opacity: .85;
    transition: all ease .5s;

    ${StyledLink}:hover & {
        transform: translateY(0%);
        color: blue;
    }
`

export const CardTitle = styled.h2`
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 20px;
    color: ${props => props.theme.body}
`