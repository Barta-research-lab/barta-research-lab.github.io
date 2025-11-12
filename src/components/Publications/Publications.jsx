import { useEffect, useState } from "react";
import PublicationCard from "./PublicationCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Publications = () => {
    const [publications, setPublications] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/data/publications.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch publications");
                }
                return res.json();
            })
            .then((data) => {
                const sortedData = [...data].sort((a, b) => {
                    if (a.year && b.year) return b.year - a.year;
                    return b.id - a.id;
                });
                setPublications(sortedData);
            })
            .catch((error) => {
                console.error("Error fetching publications:", error);
            });
    }, []);

    const handleToggle = () => {
        if (!showAll) {
            setShowAll(true);
            setDisplayCount(publications.length);
        } else {
            setShowAll(false);
            setDisplayCount(4);
        }
    };

    return (
        <section className="">
            <div className="">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-8 md:mb-16">
                    Publications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {publications.slice(0, displayCount).map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </div>

                {publications.length > 4 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleToggle}
                            className="bg-green-primary text-sm text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition hover:bg-green-dark"
                        >
                            {showAll ? (
                                <>
                                    Show Less <IoIosArrowUp size={18} />
                                </>
                            ) : (
                                <>
                                    Show More <IoIosArrowDown size={18} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Publications;