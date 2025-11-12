import { IoEyeOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-green-primary gap-4 p-4 lg:p-6 flex flex-row">

      <div className="w-48 rounded-md h-full overflow-hidden flex-shrink-0">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400 font-nunito">No image</p>
          </div>
        )}
      </div>
      
      <div className=" flex-grow flex flex-col overflow-hidden">
        <div className="mb-2">
          <div className="flex flex-wrap gap-1 mb-1">
            {project.status && (
              <div className={`badge ${
                project.status === "ongoing" 
                  ? "bg-green-primary/10 text-green-dark border-green-primary" 
                  : "badge-outline"
              } font-nunito text-xs`}>
                {project.status}
              </div>
            )}
            {project.type && (
              <span className="badge bg-gray-100 text-green-dark border-none font-nunito text-xs">
                {project.type}
              </span>
            )}
          </div>
          <h3 className="font-bold text-lg text-green-dark font-nunito line-clamp-1">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 font-nunito text-xs mb-2">
          Led by <span className="font-semibold">{project.owner}</span>
        </p>
        
        <div className="mb-2 flex-grow overflow-hidden">
          {project.description ? (
            <p className="text-gray-700 font-nunito text-xs line-clamp-2">
              {project.description}
            </p>
          ) : (
            <p className="text-gray-500 italic font-nunito text-xs">
              No description available for this project yet.
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-auto">
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs bg-green-primary text-cream-primary hover:bg-green-dark border-none font-nunito flex items-center gap-1 text-xs h-6 min-h-0"
              >
                <FiGithub size={12} />
                Repo
              </a>
            )}
          </div>
          
          <button
            onClick={() => openModal(project)}
            className="btn btn-xs bg-green-primary text-cream-primary hover:bg-green-dark border-none rounded-full px-2 flex items-center gap-1 text-xs h-6 min-h-0"
          >
            <IoEyeOutline size={14} />
            <span className="font-nunito">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;