import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      Toggle: false
    };
  }

  numberNext = () => {
    if (this.state.Toggle) {
        this.setState({count: this.state.count + 1})
        console.log("simple component");

    }
  };

  toggle = () => {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle
    }));
  };


  render() {
    console.log("simple component");
    return (
      <div>
        <h2>Simple Component :</h2>
        <p>Count:- {this.state.count}</p>
        <button onClick={this.toggle}>Set Toggle</button>
        <button onClick={this.numberNext}>Counter</button>

      </div>
    );
  }
}

export default SimpleCounterComponent