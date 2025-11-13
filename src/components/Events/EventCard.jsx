import { useState } from "react";

const EventCard = ({ event }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = event.images || (event.image ? [event.image] : []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-green-primary">
            <div className="w-full h-48 relative overflow-hidden">
                {images.length > 0 ? (
                    <>
                        <img 
                            src={images[currentImageIndex]} 
                            alt={`${event.title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
                                    aria-label="Next image"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-1.5 rounded-full transition ${
                                                index === currentImageIndex 
                                                    ? 'bg-white w-6' 
                                                    : 'bg-white/50 w-1.5'
                                            }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-400 font-nunito">No image</p>
                    </div>
                )}
            </div>
            
            <div className="p-4 lg:p-6">
                <div className="mb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="font-nunito">{formatDate(event.date)}</span>
                        {event.location && (
                            <>
                                <span className="mx-2">•</span>
                                <span className="font-nunito">{event.location}</span>
                            </>
                        )}
                    </div>
                    <h3 className="font-bold text-lg text-green-dark font-nunito mb-2">
                        {event.title}
                    </h3>
                </div>
                
                {event.description && (
                    <p className="text-gray-700 font-nunito text-sm line-clamp-3">
                        {event.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default EventCard;

