import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

export default class DetailField extends React.Component {
  render() {
    let file = null;
    if(this.props.file===true){
      file = (
        <Button outline colorName="primary">CMPE273-Lab3.pdf</Button>
      );
    }
    return (
        <ListGroupItem className="justify-content-between">
            <div className="well well-sm">{this.props.name}</div>
            {this.props.info}
            {file}
        </ListGroupItem>
    );
  }
}