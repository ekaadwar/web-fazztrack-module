import React from "react";

import { Routes as Switch, Route } from "react-router-dom";
import Modules from "../pages/Module";
import DetailModule from "../pages/DetailModule";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact element={<Modules />} />
        <Route path="/detail" element={<DetailModule />} />
      </Switch>
    );
  }
}

export default Routes;
