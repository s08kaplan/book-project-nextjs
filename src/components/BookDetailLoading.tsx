import React from "react";

const BookDetailLoading = () => {
  return (
    <section className="flex items-start justify-center h-full p-5">
      <div className="flex flex-col items-center justify-center gap-5 animate-pulse">
        <h3 className="w-20 h-4 bg-gray-300 rounded-md" />

        <div className="">
          <div className="bg-gray-300 rounded-md w-96 h-96" />
        </div>
        <p className="h-8 p-5 bg-gray-300 rounded-md w-dvw" />

        <div>
          <small className="w-20 h-4 bg-gray-300 rounded-md"/>
        </div>
      </div>
    </section>
  );
};

export default BookDetailLoading;
