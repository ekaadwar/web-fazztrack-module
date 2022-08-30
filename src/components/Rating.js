import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ star = 0 }) => {
  return (
    <div className="flex flex-row">
      {[...Array(star)].map((item, idx) => (
        <FaStar color="#ef6807" />
      ))}
    </div>
  );
};

export default Rating;
