import React from "react";

const ItemWrapper = ({ components = [], spaceX = "0", justify = "center" }) => {
  const array = components;
  return (
    <div
      className={`flex flex-row items-center space-x-${spaceX} justify-${justify}`}
    >
      {array.map((component, idx) => (
        <div key={idx}>{component}</div>
      ))}
    </div>
  );
};

export default ItemWrapper;
