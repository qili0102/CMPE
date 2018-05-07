import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {connect} from 'react-redux';
import { signup } from "./actions";
import { Redirect } from 'react-router';
import store from '../Store';
import axios from 'axios';

const api = 'http://localhost:8080';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state={
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signUpUser({...this.state});
  }

  render() {
    if (store.getState().users.isRegister) {
      return (
        <Redirect to="/user/login/" />
      );
    }
    return (
      <AvForm className="container col-sm-5" onValidSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <AvField type="email" name="email" id="Email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <AvField type="password" name="password" id="Password" value={this.state.password} onChange={this.handleChange} placeholder="password" required/>
        </FormGroup>
        <Button>Submit</Button>
      </AvForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      users: {
        email: state.email,
        isRegister: false
      }
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUpUser: (user) => {
        axios.post(api+'/user', user).then(
          res=>{
              if (res.status===201) {
                  dispatch(signup());
              }
          }
      );
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);