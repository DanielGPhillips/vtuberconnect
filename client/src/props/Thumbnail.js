import React from 'react'; // Import the Component component from React
import { Card } from 'react-bootstrap';
import '../App.css';
 
function Thumbnail(props) {
  return (
    <Card bg="dark" text="white" style={{ width: '20rem' }} className="project">
      <Card.Body>
        <Card.Img variant="top" src={props.image} alt="Project Thumbnail" style={{height:"50%" }}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.tech}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.link}>{props.linkType}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;