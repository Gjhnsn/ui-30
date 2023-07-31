import { styled } from "styled-components";

export const Grid = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(10, 450px);
  grid-gap: 50px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    grid-template-rows: repeat(15, 450px);
    padding: 0 50px;
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(30, 450px);
    padding: 0 50px;
  }
`;