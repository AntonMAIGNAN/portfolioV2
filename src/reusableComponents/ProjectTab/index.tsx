import React, { useState } from 'react';
import Button from '../Button'; // Assure-toi que le chemin est correct

interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
}

interface ProjectTabsProps {
  projects: Project[];
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ projects }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto p-4 space-y-4 lg:space-y-0 border-2 border-gray-700 rounded-lg">
      {/* Menu Latéral Scrollable */}
      <div className="lg:w-1/4 bg-gray-800 text-white p-4 border-r border-gray-700 overflow-y-auto max-h-[calc(100vh-30rem)] rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Mes Projets</h3>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <button
                onClick={() => handleTabClick(index)}
                className={`w-full text-left p-3 rounded-lg focus:outline-none ${
                  selectedProjectIndex === index
                    ? 'bg-gray-600 text-orange-400 border-2 border-orange-400'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenu du Projet */}
      <div className="lg:w-3/4 p-4 bg-gray-800 text-white rounded-lg flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
        <div className="flex-1 mb-4 text-gray-400 ">{selectedProject.description}</div>
        <div className="flex flex-col gap-2">
          <hr className="border-t-2 border-orange-400 mb-2" />
          <ul className="flex flex-wrap gap-1 mb-2">
            {selectedProject.skills.map((skill, index) => (
              <li key={index} className="bg-gray-600 text-orange-400 px-2 py-1 rounded-full text-xs">
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Button href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              VOIR SUR GIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
