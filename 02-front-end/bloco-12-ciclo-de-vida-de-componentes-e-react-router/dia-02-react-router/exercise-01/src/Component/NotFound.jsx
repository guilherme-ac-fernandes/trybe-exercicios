import React, { Component } from "react";
import pikachu from '../pikachu.png';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <h2 className="not-found-title">Page request not found</h2>
        <img src={ pikachu } className="pikachu-crying-image" alt="Pikachu crying" />
      </div>
    );
  }
}

export default NotFound;
