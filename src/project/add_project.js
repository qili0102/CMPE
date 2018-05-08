import React from 'react';
import { Button, FormGroup, Label, Jumbotron, InputGroup, InputGroupAddon } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import InputField from "./input_field";
import {store} from '../Store';
import {PROJ_OPEN} from './project_constants';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { add_project } from './actions';
import {connect} from 'react-redux';

const api = 'http://localhost:8090';

class AddProject extends React.Component {
  constructor(props){
    super(props);

    this.state={}

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  handleValidSubmit(event, values) {
    // console.log(values);
    this.setState({...values, employer_email: store.getState().users.email, status: PROJ_OPEN});
    console.log(this.state);
    axios.post(api+'/project', {...this.state}).then(
      res=>{
        if (res.status === 201) {
          this.props.addProject(values.title);
        }
      }
    ).catch();
  }

render() {
  if (store.getState().current_project.title !== undefined) {
    return (<Redirect to="/project/published/"/>);
  }
    return (
        <AvForm className="container col-sm-8" onValidSubmit={this.handleValidSubmit}>
        <Jumbotron>
            <h3>Post Project</h3>
        </Jumbotron>
        <InputField key="project_title" proj_name="Title" type="text" name="title" />
        <InputField key="project_desc" proj_name="Description" type="textarea" name="description" />
        <InputField key="project_skill" proj_name="Skills Required" type="text" name="skill_required" />
        <FormGroup key="project_budget">
          <Label for="Budget">Budget Range</Label>
          <InputGroup >
            <InputGroupAddon addonType="prepend" className="d-inline">From: </InputGroupAddon>
            <AvField className="d-inline" placeholder="Price" type="number" step="1" name="budget_range_start" required />
            <InputGroupAddon className="d-inline" addonType="prepend">To: </InputGroupAddon>
            <AvField className="d-inline" placeholder="Price" type="number" step="1" name="budget_range_end" required />
          </InputGroup>
        </FormGroup>
        <InputField key="project_file" proj_name="File Upload" type="file" name="file" />
        <Button>Post</Button>
      </AvForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_project:{
      title: state.title
    }
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
      addProject: (title) => {
        dispatch(add_project(title));
        }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);