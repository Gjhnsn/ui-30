import { styled } from "styled-components";

export const Grid = styled.section`
  border: 1px solid grey;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(7, 500px);
  grid-gap: 30px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, minmax(400px, 1fr));
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const UiCard = styled.div`
  background-color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px ${props => props.theme.body}, 8px 8px ${props => props.theme.secondary};
  border-radius: 2px;
`;
