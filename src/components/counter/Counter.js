import React, { Component } from "react";
import Controls from "./Controls";
import "./Counter.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    //   console.log("Click on button!!");
    //   //   console.log(event.target);
    //   const { target } = event;
    //   setTimeout(() => {
    //     console.log(target);
    //   }, 1000);
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    //   console.log("Click back button!!");
    //   console.log(event);
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
