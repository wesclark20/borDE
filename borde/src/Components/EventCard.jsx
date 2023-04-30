import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard(props) {
  const data = props.data;
  console.log(props);
  return (
    <Card>
      <Card.Header>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.time} on {data.date}
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">REGISTER</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
