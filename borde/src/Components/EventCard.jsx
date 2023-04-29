import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard() {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>EVENT TITLE</Card.Title>
        <Card.Text>EVENT DESCRIPTION</Card.Text>
        <Button variant="primary">REGISTER</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
