import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/data/events.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch events");
                return res.json();
            })
            .then((data) => {
                // Sort by date (most recent first)
                const sortedData = [...data].sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                setEvents(sortedData);
            })
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    const handleToggle = () => {
        setShowAll(!showAll);
        setDisplayCount(!showAll ? events.length : 6);
    };

    return (
        <section className="bg-cream-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-10 lg:mb-16">
                    Events
                </h2>

                {events.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.slice(0, displayCount).map((event) => (
                                <EventCard 
                                    key={event.id} 
                                    event={event} 
                                />
                            ))}
                        </div>

                        {events.length > 6 && (
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
                        <p className="text-gray-600 font-nunito text-lg">No events available</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;

