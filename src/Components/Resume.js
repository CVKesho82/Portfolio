import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

function Resume() {
    return (
      <div className ="container">
        <CardGroup className="card"><h3>Resume {" "}</h3>
        <Card>
          <Card.Header as="h5">IT Project Manager (Enterprise Software)</Card.Header>
          <Card.Body>
            <Card.Title>Warner Bros Discovery, Atlanta, GA</Card.Title>
            <Card.Title>Mar 2018-Present</Card.Title>
            <Card.Text>
              <h6>Managed team of 15+ people (onshore and offshore) through the successful implementation of 30+ mid-sized (300K-800K) operating and capital projects 
            </h6></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Operations/Special Projects Manager</Card.Header>
          <Card.Body>
            <Card.Title>Conserte, Atlanta, GA</Card.Title>
            <Card.Title>Oct 2017 - Dec 2019</Card.Title>
            <Card.Text>
              <h6>Streamlined the business financial and technical processes by managing a team of 3 through the successful execution of 4 small to medium projects
            </h6></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Technical Instructional Designer</Card.Header>
          <Card.Body>
            <Card.Title>Cox Automotive, Atlanta, GA</Card.Title>
            <Card.Title>Mar 2017- Jul 2017 </Card.Title>
            <Card.Text>
              <h6>Developed the learning strategy and currciulum for the enterprise Oracle E Business Suite Implementation
            </h6></Card.Text>
          </Card.Body>
        </Card>
        </CardGroup>

            
        </div>
    )
}

export default Resume
