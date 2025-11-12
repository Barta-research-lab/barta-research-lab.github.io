import React from 'react';

const Banner = () => {
    // Images from banner-page directory only
    const bannerImages = [
        '/assets/banner-page/april-25.png'
    ];

    return (
        <div className='bg-transparent'>
            <div className="carousel w-full rounded-md">
                {bannerImages.map((image, index) => {
                    const slideId = `slide${index + 1}`;
                    const prevSlide = index === 0 ? `slide${bannerImages.length}` : `slide${index}`;
                    const nextSlide = index === bannerImages.length - 1 ? 'slide1' : `slide${index + 2}`;
                    
                    return (
                        <div key={slideId} id={slideId} className="carousel-item relative w-full">
                            <img
                                src={image}
                                alt="BARTA Research Lab"
                                className="w-full" />
                            {bannerImages.length > 1 && (
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#${prevSlide}`} className="btn btn-circle">❮</a>
                                    <a href={`#${nextSlide}`} className="btn btn-circle">❯</a>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <h2 className='text-center mt-1 text-md text-gray-700 font-merienda'>Moments at BARTA</h2>
        </div>
    );
};

export default Banner;