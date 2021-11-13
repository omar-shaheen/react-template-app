import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavHeader from "./components/NavHeader/NavHeader";

class App extends Component {
  render() {
    return (
      <Router>

        <NavHeader />

        <Home />
        
      </Router>
    );
  }
}

export default App;
