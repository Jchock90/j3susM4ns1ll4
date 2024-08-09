// src/components/Home.js


import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  const customArrowStyles = `
    absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-xl p-2
  `;

  return (
    <div className="container mx-auto p-4 pt-20 text-center overflow-hidden relative">
            <h1 className="text-xl my-1 mt-20  text-gray-300">Audio</h1>

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        swipeable
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} className={`${customArrowStyles} left-0`}>
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} className={`${customArrowStyles} right-0`}>
              &#9654;
            </button>
          )
        }
      >
        {/* Bandcamp embeds */}
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Take care of yourself"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1385229834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://jesusmansillapna.bandcamp.com/album/take-care-of-yourself">Take care of yourself by Jesús Mansilla</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
          <iframe
              title="Convergent evolution of life"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2709675676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://jesusmansillapna.bandcamp.com/track/convergent-evolution-of-life">Convergent evolution of life by Jesús Mansilla</a>
            </iframe>
            
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="voic3.of.natur3"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=4194806735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/track/voic3-of.natur3">voic3.of.natur3 by Replicant</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="deeper"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2707734680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/track/deeper">deeper by Replicant</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
          <iframe
              title="Tender Softly Hardware"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1018582991/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/album/tender-softly-hardware">Tender Softly Hardware by Replicant</a>
            </iframe>
            
          </div>
        </div>
        
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Sleep destroy dreams"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2427300278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://kewlsounds.bandcamp.com/track/sleep-destroy-dreams">Sleep destroy dreams by Kewl</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="it's a bad name"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1298266587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://blipblop8bit.bandcamp.com/album/its-a-bad-name">it's a bad name by Replicant</a>
            </iframe>
          </div>
        </div>
        
        
      </Carousel>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full md:max-w-screen-sm md:max-h-screen-sm" />
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl bg-black bg-opacity-75 p-2 rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
