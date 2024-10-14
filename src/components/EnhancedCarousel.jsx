import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Nature's Beauty",
    description:
      "Experience the tranquility of nature's most beautiful landscapes.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Urban Exploration",
    description: "Discover the hidden gems of bustling city life.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Adventure Awaits",
    description: "Join us on exciting adventures and explore the unknown.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Culinary Delights",
    description: "Savor the flavors of world cuisines and culinary arts.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Serene Landscapes",
    description: "Immerse yourself in the calm of serene landscapes.",
  },
];

const EnhancedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the first duplicate item
  const visibleItems = 3; // Number of items to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (carouselItems.length + 2)); // +2 for duplicates
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + (carouselItems.length + 2)) %
        (carouselItems.length + 2)
    ); // +2 for duplicates
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(activeIndex * 100) / visibleItems}%)`,
        }}
      >
        {/* Duplicate the items for the infinite scroll effect */}
        {[...carouselItems, carouselItems[0], carouselItems[1]].map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-1/3 px-2 transition-all duration-500 ease-in-out"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-96">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-colors duration-200 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-colors duration-200 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default EnhancedCarousel;
