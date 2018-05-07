import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { signout } from './actions';

class HeaderSignin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Freelancer-Lab3</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color="secondary"><Link to="/user/login" color="link" onClick={()=>this.props.signOut()}>Sign out</Link></Button>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/project/add/">Post Project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user/profile/">Hi, {this.props.name}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => {
        console.log('here');
        dispatch(signout()); 
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSignin);