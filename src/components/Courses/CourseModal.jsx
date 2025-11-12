import { IoCloseOutline } from "react-icons/io5";

const CourseModal = ({ course, isOpen, onClose }) => {
    if (!isOpen || !course) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box bg-cream-primary border-t-4 border-green-primary max-w-3xl max-h-[90vh] overflow-y-auto">
                <button 
                    onClick={onClose}
                    className="btn btn-sm btn-circle absolute right-4 top-4 bg-transparent border-none hover:bg-gray-100 text-gray-500 z-10"
                >
                    <IoCloseOutline size={24} />
                </button>
                
                <h3 className="font-bold text-2xl text-green-dark font-nunito mb-4 pr-8">
                    {course.title}
                </h3>
                
                <div className="divider my-2"></div>
                
                {/* Course Overview */}
                {course.syllabus?.overview && (
                    <div className="mb-6">
                        <h4 className="font-bold text-lg text-green-dark font-nunito mb-2">Course Overview</h4>
                        <p className="text-gray-700 font-nunito leading-relaxed">
                            {course.syllabus.overview}
                        </p>
                    </div>
                )}

                {/* Learning Objectives */}
                {course.syllabus?.learningObjectives && course.syllabus.learningObjectives.length > 0 && (
                    <div className="mb-6">
                        <h4 className="font-bold text-lg text-green-dark font-nunito mb-3">Learning Objectives</h4>
                        <ul className="list-disc list-inside space-y-2">
                            {course.syllabus.learningObjectives.map((objective, index) => (
                                <li key={index} className="text-gray-700 font-nunito">
                                    {objective}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Prerequisites */}
                {course.syllabus?.prerequisites && course.syllabus.prerequisites.length > 0 && (
                    <div className="mb-6">
                        <h4 className="font-bold text-lg text-green-dark font-nunito mb-3">Prerequisites</h4>
                        <ul className="list-disc list-inside space-y-2">
                            {course.syllabus.prerequisites.map((prereq, index) => (
                                <li key={index} className="text-gray-700 font-nunito">
                                    {prereq}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Main Topics */}
                {course.syllabus?.mainTopics && course.syllabus.mainTopics.length > 0 && (
                    <div className="mb-6">
                        <h4 className="font-bold text-lg text-green-dark font-nunito mb-3">Main Topics Covered</h4>
                        <ul className="list-disc list-inside space-y-2">
                            {course.syllabus.mainTopics.map((topic, index) => (
                                <li key={index} className="text-gray-700 font-nunito">
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
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

export default CourseModal;



