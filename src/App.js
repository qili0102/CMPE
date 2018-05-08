import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux';
import {store, persistor} from './Store.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderSignout from './header/header-signout';
import HeaderSignin from "./header/header-signin";
import Register from './signup/register';
import Login from './signin/login';
import Profile from './profile/profile';
import AddProject from './project/add_project';
import Home from './home/home';
import ProjectDetail from "./project/project_details";
import Dashboard from "./dashboard/dashboard";
import ProjectPublished from './project/publish_success';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
  render() {
    let header = null;
    let user = store.getState().users;
    if (user.isLogin) {
      header = <HeaderSignin name={user.email} />;
    } else {
      header = <HeaderSignout />;
    }
    return (
      <div>
        <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            {header}
            <Route exact path="/" component={Home} /> 
            <Route exact path="/user/register/" component={Register} />
            <Route exact path="/user/login/" component={Login} />
            <Route exact path="/user/profile/" component={Profile} />
            <Route exact path="/project/add/" component={AddProject} />
            <Route exact path="/project/detail/" component={ProjectDetail} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/project/published/" component={ProjectPublished} />
          </div>
        </Router> 
        </PersistGate>
      </div>
      
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

export default connect(mapStateToProps, null)(App);
