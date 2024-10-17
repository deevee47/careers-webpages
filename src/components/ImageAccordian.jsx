import React, { useState, useEffect } from "react";

// Importing images from the assets folder


const ImageAccordion = () => {
  const images = [
    { id: 1, src: "/xx.jpeg", alt: "Image 1" },
    { id: 2, src: "/xx.jpeg", alt: "Image 2" },
    { id: 3, src: "/xx.jpeg", alt: "Image 3" },
    { id: 4, src: "/xx.jpeg", alt: "Image 4" },
    { id: 5, src: "/xx.jpeg", alt: "Image 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showViewMore, setShowViewMore] = useState(false);

  // Function to show "View More" button on scrolling to this section
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const bottomSection =
        document.getElementById("accordion-section").offsetTop;

      if (position > bottomSection) {
        setShowViewMore(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      id="accordion-section"
    >
      <div className="relative w-full flex justify-center items-center h-[100vh]">
        {/* Images Accordion */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden h-[96vh] transition-all duration-500 ${
              activeIndex === index ? "w-3/5" : "w-1/5"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white transition-all duration-500 transform translate-y-full">
                <h3 className="text-2xl mb-2 opacity-0 transition-opacity duration-500 delay-100">
                  Image Accordion Title
                </h3>
                <button className="bg-white text-black px-4 py-2 rounded opacity-0 transition-opacity duration-500 delay-200">
                  Read More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          showViewMore
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default ImageAccordion;
