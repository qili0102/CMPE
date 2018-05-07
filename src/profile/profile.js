import React from 'react';
import { ListGroup, Jumbotron, Row, Col } from 'reactstrap';
import EditField from './edit_field';
import {store} from '../Store';
import { get_profile } from './actions';
import {connect} from 'react-redux';
import axios from 'axios';

const api = 'http://localhost:8080';

class Profile extends React.Component {
    constructor(props){
        super(props);

        let user = store.getState().users;
        console.log(store.getState());
        this.state={
            name: user.name,
            img: user.img,
            email: user.email,
            phone: user.phone,
            aboutMe: user.aboutMe,
            skill: user.skill,
            isLogin: true
        };
    }

    componentDidMount(){
        this.props.getProfile({...this.state});
        console.log(store.getState().users);
        this.setState(store.getState().users);
    }

    render() {
        return (
            <div className="container col-sm-8">
                <Jumbotron>
                    <Row>
                        <Col sm="4">
                        <h3>User Profile</h3>
                        </Col>
                        <Col sm="5" >
                        </Col>
                        <Col sm="3" >
                        <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" className="img-thumbnail float-sm-right" alt="profile-img"/>
                        </Col>
                    </Row>
                </Jumbotron>
                <ListGroup>
                    <EditField />
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: {
            name: state.name,
            img: state.img,
            email: state.email,
            phone: state.phone,
            aboutMe: state.aboutMe,
            skill: state.skill,
            isLogin: true
        }
      };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (user) => {
            axios.post(api+'/user/profile', user).then(
              res=>{
                    dispatch(get_profile(user));
              }
          ).catch();
          }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);