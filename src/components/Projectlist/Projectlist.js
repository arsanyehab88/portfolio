import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import chatapp from '../../Assets/chatapp.png'
import GameOver from '../../Assets/p2.png'
import Ecommerce from '../../Assets/p3.png'
import Yummy from '../../Assets/p4.png'
import Weather from '../../Assets/p5.png'
import CRUD from '../../Assets/p6.png'
import todolist from '../../Assets/p7.png'
import dashboard from '../../Assets/p8.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dashboard}
                isBlog={false}
                title="Dashboard"
                description="The MERN stack, Material-UI, Redux, Redux Persist, Redux Thunk, and Nivo combine to create a powerful dashboard project. It enables full-stack JavaScript development, provides stylish UI components, manages global state, allows asynchronous actions, and offers customizable data visualization components for an immersive user experience. "
                ghLink="https://arsanyehab88.github.io/dashboard/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatapp}
                isBlog={false}
                title="Chat App"
                description="A chat app built with the MERN stack is a web application that enables real-time communication between users. It utilizes Node.js and Express for the server-side and MongoDB for data storage. The frontend is built with React for a dynamic and responsive user interface. "
                ghLink="https://arsanyehab88.github.io/Chat/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description="A MERN stack-based todo list is a web application that enables users to create and manage tasks. It utilizes MongoDB for data storage, Node.js and Express for server-side logic, and React for the frontend. The app may feature task management functionalities, such as creating, editing, and deleting tasks, and may also include task categorization and prioritization features."
                ghLink="https://arsanyehab88.github.io/TodoList/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Ecommerce}
                isBlog={false}
                title="Ecommerce"
                description="An e-commerce website built with React.js is a web application that allows businesses to showcase and sell products online. React.js provides a dynamic and responsive user interface, allowing for smooth navigation and improved user experience. The website may include features such as product listings, shopping cart functionality ."
                ghLink="https://arsanyehab88.github.io/e-commerce/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={GameOver}
                isBlog={false}
                title="Game Over"
                description="I have developed a game-over web application using React.js and REST API. It provides a seamless user experience, allowing players to track their game progress, view scores, and interact with the game data through RESTful API endpoints."
                ghLink="https://arsanyehab88.github.io/Game-Over/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Yummy}
                isBlog={false}
                title="Yummy"
                description="This project webpage built with HTML, CSS, and JavaScript and jQuery and api. It can to see food and You can see most of the dishes from all over the world, and you can search for the dishes and their details  "
                ghLink="https://arsanyehab88.github.io/YummyFood/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Weather}
                isBlog={false}
                title="Weather"
                description="This project weather built with HTML, CSS, and JavaScript and api . You can to see the weather in your country and can search to any country you need "
                ghLink="https://arsanyehab88.github.io/Weather/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CRUD}
                isBlog={false}
                title="CRUD-Mangment"
                description=" This project CRUD-Mangment built with HTML, CSS,  JavaScript and bootstrap. This app is fully responsive "
                ghLink="https://github.com/arsanyehab88/CRUD-mangment.git"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist