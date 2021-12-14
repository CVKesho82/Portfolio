import React from 'react';
import {SiGmail,SiLinkedin,SiGithub} from 'react-icons/si';
import "bootstrap/dist/css/bootstrap.css";
import {Card} from 'react-bootstrap';

function Header() {
    return (
        <div>
        <Card>
            <h3>CARMEN KESHO</h3>
            <h5><SiGmail/> miss.cdv@gmail.com</h5>
            <h5><SiLinkedin/> https://www.linkedin.com/in/carmenvkesho/ </h5>
            <h5><SiGithub /> https://github.com/CVKesho82</h5>
            </Card>  
        </div>
    )
}

export default Header
