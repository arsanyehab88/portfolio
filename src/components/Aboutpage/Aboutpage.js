import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught MERN stack developer from Egypt. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>ES6 / TypeScript</li>
                                    <li>jQuery</li>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                </Col>
                                <Col md={5}>
                                    <li>RESTful API </li>
                                    <li>Authentication & Authorization</li>
                                    <li>MongoDB</li>
                                    <li>GraphQL</li>
                                    <li>Docker</li>
                                    <li>EJS</li>
                                    <li>C++</li>
                                    <li>problem solving</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage