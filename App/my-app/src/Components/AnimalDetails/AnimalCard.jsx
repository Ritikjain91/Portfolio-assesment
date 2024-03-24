import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimalCard = ({ animal }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={animal.image} />
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Text>{animal.description}</Card.Text>
        {showDetails && <Card.Text>{animal.details}</Card.Text>}
        <Button variant="primary" onClick={toggleDetails}>
          {showDetails ? 'Hide details' : 'Learn more'}
        </Button>
        <a href={animal.link} className="btn btn-secondary mx-2">Link</a>




      </Card.Body>
    </Card>
  );
};

export default AnimalCard;
