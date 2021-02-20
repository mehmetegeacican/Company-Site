import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import projectReducer from '../../store/reducers/projectReducer';
import moment from 'moment';


function ProjectSummary( {project}) {
  return (
    <div className = "card z-depth-1 project-summary">
        <div className = "card-content grey-text text-darken-3"></div>
        <span className = "card-title"> {project.project_title}</span>
        <p> Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className = "grey-text"> date {moment(project.createdAt.toDate()).calendar()}</p>
    </div>
  );
}

export default ProjectSummary;