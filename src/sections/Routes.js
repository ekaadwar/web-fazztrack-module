import React from "react";
import SearchBar from "../components/SearchBar";

const Routes = () => {
  return (
    <div className=" bg-gray-100">
      <SearchBar />
      <div className="h-screen border-b-2 border-gray-300">section 1</div>
      <div className="h-screen border-b-2 border-gray-300">section 2</div>
      <div className="h-screen border-b-2 border-gray-300">section 3</div>
    </div>
  );
};

export default Routes;
