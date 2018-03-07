import React from "react";
import { render } from "react-dom";
import { FortuneCookie } from "./FortuneCookie";
import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  toggleOpen = () => {
    console.log("toggling");
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <FortuneCookie isOpen={isOpen} onClick={this.toggleOpen} />
        {isOpen && (
          <div className="FortuneCookieMessage">
            <p>The fortune you seek is in another cookie.</p>
          </div>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
