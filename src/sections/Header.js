import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown as Down } from "react-icons/fa";

import Container from "../components/Container";
import Text from "../components/Text";

const ItemWrapper = ({ components = [], spaceX = 0, justify = "center" }) => {
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

const Button = ({ primary = false, text = "" }) => {
  return (
    <Link
      to="#"
      className={`flex flex-row items-center justify-center rounded-md bg-${
        primary ? "blue-700" : "white"
      } py-3 px-5 w-full border-${primary ? "0" : "2"} border-gray-300 `}
    >
      <Text important color={primary ? "white" : "black"} text={text} />
    </Link>
  );
};

const Header = ({ logo }) => {
  return (
    <nav className="fixed z-50 w-full flex flex-row items-center bg-white shadow-lg shadow-black-500/50 h-20">
      <Container
        content={
          <ItemWrapper
            justify="between"
            components={[
              <Link to="#">
                <img src={logo} alt="Fazztrack" />
              </Link>,

              <ItemWrapper
                spaceX={6}
                components={[
                  <Link to="#">
                    <ItemWrapper
                      spaceX={3}
                      components={[<Text important text="Kelas" />, <Down />]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={3}
                      components={[
                        <Text important text="Dukungan" />,
                        <Down />,
                      ]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={3}
                      components={[<Text important text="Tentang" />, <Down />]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={3}
                      components={[
                        <Text important text="Hire Our Graduates" />,
                      ]}
                    />
                  </Link>,
                ]}
              />,

              <ItemWrapper
                spaceX={10}
                components={[
                  <div className="mr-2">
                    <Button text="Masuk" />
                  </div>,
                  <Button primary text="Daftar" />,
                ]}
              />,
            ]}
          />
        }
      />
    </nav>
  );
};

export default Header;
