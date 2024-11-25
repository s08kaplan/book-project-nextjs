import React from 'react';

const Loading = () => {
  const data = [0, 1, 2, 3, 4, 5];

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.map((_, index) => (
          <div key={index} className="flex flex-col items-center w-80 animate-pulse">
            <h3 className="h-6 bg-gray-300 rounded-md w-28"></h3>
            
            <div className="w-40 h-40 mt-4 bg-gray-300 rounded-lg"></div>
            
            <p className="w-64 h-5 mt-5 bg-gray-300 rounded-md"></p>
            
            <div className="flex items-center justify-between w-full gap-2 m-3">
              <small className="w-20 h-4 bg-gray-300 rounded-md"></small>
              <small className="w-20 h-4 bg-gray-300 rounded-md"></small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
