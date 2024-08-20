import React, { Component } from "react";
import {} from "./Clock.styled";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    isOpenTimer: false,
  };

  intervalId = null;

  componentDidMount() {
    // console.log("componentDidMount => setInterval");
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount -> clear intervalId");
    // Якщо не видаляти встановлений setInterval, то буде витік пам'яті (memory leak)
    clearInterval(this.intervalId);
  }

  toggleTimer = () => {
    this.setState(prevState => ({ isOpenTimer: !prevState.isOpenTimer }));
  };

  render() {
    const { isOpenTimer, time } = this.state;
    return (
      <>
        {isOpenTimer && <div>{time}</div>}
        <button type="button" onClick={this.toggleTimer}>
          Open/close Timer
        </button>
      </>
    );
  }
}

export default Clock;
