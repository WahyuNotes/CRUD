import React, { Component } from "react";
import "../../src/styles/NewsCard.css";

export default class NewsCard extends Component {
  render() {
    return (
      <div className="containerCard">
        <img className="image" src={this.props.src} />
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}
