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
        <div className="p-5">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
            {" "}
            {/* Fixed spelling of "bg-whilte" */}
            <img src="" alt="Card 1" className="h-64 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">
                SURF and Subsea Development
              </h2>
              <p className="mt-2 text-gray-600 flex-grow">
                Deep water development, incredible results.
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

        <div className="p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
            <img
              src="your-image-url-2.jpg"
              alt="Card 2"
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Conventional Projects</h2>
              <p className="mt-2 text-gray-600 flex-grow">
                Offshore platforms, a project springboard.
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

        <div className="p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
            <img
              src="your-image-url-3.jpg"
              alt="Card 3"
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">
                Decommissioning Offshore
              </h2>
              <p className="mt-2 text-gray-600 flex-grow">
                Objective: to reduce environmental impact to the minimum.
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
      </Slider>
    </div>
  );
};

// Custom Arrow Components for the carousel
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-black`} onClick={onClick}>
      {" "}
      {/* Fixed string interpolation */}
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
      {" "}
      {/* Fixed string interpolation */}
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

export default CarouselComponent;
