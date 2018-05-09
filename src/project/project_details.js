import React from 'react';
import { ListGroup, Jumbotron, Button, Col, Row, Badge, Modal, ModalBody, ModalHeader, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import DetailField from './detail_field';
import BidField from '../bid/bid_field';

export default class ProjectDetail extends React.Component {
  render() {
    return (
        <div className="container col-sm-8">
            <Jumbotron>
                <div>
                    <h3>A 273 lab</h3>
                    <Button color="primary" className="float-sm-right" >Bid</Button>
                </div>
            </Jumbotron>
            {<Modal isOpen={false}>
                <ModalHeader>Place Bid</ModalHeader>
                <ModalBody>
                    Price: 
                    <Input type="number" name="bid_price"  placeholder="Price"  required/>
                    <Button color="primary" className="float-sm-right" >Place</Button>
                </ModalBody>
                </Modal>}
            <Row>
                <Col sm="5">
                <h4><Badge color="light">Project Info</Badge></h4>
                    <ListGroup>
                        <DetailField name="Description" info="Please use react and redux"/>
                        <DetailField name="Files" info="files" file={true}/>
                        <DetailField name="Skills" info="react, redux"/>
                        <DetailField name="Budget Range" info="899 - 1300"/>
                        <DetailField name="Average Bid" info="900"/>
                    </ListGroup>
                </Col>
                <Col sm="7">
                <h4><Badge color="light">Bid List</Badge></h4>
                    <ListGroup>
                        <BidField freelancer="li@gmail.com" price="900" />
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
  }
}