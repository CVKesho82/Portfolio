import {React} from 'react';
import {Card,Button, CardGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import safetravel from "../Images/safetravel.png";
import adulting from "../Images/adulting.png";
import hdrentals from "../Images/hdrentals.png";
import kesho from "../Images/screenshotskeshogrouprental.jpg";


function Projects() {
  return (   
    
    <div className = "container">
    
  <CardGroup className="card"><h3>Projects</h3>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" height="90%" width="25%" src={safetravel}/>
        <Card.Body>
          <Card.Title><h5>Safe Travel Web Application</h5></Card.Title>
    <Card.Text>
    <h6>Group project: Application focused on providing COVID-19 stats on travel destinations. </h6>
    </Card.Text>
    <Button variant="primary" a href="https://safetravel-s.netlify.app/index.html">SafeTravel</Button>
  </Card.Body>
</Card>

<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={adulting}/>
        <Card.Body>
          <Card.Title><h5>Adulting Web Application</h5></Card.Title>
    <Card.Text>
    <h6>Group Project: An open-forum web application for adults to ask other adults questions about "adulting". </h6>
    </Card.Text>
    <Button variant="primary" a href="https://adultingfullstack.herokuapp.com">Adulting</Button>
  </Card.Body>
</Card>

<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" height="70%" src={hdrentals}/>
        <Card.Body>
          <Card.Title><h5>HD Rentals</h5></Card.Title>
    <Card.Text>
    <h6> Individual Project: An application designed to help a friend and small business owner rent his properties in Atlanta, GA. </h6>
    </Card.Text>
    <Button variant="primary" a href="https://github.com/CVKesho82/HiddenDiamondRentals">GitHub Code</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" height="70%" src={kesho}/>
        <Card.Body>
          <Card.Title><h5>Kesho Group Rentals</h5></Card.Title>
    <Card.Text>
    <h6>Contract Project: An application designed to rent properties in Atlanta, GA. </h6>
    </Card.Text>
    <Button variant="primary" a href="https://www.keshogrouprentals.com/">Kesho Group</Button>
  </Card.Body>
</Card>
</CardGroup>

      
    </div>
  )
}

export default Projects

