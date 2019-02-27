import React, { Component } from "react";

// components
import Menu from "./Menu";
import App from "../App";
import MathComp from "./MathComp";

//icons
import icons from "../images";

// stylesheet
import "../App.css";

class Wrapper extends Component {
  state = {
    page: "home"
  };

  handlePages = icon => {
    switch (icon) {
      case "home":
        let page = "home";
        this.setState(() => {
          return {
            page: page
          };
        });
        break;
      case "smile":
        page = "smile";
        this.setState(() => {
          return {
            page: page
          };
        });
        break;
      case "calender":
        console.log("Check your calender");
        break;
      case "calculations":
        console.log("Know your math");
        break;
      default:
        console.log("No page for this icon exists yet");
    }
  };

  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <Menu icons={icons} displayPage={this.handlePages} />
        <div className="pages">
          {page === "home" && <App />}
          {page === "smile" && <MathComp />}
        </div>
      </div>
    );
  }
}

export default Wrapper;
