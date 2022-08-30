import React from "react";

const ItemWrapper = ({ components = [], spaceX = 0, justify = "center" }) => {
  const array = components;
  let style = "flex flex-row items-center w-full";
  if (justify === "between") {
    style += " justify-between";
  } else {
    style += " justify-center";
  }

  if (spaceX === "narrow") {
    style += " space-x-3";
  } else if (spaceX === "wide") {
    style += " space-x-6";
  } else {
    style += " space-x-1";
  }
  // const style = `flex flex-row items-center space-x-${spaceX} justify-${justify} w-full`;
  return (
    <div className={style}>
      {console.log(style)}
      {array.map((component, idx) => (
        <div key={idx}>{component}</div>
      ))}
    </div>
  );
};

export default ItemWrapper;
