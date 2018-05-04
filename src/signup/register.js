import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class Register extends React.Component {
  render() {
    return (
      <AvForm className="container col-sm-5">
        <FormGroup>
          <Label for="Email">Email</Label>
          <AvField type="email" name="email" id="Email" placeholder="Email" required/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <AvField type="password" name="password" id="Password" placeholder="password" required/>
        </FormGroup>
        <Button>Submit</Button>
      </AvForm>
    );
  }
}