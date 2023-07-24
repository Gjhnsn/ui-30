import React from "react";
import { cardData } from "../../utils/cardData";
import Card from "../../Layout/Card/Card";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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

  return <>{projectCards}</>;
};

export default Home;
