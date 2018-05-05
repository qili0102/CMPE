import React from 'react';
import { ListGroup, Jumbotron, Row, Col } from 'reactstrap';
import EditField from './edit_field';

export default class Profile extends React.Component {
  render() {
    return (
        <div className="container col-sm-8">
            <Jumbotron>
                <Row>
                    <Col sm="4">
                    <h3>User Profile</h3>
                    </Col>
                    <Col sm="5" >
                    </Col>
                    <Col sm="3" >
                    <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" class="img-thumbnail float-sm-right" alt="profile-img"/>
                    </Col>
                </Row>
            </Jumbotron>
            <ListGroup>
                <EditField />
            </ListGroup>
        </div>
    );
  }
}