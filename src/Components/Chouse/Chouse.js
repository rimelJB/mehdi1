import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import img4 from '../../Assests/Images/chouse.png'
import './Chouse.css'
import ReactPlayer from 'react-player'

const Chouse = () => {
  const[showvedio,setshowvedio]=useState(false)
  return (
    <Container>
        <Row>
            <Col lg='6'>
                <div className='choose-description'>
                  <h2>Why Choose Us  </h2>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
                  </p>

                </div>
            </Col>
            <Col lg='6'  >
               <div>
                <span  className='econe'> 
               <i onClick={()=>setshowvedio(!showvedio)} class="ri-play-circle-line" />
               </span>
               <div>
                {showvedio ? (
                 <ReactPlayer
                  url="https://youtu.be/a2yDVlv9mG8"
                  controls
                  width="100%"
                  height="350px"
                />
                ) :<img src={img4}  alt='' className='chouseimage ' />
               }
                
                </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Chouse