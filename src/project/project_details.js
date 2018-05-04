import React from 'react';
import { ListGroup, Jumbotron, Button, Col, Row, Badge } from 'reactstrap';
import DetailField from './detail_field';
import BidField from '../bid/bid_field';

export default class ProjectDetail extends React.Component {
  render() {
    return (
        <div className="container col-sm-8">
            <Jumbotron>
                <div>
                    <h3>Project Title</h3>
                    <Button color="primary" className="float-sm-right" >Bid</Button>
                </div>
            </Jumbotron>
            <Row>
                <Col sm="5">
                <h4><Badge color="light">Project Info</Badge></h4>
                    <ListGroup>
                        <DetailField />
                    </ListGroup>
                </Col>
                <Col sm="7">
                <h4><Badge color="light">Bid List</Badge></h4>
                    <ListGroup>
                        <BidField />
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
  }
}