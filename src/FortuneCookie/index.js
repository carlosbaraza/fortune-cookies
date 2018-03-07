import React from "react";
import cookieOpenImage from "./fortune-cookie-open.png";
import cookieClosedImage from "./fortune-cookie-closed.png";
import "./styles.css";
import classnames from "classnames";

export class FortuneCookie extends React.Component {
  render() {
    const { isOpen } = this.props;

    const rootClasses = classnames({
      FortuneCookie: true,
      "FortuneCookie--open": isOpen
    });

    return (
      <div className={rootClasses}>
        <img
          src={isOpen ? cookieOpenImage : cookieClosedImage}
          alt="Fortune cookie"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
