import React from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import modules from "../dummyData/modules";
import Text from "../components/Text";
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
                  <div className="border-b border-gray-300 pb-5">
                    <Text itemTitle text={item.title} />
                    <ItemWrapper
                      justify="between"
                      components={[
                        <Rating star={item.star} />,
                        <ItemWrapper
                          spaceX="3"
                          components={[
                            <Text text="Level" />,
                            <Text text={item.level} />,
                          ]}
                        />,
                      ]}
                    />
                  </div>
                  <div className="py-5">
                    <ItemWrapper
                      justify="between"
                      components={[
                        <Text text="Harga Module" />,
                        <Text text={item.price} />,
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
