import React from "react";
import Listcours from "../../redux/Pagecorses/Listcours";
import Addcours from "../../redux/Pagecorses/Addcours";
import { Container, Row } from "reactstrap";



const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Listcours />
          <Addcours />
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
