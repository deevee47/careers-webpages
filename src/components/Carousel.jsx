import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Recent highlights",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "La Familia",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Adventure",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Creativity",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Productivity",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getTranslateX = () => {
    if (hoveredIndex === null) {
      return `translateX(-${activeIndex * 20}%)`;
    } else if (hoveredIndex === activeIndex) {
      return `translateX(-${activeIndex * 20}%)`;
    } else {
      return `translateX(-${activeIndex * 20}%)`;
    }
  };

  return (
    <div className="relative max-w-full mx-auto overflow-hidden">
      <div
        className="flex max-w-[50] transition-transform duration-300 ease-in-out"
        style={{ transform: getTranslateX() }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 px-1 transition-all duration-300 ease-in-out"
            style={{
              width: hoveredIndex === index ? "50%" : "20%",
              opacity:
                hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
              maxWidth: "50%", // Ensures no item grows beyond 50% of the screen
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative  overflow-hidden rounded-lg shadow-lg group h-[72vh]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
