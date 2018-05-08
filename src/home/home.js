import React from 'react';
import ProjectCard from '../project/project_card';
import {CardColumns, Modal, ModalBody} from 'reactstrap';
import { get_open_projects } from './actions';
import {connect} from 'react-redux';
import axios from 'axios';
import { store } from '../Store';
import { Link } from 'react-router-dom';

const api = 'http://localhost:8090';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            projects:[]
        };
    }

    componentWillMount(){
        this.props.getOpenProjects();
    }

    render(){
        let projs = store.getState().open_projects;
        let openprojs = projs === undefined ? (
                <Modal isOpen={true}>
                <ModalBody>
                    No open projects this moment, want to <Link to="/project/add/">add one</Link>?
                </ModalBody>
                </Modal>
        ) : projs.map((proj)=>
            <ProjectCard 
            key={proj.title} 
            title={proj.title} 
            skills={proj.skill_required} 
            desc={proj.description}
            emlopyer={proj.employerEmail}
            budget_from={proj.budget_range_start}
            budget_to={proj.budget_range_end}
            bid_count={proj.bid_count}
            />
        );
        return (
            <div className="container col-sm-9">
                <CardColumns>
                    {openprojs}
                </CardColumns>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open_projects: state.projects
      };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getOpenProjects: (projects) => {
            axios.get(api+'/openprojects').then(
                res=>{
                    if (res.status === 200) {
                        console.log(res.data);
                        dispatch(get_open_projects(res.data));
                        console.log(store.getState());
                    }
                }
            ).catch();
        }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);