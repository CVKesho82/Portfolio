import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {SiHtml5,SiCss3,SiBootstrap,SiPostgresql,SiSequelize,SiReact,SiJavascript,SiNodedotjs} from 'react-icons/si';

const TechSkills = () => {
  return (
    <div>
      <h3>Technical Skills</h3>
            <h4>Front End</h4>
            <SiHtml5 />{"  "}
            <SiCss3 />{"  "}
            <SiBootstrap />{"  "}
            <SiReact />{"  "}
            <SiJavascript />{"  "}
          
      <br></br>
     
          <h4>Back End</h4>
            <SiPostgresql />{"  "}
            <SiSequelize />{"  "}
            <SiNodedotjs />{"  "}
        
      
    </div>
  );
};
export default TechSkills;
