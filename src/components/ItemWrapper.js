import React from "react";

const ItemWrapper = ({ components = [], spaceX = "0", justify = "center" }) => {
  const array = components;
  const style = `flex flex-row items-center space-x-${spaceX} justify-${justify} w-full bg-yellow-300 `;

  // const style =
  //   "flex flex-row items-center space-x-" +
  //   spaceX +
  //   " justify-" +
  //   justify +
  //   " w-full bg-yellow-300";
  return (
    <div className={style}>
      {array.map((component, idx) => (
        <div key={idx}>{component}</div>
      ))}
    </div>
  );
};

export default ItemWrapper;
