import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

export default class InputField extends React.Component {
    render() {
      return (
        <FormGroup key={this.props.key}>
          <Label for={this.props.proj_name}>{this.props.proj_name}</Label>
          <AvField type={this.props.type} name={this.props.proj_name} placeholder={this.props.proj_name} required/>
        </FormGroup>
      );
    }
}