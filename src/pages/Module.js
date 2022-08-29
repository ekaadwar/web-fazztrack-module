import React from "react";
import Container from "../components/Container";

import SearchBar from "../components/SearchBar";

const Module = () => {
  return (
    <section>
      <SearchBar />
      <div className="grid grid-cols-4 bg-gray-100">
        <Container
          content={
            <div className="pt-32 pb-16">
              <img
                src="https://arkademy-production.s3.ap-southeast-1.amazonaws.com/arkademy-course/icon/3f0bf43a8afac7d652edf6c8eee4f4c7"
                alt="Fazztrack Module"
              />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Module;
