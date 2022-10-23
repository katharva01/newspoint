import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

export class App extends Component {
  //  apiKey ="9f79848269764fddb83b7ee18dc072c5";
  apiKey = "d1fd4c4923844e6ca0c3023438b37bbf";
  // apiKey="21517372b4864883b0dd36c86a40997e";

  constructor() {
    super();
    this.theme = "light";
    console.log(this.apiKey);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar theme={this.theme} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key={"general"} category={""} apiKey={this.apiKey} />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/news"
              element={
                <News key={"general"} category={""} apiKey={this.apiKey} />
              }
            />
            <Route
              exact
              path="/news/science"
              element={
                <News
                  key={"science"}
                  category={"science"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/news/business"
              element={
                <News
                  key={"business"}
                  category={"business"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/news/technology"
              element={
                <News
                  key={"technology"}
                  category={"technology"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/news/sports"
              element={
                <News key={"sports"} category={"sports"} apiKey={this.apiKey} />
              }
            />
            <Route
              exact
              path="/news/entertainment"
              element={
                <News
                  key={"entertainment"}
                  category={"entertainment"}
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
