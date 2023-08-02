import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ player,index  }) => {
  
  return (
    <Card style={{ width: "18rem" }} key={index}>
      <Card.Img variant="top" src={player.imageUrl} alt={player.name} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>Team: {player.team}</Card.Text>
        <Card.Text>Nationality: {player.nationality}</Card.Text>
        <Card.Text>Jersey Number: {player.jerseyNumber}</Card.Text>
        <Card.Text>Age: {player.age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;