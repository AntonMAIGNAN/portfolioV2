import React, { useState } from 'react';
import Button from '../Button'; // Assure-toi que le chemin est correct

interface Skill {
  name: string;
  category: string;
}

interface Project {
  title: string;
  description: string;
  skills: Skill[];
  link: string;
}

interface ProjectTabsProps {
  projects: Project[];
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ projects }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string>('Toutes les compétences');

  // Récupère toutes les compétences uniques et les trie par catégorie puis par nom
  const allSkills = Array.from(
    new Set(
      projects.flatMap((project) => project.skills.map((skill) => `${skill.category} - ${skill.name}`))
    )
  )
    .sort((a, b) => a.localeCompare(b)) // Trie alphabétique
    .map((skill) => {
      const [category, name] = skill.split(' - ');
      return { category, name };
    });

  // Gestion du changement de filtre
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(event.target.value);
  };

  // Gestion de l'affichage des projets selon le filtre
  const filteredProjects = selectedSkill === 'Toutes les compétences'
    ? projects
    : projects.filter((project) =>
        project.skills.some((skill) => `${skill.category} - ${skill.name}` === selectedSkill)
      );

  // Gestion du clic sur les onglets
  const handleTabClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  // Projet sélectionné
  const selectedProject = filteredProjects[selectedProjectIndex] || filteredProjects[0];

  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto p-4 space-y-4 lg:space-y-0 border-2 border-gray-700 rounded-lg min-h-[465px]">  {/* Taille minimale du composant ProjectTabs */}
      {/* Menu Latéral Scrollable */}
      <div className="lg:w-1/4 bg-gray-800 text-white p-4 border-r border-gray-700 flex flex-col justify-between max-h-[calc(100vh-30rem)] overflow-hidden rounded-lg">
        {/* Titre du Menu */}
        <h3 className="text-xl font-semibold mb-4">Mes Projets</h3>

        {/* Filtre des compétences */}
        <select
          value={selectedSkill}
          onChange={handleFilterChange}
          className="bg-gray-700 text-white p-3 text-sm rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 mb-4 w-full mx-auto"
        >
          <option value="Toutes les compétences" className="text-sm">
            Toutes les compétences
          </option>
          {allSkills.map((skill, index) => (
            <option key={index} value={`${skill.category} - ${skill.name}`} className="text-sm">
              {skill.name}
            </option>
          ))}
        </select>

        {/* Liste des projets */}
        <ul className="space-y-2 flex-grow overflow-y-auto">
          {filteredProjects.map((project, index) => (
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
        {selectedProject ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
            <div className="flex-1 mb-4 text-gray-400">{selectedProject.description}</div>
            <div className="flex flex-col gap-2">
              <hr className="border-t-2 border-orange-400 mb-2" />
              <ul className="flex flex-wrap gap-1 mb-2">
                {selectedProject.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-gray-600 text-orange-400 px-2 py-1 rounded-full text-xs"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <Button href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  VOIR SUR GIT
                </Button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Aucun projet trouvé pour cette compétence.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectTabs;
