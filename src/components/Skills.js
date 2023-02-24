
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const percentage = 66;
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML&CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>English</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div> */}
                            <div className="item">
                            <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>HTML&CSS</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={95} text={`${95}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>ECMA 6</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>JQuery</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={70} text={`${70}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>English</h5>
                            </div>
                            <div className="item">
                            <CircularProgressbar value={70} text={`${60}%`} styles={buildStyles({pathColor: `#a60ea1`,textColor: 'white',})}  className='w-50 mb-4'/>
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
