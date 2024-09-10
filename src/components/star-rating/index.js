import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArrayOfStars = (length) => [...Array(length)];
const Star = ({ selected = false, onSelect, onHover, onHoverOut }) => {
  return <FaStar size={40} color={selected ? "green" : "grey"} onClick={onSelect} onMouseMove={onHover} onMouseLeave={onHoverOut}/>;
};

const StarRating = ({ totalStars }) => {
  const [starSelected, setStarSelected] = useState(0);
  const [starHover, setStarHover] = useState(0);
  // console.log(starSelected, starHover)
  // https://picsum.photos/v2/list?page=1&limit=10
  return (
    <>
      {createArrayOfStars(totalStars).map((_, i) => (
        <Star key={i} 
          selected={i < starHover ? true : ((i < starSelected) ? true : false) } 
          onSelect={() => setStarSelected(i+1)} 
          onHover={() => setStarHover(i+1)}
          onHoverOut={() => setStarHover(starSelected)}
        />
      ))}
      <p>
        {starSelected} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
