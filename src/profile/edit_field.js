import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

export default class EditField extends React.Component {
  render() {
    return (
        <ListGroupItem className="justify-content-between">
            <div class="well well-sm">Small Well</div>
            Cras justo odio 
            <Button className="float-sm-right" color="primary">Edit</Button>
        </ListGroupItem>
    );
  }
}