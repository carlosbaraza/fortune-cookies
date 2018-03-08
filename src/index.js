import React from "react";
import { render } from "react-dom";
import { FortuneCookie } from "./FortuneCookie";
import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  setOpen = () => {
    this.setState({ isOpen: true });
  };

  setClosed = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <FortuneCookie isOpen={isOpen} onClick={this.setOpen} />
        {isOpen && (
          <div className="FortuneCookieMessage">
            <p>The fortune you seek is in another cookie.</p>
            <button className="FortuneCookieMore" onClick={this.setClosed}>
              Still hungry?
            </button>
          </div>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
