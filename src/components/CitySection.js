import React from 'react';

const CitySection = () => {
  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "International"];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-2xl font-bold mb-6">Internships in Popular Cities</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {cities.map((city, index) => (
          <button key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySection;