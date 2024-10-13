import React, { useEffect, useState } from "react";

const CareerParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

      {/* Top Wave Shape */}
      <svg
        className="absolute top-0 left-0 w-full h-auto"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.8"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,224C672,235,768,213,864,181.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </path>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mt-10 px-6">
        <h2 className="text-white text-6xl font-bold mb-4">| Career</h2>
        <h3 className="text-white text-4xl font-semibold mb-6">
          Find A Job At Anvey
        </h3>
        <p className="text-white text-xl mb-8 max-w-2xl">
          Join a dynamic team of experts committed to delivering cutting-edge
          solutions for the oil and gas industry. Grow your career with us and
          be part of a company that drives excellence and transforms the
          industry.
        </p>
        <button className="bg-transparent hover:bg-white text-white hover:text-black border-2 border-white font-bold py-3 px-12 rounded-full transition duration-300">
          GO TO CAREERS
        </button>
      </div>

      {/* Bottom Wave Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1340 20"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.8"
          d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,229.3C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,229.3C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,229.3C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,229.3C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  );
};

export default CareerParallax;
