import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown as Down } from "react-icons/fa";

import Container from "../components/Container";
import { ImportantText } from "../components/Text";
import ItemWrapper from "../components/ItemWrapper";

const Button = ({ primary = false, text = "" }) => {
  return (
    <Link
      to="#"
      className={`flex flex-row items-center justify-center rounded-md ${
        primary ? "bg-blue-800" : "bg-white"
      } py-3 px-5 w-full ${primary ? "border-0" : "border"} border-gray-300 `}
    >
      <ImportantText text={text} />
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
                spaceX="wide"
                components={[
                  <Link to="#">
                    <ItemWrapper
                      spaceX="3"
                      components={[<ImportantText text="Kelas" />, <Down />]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[<ImportantText text="Dukungan" />, <Down />]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[<ImportantText text="Tentang" />, <Down />]}
                    />
                  </Link>,
                  <Link to="#">
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[<ImportantText text="Hire Our Graduates" />]}
                    />
                  </Link>,
                ]}
              />,

              <ItemWrapper
                spaceX={"narrow"}
                components={[
                  <Button text="Masuk" />,
                  <Button
                    primary
                    text={<p className="text-white">Daftar</p>}
                  />,
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
