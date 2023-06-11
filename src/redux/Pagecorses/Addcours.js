import React from 'react'
import { Button,Modal,Form } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addnew } from '../Action'
const Addcours = () => {
    const[show,setSow]=useState(false)
    const[newTask,setNewTask]=useState("")
    const [lesson, setLesson] = useState('');
  const [nstud, setNstud] = useState('');
  const [nrat, setNrat] = useState('');
  const [img, setImg] = useState('');
  const [url, setUrl] = useState('');
 
    const dispatch=useDispatch()
    const addFunc=()=>{
        dispatch(addnew(newTask,lesson,nstud,nrat,img,url))
        

    }
    const handleClose = ()=>setSow(false);
    const handleShow = ()=>setSow(true);
  return (
    <div>
            <Button 
            style={{
                marginLeft:"45%",
                backgroundColor:"abOddb",
                border:"solid 2px white",
                fontWeight:"bold"
            }}
            variant="primary"
            onClick={handleShow}
            >
                Add New Course
                </Button>
                <Modal show={show} onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New cours </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control
                            type="text"
                            placeholder="New Task"
                            onChange={(e)=>
                            setNewTask(e.target.value)}
                            />
                            <Form.Control
                            type="text"
                            placeholder="lesson"
                            onChange={(e)=>
                            setLesson(e.target.value)}
                            />
                            <Form.Control
                            type="text"
                            placeholder="student"
                            onChange={(e)=>
                            setNstud(e.target.value)}
                            />
                            <Form.Control
                            type="text"
                            placeholder="Rating"
                            onChange={(e)=>
                            setNrat(e.target.value)}
                            />
                            <Form.Control
                            type="text"
                            placeholder="urlimage"
                            onChange={(e)=>
                            setImg(e.target.value)}
                            />
                            <Form.Control
                            type="text"
                            placeholder="url"
                            onChange={(e)=>
                            setUrl(e.target.value)}
                            />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary"
                                onClick={handleClose}>
                                    close
                                    </Button>
                                    <Button variant="primary"
                                    onClick={addFunc}>
                                        Add New Course
                                        </Button>
                                        </Modal.Footer>
                                        </Modal>
                                        
        </div>
  )
}

export default Addcours