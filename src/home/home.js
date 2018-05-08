import React from 'react';
import ProjectCard from '../project/project_card';
import {CardColumns} from 'reactstrap';
import { get_open_projects } from './actions';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            projects:[]
        };
    }

    componentDidMount(){
        this.props.getOpenProjects();
    }

    render(){
        return (
            <div className="container col-sm-9">
                <CardColumns>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
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
        getOpenProjects: () => {
            dispatch(get_open_projects());
        }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);