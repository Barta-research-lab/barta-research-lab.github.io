import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch projects");
                return res.json();
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    const handleToggle = () => {
        setShowAll(!showAll);
        setDisplayCount(!showAll ? projects.length : 6);
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className=" bg-cream-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-10 lg:mb-16">
                    Ongoing Projects
                </h2>

                {projects.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.slice(0, displayCount).map((project, index) => (
                                <ProjectCard 
                                    key={index} 
                                    project={project} 
                                    openModal={openModal} 
                                />
                            ))}
                        </div>

                        {projects.length > 6 && (
                            <div className="flex justify-center mt-10">
                                <button
                                    onClick={handleToggle}
                                    className="bg-green-primary text-sm text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition hover:bg-green-dark"
                                >
                                    {showAll ? (
                                        <>
                                            Show Less <HiChevronUp size={20} />
                                        </>
                                    ) : (
                                        <>
                                            Show More <HiChevronDown size={20} />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-10 text-center">
                        <p className="text-gray-600 font-nunito text-lg">No projects available</p>
                    </div>
                )}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={modalOpen}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default Projects;