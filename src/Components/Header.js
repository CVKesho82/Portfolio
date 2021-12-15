import React from 'react';
import {SiGmail,SiLinkedin,SiGithub} from 'react-icons/si';
import "bootstrap/dist/css/bootstrap.css";
import {Card} from 'react-bootstrap';

function Header() {
    return (
        <div>
        <Card className="Card">
            <h1>CARMEN V KESHO</h1>
            <h2><a href= "mailto:miss.cdv@gmail.com"><SiGmail/>miss.cdv@gmail.com</a>{"      "}<a href="https://www.linkedin.com/in/carmenvkesho/"><SiLinkedin/></a>{"       "}  <a href="https://github.com/CVKesho82"><SiGithub/></a> </h2>
            
            <h1>Technical Skills</h1>
            <Card.Body>
            <h4>Front End <SiHtml5 />{"  "}<SiCss3 />{"  "}<SiBootstrap />{"  "}
            <SiReact />{"  "}<SiJavascript />{"  "}
            </h4>
            <h4>Back End <SiPostgresql />{"  "}<SiSequelize />{"  "}<SiNodedotjs />{"  "}</h4>        
            
          </Card.Body>
        </Card>   
        </div>
    )
}

export default Header
