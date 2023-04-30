import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProfileCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.email}</Card.Subtitle>
        <Card.Text>
          {props.bio}
        </Card.Text>
        <Button variant="primary">Visit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;