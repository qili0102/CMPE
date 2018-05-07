import React from 'react';
import { Button, FormGroup, Label, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import store from '../Store';
import axios from 'axios';
import {login} from './actions';

const api = 'http://localhost:8080';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state={
      email:'',
      password:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.loginUser({...this.state});
  }

  render() {
    let info_alert = store.getState().users.isRegister===true ? (
      <Alert color="success">
        You've signup your account, now is time to login!
      </Alert>)
     : null;

      if (store.getState().users.isLogin === true) {
        return (
          <Redirect to="/" />
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
          <AvField type="password" name="password" id="Password" placeholder="password" value={this.state.password} onChange={this.handleChange} required/>
        </FormGroup>
        {info_alert}
        <Button>Login</Button>
      </AvForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      users: {
        email: state.email,
        isLogin: false,
        isRegister: false
      }
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginUser: (user) => {
        axios.post(api+'/user/signin', user).then(
          res=>{
              if (res.status===200) {
                  dispatch(login(user.email));
              }
          }
      );
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);