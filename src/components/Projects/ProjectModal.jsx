import { IoCloseOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box bg-cream-primary border-t-4 border-green-primary max-w-2xl">
                <button 
                    onClick={onClose}
                    className="btn btn-sm btn-circle absolute right-4 top-4 bg-transparent border-none hover:bg-gray-100 text-gray-500"
                >
                    <IoCloseOutline size={24} />
                </button>
                
                <h3 className="font-bold text-xl text-green-dark font-nunito mb-1">
                    {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 font-nunito">
                    Led by <span className="font-semibold">{project.owner}</span>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="badge bg-green-primary/10 text-green-dark border-green-primary font-nunito">
                        {project.status || "N/A"}
                    </div>
                    {project.type && (
                        <div className="badge bg-gray-100 text-green-dark border-none font-nunito">
                            {project.type}
                        </div>
                    )}
                </div>
                
                <div className="divider my-2"></div>
                
                <div className="py-4">
                    {project.description ? (
                        <p className="text-gray-700 font-nunito leading-relaxed">
                            {project.description}
                        </p>
                    ) : (
                        <p className="text-gray-500 italic font-nunito">
                            No description available for this project yet.
                        </p>
                    )}
                </div>
                
                <div className="flex gap-3 mt-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-green-primary text-cream-primary hover:bg-green-dark border-none font-nunito normal-case flex items-center gap-2"
                        >
                            <FiGithub size={18} />
                            Repository
                        </a>
                    )}
                    {project.host && (
                        <a
                            href={project.host}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline border-green-primary text-green-primary hover:bg-green-primary hover:text-cream-primary font-nunito normal-case flex items-center gap-2"
                        >
                            <TbWorldWww size={18} />
                            View Demo
                        </a>
                    )}
                </div>
                
                <div className="modal-action">
                    <button
                        onClick={onClose}
                        className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 border-none font-nunito"
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className="modal-backdrop bg-black/50" onClick={onClose}></div>
        </div>
    );
};

export default ProjectModal;