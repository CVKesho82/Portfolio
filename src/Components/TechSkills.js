import React from 'react';
import {Card, Row, Col, Container, Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {SiHtml5,SiCss3,SiBootstrap,SiPostgresql,SiSequelize,SiReact,SiJavascript,SiNodedotjs} from 'react-icons/si';

const TechSkills = () => {
  return (
    <div>
      <h3>Technical Skills</h3>
      
      {/* <Card>
        <Card.Header><h5>Front End</h5></Card.Header>
          <Card.Body> */}
            <h4>Front End</h4>
            <SiHtml5 />{"  "}
            <SiCss3 />{"  "}
            <SiBootstrap />{"  "}
            <SiReact />{"  "}
            <SiJavascript />{"  "}
          {/* </Card.Body>{"  "}
      </Card> */}
      <br></br>
      {/* <Card>
        <Card.Header>Back End</Card.Header>
          <Card.Body> */}
          <h4>Back End</h4>
            <SiPostgresql />{"  "}
            <SiSequelize />{"  "}
            <SiNodedotjs />{"  "}
          {/* </Card.Body> */}
      {/* // </Card> */}
        
      
    </div>
  );
};
export default TechSkills;
