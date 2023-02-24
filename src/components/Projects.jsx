import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p2.png";
import projImg2 from "../assets/img/p1.png";
import projImg3 from "../assets/img/p3.png";
import projImg4 from "../assets/img/p4.png";
import projImg5 from "../assets/img/p5.png";
import projImg6 from "../assets/img/p6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id:1,
      description: "Game-over & React Js",
      imgUrl: projImg1,
      source:"https://github.com/arsanyehab88/game.git"
    },
    {
      id:2,
      description: "HTML & CSS & bootstrap",
      imgUrl: projImg2,
      source:"https://github.com/arsanyehab88/DANIELS.git"
    },
    {
      id:3,
      description: "e-commerce with React Js",
      imgUrl: projImg3,
      source:"https://github.com/arsanyehab88/e-commerce.git"
    },
    {
      id:4,
      description: "HTML & CSS & Jquery & Api",
      imgUrl: projImg4,
      source:"https://github.com/arsanyehab88/yummy.git"
    },
    {
      id:5,
      description: "Weather-app & Api",
      imgUrl: projImg5,
      source:"https://github.com/arsanyehab88/Weather-app.git"
    },
    {
      id:6,
      description: "CRUD-Mangment",
      imgUrl: projImg6,
      source:"https://github.com/arsanyehab88/CRUD-mangment.git"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
