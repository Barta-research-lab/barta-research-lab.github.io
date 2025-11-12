import { IoDocumentTextOutline } from "react-icons/io5";

const CourseCard = ({ course, openSyllabus }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-green-primary gap-4 p-4 lg:p-6 flex flex-row">
      <div className="w-48 rounded-md h-full overflow-hidden flex-shrink-0">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400 font-nunito text-xs">No image</p>
          </div>
        )}
      </div>
      
      <div className="flex-grow flex flex-col overflow-hidden pl-4 lg:pl-6">
        <div className="mb-2">
          <h3 className="font-bold text-lg text-green-dark font-nunito mb-2">{course.title}</h3>
        </div>
        
        <div className="mb-4 flex-grow overflow-hidden">
          {course.description ? (
            <p className="text-gray-700 font-nunito text-sm">
              {course.description}
            </p>
          ) : (
            <p className="text-gray-500 italic font-nunito text-sm">
              No description available for this course yet.
            </p>
          )}
        </div>
        
        <div className="flex justify-end items-center pt-2 border-t border-gray-100 mt-auto">
          <button
            onClick={() => openSyllabus(course)}
            className="btn btn-sm bg-green-primary text-cream-primary hover:bg-green-dark border-none font-nunito flex items-center gap-2"
          >
            <IoDocumentTextOutline size={16} />
            <span>Syllabus</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

