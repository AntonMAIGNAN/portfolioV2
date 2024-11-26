import projects from './projects.json';
import ProjectTabs from '../../reusableComponents/ProjectTab';

function Projects() {
  return <ProjectTabs projects={projects} />
}

export default Projects;
