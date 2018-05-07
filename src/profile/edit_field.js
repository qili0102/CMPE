import React from 'react';
import { ListGroupItem, Button, Input } from 'reactstrap';
import { store } from '../Store';
import axios from 'axios';
import { update_profile } from './actions';
import {connect} from 'react-redux';

const api = 'http://localhost:8080';

class EditField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: store.getState().users.email,
      isEdit: false,
      desc: null
    }
  }

  render() {
    let _desc = this.props.desc !== undefined ? this.props.desc : "No description yet";
    let editfield = !this.state.isEdit ? (
      <div>
          {_desc}
          <Button className="float-sm-right" color="primary" onClick={()=>this.setState({isEdit:!this.state.isEdit})}>Edit</Button>
      </div>
    ) : (
      <div>
          <Input placeholder={_desc} name={this.props.name} value={this.state.desc} onChange={(e)=>this.setState({[e.target.name]: e.target.value})} />
          <Button className="float-sm-right" color="primary" onClick={(e)=>{this.setState({isEdit:!this.state.isEdit}); this.props.updateProfile({email: this.state.email, [e.target.name]: this.state.desc}, this.props.name);}}>Confirm</Button>
      </div>
    );
    return (
      <ListGroupItem className="justify-content-between">
        <div className="well well-sm">{this.props.title}</div>
        {editfield}
      </ListGroupItem>
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
      updateProfile: (user, path) => {
          axios.post(api+'/user/profile/' + path, user).then(
            res=>{
                  dispatch(update_profile(user));
            }
        ).catch();
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditField);