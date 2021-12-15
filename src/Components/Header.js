import React from 'react';
import {SiGmail,SiLinkedin,SiGithub} from 'react-icons/si';
import "bootstrap/dist/css/bootstrap.css";
import {Card} from 'react-bootstrap';
import {SiHtml5,SiCss3,SiBootstrap,SiPostgresql,SiSequelize,SiReact,SiJavascript,SiNodedotjs} from 'react-icons/si';

function Header() {
    return (
        <div>
        <Card className="Card">
            <h1>CARMEN V KESHO</h1>
            <h2><a href= "mailto:miss.cdv@gmail.com"><SiGmail/>miss.cdv@gmail.com</a>{"      "}<a href="https://www.linkedin.com/in/carmenvkesho/"><SiLinkedin/></a>{"       "}  <a href="https://github.com/CVKesho82"><SiGithub/></a> </h2>
            <br></br>
            <h2>Technical Skills</h2>
            <Card.Body>
            <h2>Front End <SiHtml5 />{"  "}<SiCss3 />{"  "}<SiBootstrap />{"  "}
            <SiReact />{"  "}<SiJavascript />{"  "}
            </h2>
            <h2>Back End <SiPostgresql />{"  "}<SiSequelize />{"  "}<SiNodedotjs />{"  "}</h2>        
            
          </Card.Body>
        </Card>   
        </div>
    )
}

export default Header
