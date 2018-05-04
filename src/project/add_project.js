import React from 'react';
import { Button, FormGroup, Label, Jumbotron, InputGroup, InputGroupAddon } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import InputField from "./input_field";

export default class AddProject extends React.Component {
  render() {
    return (
        <AvForm className="container col-sm-8">
        <Jumbotron>
            <h3>Post Project</h3>
        </Jumbotron>
        <InputField key="project_title" proj_name="Title" type="text" />
        <InputField key="project_desc" proj_name="Description" type="textarea" />
        <InputField key="project_skill" proj_name="Skills Required" type="text" />
        <FormGroup key="project_budget">
          <Label for="Budget">Budget Range</Label>
          <InputGroup >
            <InputGroupAddon addonType="prepend" className="d-inline">From: </InputGroupAddon>
            <AvField className="d-inline" placeholder="Price" name="Budget_from" type="number" step="1" required/>
            <InputGroupAddon className="d-inline" addonType="prepend">To: </InputGroupAddon>
            <AvField className="d-inline" placeholder="Price" name="Budget_to" type="number" step="1" required/>
          </InputGroup>
        </FormGroup>
        <InputField key="project_file" proj_name="File Upload" type="file" />
        <Button>Post</Button>
      </AvForm>
    );
  }
}