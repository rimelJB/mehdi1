import React from 'react'
import CoursCard from "./CoursCard";
import { Container, Row, Col } from "reactstrap";
import Img1 from "../../Assests/Images/web-design.png";
import courseImg2 from "../../Assests/Images/graphics-design.png";
import courseImg3 from "../../Assests/Images/ui.png";
import "./courses.css";
import { useNavigate} from "react-router-dom";

const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: Img1
    },
  
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3
    }
  ];
const PopularCour = () => {
    const navigate=useNavigate();
  return (
    <div>
      <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn"onClick={()=>navigate('/Courses')}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => 
            <Col lg="4" md="6" sm="6">
              <CoursCard key={item.id} item={item} />
            </Col>
         )}
        </Row>
       
      </Container>
    </section>
    </div>
  )
}

export default PopularCour
