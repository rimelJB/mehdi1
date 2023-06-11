import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import './Listcours.css'


const Listcours = () => {
  const tasks=useSelector((state)=>state.Reducer.cours) 
  return (
  <div  className='cours'>
    {tasks.map((task)=>{
      return(
        
<Card style={{ width: '15rem' }}>
    {/* <Card.Img variant="top" src={task.imgUrl}  /> */}
    <img alt="top" src={task.imgUrl}  />
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item><i class="ri-book-open-line">{task.lesson}</i></ListGroup.Item>
      <ListGroup.Item> <i class="ri-user-line"></i>{task.students}</ListGroup.Item>
      <ListGroup.Item><i class="ri-star-fill"></i></ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href={task.URL}>Card link</Card.Link>
      
    </Card.Body>
  </Card>
  
      )
    
    }
    
    )}
    </div>
  )
}



export default Listcours
