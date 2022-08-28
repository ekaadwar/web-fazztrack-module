import React from "react";

const Text = ({
  pageTitle = false,
  itemTitle = false,
  important = false,
  secondary = false,
  text = "",
  color = "",
  component,
}) => {
  let fontWeight = "light";
  let textColor = "800";
  let fontSize = "sm";

  if (pageTitle) {
    fontWeight = "semibold";
    fontSize = "2xl";
  }

  if (itemTitle) {
    fontWeight = "semibold";
    fontSize = "xl";
  }

  if (important) {
    fontWeight = "bold";
  }

  if (secondary) {
    textColor = "400";
  }
  return (
    <p
      className={`text-${fontSize} text-${
        color !== "" ? color : `gray-${textColor}`
      } font-${fontWeight}`}
    >
      {text}
      {component && component}
    </p>
  );
};

export default Text;
