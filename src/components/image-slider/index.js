import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image-slider.scss";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data) {
          setLoading(false);
          setError(false);
          setImages(data);
        }
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [url, page, limit]);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images &&
        images.length > 0 &&
        images.map((image, i) => (
          <img
            height={50}
            width={50}
            key={image.id}
            className={
              currentImage === i ? "current-image" : "current-image hide-image"
            }
            src={`${image?.download_url}`}
            alt={`${image?.download_url}`}
          />
        ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images &&
          images.length > 0 &&
          images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={
                currentImage === i ? "current-indicator indicator" : "indicator"
              }
            ></button>
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
