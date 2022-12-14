import React, { useEffect } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import { ItemTitle, MainText, StarText } from "../components/Text";
import Rating from "../components/Rating";
import ItemWrapper from "../components/ItemWrapper";
import { connect } from "react-redux";
import { getModules } from "../redux/actions/modules";

const Module = (props) => {
  useEffect(() => {
    props.getModules().then(() => {
      console.log(props.modules);
    });
  }, []);

  const search = (onSearch) => {
    props.getModules(onSearch);
  };
  return (
    <section>
      <SearchBar callback={search} />

      <Container
        content={
          <div className="grid md:grid-cols-2 lg:grid-cols-4 bg-gray-100 pt-32 pb-16 gap-6">
            {props.modules.modules.map((item, idx) => (
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

const mapStateToProps = (state) => ({
  modules: state.modules,
});

const mapDispatchToProps = {
  getModules,
};

export default connect(mapStateToProps, mapDispatchToProps)(Module);
