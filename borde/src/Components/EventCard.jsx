import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard() {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ian Duffy</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Newark, DE</Card.Subtitle>
        <Card.Text>
          Sophomore at the University of Delaware studying Computer Science and
          Cybersecurity.
        </Card.Text>
        <Button variant="primary">Visit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
