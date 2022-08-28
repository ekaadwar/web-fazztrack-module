import React from "react";
import Container from "./Container";
import Text from "./Text";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="sticky z-40 top-20 bg-white">
      <Container
        content={
          <div className="flex flex-col justify-center h-40 space-y-5">
            <Text pageTitle text="Jelajahi modulnya dan ubah masa depanmu" />
            <div className="flex flex-row items-center w-full border rounded-md">
              <input
                className="px-3 py-2 w-full focus:outline-none"
                placeholder="Mau belajar apa hari ini? Cari topik atau materimu di sini.."
              />
              <div className="flex items-center justify-center w-16">
                <BiSearch size={28} color="rgb(17, 24, 39)" />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SearchBar;
