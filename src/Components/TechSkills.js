import React from 'react';
import {Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {SiHtml5,SiCss3,SiBootstrap,SiPostgresql,SiSequelize,SiReact,SiJavascript,SiNodedotjs} from 'react-icons/si';

const TechSkills = () => {
  return (
    <div>
    <Card>
      <h3>Technical Skills</h3>
        <Card.Header></Card.Header>
          <Card.Body>
            <h4>Front End</h4>
            <SiHtml5 />{"  "}
            <SiCss3 />{"  "}
            <SiBootstrap />{"  "}
            <SiReact />{"  "}
            <SiJavascript />{"  "}
            <h4>Back End</h4>
            <SiPostgresql />{"  "}
            <SiSequelize />{"  "}
            <SiNodedotjs />{"  "}
          </Card.Body>{"  "}
      </Card>   
    </div>
  );
};
export default TechSkills;
