import React from 'react';
import { ListGroup, Jumbotron } from 'reactstrap';
import EditField from './edit_field';

export default class Profile extends React.Component {
  render() {
    return (
        <div className="container col-sm-8">
            <Jumbotron>
                <h3>User Profile</h3>
            </Jumbotron>
            <ListGroup>
                <EditField />
            </ListGroup>
        </div>
    );
  }
}