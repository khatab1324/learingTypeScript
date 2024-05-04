import React from "react";

interface AppProps {
  color?: string;
}

export class App extends React.Component<AppProps> {
  state = { counter: 0 };
  OnIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  OnDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.OnDecrement}>Decrement</button>
        <button onClick={this.OnIncrement}>Increment</button>
      </div>
    );
  }
}
