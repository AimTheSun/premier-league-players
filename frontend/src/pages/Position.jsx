import React, { useEffect, useState } from "react";
import positonData from "../data/positions.json";
import { Link } from "react-router-dom";

const Position = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPositions, setFilteredPositions] = useState(
    positonData.positions
  );

  useEffect(() => {
    const filtered = positonData.positions.filter((positions) =>
      positions.title.toLowerCase(searchQuery.toLowerCase())
    );
    setFilteredPositions(filtered);
  }, [searchQuery]);


  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold opacity-85  mb-6">Positions</h1>
       {/* CONTAINER TO DISPLAY POSITIONS */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredPositions.map((position, idx) => (
          <div className="relative rounded-lg overflow-hidden shadow-lg" key={idx}>
            <img src={position.cover} className="position-image" />
            <div className="absolute from-black to-transparent w-full bg-gradient-to-t p-3 bottom-0">
              <p className="text-white text-lg font-semibold">{position.title}</p>
              <Link
                to={`/data?position=${encodeURIComponent(position.search)}`}
                className="font-semibold inline-block mt-2 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md transition duration-300"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;
