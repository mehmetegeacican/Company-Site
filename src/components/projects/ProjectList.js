import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

function ProjectList({projects}) {
  return (
    <div className = "project-list">
      {projects && projects.map(project => {
        return (
          <ProjectSummary project = {project} key = {project.id}></ProjectSummary>
        )
      })}
    </div>
  );
}

export default ProjectList;