import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,source}) => {
  let [data,setData]=useState(null);
  function get(e){
    setData(e)
     console.log(data);
  }
 
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="d-flex flex-column ">{description}
            <div className="d-flex justify-content-center">
            <a href={source} className='text-decoration-none text-white' target='_blank'><button className=" btn btn-warning  m-3">Source Code</button></a>
            </div>
          </span>
        </div>
      </div>
    </Col>
  )
}
