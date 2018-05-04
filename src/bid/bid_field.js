import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

export default class BidField extends React.Component {
  render() {
    return (
        <ListGroupItem className="justify-content-between">
            <div className="media">
            <div className="media-left">
                <img src="https://www.w3schools.com/bootstrap/img_avatar3.png" className="media-object" style={{width:'60px'}} alt="bid img" />
            </div>
            <div className="media-body">
                Freelancer: {}{"    "}
                Bid Price: {}{"    "}
                Period in days: {}{"    "}
                <Button className="float-sm-right" color="primary">Hire</Button>
            </div>
            </div>
        </ListGroupItem>
    );
  }
}