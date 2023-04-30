import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProfileCard(props) {
  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img src={props.img} />
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.email}</Card.Subtitle>
        <Card.Text>{props.bio}</Card.Text>
        <Button variant="primary" href={`mailto:${props.email}`}>
          Contact
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
