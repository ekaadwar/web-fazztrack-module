import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown as Down } from "react-icons/fa";

import Container from "../components/Container";
import { ImportantText } from "../components/Text";
import ItemWrapper from "../components/ItemWrapper";
import { Sling as Hamburger } from "hamburger-react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-50 w-full flex flex-row">
      <div className="flex z-50 flex-row w-full items-center bg-white shadow-lg shadow-black-500/50 h-20">
        <Container
          content={
            <div className="flex flex-row justify-between items-center">
              <ItemWrapper
                justify="between"
                components={[
                  <Link to="#">
                    <img src={logo} alt="Fazztrack" />
                  </Link>,

                  <div className="hidden lg:block">
                    <ItemWrapper
                      spaceX="wide"
                      components={[
                        <Link to="#">
                          <ItemWrapper
                            spaceX="3"
                            components={[
                              <ImportantText text="Kelas" />,
                              <Down />,
                            ]}
                          />
                        </Link>,
                        <Link to="#">
                          <ItemWrapper
                            spaceX={"narrow"}
                            components={[
                              <ImportantText text="Dukungan" />,
                              <Down />,
                            ]}
                          />
                        </Link>,
                        <Link to="#">
                          <ItemWrapper
                            spaceX={"narrow"}
                            components={[
                              <ImportantText text="Tentang" />,
                              <Down />,
                            ]}
                          />
                        </Link>,
                        <Link to="#">
                          <ItemWrapper
                            spaceX={"narrow"}
                            components={[
                              <ImportantText text="Hire Our Graduates" />,
                            ]}
                          />
                        </Link>,
                      ]}
                    />
                  </div>,

                  <div className="hidden lg:block">
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[
                        <Button text="Masuk" />,
                        <Button
                          primary
                          text={<p className="text-white">Daftar</p>}
                        />,
                      ]}
                    />
                  </div>,
                ]}
              />
              <div className="lg:hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={() => setIsOpen(!isOpen)}
                  color="gray"
                  size={20}
                />
              </div>
            </div>
          }
        />
      </div>
      {isOpen && (
        <div className="absolute w-full top-20 bg-white h-screen">
          <Container
            content={
              <div className="w-full space-y-8 py-8">
                <ItemWrapper
                  justify="between"
                  components={[<ImportantText text="Kelas" />, <Down />]}
                />
                <ItemWrapper
                  justify="between"
                  components={[<ImportantText text="Dukungan" />, <Down />]}
                />
                <ItemWrapper
                  justify="between"
                  components={[<ImportantText text="Tentang" />, <Down />]}
                />
                <ItemWrapper
                  justify="between"
                  components={[<ImportantText text="Hire Our Graduates" />]}
                />
              </div>
            }
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
