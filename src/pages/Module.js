import React from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import modules from "../dummyData/modules";
import { ItemTitle, MainText, StarText } from "../components/Text";
import Rating from "../components/Rating";
import ItemWrapper from "../components/ItemWrapper";

const Module = () => {
  return (
    <section>
      <SearchBar />

      <Container
        content={
          <div className="grid grid-cols-4 bg-gray-100 pt-32 pb-16 gap-6">
            {modules.data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg shadow-black-500/50 rounded-md overflow-hidden"
              >
                <img src={item.banner} alt="Fazztrack Module" />
                <div className="p-5">
                  <div className="flex flex-col border-b border-gray-300 pb-5 h-32">
                    <div className="flex-1">
                      <ItemTitle text={item.title} />
                    </div>
                    <ItemWrapper
                      justify="between"
                      components={[
                        <Rating star={item.star} />,
                        <ItemWrapper
                          spaceX="3"
                          components={[
                            <MainText text="Level" />,
                            <MainText text={item.level} />,
                          ]}
                        />,
                      ]}
                    />
                  </div>
                  <div className="py-5">
                    <ItemWrapper
                      justify="between"
                      components={[
                        <MainText text="Harga Module" />,
                        <StarText text={item.price} />,
                      ]}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </section>
  );
};

export default Module;
