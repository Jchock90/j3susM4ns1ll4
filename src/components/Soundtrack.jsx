// src/components/Soundtrack.js
import React from 'react';

const Soundtrack = () => {
  return (
    <div className="container mx-auto p-4 pt-20 text-center">
      <h1 className="text-xl mt-20 my-1 text-gray-300">Soundtrack</h1>
      <div className="my-2">
        <h2 className="text-3xl text-gray-300">CONSUME</h2>
        <div className="flex justify-center mt-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/krlgGyioDCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Soundtrack;
