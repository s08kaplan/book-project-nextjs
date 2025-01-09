import React from "react";
import "./ImageSlider.css"; 

interface Image {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="relative">
      {/* Slider Background */}
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length } as React.CSSProperties}>
          {images.map((image, index) => (
            <div
              className="item"
              style={{ "--position": index + 1 } as React.CSSProperties}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {/* Content Overlaid on Slider */}
        <div className="content">
          {/* <h1 data-content="CSS ONLY">Books and Life </h1> */}
          <h1>Books and Life </h1>
          <div className="author">
          
            {/* <p>
              <b>Web Design</b>
            </p> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
