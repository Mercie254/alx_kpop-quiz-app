import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // K-pop group images for carousel
  const carouselImages = [
    { src: 'images/bts.webp', alt: 'BTS' },
    { src: 'images/BlackPink.webp', alt: 'BLACKPINK' },
    { src: 'images/twice.png', alt: 'TWICE' },
    { src: 'images/newjeans.webp', alt: 'NewJeans' },
    { src: 'images/straykids.png', alt: 'Stray Kids' },
    { src: 'images/SVT.webp', alt: 'SEVENTEEN' },
    { src: 'images/exo.jpg', alt: 'EXO' },
    { src: 'images/enhypen.jpg', alt: 'ENHYPEN' }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <header className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">K-Quiz</h1>
          <div className="space-x-6">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              About
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Categories
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Quizzes
            </button>
          </div>
        </nav>

        {/* Image Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="relative h-48 overflow-hidden rounded-xl">
              {/* Main carousel container */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                            <span class="text-white font-bold text-2xl">🎵 ${image.alt}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current group name */}
            <div className="text-center mt-3">
              <p className="text-gray-800 font-semibold">
                {carouselImages[currentImageIndex].alt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;