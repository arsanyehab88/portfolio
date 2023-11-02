import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaGoogle, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Arsany Ehab</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/arsanyehab88");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/arsany-ehab-711037246");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("mailto:arsany.ehab87@gmail.com");
            }}
              className='socailmediabtn'><FaGoogle className='icon' /></button>
            <button onClick={() => {
              window.open("tel:01094835292");
            }}
              className='socailmediabtn'><FaPhoneAlt className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
