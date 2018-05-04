import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
    </Card>
  );
};

export default ProjectCard;