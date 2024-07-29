import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  skills: string[];
  details: string[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, skills, details, githubUrl }) => {
  return (
    <div className="p-6 bg-gray-800 border-2 border-transparent rounded-xl transition-colors duration-300 hover:bg-gray-700 hover:border-white flex flex-col">
      <div className="flex flex-col flex-grow mb-4">
        <h4 className="text-white text-xl font-medium mb-4">{title}</h4>
        <img src={imageUrl} alt={title} className="w-48 h-48 object-cover rounded-lg border-4 border-orange-500 mx-auto mb-4" />
        {skills.map((skill) => (
          <p key={skill} className="text-white mb-3 flex items-center">
            <i className="ri-circle-line text-gray-400 mr-2 text-lg"></i>
            {skill}
          </p>
        ))}
        <div className="border-b-2 border-dashed border-white mb-4"></div>
        {details.map((detail) => (
          <p key={detail} className="text-white mb-3 flex items-center">
            <i className="ri-checkbox-circle-line text-gray-400 mr-2 text-lg"></i>
            {detail}
          </p>
        ))}
      </div>
      <form action={githubUrl} target="_blank" className="w-full mx-auto">
        <button className="w-full py-3 text-white bg-transparent border-2 border-white rounded-md transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500">
          VOIR SUR GIT
        </button>
      </form>
    </div>
  );
};

export default ProjectCard;
