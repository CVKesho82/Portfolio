import {React} from 'react';
import {Card,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import safetravel from "../Images/safetravel.png";
import adulting from "../Images/adulting.png";
import hdrentals from "../Images/hdrentals.png";


function Projects() {
  return (
    <div className = "container">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={safetravel}/>
        <Card.Body>
          <Card.Title><h5>Safe Travel Web Application</h5></Card.Title>
    <Card.Text>
    <h6>Application focused on providing COVID-19 stats on travel destinations. </h6>
    </Card.Text>
    <Button variant="primary">https://safetravel-s.netlify.app/index.html</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={adulting}/>
        <Card.Body>
          <Card.Title><h5>Adulting Web Application</h5></Card.Title>
    <Card.Text>
    <h6>An open-forum web application for adults to ask other adults questions about "adulting". </h6>
    </Card.Text>
    <Button variant="primary">https://adultingfullstack.herokuapp.com</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={hdrentals}/>
        <Card.Body>
          <Card.Title><h5>HD Rentals</h5></Card.Title>
    <Card.Text>
    <h6>An application designed to help a friend and small business owner rent his properties in Atlanta, GA. </h6>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      
    </div>
  )
}

export default Projects
