import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
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
        console.log("pure component");
    }
  };

  toggle = () => {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle
    }));
  };

  render() {
    console.log("Pure Components");
    return (
      <div>
        <h2>Pure Component:</h2>
        <p>Count:- {this.state.count}</p>
        <button onClick={this.toggle}>Set Toggle</button>
        <button onClick={this.numberNext}>Counter</button>

      </div>
    );
  }
}

export default PureCounterComponent
