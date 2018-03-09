import React from "react";
import { render } from "react-dom";
import { FortuneCookie } from "./FortuneCookie";
import "./styles.css";
import fortuneMessages from "./fortune-messages.json";

function randomMessage() {
  const randomMessageIndex = Math.floor(Math.random() * fortuneMessages.length);
  return fortuneMessages[randomMessageIndex];
}

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      message: randomMessage()
    };
  }

  setOpen = () => {
    this.setState({ isOpen: true });
  };

  setClosed = () => {
    this.setState({
      isOpen: false,
      message: randomMessage()
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <FortuneCookie isOpen={isOpen} onClick={this.setOpen} />
        {isOpen && (
          <div className="FortuneCookieMessage">
            <p>{this.state.message}</p>
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
