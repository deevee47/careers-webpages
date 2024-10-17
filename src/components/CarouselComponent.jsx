import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true, // Enables circular carousel
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
              <img
                src={card.imageUrl}
                alt={`Card ${index + 1}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                <p className="mt-2 text-gray-600 flex-grow">
                  {card.description}
                </p>
                <button className="mt-4 text-blue-600 flex items-center">
                  <span>DISCOVER MORE</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Components for the carousel
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-black`} onClick={onClick}>
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-black`} onClick={onClick}>
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 12H5m7 7-7-7 7-7"
        />
      </svg>
    </div>
  );
}

// Sample card data
const cardData = [
  {
    imageUrl: "/xx.jpeg",
    title: "Innovative Marine Solutions",
    description: "Advanced underwater technologies for exploration.",
  },
  {
    imageUrl: "/xx.jpeg",
    title: "Renewable Energy Projects",
    description: "Harnessing nature to power our future efficiently.",
  },
  {
    imageUrl: "/xx.jpeg",
    title: "Sustainable Resource Management",
    description: "Minimizing waste while maximizing resource usage.",
  },
  {
    imageUrl: "/xx.jpeg",
    title: "Oceanic Environmental Studies",
    description: "Researching ecosystems to protect marine biodiversity.",
  },
];


export default CarouselComponent;
