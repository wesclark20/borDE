import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>EVENT TITLE</Card.Title>
        <Card.Text>EVENT DESCRIPTION</Card.Text>
        <Button variant="primary">REGISTER</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
