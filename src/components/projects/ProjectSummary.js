import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';


function ProjectSummary( {project}) {
  return (
    <div className = "card z-depth-1 project-summary">
        <div className = "card-content grey-text text-darken-3"></div>
        <span className = "card-title"> {project.title}</span>
        <p> Posted by </p>
        <p className = "grey-text"> date 11.11.21</p>
    </div>
  );
}

export default ProjectSummary;