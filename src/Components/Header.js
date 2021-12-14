import React from 'react';
import {SiGmail,SiLinkedin,SiGithub} from 'react-icons/si';
import "bootstrap/dist/css/bootstrap.css";
import {Card} from 'react-bootstrap';

function Header() {
    return (
        <div>
        <Card className="Card">
            <h1>CARMEN V KESHO</h1>
            <h2><a href= "mailto:miss.cdv@gmail.com"><SiGmail/></a> miss.cdv@gmail.com</h2>
            <h2><a href="https://www.linkedin.com/in/carmenvkesho/"><SiLinkedin/></a>  <a href="https://github.com/CVKesho82"><SiGithub/></a></h2>
            </Card>  
        </div>
    )
}

export default Header
