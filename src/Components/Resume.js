import React from 'react';
import {Card} from 'react-bootstrap';

function Resume() {
    return (
        <div className ="ProjectsGrid">
        <Card className="Card">
          <Card.Header as="h5">IT Project Manager</Card.Header>
          <Card.Body>
            <Card.Title>WarnerMedia, Atlanta, GA</Card.Title>
            <Card.Title>Jan 2017-Present</Card.Title>
            <Card.Text>
              <h6>Managed a team of 10-15 people (onshore and offshore) through the successful implementation of more than 30 mid-sized (300K-800K) operating and capital projects 
            </h6></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Operations/Special Projects Manager</Card.Header>
          <Card.Body>
            <Card.Title>Conserte Consulting, Atlanta, GA</Card.Title>
            <Card.Title>Oct 2017 - Dec 2019</Card.Title>
            <Card.Text>
              <h6>Managed the implmenetation of Office365 along with other process improvement projects
            </h6></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Technical Instructional Designer</Card.Header>
          <Card.Body>
            <Card.Title>Cox Automotive, Atlanta, GA</Card.Title>
            <Card.Title>Mar 2017- Jul 2017 </Card.Title>
            <Card.Text>
              <h6>Served as a consultant to create the the learning strategy and curriculum for the Implementation of Oracle E-Business Suite.
            </h6></Card.Text>
          </Card.Body>
        </Card>

            
        </div>
    )
}

export default Resume



