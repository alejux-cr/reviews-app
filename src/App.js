import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Footer } from "./layouts";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
