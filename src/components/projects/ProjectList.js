import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import {Link } from 'react-router-dom';


function ProjectList({projects}) {
  return (
        <div className = "project-list">
        {projects && projects.map(project => {
          return (
            <Link to = {'/project/' + project.id} key = {project.id}>
              <ProjectSummary project = {project} ></ProjectSummary>
            </Link>
          )
        })}
      </div>
    
  );
}

export default ProjectList;