import React from 'react';
import {Alert} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProjectPublished extends React.Component {
    render(){
        return (
            <div className="container col-sm-8">
                <Alert color="success">
                    Your project has been published. You can see it <Link to="/project/detail/">here</Link>.
                </Alert>
            </div>
        );
    }
}