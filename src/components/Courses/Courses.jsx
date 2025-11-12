import { useEffect, useState } from "react";
import CourseModal from "./CourseModal";
import CourseCard from "./CourseCard";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch("/data/courses.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch courses");
                return res.json();
            })
            .then((data) => setCourses(data))
            .catch((error) => console.error("Error fetching courses:", error));
    }, []);

    const openSyllabus = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="bg-cream-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-10 lg:mb-16">
                    Courses Offered
                </h2>

                {courses.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {courses.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                course={course} 
                                openSyllabus={openSyllabus} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-10 text-center">
                        <p className="text-gray-600 font-nunito text-lg">No courses available</p>
                    </div>
                )}
            </div>

            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    isOpen={modalOpen}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default Courses;

