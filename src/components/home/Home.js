import React from "react";
import { cardData } from "../../utils/cardData";
import Card from "../../Layout/Card/Card";
import { Link } from "react-router-dom";
import GridLayout from "../../Layout/Grid/Grid";

const Home = () => {

  const projectCards = cardData.map((card) => {
    console.log(card);
    return (
       <Link to={`/${card.path}`}>
        <Card key={card.id}>
          <h2>{card.path}</h2>
        </Card>
      </Link>
    );
  });

  return <GridLayout>{projectCards}</GridLayout>;
};

export default Home;
