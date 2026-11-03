import React, { useEffect, useState } from 'react';

// To add photos: drop them in public/assets/banner-page/ and list them here.
const bannerImages = [
    '/assets/banner-page/July-30.jpg',
    '/assets/events/workshop1/workshop-2025-01.jpeg',
    '/assets/events/workshop1/workshop-2025-02.jpeg',
    '/assets/events/workshop1/workshop-2025-03.jpeg',
    '/assets/events/workshop1/workshop-2025-04.jpeg',
    '/assets/events/workshop1/workshop-2025-05.jpeg',
];

const AUTOPLAY_MS = 5000;

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const total = bannerImages.length;

    const goTo = (index) => setCurrent((index + total) % total);

    useEffect(() => {
        if (paused || total <= 1) return;
        const timer = setInterval(() => setCurrent((c) => (c + 1) % total), AUTOPLAY_MS);
        return () => clearInterval(timer);
    }, [paused, total, current]);

    return (
        <div className='bg-transparent'>
            <div
                className="relative w-full overflow-hidden rounded-md aspect-video bg-gray-100"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {bannerImages.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Moments at BARTA ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}

                {total > 1 && (
                    <>
                        <button
                            onClick={() => goTo(current - 1)}
                            className="btn btn-circle btn-sm absolute left-3 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                            aria-label="Previous photo"
                        >❮</button>
                        <button
                            onClick={() => goTo(current + 1)}
                            className="btn btn-circle btn-sm absolute right-3 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                            aria-label="Next photo"
                        >❯</button>
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {bannerImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={`h-2 rounded-full transition-all ${index === current ? 'w-6 bg-white' : 'w-2 bg-white/60'}`}
                                    aria-label={`Go to photo ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <h2 className='text-center mt-1 text-md text-gray-700 font-merienda'>Moments at BARTA</h2>
        </div>
    );
};

export default Banner;
