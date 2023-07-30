import { styled } from "styled-components";
import texture from '../../assets/texture.png'

export const UiCard = styled.div`
  background-color: ${props => props.theme.secondary};
  background-image: url(${texture});
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: 100%;
  padding: 20px;
  position: relative;
  letter-spacing: 1px;
  transition: all .6 ease;
  overflow: hidden;
`;
