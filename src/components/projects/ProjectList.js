import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import {Link } from 'react-router-dom';

function ProjectList({projects}) {
  return (
    <div className = "project-list">
      {projects && projects.map(project => {
        return (
          <Link to = {'/project/' + project.id}>
            <ProjectSummary project = {project} key = {project.id}></ProjectSummary>
          </Link>
        )
      })}
    </div>
  );
}

export default ProjectList;