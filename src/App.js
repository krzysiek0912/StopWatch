import React from "react";

import Controls from "./components/Controls";
import Results from "./components/Results";
import StopWatch from "./components/Stopwatch";

class App extends React.Component {
  state = {
    running: false,
    results: [],
    interval: 0,
    times: {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    }
  };

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
  }

  format = times => {
    return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(
      Math.floor(times.miliseconds)
    )}`;
  };

  reset = () => {
    this.stop();
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      results: []
    });
  };

  resetResultList = () => {
    this.setState({
      results: []
    });
  };

  start = () => {
    if (!this.state.running) {
      const interval = setInterval(() => {
        this.step();
      });
      this.setState({
        running: true,
        interval
      });
    }
  };

  step = () => {
    if (!this.state.running) return;
    this.setState(prevState => {
      let times = { ...prevState.times }; // creating copy of state variable jasper
      times.miliseconds += 1;
      if (times.miliseconds >= 100) {
        times.seconds += 1;
        times.miliseconds = 0;
      }
      if (times.seconds >= 60) {
        times.minutes += 1;
        times.seconds = 0;
      } // update the name property, assign a new value
      return { times }; // return new object jasper object
    });
  };

  stop = () => {
    this.setState({
      running: false
    });
    clearInterval(this.state.interval);
  };

  addResult = () => {
    if (!this.state.running) return;
    const { format, state } = this;

    const newResult = format(state.times);
    const results = [...state.results, newResult];
    this.setState({ results });
  };

  render() {
    return (
      <>
        <Controls
          handlerResetResultList={this.resetResultList}
          handlerStart={this.start}
          handlerReset={this.reset}
          handlerStop={this.stop}
          handlerAddResult={this.addResult}
        />
        <StopWatch results={this.format(this.state.times)} />
        <Results results={this.state.results} />
      </>
    );
  }
}

export default App;
