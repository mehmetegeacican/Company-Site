import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';


function ProjectList() {
  return (
    <div className = "project-list">

        <div className = "card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3"></div>
            <span className = "card-title"> Project Title</span>
            <p> Posted by </p>
            <p className = "grey-text"> date 11.11.21</p>
        </div>

        <div className = "card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3"></div>
            <span className = "card-title"> Project Title</span>
            <p> Posted by </p>
            <p className = "grey-text"> date 11.11.21</p>
        </div>

    </div>
  );
}

export default ProjectList;