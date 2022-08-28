import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./sections/Header";
import Routes from "./sections/Routes";
import Footer from "./sections/Footer";
import logo from "./assets/images/logo/logo.png";

function App() {
  return (
    <Router>
      <Header logo={logo} />
      <Routes />
      <Footer logo={logo} />
    </Router>
  );
}

export default App;
