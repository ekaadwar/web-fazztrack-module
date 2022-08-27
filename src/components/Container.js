import React from "react";

const Container = ({ content = "okee" }) => {
  return (
    <div className="container mx-auto px-4 sm:px-16 md:px-10 lg:px-8 xl:px-20">
      {content}
    </div>
  );
};

export default Container;
