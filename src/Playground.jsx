import React from "react";

export default class Box extends React.Component {
  state = {
    isMouseDown: false
  };

  render() {
    const { isMouseDown } = this.state;

    const mouseDownStyle = {
      background: "skyblue"
    };

    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        className="box"
        style={isMouseDown ? mouseDownStyle : undefined}
      />
    );
  }

  handleMouseDown = () => {
    console.log("handleMouseDown");

    this.setState({ isMouseDown: true });
  };

  handleMouseUp = () => {
    this.setState({ isMouseDown: false });
  };
}
