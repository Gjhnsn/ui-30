import React from "react";
import { cardData } from "../../utils/cardData";
import Card from "../../common/Card/Card";
import GridLayout from "../../common/Grid/Grid";
import { CardTitle, HoverDiv, InnerCard, StyledLink } from "./styles";

const Home = () => {

  const projectCards = cardData.map((card) => {
    console.log(card);
    return (
       <StyledLink to={`/${card.path}`}>
        <Card key={card.id}>
          <CardTitle>{card.id + 1}</CardTitle>
          <InnerCard image={card.image}>
            <img src={card.image} />
          </InnerCard>
          <HoverDiv>
            <p>{card.path}</p>
          </HoverDiv>
        </Card>
      </StyledLink>
    );
  });

  return <GridLayout>{projectCards}</GridLayout>;
};

export default Home;
