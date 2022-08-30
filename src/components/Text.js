import React from "react";

export const Text = ({
  pageTitle = false,
  itemTitle = false,
  important = false,
  secondary = false,
  text = "",
  color = "",
  component,
}) => {
  let style = "text-red-700";

  if (pageTitle) {
    style += "font-semibold text-2xl";
  } else if (itemTitle) {
    style += "text-xl font-light";
  } else if (important) {
    style += "text-sm font-semibold";
  } else {
    style += "text-sm font-light";
  }
  return (
    <p className={style}>
      {text}
      {component && component}
    </p>
  );
};

export const PageTitle = ({ text = "" }) => {
  return <p className="text-gray-900 text-2xl">{text}</p>;
};

export const ItemTitle = ({ text = "" }) => {
  return <p className="text-gray-900 text-md">{text}</p>;
};

export const ImportantText = ({ text = "" }) => {
  return <p className="text-gray-900 font-bold text-sm">{text}</p>;
};

export const MainText = ({ text = "" }) => {
  return <p className="text-gray-700 text-sm">{text}</p>;
};

export const StarText = ({ text = "" }) => {
  return <p className="text-orange-600 text-sm font-bold">{text}</p>;
};
