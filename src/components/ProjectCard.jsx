import {
  Github,
  ExternalLink,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {project?.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project?.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project?.liveUrl && (
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 flex items-center gap-2 text-sm font-medium transition-colors"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
          
          {project?.githubUrl && (
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;