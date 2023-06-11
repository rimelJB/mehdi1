import React from 'react'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'reactstrap'
import img2 from '../../Assests/Images/1.jpg'
import './Compteur.css'



const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={img2} alt="" className="w-100"  />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div id="About" className="about__content">
              <h2  >About Us</h2>
              <p>
                hgchjghjhkjxhuqfiqsjhsfhil
                fhgfkhlkjljhfhofjl
                gfhskjfhqskfhiurhKJ
              </p>

              <div className="about__counter" data-aos="fade-down-left">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter"  >
                    <span className="counter" >
                      <CountUp  start={0} end={25} duration={2} suffix="K" className='number'/>
                    </span>

                    <p className="counter__title" >Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" className='number'/>
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M"className='number' />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K"className='number' />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;