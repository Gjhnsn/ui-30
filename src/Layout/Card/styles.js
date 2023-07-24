import { styled } from "styled-components";

export const UiCard = styled.div`
  background-color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px ${props => props.theme.body}, 8px 8px ${props => props.theme.secondary};
  border-radius: 2px;
  height: 100%;
`;