import React, { useState } from "react";

const CommonQueries = ({ queries }) => {
  const [activeIndices, setActiveIndices] = useState({});

  const toggleQuery = (index) => {
    setActiveIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Split queries into two arrays for left and right columns
  const leftQueries = queries.filter((_, index) => index % 2 === 0);
  const rightQueries = queries.filter((_, index) => index % 2 !== 0);

  const renderQueryColumn = (queriesArray) => (
    <div className="flex flex-col space-y-4">
      {queriesArray.map((query, columnIndex) => {
        const index =
          queriesArray === leftQueries ? columnIndex * 2 : columnIndex * 2 + 1;
        return (
          <div key={query.id} className="text-left border-b-2 border-black p-3">
            <button
              onClick={() => toggleQuery(index)}
              className="w-full text-left text-lg font-semibold h-10 mb-2 flex justify-between items-center"
            >
              <span>
                {query.id}. {query.question}
              </span>
              <span>{activeIndices[index] ? "▲" : "▶"}</span>
            </button>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeIndices[index]
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="mt-2">{query.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderQueryColumn(leftQueries)}
          {renderQueryColumn(rightQueries)}
        </div>
    </div>
  );
};

export default CommonQueries;
