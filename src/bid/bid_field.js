import React from 'react';
import { ListGroupItem, Button, Alert } from 'reactstrap';

export default class BidField extends React.Component {
  render() {
      if (false) {
          return (
            <Alert color="warning">
                No one bid this project yet, be patient.
            </Alert>
          );
      }
    return (
        <ListGroupItem className="justify-content-between">
            <div className="media">
            <div className="media-left">
                <img src="https://www.w3schools.com/bootstrap/img_avatar3.png" className="media-object" style={{width:'60px'}} alt="bid img" />
            </div>
            <div className="media-body">
                Freelancer: {this.props.freelancer}{"    "}
                <br />
                Bid Price: {this.props.price}{"    "}
                {/* Period in days: {}{"    "} */}
                <Button className="float-sm-right" color="primary">Hire</Button>
            </div>
            </div>
        </ListGroupItem>
    );
  }
}