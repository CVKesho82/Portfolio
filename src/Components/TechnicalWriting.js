import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import process from '../Images/processflow.jpg';
import onboard from '../Images/onboarding.jpg';
import manual from '../Images/glmanual.jpg';
import article from '../Images/KBArticle.jpg';


function TechnicalWriting() {
  return (
    <div className ="container">
        <CardGroup className="card"><h3>Technical <br></br> Writing {" "}</h3>        
        
         <Card>
          <Card.Header as="h5">Process Flows
          </Card.Header>
           <Card.Body>
           <Card.Img variant="top" className="process" height="50%"src={process}/>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        
       
        
        <Card>
          <Card.Header as="h5">Training Manuals</Card.Header>
          <Card.Body>
          <Card.Img variant="top" className="manual" height="50%" src={manual}/>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header as="h5">Articles</Card.Header>
          <Card.Body>
          <Card.Img variant="top"  className="article" height="50%" src={article}/>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header as="h5">QR Guides</Card.Header>
          <Card.Body>
          <Card.Img variant="top" className="qr" height="50%" src={onboard}/>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        
        
        
        
        
        </CardGroup>

            
        </div>
  )
}

export default TechnicalWriting