import React from "react";

class Stopwatch extends React.Component {
  render() {
    return <div className="stopwatch">{this.props.results}</div>;
  }
}

export default Stopwatch;
