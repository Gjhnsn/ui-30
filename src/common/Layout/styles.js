import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
    max-width: 1500px;
    height: calc(100vh - 168px);
    border: 1px solid blue;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

// ----------- Nav Styles

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
`

export const NavTitle = styled(Link)`
  font-size: 60px;
  margin: 30px auto 30px auto;
  color: #EFEEE8;
  text-decoration: none;
`