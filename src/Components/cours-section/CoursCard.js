import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CoursCard = (props) => {
    const { imgUrl, title, lesson, students, rating,url } = props.item;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item><i class="ri-book-open-line"></i>{lesson}</ListGroup.Item>
      <ListGroup.Item> <i class="ri-user-line"></i>{students}</ListGroup.Item>
      <ListGroup.Item><i class="ri-star-fill"></i>{rating}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link ><a>Card link</a></Card.Link>
      
    </Card.Body>
  </Card>
  )
}

export default CoursCard