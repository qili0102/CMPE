import React from 'react';
import ProjectCard from '../project/project_card';
import {CardColumns} from 'reactstrap';

export default class Home extends React.Component {
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