import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <Card>
        <CardBody outline color="danger">
          <CardTitle><Link to="/project/detail/" >{props.title}</Link></CardTitle>
          <CardSubtitle>Employer: {props.emlopyer}</CardSubtitle>
          <CardText>Description: {props.desc}</CardText>
          <CardText>Skills Required: {props.skills}</CardText>
          <CardText>Budget Range: {props.budget_from}{"-"}{props.budget_to}</CardText>
          <CardText>Bid Count: {props.bid_count}</CardText>
          <Button color="secondary">Bid</Button>
        </CardBody>
    </Card>
  );
};

export default ProjectCard;