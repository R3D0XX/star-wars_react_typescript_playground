import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fetching from "./Fetching";

// interface CharacterCardProps {
//   name: string;
//   image: string;
//   id: string;
// }

const MyCard = ({ Characters }) => {
  console.log("props", Characters);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Characters.image} />{" "}
      <Card.Body>
        <Card.Title>{Characters.name}</Card.Title>{" "}
        <Card.Text>{Characters.description}</Card.Text>{" "}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
