import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProfileCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>PERSON NAME</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Newark, DE</Card.Subtitle>
        <Card.Text>
          PERSON BIO
        </Card.Text>
        <Button variant="primary">Visit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;