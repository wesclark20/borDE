import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard(props) {
  const data = props.data;
  return (
    <Card>
      <Card.Body>
        <Card.Title>EVENT TITLE</Card.Title>
        <Card.Text>EVENT DESCRIPTION</Card.Text>
        <Button variant="primary">REGISTER</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
