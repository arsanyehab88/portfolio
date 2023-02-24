import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Front End React Js ", "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Arsany`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Front End React Js"]'><span className="wrap">{text}</span></span></h1>
                <p>My fullname is Arsany Ehab. I'm 21 years old. I study in faculty of arts.I am a front-end web developer. I can make the website more, more interactive with web animation
           I study at Route. When I first came to web brain, I had no knowledge of programming.
           But now with the help of strong aspirations and teachers, my level of knowledge has greatly increased and I can freely create web site views that are used in our daily lives
        </p>
        <h4>Contact</h4>
        <p>
          <i className="fa-brands fa-linkedin-in text-white fs-5"></i> Linked in:<a href="https://www.linkedin.com/in/arsany-ehab-711037246" className="text-decoration-none" target="_blank">https://www.linkedin.com/in/arsany-ehab-711037246</a>
          <br/>
          <i className="fa-brands fa-github text-white fs-5"></i>github:<a href="https://github.com/arsanyehab88" className="text-decoration-none" target="_blank">https://github.com/arsanyehab88</a>
          <br/>
          <i className="fa-solid fa-envelope text-white fs-5"></i>gmail:<a href="mailto:arsany.ehab87@gmail.com" className="text-decoration-none" target="_blank">arsany.ehab87@gmail.com</a>
          <br/>
          <i className="fa-solid fa-phone text-white fs-5"></i> phone:<a href="tel:01094835292" className="text-decoration-none" target="_blank">01094835292</a>
          <br/>
          <i className="fa-solid fa-location-dot text-white fs-5"></i> Location:Alexandria,EG
        </p>
        
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
