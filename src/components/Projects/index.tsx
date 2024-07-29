// src/components/Projects/index.js
import React from 'react';
import projects from './projects.json';
import ProjectTabs from '../../reusableComponents/ProjectTab';

function Projects() {
  return (
    <div className="container mx-auto p-4">
        <ProjectTabs projects={projects} />
    </div>
  );
}

export default Projects;
