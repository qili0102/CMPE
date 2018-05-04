import React from 'react';
import { ListGroupItem } from 'reactstrap';

export default class DetailField extends React.Component {
  render() {
    return (
        <ListGroupItem className="justify-content-between">
            <div class="well well-sm">Project Info</div>
            Cras justo odio 
        </ListGroupItem>
    );
  }
}